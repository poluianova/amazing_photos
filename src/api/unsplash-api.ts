import { createApi } from 'unsplash-js';
import { Basic } from 'unsplash-js/dist/methods/photos/types';

const unsplash = createApi({
  accessKey: 'TCyxmKoTtsy0OS8jCOSqqnkzwbRnI4sB_m95-gX6VSU',
});

export const searchPhotos = (
  keyword: string,
  setImages: React.Dispatch<React.SetStateAction<Basic[]>>
) =>
  unsplash.search
    .getPhotos({
      query: keyword,
    })
    .then((data) => setImages(data.response?.results))
    .catch((error) => console.log(error.errors[0]));
