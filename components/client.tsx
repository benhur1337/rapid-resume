"use client"

import { useState } from "react"

import { auth, provider } from "@/firebase"
import { useAuthState } from "react-firebase-hooks/auth";
import { signInWithPopup, signOut } from "firebase/auth";



export function Menu(){
  
  const [user, loading] = useAuthState(auth);

  const login = () => {
    signInWithPopup(auth, provider);
  };

  const logout = () => {
    signOut(auth);
  };

  return(
    <div className="flex flex-row fixed justify-between items-center p-6 w-screen bg-black">
      <strong className="flex flex-row gap-4 justify-evenly items-center text-3xl tracking-tighter font-extrabold">Rapid Resume</strong>

      {
        user? <button onClick={logout} className="border bg-white text-black p-2 rounded">Sign Out</button> : <button onClick={login} className="border bg-white text-black p-2 rounded">Sign In</button>
      }
    </div>
  )
}

export function MenuInvis(){
  return(
    <div className="flex flex-row p-6 w-screen bg-black opacity-0 pointer-events-none">
      <strong className="flex flex-row gap-4 items-center text-3xl tracking-tighter font-extrabold">Rapid Resume</strong>
    </div>
  )
}