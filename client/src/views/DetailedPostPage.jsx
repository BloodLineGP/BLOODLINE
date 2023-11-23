import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import axios from "axios";

import {
    MultiChatSocket,
    useMultiChatLogic,
    MultiChatWindow,
} from "react-chat-engine-advanced";

import "../css/chat.css";

const DetailedPostPage = () => {
    const chatProps = useMultiChatLogic(
        "4e57beba-716a-4601-9884-a08a419f9fc2",
        localStorage.loggedUser,
        localStorage.loggedUser
    );

    const { id } = useParams();
    const server_url = "http://localhost:3000";

    const [post, setPost] = useState({});

    const [name, setName] = useState(localStorage.loggedUser);

    useEffect(() => {
        console.log(localStorage.loggedUser, `USER YG LOGIN`);
    }, [server_url, id]);

    const fetchPostById = async () => {
        try {
            const { data } = await axios.get(`${server_url}/posts/${id}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.authorization}`,
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

    const roomID = post.id;

    const createRoom = async () => {
        try {
            //create room based on post id
            if (localStorage.loggedUser !== post.User.username) {
                await axios.post(
                    `https://api.chatengine.io/chats/`,
                    { title: roomID },
                    {
                        headers: {
                            "Project-ID":
                                "4e57beba-716a-4601-9884-a08a419f9fc2",
                            "User-Name": localStorage.loggedUser,
                            "User-Secret": localStorage.loggedUser,
                        },
                    }
                );
            }

            //get chat id from latest chat
            const chatID = await axios.get(
                `https://api.chatengine.io/chats/latest/1/`,
                {
                    headers: {
                        "Project-ID": "4e57beba-716a-4601-9884-a08a419f9fc2",
                        "User-Name": localStorage.loggedUser,
                        "User-Secret": localStorage.loggedUser,
                    },
                }
            );

            const arrayResponse = JSON.parse(chatID.request.response);
            const chat_id = arrayResponse[0].id;

            //inviting user to chat room
            await axios.post(
                `https://api.chatengine.io/chats/${chat_id}/people/`,
                { username: post.User.username },
                {
                    headers: {
                        "Project-ID": "4e57beba-716a-4601-9884-a08a419f9fc2",
                        "User-Name": localStorage.loggedUser,
                        "User-Secret": localStorage.loggedUser,
                    },
                }
            );
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <>
            <div className="min-h-screen p-6 bg-gray-300 flex space-x-4 flex-cols">
                <div className="text-left flex items-stretch bg-gray-100 rounded shadow-lg p-4 px-4 md:p-8 mb-6  max-w-lg">
                    <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-1 self-auto">
                        <div className="text-gray-600">
                            <p
                                key={post.id}
                                className="font-medium text-lg text-red-500"
                            >
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
                        <button
                            onClick={createRoom}
                            className="bg-red-500 hover:bg-red-800 text-white font-bold py-2 px-4 border border-red-500 rounded"
                        >
                            Chat
                        </button>
                    </div>
                </div>
                <div className="w-full">
                    <MultiChatWindow {...chatProps} />
                    <MultiChatSocket {...chatProps} />
                </div>
            </div>
        </>
    );

};

export default DetailedPostPage;
