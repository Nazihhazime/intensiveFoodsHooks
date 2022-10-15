import IArticle from "./IArticle";

export interface Iitem {
  _id: string;
  name: string;
  category: IArticle;
  numberInStock: number;
  price: number;
  isFavorite?: boolean;
}

export interface IitemsArray {
  foods: Iitem[];
  onDelete: (id: string) => void;
  onFavor: (id: string) => void;
}

export interface IitemsObject extends Iitem {
  onDelete: (id: string) => void;
  onFavor: (id: string) => void;
}
