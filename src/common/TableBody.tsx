import ItemContext from "../context/ItemContext";
import Item from "../Item";
import { useContext } from "react";
import { IitemsArray } from "../interface/IItem";

function TableBody() {
  const { items, onDelete, onFavor } = useContext(ItemContext) as IitemsArray;

  return (
    <tbody>
      {items.map((item) => (
        <tr key={item._id}>
          <Item onDelete={onDelete} onFavor={onFavor} {...item} />
        </tr>
      ))}
    </tbody>
  );
}

export default TableBody;
