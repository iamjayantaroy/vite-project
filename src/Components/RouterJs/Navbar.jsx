import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full h-[48px] flex flex-row bg-violet-700 text-white justify-center items-center">
      <ul className="flex gap-4">
        <li>
          <NavLink
            className={({ isActive }) =>
              `${isActive ? "text-zinc-700" : "text-white"} duration-100`
            }
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `${isActive ? "text-zinc-700" : "text-white"} duration-100`
            }
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/products"
            className={({ isActive }) =>
              `${isActive ? "text-zinc-700" : "text-white"} duration-100`
            }
          >
            Products
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/profile"
            className={({ isActive }) =>
              `${isActive ? "text-zinc-700" : "text-white"} duration-100`
            }
          >
            Profile
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
