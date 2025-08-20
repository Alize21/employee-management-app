const colorVariants = {
  primary: "bg-blue-600 hover:bg-blue-700 text-white",
  green: "bg-green-600 hover:bg-green-700 text-white",
  red: "bg-red-600 hover:bg-red-700 text-white",
};

const Button = ({ type, children, handleClick, variant = "primary" }) => {
  return (
    <button type={type} className={`py-1 px-1.5 rounded ${colorVariants[variant]}`} onClick={handleClick}>
      {children}
    </button>
  );
};

export default Button;
