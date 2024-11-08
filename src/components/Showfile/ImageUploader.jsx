import React, { useState } from 'react';

const ImageUploader = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith('image/')) {
      setSelectedImage(URL.createObjectURL(file));
    } else {
      alert('Please select an image file');
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can handle image upload here
    alert('Image uploaded!');
  };

  return (
    <div className=''>
      

      {/* Show selected image preview */}
      {selectedImage && (
        <div className='  border-solid border-slate-600   text-center '>
          <img className=' h-60 border-2 border-orange-600'
            src={selectedImage}
            alt="Selected"/>
        </div>
        
      )}
      
      <h3 className=' pb-3'>ଆପଣ‌ ଲେଖିଥିବା ଅଭିଯୋଗର ଫୋଟୋ ଏଠାରେ ଦାଖଲ କରନ୍ତୁ</h3>
      <form onSubmit={handleSubmit}>
        <input type="file" accept="image/*" onChange={handleImageChange} />
      </form>
    </div>
  );
};

export default ImageUploader;
