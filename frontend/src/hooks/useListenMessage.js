import React, { useEffect } from 'react'
import { useSocketContext } from '../context/SocketContext'
import useConversation from '../zustand/useConversation'

const useListenMessage = () => {
    const { socket } = useSocketContext()
    const { messages, setMessages } = useConversation();

    useEffect(() => {
        socket.on("newMessage", (newMessage) => {
            newMessage.shouldShake = true;
            setMessages([...messages, newMessage])
        })

        return () => socket.off("newMessages")
    }, [socket, setMessages, messages])
}

export default useListenMessage