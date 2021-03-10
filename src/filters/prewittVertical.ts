import { Filter } from '../type';
import convolution from '../operations/convolution';

const prewittVertical: Filter = pixels => {
  const divider = 3;
  const operator = [-1, 0, 1, -1, 0, 1, -1, 0, 1].map(i => i / divider);
  return convolution(pixels, operator);
};

export default prewittVertical;
