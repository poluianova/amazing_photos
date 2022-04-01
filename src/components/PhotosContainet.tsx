import { Basic } from 'unsplash-js/dist/methods/photos/types';
import '../App.css';

interface IPhotosContainer {
  images: Basic[];
}

const PhotosContainer = ({ images }: IPhotosContainer) => (
  <div className="photos-container">
    {images?.map((image) => {
      return (
        <div className="photo" key={image.id}>
          <img
            alt={image.alt_description as string}
            src={image.urls.full}
            width="100%"
            height="100%"
          />
        </div>
      );
    })}
  </div>
);

export default PhotosContainer;
