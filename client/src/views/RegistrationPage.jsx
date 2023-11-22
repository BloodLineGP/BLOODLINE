import axios from "axios"; //importing axios for backend use
import { useState } from "react"; //import state
import { Link, useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import Swal from "sweetalert2";
import Toastify from "toastify-js";

const RegistrationPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState(""); //these are variables needed for login.
  const [birthdate, setBirthdate] = useState("");
  const [password, setPassword] = useState("");
  const inputUsernameOnChangeHandler = (evt) => {
    setUsername(evt.target.value);
  };
  const inputBirthDateOnChangeHandler = (evt) => {
    setBirthdate(evt.target.value);
  };
  const inputPasswordOnChangeHandler = (evt) => {
    setPassword(evt.target.value);
  };
  const formOnSubmitHandler = async (evt) => {
    evt.preventDefault();
    try {
      const { data } = await axios({
        url: "http://localhost:3000/register",
        method: "post",
        data: {
          username,
          birthdate,
          password,
        },
      });
      navigate("/login"); //navigate itu untuk pindahke halaman login setelah register
      Swal.fire({
        icon: "success",
        title: "Registration Successful",
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (err) {
      console.log(err);
      Toastify({
        text: err.response.data.message,
        className: "info",
        style: {
          background: "linear-gradient(to right, #e11d48, #be123c)",
        },
      }).showToast();
    }
  };
  return (
    <>
      <section className="bg-gray-50">
        <div className="bg-rose-300 flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <Link className="flex items-center mb-6 text-2xl font-semibold text-gray-900">
            <img
              className="w-full"
              src="https://fontmeme.com/permalink/231121/d6a7a8194a4f6d8473ad1037eb2bf6c9.png"
              alt="logo"
            />
          </Link>
          <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 ">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                Create a new account
              </h1>
              <form
                onSubmit={formOnSubmitHandler}
                className="space-y-4 md:space-y-6"
              >
                <div>
                  <label
                    htmlFor="username"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Username
                  </label>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    placeholder="Your username"
                    autoComplete="off"
                    defaultValue={username}
                    onChange={inputUsernameOnChangeHandler}
                  />
                </div>
                <div>
                  <label
                    htmlFor="birthdate"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Birth Day
                  </label>
                  <input
                    type="date"
                    name="birthdate"
                    id="birthdate"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    autoComplete="off"
                    defaultValue={birthdate}
                    onChange={inputBirthDateOnChangeHandler}
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    defaultValue={password}
                    onChange={inputPasswordOnChangeHandler}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-rose-500 hover:bg-rose-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Sign up
                </button>
                <hr />
                <p className="text-sm font-light text-gray-500">
                  Already have an account?{" "}
                  <Link
                    to={"/login"}
                    className="font-medium text-primary-600 hover:underline"
                  >
                    Sign in
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default RegistrationPage;
