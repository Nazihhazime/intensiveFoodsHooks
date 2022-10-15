import IArticle from "../interface/IArticle";

interface Props {
  articles: IArticle[];
  selectedArticle: IArticle;
  onSelectArticle: (article: IArticle) => void;
}

function Listgroup({ articles, selectedArticle, onSelectArticle }: Props) {
  return (
    <ul className="list-group">
      {articles.map((article) => (
        <li
          style={{ cursor: "pointer" }}
          className={
            selectedArticle === article
              ? "list-group-item active"
              : "list-group-item"
          }
          onClick={() => onSelectArticle(article)}
        >
          {article.name}
        </li>
      ))}
    </ul>
  );
}

export default Listgroup;
