import React, { useState, useEffect } from 'react';
import '../styles/Pokemon.css'

const PokemonSprite = () => {
  const [sprite, setSprite] = useState(null);
  const [pokemonName, setPokemonName] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [result, setResult] = useState(null);
  const [score, setScore] = useState(0);
  const [lifepoints, setLifepoints] = useState(3);

  useEffect(() => {
    const fetchPokemon = async () => {
      const res = await fetch('https://pokeapi.co/api/v2/pokemon/' + Math.floor(Math.random() * 807 + 1));
      const data = await res.json();
      setSprite(data.sprites.front_default);
      setPokemonName(data.name);
    };

    fetchPokemon();
  }, []);


  const handleSubmit = async (e) => {
    e.preventDefault();
    const isCorrect = inputValue === pokemonName;
    if (!isCorrect) {
      setLifepoints(lifepoints - 1);
    }
    setResult(isCorrect ? 'Correct!' : `Incorrect, the answer is "${pokemonName}"`);
    if (isCorrect) {
      setScore(score + 1);
      const res = await fetch('https://pokeapi.co/api/v2/pokemon/' + Math.floor(Math.random() * 807 + 1));
      const data = await res.json();
      setSprite(data.sprites.front_default);
      setPokemonName(data.name);
      setInputValue('');
    } else if (lifepoints === 1) {
      setScore(0);
      setLifepoints(3);
    }
  };

  return (
    <div className='pokecontainer'>
      {sprite ? <img className='pokeimg' src={sprite} alt="Pokemon sprite" /> : <p>Loading...</p>}
      <br />
      <form onSubmit={handleSubmit}>
        <input
          className='answerinput'  
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Guess the Pokémon name"
        />  
        <button className='submitbutton' type="submit">Submit</button>
      </form>
      <br />
      {result ? <p>{result}</p> : null}
      <p className='iconcontainer'><img className='hpicon'src='https://cdn.pixabay.com/photo/2017/09/23/16/33/pixel-heart-2779422_1280.png' height='20'></img>: {lifepoints}</p>
      <br></br>
      <p className='scoring'>Score: {score}</p>
    </div>
  );
};

export default PokemonSprite;