import React, { useState } from 'react';

const ChooseCatCategory = () => {
  const [catUrl, setCatUrl] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const fetchRandomCat = (categoryId) => {
    const apiKey = 'live_Qh8HhcOmM7mhes2Bg7qFaEXuXBskFtDBNhcflFjh7jxM9LOzABKhRixmAbgdUixS';

    fetch(`https://api.thecatapi.com/v1/images/search?category_ids=${categoryId}`, {
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

  const handleSelectChange = (event) => {
    const selectedCategoryId = event.target.value;
    setSelectedCategory(selectedCategoryId);
    fetchRandomCat(selectedCategoryId);
  };

  return (
    <div>
      <select name="categoryDropdown" id="categoryDropdown" onChange={handleSelectChange}>
        <option value="">Select a category</option>
        <option value="5">Boxes</option>
        <option value="15">Clothes</option>
        <option value="1">Hats</option>
        <option value="14">Sinks</option>
        <option value="2">Space</option>
        <option value="4">Sunglasses</option>
        <option value="2">Ties</option>
      </select>

      {catUrl && <img src={catUrl} alt="Random Cat" style={{ maxWidth: '300px' }} />}
    </div>
  );
};

export default ChooseCatCategory;
