import React, { useState } from 'react';

const ChooseCatRace = () => {
  const [catUrl, setCatUrl] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const fetchRandomCat = (category) => {
    const apiKey = 'live_Qh8HhcOmM7mhes2Bg7qFaEXuXBskFtDBNhcflFjh7jxM9LOzABKhRixmAbgdUixS';

    fetch(`https://api.thecatapi.com/v1/images/search?category_ids=${category}`, {
      method: 'GET',
      headers: {
        'x-api-key': apiKey,
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then((catAPI) => {
        if (catAPI && catAPI[0] && catAPI[0].url) {
          setCatUrl(catAPI[0].url);
        } else {
          console.error('Error fetching cat image. Response:', catAPI);
        }
      })
      .catch((error) => {
        console.error('Error fetching cat image', error);
      });
  };

  const handleButtonClick = (category) => {
    setSelectedCategory(category);
    fetchRandomCat(category);
  };

  const handleSelectChange = (event) => {
    const selectedOption = event.target.value;
    setSelectedCategory(selectedOption);
    fetchRandomCat(selectedOption);
  };

  return (
    <div>
      <select name="categoryDropdown" id="categoryDropdown" onChange={handleSelectChange}>
        <option value="">Select a category</option>
        <option value="boxes">Boxes</option>
        <option value="clothes">Clothes</option>
        <option value="hats">Hats</option>
        <option value="sinks">Sinks</option>
        <option value="space">Space</option>
        <option value="sunglasses">Sunglasses</option>
        <option value="ties">Ties</option>
      </select>

      <button onClick={() => handleButtonClick(selectedCategory)}>{selectedCategory}</button>

      {catUrl && <img src={catUrl} alt="Random Cat" style={{ maxWidth: '300px' }} />}
    </div>
  );
};

export default ChooseCatRace;
