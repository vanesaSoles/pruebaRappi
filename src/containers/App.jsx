import React, { useState } from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from '../components/Header';
import Title from '../components/Title';
import Carousel from '../components/Carousel';
import Footer from '../components/Footer';
import '../assets/styles/App.scss';
import useInitialState from '../hooks/useInitialState';
import Episodes from '../components/Episodes';
import EpisodesItem from '../components/EpisodesItem';
import InfoPersonajes from '../components/InfoPersonajes';

const API = 'https://rickandmortyapi.com/api/episode';

const App = () => {
  const [openPersonages, setOpenPPersonages] = useState();
  const initialState = useInitialState(API, openPersonages);
  const [chars, setChars] = useState([]);
  const [myPlayList] = useState([]);
  const [episodeSelect, setEpisodeSelect] = useState({});

  const showCharacters = async (characters, item) => {
    setEpisodeSelect(item);
    await characters?.map((url) => (
      fetch(url)
        .then((response) => response.json())
        .then((data) => chars.push(data))
    ));
    setOpenPPersonages(!openPersonages);
    setChars(chars);
  };

  const addList = (item) => {
    myPlayList.push(item);
    myPlayList.sort(
      (a, b) => {
        if (a.name > b.name) {
          return 1;
        }
        if (a.name < b.name) {
          return -1;
        }
        return 0;
      },
    );
    setOpenPPersonages(!openPersonages);
  };

  return (
    <Router>
      <div className='App'>
        <Header />
        <Switch>
          <Route path='/' exact>
            <Title title='Capitulos Rick and Morty' />
            <Episodes title='Mi play list'>
              <Carousel>
                {myPlayList?.map((item) => <EpisodesItem key={item.id} {...item} showCharac={showCharacters} addPlayList={addList} />)}
              </Carousel>
            </Episodes>
            <Episodes title='CAPITULOS'>
              <Carousel>
                {initialState.results?.map((item) => <EpisodesItem key={item.id} {...item} showCharac={showCharacters} addPlayList={addList} />)}
              </Carousel>
            </Episodes>
          </Route>
          <Route path='/home'>
            <Title title={`Personajes de ${episodeSelect.name}`} />
            <Carousel>
              {chars?.map((item) => <InfoPersonajes key={item.id} {...item} />)}
            </Carousel>
          </Route>
        </Switch>

        <Footer />
      </div>
    </Router>

  );
};

export default App;
