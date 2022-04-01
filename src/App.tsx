import React, { useState } from 'react';

import { Basic } from 'unsplash-js/dist/methods/photos/types';

import PhotosContainer from './components/PhotosContainet';
import SearchContainer from './components/SearchContainer';

import './App.css';
import { searchPhotos } from './api/unsplash-api';

const App = () => {
  const [keyword, setKeyword] = useState('');
  const [images, setImages] = useState<Basic[]>([]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    await searchPhotos(keyword, setImages);
  };

  return (
    <div className="App">
      <SearchContainer
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        keyword={keyword}
      />
      <PhotosContainer images={images} />
    </div>
  );
};

export default App;
