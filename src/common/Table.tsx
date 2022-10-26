import TableBody from "./TableBody";
import TableHeader from "./TableHeader";


function Table(columns: any) {
  return (
    <div>
      <table className="table">
        <TableHeader columns={columns} />
        <TableBody />
      </table>
    </div>
  );
}

export default Table;
