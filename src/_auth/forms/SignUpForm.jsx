import { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { signUpUser } from "@/utils";
import * as Yup from "yup";
import { loadUser } from "@/reducers/user";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";


const SignUpForm = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initialValues = {
    firstName: "",
    lastName: "",
    role: "",
    mobileNumber: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("First name is required*"),
    lastName: Yup.string().required("Last name is required*"),
    role: Yup.string().required("Role is required*"),
    mobileNumber: Yup.string()
      .matches(/^[0-9]+$/, "Mobile number must be digits only*")
      .min(10, "Mobile number must be at least 10 digits*")
      .required("Mobile number is required*"),
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
      const formattedValues = {
        ...values,
        role: values.role.toLowerCase(),
      };
      const response = await signUpUser(formattedValues);
      if (response) {
        loadUser(
          response,
        )
        if (response.role === "buyer") {
          navigate(`/buyer/landing/${response.id}`)
        }
        if (response.role === "seller") {
          navigate(`/seller/properties/${response.id}`)
        }
        toast("Sign-Up Successfull !!")
        resetForm();
      }
      else {
        toast("Account already found !!")
      }
    } catch (error) {
      toast("Something went wrong !!")
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="flex  flex-col gap-5 w-full mt-8 ">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex flex-col mb-0.5 w-full sm:w-1/2">
              <label htmlFor="firstName" className="text-sm font-normal text-gray-600">
                First Name
              </label>
              <Field
                type="text"
                id="firstName"
                name="firstName"
                placeholder="Enter your first name"
                className="px-4 py-3 font-light bg-white border rounded-md focus:outline-none focus:border-primary"
              />
              <ErrorMessage
                name="firstName"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>
            <div className="flex flex-col mb-0.5 w-full sm:w-1/2">
              <label htmlFor="lastName" className="text-sm font-normal text-gray-600">
                Last Name
              </label>
              <Field
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Enter your last name"
                className="px-4 py-3 font-light bg-white border rounded-md focus:outline-none focus:border-primary"
              />
              <ErrorMessage
                name="lastName"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex flex-col w-full sm:w-1/2">
              <label htmlFor="role" className="text-sm mb-0.5 font-normal text-gray-600">
                Role
              </label>
              <Field
                as="select"
                id="role"
                name="role"
                className="px-4 py-2.5 font-light bg-white border rounded-md focus:outline-none focus:border-primary"
              >
                <option className="font-light text-gray-600" value="" label="" />
                <option value="Buyer" label="Buyer" />
                <option value="Seller" label="Seller" />
              </Field>
              <ErrorMessage
                name="role"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>
            <div className="flex flex-col w-full sm:w-1/2">
              <label htmlFor="mobileNumber" className="text-sm mb-0.5  font-normal text-gray-600">
                Mobile Number
              </label>
              <Field
                type="text"
                id="mobileNumber"
                name="mobileNumber"
                placeholder="Enter your number"
                className="px-4 py-3 font-light bg-white border rounded-md focus:outline-none focus:border-primary"
              />
              <ErrorMessage
                name="mobileNumber"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>
          </div>

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
              className="px-4 py-3 font-light bg-white border rounded-md focus:outline-none focus:border-primary"
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
            {loading ? "Signing up..." : "Sign Up"}
          </button>
        </Form>
      </Formik>
      <footer className="flex-center gap-1 mt-2.5">
        <p className=" text-base font-light text-gray-600">
          Already have an account?
        </p>
        <Link className="text-primary font-light" to="/">
          Sign In
        </Link>
      </footer>
    </div>
  );
};

export default SignUpForm;
