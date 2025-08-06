import TableHead from "../elements/tHead";
import TableBody from "../elements/tBody";

const Table = ({ columns, user, color }) => {
  return (
    <table className={`table-fixed border border-collapse w-[40%] ${color}`}>
      <TableHead columns={columns} />
      {user ? (
        <TableBody data={user} columns={columns} />
      ) : (
        <tbody>
          <tr>
            <td colSpan={columns.length}>Loading...</td>
          </tr>
        </tbody>
      )}
    </table>
  );
};

export default Table;
