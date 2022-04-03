import PhotosContainer from './components/PhotosContainet';
import SearchContainer from './components/SearchContainer';

import './App.css';
import { useHandlers } from './useHandlers';

const App = () => {
  const {
    keyword,
    images,
    handleInputChange,
    handleColorChange,
    handleOrientationChange,
    handleSubmit,
  } = useHandlers();

  return (
    <div className="App">
      <h1>Amazing photos</h1>
      <SearchContainer
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
        keyword={keyword}
        handleColorChange={handleColorChange}
        handleOrientationChange={handleOrientationChange}
      />
      <PhotosContainer images={images} />
    </div>
  );
};

export default App;
