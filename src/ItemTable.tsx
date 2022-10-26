import Favorite from "./common/Favorite";
import Table from "./common/Table";
import IColumn from "./interface/IColumn";

function ItemTable(): JSX.Element {
  const columns: IColumn2[] = [
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
