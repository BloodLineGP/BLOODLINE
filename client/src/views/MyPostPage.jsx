import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { url } from "../configs/config";

const MyPostPage = () => {
  const [post, setPost] = useState([]);

  const fetchPost = async () => {
    try {
      console.log("MASUK SINI");
      const { data } = await axios.get(`${url}/posts/mypost`, {
        headers: {
          Authorization: `Bearer ${localStorage.authorization}`,
        },
      });

      setPost(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    //otomatis, lifecycle seperti hook tidak perlu di panggil.ini adalah mounting
    fetchPost();
  }, []);

  return (
    <>
      {post?.length === 0 ? (
        <div className="flex flex-row justify-center items-center py-[100px]">
          <span className="flex justify-center text-gray-500">
            You don't have any post
          </span>
        </div>
      ) : (
        <div className="pt-10 px-24 flex flex-row flex-wrap bg-white justify-center">
          {post.map((el) => {
            return (
              <div className="m-2 border-2 border-gray-500 shadow bg-white rounded w-1/3 p-4 shadow transition-transform duration-300 hover:border-red-500">
                <div className="flex">
                  <div className="w-1/2 flex-col">
                    <span className="flex justify-center text-gray-500">
                      Patient Name
                    </span>
                    <span className="flex justify-center text-2xl font-semibold">
                      {el.name}
                    </span>
                  </div>
                  <div className="w-1/2 flex-col">
                    <span className="flex justify-center text-gray-500">
                      Blood Type
                    </span>
                    <span className="flex justify-center text-2xl font-semibold">
                      {el.bloodType}
                    </span>
                  </div>
                </div>
                <div className="py-4 text-sm">{el.description}</div>
                <hr />
                <div className="flex-center">
                  <span className="text-xs text-red-400 font-semibold py-1">
                    Publish Date {el.publishDate}
                  </span>
                </div>
                <div className="flex">
                  <div className="w-2/3">
                    <h1 className="font-semibold">{el.postType}</h1>
                    <span className="block text-xs uppercase text-red-400">
                      {el.status}
                    </span>
                  </div>
                  <div className="w-1/3">
                    <Link to={`/detailed/${el.id}`}>
                      <button className="float-right text-xs bg-red-500 rounded px-2 py-1 text-white">
                        Detail
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default MyPostPage;
