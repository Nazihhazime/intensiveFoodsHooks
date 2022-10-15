import _ from "lodash";

interface Props {
  pageSize: number;
  itemCount: number;
  selectedPage: number;
  onSelect: (page: number) => void;
}

function Pagination({
  pageSize,
  itemCount,
  onSelect,
  selectedPage,
}: Props): JSX.Element {
  const pageCount = Math.ceil(itemCount / pageSize);

  if (pageCount === 1) return <></>;

  const pages = _.range(1, pageCount + 1);

  return (
    <ul className="pagination">
      {pages.map((page) => (
        <li
          key={page}
          className={selectedPage === page ? "page-item active" : "page-item"}
        >
          <button className="page-link" onClick={() => onSelect(page)}>
            {page}
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Pagination;
