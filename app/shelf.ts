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
  width: number = 100;
  depth: number = 50;
  height: number = 200;
  wood: string;
  color: string;
  deco: string;
  priceBefore: number;
  price: number;
}
