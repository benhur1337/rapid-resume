"use client";

import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

import { useAuthState } from 'react-firebase-hooks/auth'
import { useCollectionData } from 'react-firebase-hooks/firestore' 
import { getAuth } from 'firebase/auth';
import { useState } from 'react';

firebase.initializeApp({
  apiKey: "AIzaSyCXm7mjj8iQgqSHJ1pnGkGZKSQuaWk0vXI",
  authDomain: "rapid-resume-392bd.firebaseapp.com",
  projectId: "rapid-resume-392bd",
  storageBucket: "rapid-resume-392bd.appspot.com",
  messagingSenderId: "222109125790",
  appId: "1:222109125790:web:fa57d5446ee648f1c27f8f",
  measurementId: "G-SSJB5Q5542"
})

const auth = firebase.auth()
const firestore = firebase.firestore()

export default function Page() {

  const [ user ] = useAuthState(auth)

  const styles = {
    input: "border bg-transparent p-2 rounded",
    heading: "text-2xl tracking-tighter font-bold",
    title: "text-5xl tracking-tighter font-bold",
    button:
      "border bg-transparent rounded p-2 hover:bg-white hover:text-black duration-500",
    textArea: "border bg-transparent rounded p-2 min-h-[250px]",
  };

  return (

    user? <div className="overflow-x-hidden">
      <SignOut/>
      <Resumes/>
      <Section title="Personal Information">
        <strong className={styles.heading}>Full Name:</strong>
        <input className={styles.input} type="text" placeholder="First Name" />
        <input className={styles.input} type="text" placeholder="Middle Name" />
        <input className={styles.input} type="text" placeholder="Last Name" />
        <strong className={styles.heading}>Contact Information:</strong>
        <input
          className={styles.input}
          type="text"
          placeholder="Mobile Number"
        />
        <input className={styles.input} type="text" placeholder="Email" />
        <input className={styles.input} type="text" placeholder="Location" />
        <button className={styles.button}>Add Social Link</button>
      </Section>

      <Section title="Professional Summary">
        <textarea className={styles.textArea}></textarea>
      </Section>

      <Section title="Skills">
        <strong className={styles.heading}>Hard Skills:</strong>
        <input className={styles.input} type="text" placeholder="Skill 1" />
        <button className={styles.button}>Add Hard Skill</button>
        <strong className={styles.heading}>Soft Skills:</strong>
        <input className={styles.input} type="text" placeholder="Skill 1" />
        <button className={styles.button}>Add Soft Skill</button>
      </Section>

      <Section title="Professional Experience">
        <input className={styles.input} type="text" placeholder="Job Title" />
        <input className={styles.input} type="text" placeholder="Company" />
        <input className={styles.input} type="text" placeholder="Location" />
        <div className="flex flex-row gap-4">
          <div><span className="font-bold pr-4">Start Date: </span> <input className={styles.input} type="date"/></div>
          <button className={styles.button}>Insert End Date</button>
        </div>
        <input className={styles.input} type="text" placeholder="Key Responsibilities" />
      </Section>

      <Section title="Education">
        <input className={styles.input} type="text" placeholder="Degree" />
        <input className={styles.input} type="text" placeholder="Major/Field of Study" />
        <input className={styles.input} type="text" placeholder="School" />
        <input className={styles.input} type="text" placeholder="Location" />
        <input className={styles.input} type="date" placeholder="Graduation Date" />
      </Section>

      <Section title="Certification/Licenses">
        <input className={styles.input} type="text" placeholder="Certification Name" />
        <button className={styles.button}>Add Certification</button>
      </Section>

      <Section title="Projects">
        <input className={styles.input} type="text" placeholder="Project Name" />
        <input className={styles.input} type="text" placeholder="Description" />
        <input className={styles.input} type="text" placeholder="Role/Contributions" />
        <input className={styles.input} type="text" placeholder="Technologies/Tools Used" />
      </Section>

      <Section title="Awards/Honors">
        <input className={styles.input} type="text" placeholder="Recognition Name" />
        <input className={styles.input} type="text" placeholder="Description" />
        <input className={styles.input} type="date" placeholder="Date" />
      </Section>
    </div> : <div className='p-6'>
      <SignIn/>
    </div>
  );
}

function SignIn(){
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider()
    auth.signInWithPopup(provider)

  }

  return(
    <button className="border bg-transparent rounded p-2 hover:bg-white hover:text-black duration-500" onClick={signInWithGoogle}>Sign In With Google</button>
  )
}

function SignOut(){
  return auth.currentUser && (
    <button className="border absolute top-0 right-0 m-6 bg-transparent rounded p-2 hover:bg-white hover:text-black duration-500" onClick={() => auth.signOut}>Sign Out</button>
  )
}

function Section({children, title}) {
  const styles = {
    title: "text-5xl tracking-tighter font-bold",
  };

  return (
    <div className="flex flex-col gap-4 p-6">
      <strong className={styles.title}>{title}</strong>
      {children}
    </div>
  );
}


function Resumes(){
  const resumeRef = firestore.collection('resumes')
  const query = resumeRef.orderBy('createdAt')

  const resumes = useCollectionData(query, {idField: 'id'})
  console.log(resumes)

  // 
  return(
    <div>
      {resumes && resumes.map((resume, key) => <Resume key={key} data={resume}/>)}
    </div>
  )
  
}

function Resume({data}){

  console.log(data)
  return(
    <div>{}</div>
  )

}