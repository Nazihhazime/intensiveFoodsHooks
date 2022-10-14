import { createContext } from "react";
import { IitemsArray, IitemsObject } from "../interface/IItem";

const ItemContext = createContext<IitemsArray | IitemsObject | null>(null);

export default ItemContext;
