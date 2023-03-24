import {useEffect} from 'react';

const API_URL = 'https://www.omdbapi.com/?apikey=6bbf6deb';

const App = () => {
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`).then((response) => response.json()).then((data) => console.log(data));
  };
  useEffect(() => {
    searchMovies('batman');
  }, []);
  return (
    <h1>Hello World</h1>
  );
}

export default App;
