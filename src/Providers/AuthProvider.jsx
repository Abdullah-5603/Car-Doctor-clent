import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../Firebase/Firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const signUpUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const logInUser = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const signOutUser = () =>{
        setLoading(true)
        return signOut(auth)
    }
    const googleSignInUser = () =>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser)
            setLoading(false)
            if(currentUser && currentUser.email){
                const loggedUser = {
                    email : currentUser.email
                }
                fetch('https://car-doctor-server-abdullah-5603.vercel.app/jwt',{
                    method: 'POST',
                    headers : {
                        'content-type' : 'application/json'
                    },
                    body : JSON.stringify(loggedUser)
                })
                .then(res => res.json())
                .then(data => {
                    // console.log(data)
                    // localStorage is the second best place to store jwt access token. the best place is cookies
                    localStorage.setItem('car-doctor-access-token', data.token)
                    
                })
            } else {
                localStorage.removeItem('car-doctor-access-token')
            }
        })
        return () =>{
            return unsubscribe();
        }
    },[])

    const authInfo ={
        user,
        setUser,
        logInUser,
        signUpUser,
        loading,
        setLoading,
        signOutUser,
        googleSignInUser
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;