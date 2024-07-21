import { NavLink } from "react-router-dom";
import { FaBarsStaggered } from "react-icons/fa6";
import { BsSunFill } from "react-icons/bs";
import { BsMoonFill } from "react-icons/bs";
import { IoCartOutline } from "react-icons/io5";
import NavLinks from "./NavLinks";
import { useSelector } from "react-redux";
import { toggleTheme } from "../Features/user/userSlice";
import { useDispatch } from "react-redux";
const Navbar = () => {
  const { numItemsInCart } = useSelector((store) => {
    return store.cartState;
  });

  const dispatch = useDispatch();

  const handleTheme = () => {
    dispatch(toggleTheme());
  };

  return (
    <nav className="   bg-base-200">
      <div className="navbar align-element ">
        <div className="navbar-start">
          <NavLink
            className="btn  btn-square btn-secondary hidden md:flex"
            to={"/"}
          >
            <span className="text-3xl">C</span>
          </NavLink>

          <div className="dropdown md:hidden">
            <div tabIndex={0} role="button" className="btn m-1">
              <FaBarsStaggered className="text-3xl" />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 mt-3 "
            >
              <NavLinks className="" />
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden md:flex ">
          <ul className="menu menu-horizontal">
            <NavLinks className="" />
          </ul>
        </div>
        <div className="navbar-end pb-0">
          <label className="swap swap-flip text-9xl">
            {/* this hidden checkbox controls the state */}
            <input type="checkbox" onChange={handleTheme} />

            <div className="swap-on text-lg">
              <BsSunFill />
            </div>
            <div className="swap-off text-lg">
              <BsMoonFill />
            </div>
          </label>

          <div className="indicator ">
            <span className="indicator-item badge-xs rounded-full badge-secondary ">
              {numItemsInCart}
            </span>
            <div className="grid ml-4 place-items-center">
              <IoCartOutline className="text-3xl" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
