import Favorite from "./common/Favorite";
import Table from "./common/Table";

function ItemTable(): JSX.Element {
  const columns: any = [
    { label: "Name", path: "name" },
    { label: "Category", path: "category.name" },
    { label: "Stock", path: "numberInStock" },
    { label: "Price", path: "price" },
    { key: "favorite" },
    { key: "delete" },
  ];

  return <Table columns={columns} />;
}

export default ItemTable;
