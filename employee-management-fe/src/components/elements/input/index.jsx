import Input from "./input";
import Label from "./label";

const InputField = ({ htmlFor, childrenLabel, type, name, id, required }) => {
  return (
    <>
      <Label htmlFor={htmlFor}>{childrenLabel}</Label>
      <br />
      <Input type={type} name={name} id={id} required={required} />
    </>
  );
};

export default InputField;
