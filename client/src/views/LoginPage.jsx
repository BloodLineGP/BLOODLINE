import axios from "axios"; //importing axios for backend use
import { GoogleLogin } from "@react-oauth/google";
import { useState } from "react"; //import state
import { useNavigate, Link } from "react-router-dom";
import Swal from "sweetalert2";
import Toastify from "toastify-js";

const LoginPage = () => {
  const navigate = useNavigate(); //create variable for use Navigate.
  const [username, setUsername] = useState(""); //these are variables needed for login.
  const [password, setPassword] = useState("");
  const inputUsernameOnChangeHandler = (evt) => {
    //input Username function
    setUsername(evt.target.value); //changing username with what you receive from front end. target.value path
  };
  const inputPasswordOnChangeHandler = (evt) => {
    //input password function
    setPassword(evt.target.value); //changing password receive from front end. Same as target value path.
  };
  const formOnSubmitHandler = async (evt) => {
    //a form need handle to submit.
    evt.preventDefault(); //prevent the default from refreshing.?
    //all of these process obtain from front end.
    console.log(username, password);
    try {
      const { data } = await axios({
        url: "http://localhost:3000/login",
        method: "post",
        data: {
          username,
          password,
        },
      });
      console.log(data.access_token);
      localStorage.setItem("authorization", data.access_token);
      navigate("/posts");
      Swal.fire({
        icon: "success",
        title: "Welcome to BloodLine",
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

  const handleGoogleLogin = async (codeResponse) => {
    const server_url = "http://localhost:3000";
    try {
      const { data } = await axios.post(`${server_url}/google-login`, null, {
        headers: { token: codeResponse.credential },
      });
      console.log(data);
      localStorage.setItem("authorization", data);
      console.log(localStorage.authorization);
      navigate("/posts");
      Swal.fire({
        icon: "success",
        title: "Welcome to BloodLine",
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      console.log(error);
      Toastify({
        text: error.response.data.message,
        className: "info",
        style: {
          background: "linear-gradient(to right, #ff9a00, #ff5a00)",
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
                Sign in to your account
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
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <button
                      type="submit"
                      className="w-full text-white bg-rose-500 hover:bg-rose-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                    >
                      Sign in
                    </button>
                  </div>
                  <div>
                    <GoogleLogin onSuccess={handleGoogleLogin} />
                  </div>
                </div>
                <hr />
                <p className="text-sm font-light text-gray-500">
                  Don’t have an account yet?{" "}
                  <Link
                    to={"/register"}
                    className="font-medium text-primary-600 hover:underline"
                  >
                    Sign up
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
export default LoginPage;
