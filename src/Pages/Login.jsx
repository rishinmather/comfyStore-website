import { Form, Link, redirect, useNavigate } from "react-router-dom";
import FormIput from "../Components/FormIput";
import SubmitBtn from "../Components/SubmitBtn";
import { CustFetch } from "../Utils/Index";
import { logINuser } from "../Features/user/userSlice";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
export const action =
  (store) =>
  async ({ request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);

    try {
      const response = await CustFetch.post("/auth/local", data);
      console.log(response);
      store.dispatch(logINuser(response.data));
      toast.success("login success");
      return redirect("/");
    } catch (error) {
      const errorMessage =
        error?.response?.data?.error?.message || "invalid login";
      toast.error(errorMessage);
      return null;
    }
  };

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loginasGuestUser = async () => {
    try {
      const response = await CustFetch.post("/auth/local", {
        identifier: "test@test.com",
        password: "secret",
      });
      dispatch(logINuser(response.data));

      toast.success("welcome guest user");
      navigate("/");
    } catch (error) {
      const errorMessage =
        error?.response?.data?.error?.message || "invalid login";
      toast.error(errorMessage);
      return null;
    }
  };

  return (
    <section className="h-screen grid place-content-center">
      <Form
        method="POST"
        className="card shadow-lg py-5 w-96 h-fit items-center"
      >
        <div className="card-title text-center mx-auto ">
          <h1 className="text-3xl text-slate-600 font-bold">Login</h1>
        </div>

        <div className="">
          <FormIput
            type="email"
            labeltext={"email"}
            name="identifier"
            label="Email"
            width="w-80"
          />

          <FormIput
            type="password"
            name="password"
            label="Password"
            width="w-80"
          />
        </div>

        <div className="">
          <SubmitBtn text="Login" />

          <button
            type="button"
            className="btn  btn-secondary w-80 mt-4 capitalize text-lg"
            onClick={loginasGuestUser}
          >
            Guest User
          </button>
        </div>

        <p className="mt-4">
          Not a member yet?{" "}
          <span className="text-primary">
            <Link to={"/register"}>Register</Link>
          </span>
        </p>
      </Form>
    </section>
  );
};

export default Login;
