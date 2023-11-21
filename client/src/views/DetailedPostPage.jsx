import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import io from "socket.io-client";
import axios from "axios";

import "../css/chat.css";

import InfoBar from "./InfoBar";
import Input from "./Input";
import Messages from "./Messages";
import TextContainer from "./TextContainer";

let socket;

const DetailedPostPage = () => {
    const { id } = useParams();
    const server_url = "http://localhost:3000";

    const [post, setPost] = useState({});
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        socket = io(server_url);
        // return socket.emit("disconnect");
    }, [server_url, id]);

    useEffect(() => {
        socket.on("message", (message) => {
            setMessages([...messages, message]);
        });
    }, [messages]);

    const fetchPostById = async () => {
        try {
            const { data } = await axios.get(`${server_url}/posts/${id}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.token}`,
                },
            });

            setPost(data.postDetail);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchPostById();
    }, [id]);

    const sendMessage = (event) => {
        event.preventDefault();
        if (message) {
            socket.emit("sendMessage", message, () => setMessage(""));
        }
    };
    console.log(message, messages);

    return (
        <>
            <div className="min-h-screen p-6 bg-gray-300 flex space-x-4 flex-cols">
                <div className="text-left flex items-stretch bg-gray-100 rounded shadow-lg p-4 px-4 md:p-8 mb-6  max-w-lg">
                    <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-1 self-auto">
                        <div className="text-gray-600" key={post.id}>
                            <p className="font-medium text-lg text-red-500">
                                Post Details {post.name}
                            </p>
                        </div>
                        <div className="text-gray-600">
                            <p className="text-lg">Full Name: {post.name}</p>
                        </div>
                        <div className="text-gray-600">
                            <p className=" text-lg">
                                Description: {post.description}
                            </p>
                        </div>
                        <div className="text-gray-600">
                            <p className=" text-lg">
                                BloodType: {post.bloodType}
                            </p>
                        </div>
                        <div className="text-gray-600">
                            <p className=" text-lg">Status:{post.status}</p>
                        </div>
                        <div className="text-gray-600">
                            <p className=" text-lg">
                                Published Date:{post.publishDate}
                            </p>
                        </div>
                        <div className="text-gray-600">
                            <p className=" text-lg">Location:{post.location}</p>
                        </div>
                        <div className="text-gray-600">
                            <p className=" text-lg">Contact:{post.contact}</p>
                        </div>
                        <div className="text-gray-600">
                            <p className=" text-lg">
                                Post Type:{post.postType}
                            </p>
                        </div>

                        <Link to={" "}>
                            <button className="float-left bg-blue-400 rounded px-2 py-1 text-white">
                                Chat Now
                            </button>
                        </Link>

                        <button
                            onClick={() => {
                                socket.emit("join", { name }, () => {});
                            }}
                            className={"button mt-20"}
                            type="submit"
                        >
                            CHAT WITH THIS USER
                        </button>
                    </div>
                </div>
            </div>

            <div className="joinOuterContainer">
                <div className="joinInnerContainer">
                    <h1 className="heading">Join</h1>
                    <div>
                        <input
                            placeholder="Name"
                            className="joinInput"
                            type="text"
                            onChange={(event) => setName(event.target.value)}
                        />
                    </div>
                    <button
                        onClick={() => {
                            socket.emit("join", { name }, () => {});
                        }}
                        className={"button mt-20"}
                        type="submit"
                    >
                        CHAT WITH THIS USER
                    </button>
                </div>
            </div>

            <div className="outerContainer">
                <div className="container">
                    <InfoBar name={name} />
                    <Messages messages={messages} name={name} />
                    <Input
                        message={message}
                        setMessage={setMessage}
                        sendMessage={sendMessage}
                    />
                </div>
            </div>
            <TextContainer users={post.name} />
        </>
    );
};

export default DetailedPostPage;
