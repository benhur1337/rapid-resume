"use client"

import { useState } from "react"

export function Menu(){
  return(
    <div className="flex flex-row fixed p-6 w-screen bg-black">
      <strong className="flex flex-row gap-4 justify-evenly items-center text-3xl tracking-tighter font-extrabold">Rapid Resume</strong>
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