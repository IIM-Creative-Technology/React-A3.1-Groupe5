import React, { useState, useEffect } from 'react';

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
    <div>
      {anime ? <img src={anime} alt="Pokemon sprite" /> : <p>Loading...</p>}
      <br />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Guess the anime"
        />
        <br />
        <button type="submit">Submit</button>
      </form>
      <br />
      {result ? <p>{result}</p> : null}
      <p>Score: {score}</p>
      <p>Lifepoints: {lifepoints}</p>
    </div>
  );
};


export default AnimeImage;