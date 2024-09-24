"use client";

import { useState } from "react";

import { db, auth } from "@/firebase";
import { doc, onSnapshot, query, where, collection } from "firebase/firestore";

import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

import { useAuthState } from "react-firebase-hooks/auth";

const provider = new GoogleAuthProvider();

export default function Builder() {
  const [user] = useAuthState(auth);

  const login = () => {
    signInWithPopup(auth, provider);
  };

  const logout = () => {
    signOut(auth);
  };

  if (user) {
    return (
      <div className="flex flex-col gap-4">
        Signed in as {user.uid} 
        <button onClick={logout}>Sign Out</button>
        <Resume user={user}/>
      </div>
    );
  }

  return <button onClick={login}>Sign In</button>;
}

function Form() {

  return <div></div>;
}

function Resume(props:{user:any}){

    if(props.user){
        const [currentResume, setCurrentResume] = useState([])
        const q = query(collection(db, "resumes"), where("email", "==", props.user.email));

        const resumes = onSnapshot(q, (querySnapshot) => {
            const resumes: any = [];
            querySnapshot.forEach((doc) => {
            resumes.push(doc.data());
            });
            setCurrentResume(resumes)
        });

        return(
            <div>
                {
                    currentResume.map((item:any,key:number) => (
                        <div key={key}>{item.name}</div>
                    ))
                }
            </div>
        )

    }

    return(
        <></>
    )
}