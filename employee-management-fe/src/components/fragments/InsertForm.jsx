import InputField from "../elements/input";
import Select from "../elements/select";
import Button from "../elements/Button";

const InsertForm = ({ handleSubmit, error, fields }) => {
  return (
    <form onSubmit={handleSubmit}>
      {/* <InputField htmlFor={"username"} childrenLabel={"username"} type={"text"} name={"username"} id={"username"} required={true} />
      <br />
      <InputField htmlFor={"password"} childrenLabel={"password"} type={"password"} name={"password"} id={"password"} required={true} />
      <br />
      <Select options={["employee", "admin"]} name={"role"} id={"role"} required={true} />
      <br /> */}
      {fields.map((field, index) => {
        if (field.component === "input") {
          return <InputField key={index} htmlFor={field.id} childrenLabel={field.label} type={field.type} name={field.name} id={field.id} required={field.required} />;
        } else if (field.component === "select") {
          return (
            <div className="flex flex-col" key={index}>
              <h3 className="font-semibold text-sm my-2">{field.label}</h3>
              <Select key={index} options={field.options} name={field.name} id={field.id} required={field.required} />
            </div>
          );
        }
        return null;
      })}
      <br />
      <Button type={"submit"}>Submit</Button>
      <br />
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </form>
  );
};

export default InsertForm;
