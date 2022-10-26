interface IColumn1 {
  label: string;
  path: string;
}

interface IColumn2 extends IColumn1 {
  key: string;
}

interface IColumn {
  columns: IColumn1[] | IColumn2[];
}

export default IColumn2;
