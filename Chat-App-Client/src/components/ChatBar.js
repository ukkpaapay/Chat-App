import React, { useState, useEffect } from 'react';

const ChatBar = ({ socket }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    socket.on('newUserResponse', (data) => setUsers(data));
  }, [socket, users]);

  return (
    <div className="h-full w-1/5 p-5 bg-gray-600">
      <h2>Open Chat</h2>
      <div>
        <h4 className="mt-2.5 mb-5">ACTIVE USERS</h4>
        <div className=" text-base">
          {users.filter((user) => user.roomNumber === localStorage.getItem("roomNumber")).map((user) => (
            <p className='mb-2.5' key={user.socketID}>{user.username}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChatBar;