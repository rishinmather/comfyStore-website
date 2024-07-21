import { Form, Link, redirect } from "react-router-dom";
import FormIput from "../Components/FormIput";
import SubmitBtn from "../Components/SubmitBtn";
import { CustFetch } from "../Utils/Index";
import { toast } from "react-toastify";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    const response = await CustFetch.post("/auth/local/register", data);

    toast.success("Successfully registered");
    return redirect("/login");
  } catch (error) {
    const errorMessage =
      error?.response?.data?.error?.message || "enter valid credentials";
    toast.error(errorMessage);
    return null;
  }
};

const Register = () => {
  return (
    <section className="h-screen grid place-content-center">
      <Form
        method="POST"
        className="card shadow-lg py-5 w-96 h-fit items-center"
      >
        <div className="card-title text-center mx-auto ">
          <h1 className="text-3xl text-slate-600 font-bold">Register</h1>
        </div>

        <div className="">
          <FormIput type="text" name="username" label="Username" width="w-80" />

          <FormIput type="email" name="email" label="Email" />

          <FormIput type="password" name="password" label="Password" />
        </div>

        <div className="">
          <SubmitBtn text="Register" />
        </div>

        <p className="mt-4">
          Already a member?{" "}
          <span className="text-primary">
            <Link to={"/login"}>Login</Link>
          </span>
        </p>
      </Form>
    </section>
  );
};

export default Register;
