import logo from "../assets/logo.svg";
import { Outlet ,useLocation } from "react-router-dom";
import loginImg from "../assets/thumbnail.jpg"


const AuthLayout = () => {
  const location=useLocation();
  const isSignUp=location.pathname.includes("sign-up")
 
  return (
    <div className="bg-white">
      <div className="flex min-h-screen items-center">
        <img
          src={loginImg}
          alt='LoginImage'
          width={800}
          height={500}
          className="hidden border-r-2 h-[75%] border xl:block w-[50%] p-8 mr-5 object-contain bg-no-repeat"
        />
        <section className="flex flex-1 justify-center items-center flex-col py-16">
          <div className=" w-[350px] sm:w-[500px] flex-col p-2.5">
            <header className="flex items-center gap-2">
              <img src={logo} alt="logo" width={30} height={30} />
              <h2 className="logoName  font-bold text-gray-800  text-3xl">Rently.</h2>
            </header>
            <h2 className="text-left text-lg md:text-2xl mt-5">
               {isSignUp ? "Sign-Up" : "Sign-In"}
            </h2>
            <p className="text-md font-light md:text-base mt-2">
              Please enter your details.
            </p>
            <Outlet />
          </div>
        </section>
      </div>
    </div>
  );
};

export default AuthLayout;
