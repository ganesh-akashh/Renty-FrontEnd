import { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { signInUser } from "@/utils";
import { toast } from "sonner";
import { useDispatch } from "react-redux";
import { loadUser } from "@/reducers/user";

const SignInForm = () => {

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();


  const initialValues = {
    email: "",
    password: "",
  };


  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address*")
      .required("Email is required*"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters*")
      .required("Password is required*"),
  });

  const handleSubmit = async (values, { resetForm }) => {
    try {
      setLoading(true);
      const response = await signInUser(values);
      if (response.password === values.password) {
        toast('Sign-in Successfull !!')
        dispatch(
          loadUser(response)
        )
        if (response.role === "seller") {
          navigate(`/seller/properties/${response.id}`)
        }
        else if (response.role === "buyer") {
          navigate(`/buyer/landing/${response.id}`)
        }
      }
      else if (response == "error") {
        toast('User not found !!')
      }
      else if (response.password != password) {
        toast('Wrong Password !!!');
      }
    } catch (error) {
      toast("Something went wrong !!")
      console.log(error);
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="flex flex-col gap-5 w-full mt-8 p-1 sm:p-3">
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-sm font-normal text-gray-600">
              Email
            </label>
            <Field
              type="email"
              id="email"
              name="email"
              autoComplete="on"
              placeholder="Enter your email"
              className="px-4 py-3 font-light bg-white  border rounded-md focus:outline-none focus:border-primary"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="password" className="text-sm font-normal text-gray-600">
              Password
            </label>
            <Field
              type="password"
              id="password"
              autoComplete="on"
              name="password"
              placeholder="Enter your password"
              className="px-2.5 py-3 font-light border rounded-md focus:outline-none focus:border-primary"
            />
            <ErrorMessage
              name="password"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>

          <button
            type="submit"
            className="border-2 text-white font-light rounded-md px-2.5 py-3 hover:bg-primary bg-primary mt-2"
          >
            {loading ? "Signing in..." : "Sign in"}
          </button>
        </Form>
      </Formik>
      <footer className="flex-center gap-1 mt-2.5">
        <p className=" text-base font-light text-gray-600">
          Don't have an account ?
        </p>
        <Link className="text-primary font-light" to="/sign-up">
          Sign Up
        </Link>
      </footer>
    </div>
  )
}

export default SignInForm