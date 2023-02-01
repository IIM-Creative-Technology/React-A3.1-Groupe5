import React, { useState, useEffect } from 'react';
import '../styles/Anime.css'

const AnimeImage = () => {
  const [anime, setAnime] = useState({});
  const [animeName, setanimeName] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [result, setResult] = useState(null);
  const [score, setScore] = useState(0);
  const [lifepoints, setLifepoints] = useState(3);

  useEffect(() => {
    const fetchAnime = async () => {
      const id = Math.floor(Math.random() * 100 + 1);
      const response = await fetch(`https://api.jikan.moe/v4/anime/${id}`);
      const data = await response.json();
      console.log(data.data.title);
      console.log(data);
      setAnime(data.data.images.jpg.image_url);
      setanimeName(data.data.title);
    };

    fetchAnime();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isCorrect = inputValue === animeName;
    if (!isCorrect) {
      setLifepoints(lifepoints - 1);
    }
    setResult(isCorrect ? 'Correct!' : `Incorrect, the answer is "${animeName}"`);
    if (isCorrect) {
      setScore(score + 1);
      const id = Math.floor(Math.random() * 100 + 1);
      const res = await fetch(`https://api.jikan.moe/v4/anime/${id}`);
      const data = await res.json();
      setAnime(data.data.images.jpg.image_url);
      setanimeName(data.data.title);
      setInputValue('');
    } else if (lifepoints === 1) {
      setScore(0);
      setLifepoints(3);
    }
  };

  return (
    <div className='animecontainer'>
      {anime ? <img className='animeimg' src={anime} alt="Anime image" /> : <p>Loading...</p>}
      <br />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Guess the anime"
        />
        <button type="submit">Submit</button>
      </form>
      {result ? <p>{result}</p> : null}
      <p className='iconcontainer'><img className='hpicon'src='https://cdn.pixabay.com/photo/2017/09/23/16/33/pixel-heart-2779422_1280.png' height='20'></img>: {lifepoints}</p>
      <p className='scoring'>Score: {score}</p>
    </div>
  );
};


export default AnimeImage;