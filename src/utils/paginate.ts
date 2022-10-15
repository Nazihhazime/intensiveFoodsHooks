import { Iitem } from "../interface/IItem";

function paginate(
  items: Iitem[],
  selectedPage: number,
  pageSize: number
): Iitem[] {
  const startIndex = (selectedPage - 1) * pageSize;
  const endIndex = selectedPage * pageSize;
  return items.slice(startIndex, endIndex);
}

export default paginate;
