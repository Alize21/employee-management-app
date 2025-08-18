const Label = ({ htmlFor, children }) => {
  return (
    <label htmlFor={htmlFor} className="font-semibold text-sm capitalize ">
      {children}
    </label>
  );
};
export default Label;
