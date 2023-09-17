import React, { useState } from 'react';

const RandomCatPictures = () => {
  const [catUrl, setCatUrl] = useState('');

  const fetchRandomCat = () => {
    const apiKey = 'live_Qh8HhcOmM7mhes2Bg7qFaEXuXBskFtDBNhcflFjh7jxM9LOzABKhRixmAbgdUixS';

    fetch("https://api.thecatapi.com/v1/images/search", {
      method: 'GET',
      headers: {
        'x-api-key': apiKey,
      },
    })
    .then(res => res.json()) 
    .then(catAPI => { 
      setCatUrl(catAPI[0].url);
    });
  };

   return (
    <div>
      <button onClick={fetchRandomCat}>Tilfældige kattebilleder</button>
      {catUrl && <img src={catUrl} alt="Random Cat" style={{ maxWidth: '300px' }} />}
    </div>
  );
}

export default RandomCatPictures;
