import _ from "lodash";

interface Props {
  pageSize: number;
  selectedPage: number;
  itemCount: number;
}

function Pagination({ pageSize, selectedPage, itemCount }: Props): JSX.Element {
  const pageCount = Math.ceil(itemCount / pageSize);

  const pages = _.range(1, pageCount + 1);

  return (
    <ul className="pagination">
      {pages.map((page) => (
        <li className="page-item">
          <button className="page-link">{page}</button>
        </li>
      ))}
    </ul>
  );
}

export default Pagination;
