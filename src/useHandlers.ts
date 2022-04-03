import React, { useState, useCallback } from 'react';

import { Basic } from 'unsplash-js/dist/methods/photos/types';

import './App.css';
import { searchPhotos } from './api/unsplash-api';
import { ColorId, Orientation } from 'unsplash-js';

export const useHandlers = () => {
  const [keyword, setKeyword] = useState('');
  const [color, setColor] = useState<ColorId>(null);
  const [orientation, setOrientation] = useState<Orientation>(null);
  const [images, setImages] = useState<Basic[]>([]);

  const handleInputChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setKeyword(event.target.value);
    },
    [setKeyword]
  );
  const handleColorChange = useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) => {
      setColor(event.target.value as ColorId);
    },
    [setColor]
  );
  const handleOrientationChange = useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) => {
      setOrientation(event.target.value as Orientation);
    },
    [setOrientation]
  );

  const handleSubmit = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      await searchPhotos(keyword, setImages, color, orientation);
    },
    [keyword, color, orientation, setImages]
  );

  return {
    keyword,
    images,
    handleInputChange,
    handleColorChange,
    handleOrientationChange,
    handleSubmit,
  };
};
