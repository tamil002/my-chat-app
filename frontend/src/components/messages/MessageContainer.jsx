import React, { useEffect } from 'react'
import Messages from './Messages'
import MessageInput from './MessageInput'
import { TbMessage } from "react-icons/tb";
import useConversation from '../../zustand/useConversation';
import { useAuthContext } from '../../context/AuthContext';

const MessageContainer = () => {
    const { selectedConversation, setSelectedConversation } = useConversation();

    useEffect(() => {
        // cleanup function
        return () => setSelectedConversation(null)
    }, [setSelectedConversation]);

    return (
        <div className='md:min-w-[450px] flex flex-col'>
            {!selectedConversation ? <NoChatSelected /> : (
                <>
                    {/**Header */}
                    <div className='bg-[#6f4a6b] px-4 py-2 mb-2 font-serif'>
                        <span className='label-text'>To</span>{""}
                        <span className='text-slate-300 font-bold '> {selectedConversation.fullName}</span>

                    </div>
                    <Messages />
                    <MessageInput />
                </>
            )}
        </div>
    )
}

export default MessageContainer

const NoChatSelected = () => {
    const { authUser } = useAuthContext()
    return (
        <div className='flex items-center justify-center w-full h-full font-serif'>
            <div className='px-4 text-center sm:text-lg ms:text-xl text-slate-200 font-semibold flex flex-col
            items-center gap-2'>
                <p>Welcome {authUser.fullName}</p>
                <p>Select a chat to start conversation</p>
                <TbMessage className='text-3xl md:text-6xl text-center' />
            </div>
        </div>
    );
}