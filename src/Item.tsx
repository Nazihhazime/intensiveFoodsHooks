import Favorite from "./common/Favorite";
import { IitemsObject } from "./interface/IItem";

function Item({
  name,
  _id,
  category,
  price,
  numberInStock,
  isFavorite,
  onDelete,
  onFavor,
}: IitemsObject): JSX.Element {
  return (
    <>
      <td>{name}</td>
      <td>{category.name}</td>
      <td>{price}</td>
      <td> {numberInStock} </td>
      <td>
        <Favorite onFavor={onFavor} isFavorite={isFavorite} _id={_id} />
      </td>
      <td>
        <button className="btn btn-danger" onClick={() => onDelete(_id)}>
          Delete
        </button>
      </td>
    </>
  );
}

export default Item;
