import { useState, useEffect } from "react";
import { getFoods } from "./service/fakeFoodService";
import Table from "./common/Table";
import ItemContext from "./context/ItemContext";
import Pagination from "./common/Pagination";
import { Iitems } from "./interface/IItem";

function Items() {
  const [items, setItems] = useState<Iitems[]>([]);
  const [pageSize, setPageSize] = useState<number>(1);
  const [selectedPage, setSelectedPage] = useState<number>(4);

  useEffect(() => {
    setItems(getFoods());
  }, []);

  const { length: count } = items;

  const handleDelete = (id: string) => {
    const filteredItems = items.filter((i) => i._id !== id);
    setItems(filteredItems);
  };

  const handleIsFavorite = (id: string) => {
    console.log("hej");
    const newItems = items.map((i) => {
      if (i._id === id) {
        i.isFavorite = !i.isFavorite;
      }
      return i;
    });
    setItems(newItems);
  };

  if (count <= 0) {
    return <p>There are no foods in the database</p>;
  }

  return (
    <div className="container">
      <p>Showing {count} in the database</p>
      <ItemContext.Provider
        value={{ items, onDelete: handleDelete, onFavor: handleIsFavorite }}
      >
        <Table />
      </ItemContext.Provider>
      <Pagination
        pageSize={pageSize}
        selectedPage={selectedPage}
        itemcount={count}
      />
    </div>
  );
}

export default Items;
