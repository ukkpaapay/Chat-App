import React, { useState} from 'react';
import './index.css'
import { useNavigate } from 'react-router-dom';

const Login = ({ socket }) => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [roomNumber, setRoomNumber] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem('username', username);
        localStorage.setItem('roomNumber', roomNumber);
        //sends the username and socket ID to the Node.js server
        socket.emit('newUser', { username, roomNumber, socketID: socket.id });
        navigate('/chat');
    };

    return (
        <div className='w-screen h-screen p-20'>
            <div className='h-1/4'>
                <p className='rhine-lab-text-1 animate-[rhineLabTitle1_2s_ease-out]'><span>RHINE LAB</span></p>
                <p className='rhine-lab-text-2 animate-[rhineLabTitle2_2s_ease-out]'><span>SYNTHESIZE INFORMATION</span></p>
                <p className='animate-[rhineLabTitle3_2s_ease-out]'><span className='rhine-lab-text-3'>ANALYSIS </span><span className='rhine-lab-text-5'>OS</span></p>
            </div>
            <div className='flex flex-row my-auto justify-center h-2/4 text-end'>
                <div className='animate-[slideLeftFromRight_2s_ease-out] my-auto'>
                    <div className='rhine-lab-logo' />
                    <div className='animate-[fadeIn_2s_ease-out] rhine-lab-text-4'>
                        <p className='tracking-[.75em]'>RHINE∙LAB</p>
                    </div>
                </div>
                <div className='animate-[fadeIn_4.5s_ease-out] my-auto mx-6'>
                    <form onSubmit={handleSubmit}>
                        <div>USERNAME : <input name="username" className='rhine-lab-text-2' type={'text'} autoComplete="off" value={username} onChange={(e) => setUsername(e.target.value)} /></div>
                        <div>ROOM : <input name="password" className='rhine-lab-text-2' type={'password'} autoComplete="off" value={roomNumber} onChange={(e) => setRoomNumber(e.target.value)} /></div>
                        <button type="submit"/>
                    </form>
                </div>
            </div>
            <div className='flex flex-column z-50 justify-end  h-1/4'>
                <p className='my-auto  animate-[rhineLabTitle2_2s_ease-out]'><span className='rhine-lab-text-2'>POWERED BY</span> <span className='rhine-lab-text-4'>RHINE LAB -</span></p>
            </div>
        </div>
    )
}

export default Login;
