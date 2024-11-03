import { NavLink } from "react-router-dom";

function Navber() {
    const Link = (
        <>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-500"
                  : "text-gray-700"
              }
            >
              {" "}
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/coffees"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-500"
                  : "text-gray-700"
              }
            >
              {" "}
              Coffees
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashbord"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-500"
                  : "text-gray-700"
              }
            >
              {" "}
              Dashbord
            </NavLink>
          </li>
        </>
      );
  return (
    <div className="navbar sticky top-0 z-50 bg-transparent backdrop-blur-xl w-10/12 mx-auto py-5">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {Link}
          </ul>
        </div>
        <a className=" text-3xl font-bold text-gray-700">Cafe Hunt</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-xl font-semibold">
          {Link}
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn font-semibold text-lg bg-blue-300">Login</a>
      </div>
    </div>
  );
}

export default Navber;
