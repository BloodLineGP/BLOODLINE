// import React, { useState, useEffect } from "react";

// import io from "socket.io-client";

// let socket;

// const Chat = () => {
//     const [name, setName] = useState("");

//     const URL = "http://localhost:3000";
//     // const [searchParams] = useSearchParams();

//     useEffect(() => {
//         socket = io(URL);
//         return socket.emit("disconnect");
//         socket.off();
//     }, []);
//     return (
//         <>
//             <div className="joinOuterContainer">
//                 <div className="joinInnerContainer">
//                     <h1 className="heading">Join</h1>
//                     <div>
//                         <input
//                             placeholder="Name"
//                             className="joinInput"
//                             type="text"
//                             onChange={(event) => setName(event.target.value)}
//                         />
//                     </div>
//                     <button
//                         onClick={() => {
//                             socket.emit("join", { name }, () => {});
//                         }}
//                         className={"button mt-20"}
//                         type="submit"
//                     >
//                         CHAT WITH THIS USER
//                     </button>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default Chat;
