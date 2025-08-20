const Button = ({ type, children, handleClick }) => {
  return (
    <button type={type} className="py-1 px-2 bg-blue-600 text-white rounded hover:bg-blue-700 my-5" onClick={handleClick}>
      {children}
    </button>
  );
};

export default Button;
