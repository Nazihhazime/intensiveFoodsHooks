interface Props {
  pageSize: number;
  selectedPage: number;
  itemcount: number;
}

function Pagination({ pageSize, selectedPage }: Props): JSX.Element {
  return (
    <ul className="pagination">
      <li className="page-item">
        <button className="page-link"> 1</button>
      </li>
    </ul>
  );
}

export default Pagination;
