import ItemContext from "../context/ItemContext";
import { IitemsContext } from "../interface/IItem";
import { useContext } from "react";

function TableHeader(columns: any) {
  //Gör egen context till denna
  // const { onSort, sortColumn } = useContext(ItemContext) as IitemsContext;

  const raiseSort = (path: string) => {
    if (sortColumn.path === path) {
      sortColumn.order = sortColumn.order === "desc" ? "asc" : "desc";
    } else {
      sortColumn.path = path;
      sortColumn.order = "asc";
    }
    onSort(sortColumn);
  };

  return (
    <thead>
      <tr>
        <th onClick={() => raiseSort("name")}>Name</th>
        <th onClick={() => raiseSort("category.name")}>Category</th>
        <th onClick={() => raiseSort("numberInStock")}>Stock</th>
        <th onClick={() => raiseSort("price")}>Price</th>
        <th />
        <th />
      </tr>
    </thead>
  );
}

export default TableHeader;
