import { useState, useEffect } from "react";
import { getFoods } from "./service/fakeFoodService";
import Table from "./common/Table";
import ItemContext from "./context/ItemContext";
import Pagination from "./common/Pagination";
import { Iitem } from "./interface/IItem";
import Listgroup from "./common/Listgroup";
import IArticle from "./interface/IArticle";
import { getCategories } from "./service/fakeCategoryService";
import paginate from "./utils/paginate";

const DEFAULT_ARTICLE = { _id: "", name: "All Categories" };

function Items() {
  const [items, setItems] = useState<Iitem[]>([]);
  const [pageSize, setPageSize] = useState<number>(4);
  const [selectedPage, setSelectedPage] = useState<number>(1);
  const [articles, setArticles] = useState<IArticle[]>([]);
  const [selectedArticle, setSelectedArticle] =
    useState<IArticle>(DEFAULT_ARTICLE);

  useEffect(() => {
    setItems(getFoods());
    setArticles([DEFAULT_ARTICLE, ...getCategories()]);
  }, []);

  const filteredItems = selectedArticle._id
    ? items.filter((i) => selectedArticle._id === i.category._id)
    : items;

  const foods: Iitem[] = paginate(filteredItems, selectedPage, pageSize);

  const { length: count } = filteredItems;

  const handleSelectedPage = (page: number) => {
    setSelectedPage(page);
  };

  const handleSelectedArticle = (article: IArticle) => {
    setSelectedPage(1);
    setSelectedArticle(article);
  };

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
    return <h1>There are no foods in the database</h1>;
  }

  return (
    <div className="container m-4">
      <div className="row">
        <div className="col-3">
          <Listgroup
            articles={articles}
            selectedArticle={selectedArticle}
            onSelectArticle={handleSelectedArticle}
          />
        </div>
        <div className="col">
          <p>Showing {count} in the database</p>
          <ItemContext.Provider
            value={{
              foods,
              onDelete: handleDelete,
              onFavor: handleIsFavorite,
            }}
          >
            <Table />
          </ItemContext.Provider>
          <Pagination
            pageSize={pageSize}
            itemCount={count}
            selectedPage={selectedPage}
            onSelect={handleSelectedPage}
          />
        </div>
      </div>
    </div>
  );
}

export default Items;
