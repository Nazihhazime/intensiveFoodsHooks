import IArticle from "./IArticle";

export interface Iitems {
  _id: string;
  name: string;
  category: IArticle;
  numberInStock: number;
  price: number;
  isFavorite?: boolean;
}

export interface IitemsArray {
  items: Iitems[];
  onDelete: (id: string) => void;
  onFavor: (id: string) => void;
}

export interface IitemsObject extends Iitems {
  onDelete: (id: string) => void;
  onFavor: (id: string) => void;
}
