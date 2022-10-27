import IArticle from "./IArticle";
import ISort from "./ISort";

export interface Iitem {
  _id: string;
  name: string;
  category: IArticle;
  numberInStock: number;
  price: number;
  isFavorite?: boolean;
}

export interface IitemsContext {
  foods: Iitem[];
  onDelete: (id: string) => void;
  onFavor: (id: string) => void;
}
