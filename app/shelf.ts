export class Shelf {
  id: number;
  name: string;
  description: string;
  imagePath: string;
  imagePath2?: string;
  imagePath3?: string;
  imagePath4?: string;
  imagePath5?: string;
  state: number = 1;
  parts: number = 2;
  width: number = 80;
  depth: number = 25;
  height: number = 220;
  wood: string;
  stain: string = 'nature';
  color: string;
  deco: string;
  ledge: string;
  priceBefore: number;
  price: number;
}
