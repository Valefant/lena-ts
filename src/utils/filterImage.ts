import { Filter } from './../type';
import getImageData from './getImageData';
import printCanvas from './printCanvas';

const filterImage = (
  canvas: HTMLCanvasElement,
  filter: Filter,
  image: HTMLImageElement,
  amount = 0
) => {
  return printCanvas(canvas, filter(getImageData(image), amount));
};

export default filterImage;
