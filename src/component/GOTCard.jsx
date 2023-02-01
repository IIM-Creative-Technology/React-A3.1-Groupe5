import React, { useState, useEffect } from 'react';

const GOTCard = () => {
  const [imageUrl, setimageUrl] = useState(null);
  const [fullName, setfullName] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [result, setResult] = useState(null);
  const [score, setScore] = useState(0);
  const [lifepoints, setLifepoints] = useState(3);

  useEffect(() => {
    const fetchGOT = async () => {
      const res = await fetch('https://thronesapi.com/api/v2/Characters/' + Math.floor(Math.random() * 52 + 1));
      const data = await res.json();
      setimageUrl(data.imageUrl);
      setfullName(data.fullName);    
    };

    fetchGOT();
  }, []);


  const handleSubmit = async (e) => {
    e.preventDefault();
    const isCorrect = inputValue === fullName;
    if (!isCorrect) {
      setLifepoints(lifepoints - 1);
    }
    setResult(isCorrect ? 'Correct !' : `Incorrect, la réponse est "${fullName}"`);
    if (isCorrect) {
      setScore(score + 1);
      const res = await fetch('https://thronesapi.com/api/v2/Characters/' + Math.floor(Math.random() * 52 + 1));
      const data = await res.json();
      setimageUrl(data.imageUrl);
      setfullName(data.fullName); 
      setInputValue('');
    } else if (lifepoints === 1) {
      setScore(0);
      setLifepoints(3);
    }
  };

  return (
    <div>
      {imageUrl ? <img src={imageUrl} alt="imageUrl" /> : <p>Loading...</p>}
      <br />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="nom complet de la personne"
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

export default GOTCard;