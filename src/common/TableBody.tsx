import ItemContext from "../context/ItemContext";
import ItemTable from "../ItemTable";
import { useContext } from "react";
import { IitemsArray } from "../interface/IItem";
import Favorite from "./Favorite";

function TableBody() {
  const { foods, onDelete, onFavor } = useContext(ItemContext) as IitemsArray;

  return (
    <tbody>
      {foods.map((food) => (
        <tr key={food._id}>
          <td>{food.name}</td>
          <td>{food.category.name}</td>
          <td>{food.price}</td>
          <td> {food.numberInStock} </td>
          <td>
            <Favorite
              onFavor={onFavor}
              isFavorite={food.isFavorite}
              _id={food._id}
            />
          </td>
          <td>
            <button
              className="btn btn-danger"
              onClick={() => onDelete(food._id)}
            >
              Delete
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  );
}

export default TableBody;
