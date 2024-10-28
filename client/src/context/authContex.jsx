import axios from 'axios';
import { createContext, useState } from 'react';


export const AuthContext = createContext();

export const AuthContextProvider = () =>{
    const [currentUser, setCurrentUser] = useState(
        JSON.parse(localStorage.getItem("user")) || null
    );
    return (
        <>
        </>
    )
};