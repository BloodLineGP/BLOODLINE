import { Link, useNavigate } from "react-router-dom";
import { googleLogout } from "@react-oauth/google";
import Swal from "sweetalert2";

const Navbar2 = () => {
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
            <nav className="bg-white border-gray-200 dark:bg-gray-900">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
                    <a
                        href="https://flowbite.com"
                        className="flex items-center space-x-3 rtl:space-x-reverse"
                    >
                        <img
                            src="https://ik.imagekit.io/alder/Red%20Cross.png?updatedAt=1700565907968"
                            className="h-8"
                            alt="Flowbite Logo"
                        />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                            Blood Line
                        </span>
                    </a>
                    <div className="flex items-center space-x-6 rtl:space-x-reverse">
                        <a
                            href="tel:5541251234"
                            className="text-sm  text-gray-500 dark:text-white hover:underline"
                        >
                            Welcome, {localStorage.loggedUser}
                        </a>
                        <p
                            onClick={handleLogout}
                            className="cursor-pointer text-sm  text-blue-600 dark:text-blue-500 hover:underline"
                        >
                            Logout
                        </p>
                    </div>
                </div>
            </nav>
            <nav className="bg-red-500 dark:bg-gray-700">
                <div className="max-w-screen-xl px-4 py-3 mx-auto">
                    <div className="flex items-center">
                        <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
                            <li>
                                <Link
                                    to={"/posts"}
                                    className="text-white dark:text-white hover:underline"
                                    aria-current="page"
                                >
                                    Home Page
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to={"/posts/mypost"}
                                    className="text-white dark:text-white hover:underline"
                                    aria-current="page"
                                >
                                    My Post
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to={"/posts/request"}
                                    className="text-white dark:text-white hover:underline"
                                    aria-current="page"
                                >
                                    Request Page
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to={"/posts/donor"}
                                    className="text-white dark:text-white hover:underline"
                                    aria-current="page"
                                >
                                    Donor Page
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to={"/postform"}
                                    className="text-white dark:text-white hover:underline font-bold"
                                    aria-current="page"
                                >
                                    Create Post
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar2;
