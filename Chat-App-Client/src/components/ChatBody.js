import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ChatBody = ({ messages, typingStatus, lastMessageRef, socket }) => {
  const navigate = useNavigate();
  const [message, setMessage] = useState("")
  // const handleTyping = () => socket.emit("typing",`${localStorage.getItem("userName")} is typing`)

  const handleSendMessage = (e) => {
    e.preventDefault()
    if (message.trim() && localStorage.getItem("userName")) {
      socket.emit("message",
        {
          text: message,
          name: localStorage.getItem("userName"),
          id: `${socket.id}${Math.random()}`,
          socketID: socket.id,
          room: localStorage.getItem("roomNumber"),
        }
      )
    }
    setMessage("")
  }

  const handleLeaveChat = () => {
    localStorage.removeItem("userName");
    navigate("/");
    window.location.reload();
  };

  return (
    <>
      <header className="w-full h-auto flex items-center justify-between p-3">
        <div className="flex">
          <p>{localStorage.getItem("roomNumber")}</p>
        </div>
        <button className="p-2.5 w-40 border-none outline-none cursor-pointer bg-slate-400 rounded-2xl" onClick={handleLeaveChat}>
          LEAVE CHAT
        </button>
      </header>

      <div className="w-full h-96 p-5 overflow-y-scroll overflow-x-hidden bg-slate-300">
        {messages.map((message) =>
          message.name === localStorage.getItem("userName") ? (
            <div className="text-sm" key={message.id}>
              <div className="max-w-xs p-2.5 rounded-xl ml-auto text-base line-clamp-* bg-lime-400 mb-2.5">
                <p>{message.text}</p>
              </div>
            </div>
          ) : (
            <div className="text-sm" key={message.id}>
              <p>{message.name}</p>
              <div className="w-80 p-2.5 rounded-xl text-base bg-rose-300 line-clamp-* mb-2.5">
                <p>{message.text}</p>
              </div>
            </div>
          )
        )}

        <div className="fixed bottom-12 text-base italic">
          <p>{typingStatus}</p>
        </div>
        <div ref={lastMessageRef} />
      </div>
      <div className='p-2.5 h-auto'>
        <form className='h-full w-full flex items-center justify-between' onSubmit={handleSendMessage}>
          <input
            type="text"
            placeholder='Write message'
            className='w-4/5 h-full rounded-xl border-solid border-2 border-sky-500 outline-none p-3.5 mr-2.5'
            value={message}
            onChange={e => setMessage(e.target.value)}
            autoComplete="off"
          // onKeyDown={handleTyping}
          />
          <button className="w-36 p-2.5 border-none outline-none cursor-pointer bg-slate-600 rounded-2xl">SEND</button>
        </form>
      </div>
    </>
  );
};

export default ChatBody;
