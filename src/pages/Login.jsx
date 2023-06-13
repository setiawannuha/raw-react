import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
const Login = () => {
  return (
    <>
      <Navbar />
      <div className="p-5">
        <div className="flex justify-center items-center h-[80vh]">
          <div className="p-4 rounded-lg border shadow flex flex-col space-y-4">
            <div>LOGIN</div>
            <div>
              <label htmlFor="" className="ml-1">
                Email
              </label>
              <br />
              <input
                type="email"
                name="email"
                className="px-3 py-2 rounded-lg border w-96"
                placeholder="Enter Email"
              />
            </div>
            <div>
              <label htmlFor="" className="ml-1">
                Password
              </label>
              <br />
              <input
                type="password"
                name="password"
                className="px-3 py-2 rounded-lg border w-96"
                placeholder="Enter Password"
              />
            </div>
            <div className="flex justify-end space-x-3">
              <Link
                to="/"
                className="px-3 py-2 rounded-lg bg-red-500 text-white"
              >
                Back
              </Link>
              <button className="px-3 py-2 rounded-lg bg-blue-500 text-white">
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
