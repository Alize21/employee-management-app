import Button from "../elements/Button";
import Cookies from "js-cookie";
import { useNavigate, Link } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    Cookies.remove("token");
    navigate("/login");
  };

  return (
    <header className="bg-blue-500 text-white py-2 px-10 flex justify-between items-center">
      <h1 className="text-md font-semibold">
        <Link to={"/"}>Employee Management</Link>
      </h1>
      <Button variant="red" className="ml-4" type={"button"} handleClick={handleLogout}>
        Logout
      </Button>
    </header>
  );
};

export default Header;
