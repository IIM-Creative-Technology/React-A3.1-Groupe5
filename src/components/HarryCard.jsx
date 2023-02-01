import React, { useState, useEffect } from 'react';

function HarryCard () {

    const [data, setData] = useState(null);
    useEffect(() => {
        fetch("https://hp-api.onrender.com/api/characters")
        .then(response => response.json())
        .then(data => setData(data))
    }, []);
    console.log(data)
    return (
      <div>
          <ul>
            {data?.map(element => (
              <li key={element.id}>{element.name}
              <img src={element.image} alt={element.name} />
              </li>
            ))}
          </ul>
      </div>
    );
    
  }
  

export default HarryCard