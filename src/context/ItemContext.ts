import { createContext } from "react";
import { IitemsContext } from "../interface/IItem";

const ItemContext = createContext<IitemsContext | null>(null);

export default ItemContext;
