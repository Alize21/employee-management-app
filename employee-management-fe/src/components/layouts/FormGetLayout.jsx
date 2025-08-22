import InsertForm from "../fragments/InsertForm";

const FormGetLayout = ({ handleSubmit, error, children, formFields }) => {
  return (
    <div className="flex flex-col items-center w-full ">
      <div className="w-1/2 shadow-xl/30 py-6 px-10 rounded-lg">
        <div className="font-semibold text-lg my-4">{children}</div>
        <InsertForm handleSubmit={handleSubmit} error={error} fields={formFields} />
      </div>
    </div>
  );
};

export default FormGetLayout;
