import { io } from 'socket.io-client'
import {createContext} from 'react'
const base_url = import.meta.env.VITE_REACT_APP_API_BASE_URL;
export const socket = io(base_url,{
    autoConnect: false
})

export const SocketContext = createContext();