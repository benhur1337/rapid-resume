"use client"

import { useState } from "react"

import { auth } from '@/firebase'
import { useAuthState } from "react-firebase-hooks/auth"


export function Menu(){

  const [user] = useAuthState(auth)

  const profilePic = user?.photoURL

  return(
    <div className="flex flex-row fixed justify-between items-center p-6 w-screen bg-black">
      <strong className="flex flex-row gap-4 justify-evenly items-center text-3xl tracking-tighter font-extrabold">Rapid Resume</strong>
      {
        profilePic? <img className="rounded-full" src={profilePic?.toString()} height={30} width={30}/> : <></>
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