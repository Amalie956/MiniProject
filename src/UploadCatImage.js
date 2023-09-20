import React, { useState } from 'react';

function UploadCatImage() {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const uploadImage = async () => {
    const url = "https://api.thecatapi.com/v1/images/upload";
    const apiKey = 'live_Qh8HhcOmM7mhes2Bg7qFaEXuXBskFtDBNhcflFjh7jxM9LOzABKhRixmAbgdUixS'; 
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'x-api-key': apiKey,
        },
        body: formData,
      });

      console.log(response);

      const data = await response.json();
      console.log(data);

      if (response.ok) {
        console.log("Image uploaded successfully!");
      }
    } catch (error) {
      //console.error('Error uploading image:', error);
    }
  };

  return (
    <div>
      <h1></h1>
      <input type="file" onChange={handleFileChange} />
      <button onClick={uploadImage}>Upload billede</button>
    </div>
  );
}

export default UploadCatImage;
