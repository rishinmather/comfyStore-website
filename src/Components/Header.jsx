import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logOUTuser } from "../Features/user/userSlice";
import { useQueryClient } from "@tanstack/react-query";
import { clearCart } from "../Features/cart/cartslice";
const Header = () => {
  const { user } = useSelector((store) => store.userState);

  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  const handleLogout = () => {
    dispatch(logOUTuser());
    dispatch(clearCart());
    queryClient.removeQueries();
  };

  return (
    <header className="bg-pale-oyster-600 py-2  ">
      {user ? (
        <div className="flex gap-x-4 justify-end px-6  items-center lg:align-element  lg:pr-[1.5rem] ">
          <h1 className="text-white mb-1">Hello, {user.username}</h1>
          <button
            className="btn-xs  btn bg-pale-oyster-600 border-2 border-white font-bold text-white"
            onClick={handleLogout}
          >
            LOGOUT
          </button>
        </div>
      ) : (
        <div className="text-xs flex gap-4 justify-center lg:justify-end lg:text-sm align-element text-white">
          <Link to={"/login"} className="link link-hover">
            Sign in/Guest
          </Link>
          <Link to={"/register"} className="link link-hover">
            Create Account
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
