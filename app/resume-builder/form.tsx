"use client"
import { Suspense, useState, useEffect } from "react";

import { db, auth } from "@/firebase";
import { doc, onSnapshot } from "firebase/firestore";

import { useAuthState } from "react-firebase-hooks/auth";

export default function Builder(){

  const [user, loading, error] = useAuthState(auth)


  if(user){
    return(
      <div>
        {
          user.uid && <Form id={user.uid}/>
        }
        
      </div>
    )
  }

  if(loading){
    return(
      <div className="p-6">Loading...</div>
    )
  }

  return(
    <div className="p-6"> You are not Signed In</div>
  )
}

function Form(props:{id:any}){

  return(
    <div className="p-6">
      {props.id}
    </div>
  )
}

