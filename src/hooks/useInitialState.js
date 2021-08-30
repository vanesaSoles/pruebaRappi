import { useState, useEffect } from 'react';

const useInitialState = (API, show) => {
  const [videos, setVideos] = useState({ info: {}, results: [] });

  useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((data) => setVideos(data));
  }, [show]);

  console.log(videos);
  return videos;
};

export default useInitialState;
