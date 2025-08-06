import TableRow from "../tRow/index";

const TableBody = ({ data, columns }) => {
  return (
    <tbody>
      {data && data.length > 0 ? (
        data.map((item, i) => (
          <TableRow key={i}>
            {columns.map((col, j) => (
              <td className="border p-3 text-md" key={j}>
                {item[col]}
              </td>
            ))}
          </TableRow>
        ))
      ) : (
        <tr>
          <td colSpan={columns.length}>No data available</td>
        </tr>
      )}
    </tbody>
  );
};

export default TableBody;
