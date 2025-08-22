const Input = ({ type, name, id, value, onChange, required = false }) => {
  return <input type={type} name={name} id={id} autoComplete="off" required={required} value={value} onChange={onChange} className="border border-gray-200 outline-none focus:border-gray-400 rounded-sm w-full mb-3 px-3 py-1 text-sm" />;
};

export default Input;
