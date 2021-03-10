import { Filter } from '../type';
const invert: Filter = pixels => {
  const { data } = pixels;
  for (let i = 0; i < data.length; i += 4) {
    data[i] = 255 - data[i];
    data[i + 1] = 255 - data[i + 1];
    data[i + 2] = 255 - data[i + 2];
  }

  return pixels;
};

export default invert;
