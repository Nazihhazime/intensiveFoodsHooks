import ItemContext from "../context/ItemContext";
import Item from "../Item";
import { useContext } from "react";
import { IitemsArray } from "../interface/IItem";

function TableBody() {
  const { foods, onDelete, onFavor } = useContext(ItemContext) as IitemsArray;

  return (
    <tbody>
      {foods.map((food) => (
        <tr key={food._id}>
          <Item onDelete={onDelete} onFavor={onFavor} {...food} />
        </tr>
      ))}
    </tbody>
  );
}

export default TableBody;
