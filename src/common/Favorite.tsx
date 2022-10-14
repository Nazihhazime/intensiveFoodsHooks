interface Props {
  isFavorite: boolean | undefined;
  _id: string;
  onFavor: (id: string) => void;
}

function Favorite({ onFavor, isFavorite, _id }: Props): JSX.Element {
  let classes = "fa-star fa-";
  classes += isFavorite ? "solid" : "regular";

  return (
    <div>
      <i className={classes} onClick={() => onFavor(_id)} />
    </div>
  );
}

export default Favorite;
