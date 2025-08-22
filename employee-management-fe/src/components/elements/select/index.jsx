import Option from "./option";

const Select = ({ options, name, id, value, onChange, required = false }) => {
  return (
    <select name={name} id={id} required={required} value={value} onChange={onChange} className="border border-gray-300 rounded-md p-2 focus:outline-none">
      {options.map((option, i) => (
        <Option key={i} value={option}>
          {option}
        </Option>
      ))}
    </select>
  );
};

export default Select;
