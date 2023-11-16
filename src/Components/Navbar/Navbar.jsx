import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navLinks = (
    <>
      <li>
        <NavLink
          to={`/`}
          className={({ isActive }) =>
            isActive && "bg-white text-[#FF444A] underline font-semibold"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to={`/donation`}
          className={({ isActive }) =>
            isActive && "bg-white text-[#FF444A] underline font-semibold"
          }
        >
          Donation
        </NavLink>
      </li>
      <li>
        <NavLink
          to={`/statistics`}
          className={({ isActive }) =>
            isActive && "bg-white text-[#FF444A] underline font-semibold"
          }
        >
          Statistics
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 flex justify-between items-center">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <a className="btn btn-ghost text-2xl uppercase font-extrabold">
          Donation
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
    </div>
  );
};

export default Navbar;
