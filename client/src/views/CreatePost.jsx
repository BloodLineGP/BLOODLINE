import axios from "axios";

import Swal from "sweetalert2";
import Toastify from "toastify-js";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { url } from "../configs/config";

// import { BASE_URL } from "../configs/config";
const CreatePost = () => {
    //use navigate to redirect to all post.
    const navigate = useNavigate();
    // declare all the variable that will be receive from front end.
    const [name, setName] = useState("");
    const [status, setStatus] = useState("");
    const [contact, setContact] = useState("");
    const [location, setLocation] = useState("");
    const [postType, setPostType] = useState("");
    const [bloodType, setBloodType] = useState("");
    const [description, setDescription] = useState("");
    const [publishDate, setPublishDate] = useState("");
    //inputhandler for each variable
    const nameChangeHandler = (event) => {
        setName(event.target.value);
    };
    const statusChangeHandler = (event) => {
        setStatus(event.target.value);
    };
    const contactChangeHandler = (event) => {
        setContact(event.target.value);
    };
    const locationChangeHandler = (event) => {
        setLocation(event.target.value);
    };
    const postTypeChangeHandler = (event) => {
        setPostType(event.target.value);
    };
    const bloodTypeChangeHandler = (event) => {
        setBloodType(event.target.value);
    };
    const descriptionChangeHandler = (event) => {
        setDescription(event.target.value);
    };
    const publishDateChangeHandler = (event) => {
        setPublishDate(event.target.value);
    };
    //submit form handler
    const formOnSubmitHandler = async (evt) => {
        evt.preventDefault();
        try {
            const { data } = await axios.post(
                `${url}/posts`,
                {
                    name,
                    status,
                    contact,
                    location,
                    postType,
                    bloodType,
                    description,
                    publishDate: new Date(),
                },
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.authorization}`,
                    },
                }
            );
            navigate("/posts"); //navigate itu untuk pindahke halaman login setelah register
            Swal.fire({
                icon: "success",
                title: "Post created",
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
                offset: {
                    y: 40,
                },
            }).showToast();
        }
    };
    return (
        <>
            {/* <!-- component --> */}
            <form onSubmit={formOnSubmitHandler}>
                <div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
                    <div className="container max-w-screen-lg mx-auto">
                        <div>
                            <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6 border-2 border-gray-300 hover:shadow-lg">
                                <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                                    <div className="text-gray-600">
                                        <p className="font-medium text-lg">
                                            Personal Details
                                        </p>
                                        <p>Please fill out all the fields.</p>
                                    </div>

                                    <div className="lg:col-span-2">
                                        <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                                            <div className="md:col-span-5">
                                                <label htmlFor="name">
                                                    Full Name
                                                </label>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    id="name"
                                                    className="border-gray-300 h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                                    defaultValue={name}
                                                    onChange={nameChangeHandler}
                                                    autoComplete="off"
                                                />
                                            </div>

                                            <div className="md:col-span-5">
                                                <label htmlFor="description">
                                                    Description
                                                </label>
                                                <input
                                                    type="text"
                                                    name="description"
                                                    id="description"
                                                    className="border-gray-300 h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                                    defaultValue={description}
                                                    onChange={
                                                        descriptionChangeHandler
                                                    }
                                                    autoComplete="off"
                                                />
                                            </div>

                                            <div className="md:col-span-3">
                                                <label htmlFor="bloodType">
                                                    Blood Type
                                                </label>
                                                <select
                                                    className="border-gray-300 h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                                    id="bloodType"
                                                    onChange={
                                                        bloodTypeChangeHandler
                                                    }
                                                >
                                                    <option
                                                        defaultValue=""
                                                        hidden
                                                    >
                                                        -- Select Blood Type --
                                                    </option>
                                                    <option defaultValue="A+">
                                                        A+
                                                    </option>
                                                    <option defaultValue="A-">
                                                        A-
                                                    </option>
                                                    <option defaultValue="B+">
                                                        B+
                                                    </option>
                                                    <option defaultValue="B-">
                                                        B-
                                                    </option>
                                                    <option defaultValue="O+">
                                                        O+
                                                    </option>
                                                    <option defaultValue="O-">
                                                        O-
                                                    </option>
                                                    <option defaultValue="AB+">
                                                        AB+
                                                    </option>
                                                    <option defaultValue="AB-">
                                                        AB-
                                                    </option>
                                                </select>
                                            </div>

                                            <div className="md:col-span-3">
                                                <label htmlFor="location">
                                                    Location (Hospital)
                                                </label>
                                                <input
                                                    type="text"
                                                    name="location"
                                                    id="location"
                                                    className="border-gray-300 h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                                    defaultValue={location}
                                                    onChange={
                                                        locationChangeHandler
                                                    }
                                                    autoComplete="off"
                                                />
                                            </div>

                                            <div className="md:col-span-3">
                                                <label htmlFor="contact">
                                                    Contact
                                                </label>
                                                <input
                                                    type="text"
                                                    name="contact"
                                                    id="contact"
                                                    className="border-gray-300 h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                                    defaultValue={contact}
                                                    onChange={
                                                        contactChangeHandler
                                                    }
                                                />
                                            </div>

                                            <div className="md:col-span-3">
                                                <div>
                                                    Post Type
                                                    <select
                                                        onChange={
                                                            postTypeChangeHandler
                                                        }
                                                        name="postType"
                                                        id="postType"
                                                        className="border-gray-300 h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                                    >
                                                        <option
                                                            defaultValue=""
                                                            hidden
                                                        >
                                                            -- Select Type --
                                                        </option>
                                                        <option defaultValue="Request">
                                                            AS RECIPIENT
                                                        </option>
                                                        <option defaultValue="Volunteer">
                                                            AS DONOR
                                                        </option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="md:col-span-3">
                                                <div>
                                                    Status (Scale of emergency)
                                                    <select
                                                        onChange={
                                                            statusChangeHandler
                                                        }
                                                        name="status"
                                                        id="status"
                                                        className="border-gray-300 h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                                    >
                                                        <option
                                                            defaultValue=""
                                                            hidden
                                                        >
                                                            -- Select Status --
                                                        </option>
                                                        <option defaultValue="Urgent">
                                                            Urgent
                                                        </option>
                                                        <option defaultValue="Scheduled within 7 days">
                                                            Scheduled within 7
                                                            days
                                                        </option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="md:col-span-5 text-right">
                                                <div className="inline-flex items-end">
                                                    <button className="cursor-pointer bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                                                        Submit
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
};

export default CreatePost;
