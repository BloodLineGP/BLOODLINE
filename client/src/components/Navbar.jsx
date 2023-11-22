import { Link, useNavigate } from "react-router-dom";
import { googleLogout } from "@react-oauth/google";
import Swal from "sweetalert2";

const Navbar = () => {
  const navigate = useNavigate();
  const handleLogout = async (event) => {
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#4169e1",
      cancelButtonColor: "#f43f5e",
      confirmButtonText: "Yes",
      cancelButtonText: "No",
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.clear();
        googleLogout;
        navigate("/login");
      }
    });
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex flex-row justify-around items-center gap-8 bg-red-500">
        <div className="w-10">
          <img
            className="w-full"
            src="https://ik.imagekit.io/alder/Red%20Cross.png?updatedAt=1700565907968"
            alt="logo"
          />
        </div>
        <Link to={"/posts"} className="text-white">
          BLOODLINE
        </Link>

        <Link className="text-white" to={"/posts"}>
          Home Page
        </Link>
        <Link className="text-white" to={"/postform"}>
          Create Post
        </Link>
        <Link
          className="text-white"
          // to={"/"}
        >
          My Post
        </Link>
        <Link
          className="text-white"
          // to={"/"}
        >
          Request Page
        </Link>
        <Link
          className="text-white"
          // to={"/"}
        >
          Donor Page
        </Link>

        <p className="cursor-pointer text-white" onClick={handleLogout}>
          Logout
        </p>
      </nav>
    </>
  );
};

export default Navbar;
