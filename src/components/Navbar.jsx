import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="flex justify-between p-5">
      <div>LOGO</div>
      <div className="flex justify-end">
        <div className="px-4">
          <Link to="/">Home</Link>
        </div>
        <div className="px-4">
          <Link to="/user">User</Link>
        </div>
        <div className="px-4">
          <Link to="/login">Login</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
