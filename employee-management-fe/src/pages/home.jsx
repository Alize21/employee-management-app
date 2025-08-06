import TableGetLayout from "../components/layouts/TableGetLayout";
import Table from "../components/fragments/Table";

const HomePage = ({ data, columns }) => {
  return (
    <TableGetLayout title="Welcome to Employee Management App">
      <Table columns={columns} user={data} color={"bg-slate-400"} />
    </TableGetLayout>
  );
};

export default HomePage;
