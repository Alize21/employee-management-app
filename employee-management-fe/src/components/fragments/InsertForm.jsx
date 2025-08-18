import InputField from "../elements/input";
import Select from "../elements/select";
import Button from "../elements/button";

const InsertForm = ({ handleSubmit, error }) => {
  return (
    <form onSubmit={handleSubmit}>
      <InputField htmlFor={"username"} childrenLabel={"username"} type={"text"} name={"username"} id={"username"} required={true} />
      <br />
      <InputField htmlFor={"password"} childrenLabel={"password"} type={"password"} name={"password"} id={"password"} required={true} />
      <br />
      <Select options={["employee", "admin"]} name={"role"} id={"role"} required={true} />
      <br />
      <Button type={"submit"}>Submit</Button>
      <br />
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </form>
  );
};

export default InsertForm;
