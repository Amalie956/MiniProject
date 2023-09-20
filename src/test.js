import React, { useState } from 'react';

function UploadCatImage() {
  const [file, setFile] = useState(null);

  const handleChange = async (e) => {
    const selectedFile = e.target.files[0];
    setFile(URL.createObjectURL(selectedFile));

    const formData = new FormData();
    formData.append('file', selectedFile);

    
      console.log(formData);
    
    
  };

  return (
    <div className="App">
      <h2></h2>
      <input type="file" accept="image/*" onChange={handleChange} />
      <img src={file} style={{ maxWidth: '300px' }} />
    </div>
  );
}

export default UploadCatImage;
