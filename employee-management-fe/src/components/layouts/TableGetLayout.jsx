const TableGetLayout = ({ children, title }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="my-5 font-bold text-md">{title}</h1>
      {children}
    </div>
  );
};

export default TableGetLayout;
