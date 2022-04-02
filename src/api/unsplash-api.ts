import { ColorId, createApi, Orientation } from 'unsplash-js';
import { Basic } from 'unsplash-js/dist/methods/photos/types';

const unsplash = createApi({
  accessKey: 'TCyxmKoTtsy0OS8jCOSqqnkzwbRnI4sB_m95-gX6VSU',
});

export const searchPhotos = (
  keyword: string,
  setImages: React.Dispatch<React.SetStateAction<Basic[]>>,
  color: ColorId,
  orientation: Orientation
) =>
  unsplash.search
    .getPhotos({
      query: keyword,
      color,
      orientation,
    })
    .then((data) => setImages(data.response?.results))
    .catch((error) => console.log(error.errors[0]));
