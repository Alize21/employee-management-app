import TableRow from "../tRow/index";

const TableHead = ({ columns }) => {
  return (
    <thead className="bg-slate-300">
      <TableRow>
        {columns.map((col, i) => (
          <th key={i}>{col.label}</th>
        ))}
      </TableRow>
    </thead>
  );
};

export default TableHead;
