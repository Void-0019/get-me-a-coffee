"use client"
import React, {useState} from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import Link from 'next/link'

const Navbar = () => {
  const { data: session } = useSession();
  const [showdropdown, setShowdropdown] = useState(false)

  return (
    <nav className='bg-gray-900 text-white flex justify-between items-center px-4 md:h-16 flex-col md:flex-row'>
      <Link href={"/"} className="logo font-bold text-lg flex justify-center items-center">
        <img width={50} src="/coffee.gif" alt="" />
        <span>GetMeACoffee</span>
      </Link>

      {/* {session && (
          <div className="flex items-center gap-2 ml-6">
            <img
              src={session.user.image}
              alt="Profile"
              className="w-10 h-10 rounded-full"
            />
            <div>
              <p className="font-semibold">{session.user.name}</p>
              <p className="text-xs text-gray-300">
                {session.user.email}
              </p>
            </div>
          </div>
        )} */}

      <div className='relative'>
        {session && <>
          <button onClick={()=>setShowdropdown(!showdropdown)} onBlur={()=>{setTimeout(()=>{
          setShowdropdown(false)
          }, 300);}} id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="mx-4 rounded-lg inline-flex items-center justify-center text-white bg- box-border border border-transparent bg-linear-to-br from-purple-600 to-blue-500 hover:bg-linear-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5" type="button">
            Welcome {session.user.name}
            <svg className="w-4 h-4 ms-1.5 -me-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 9-7 7-7-7" /></svg>
          </button>

          <div id="dropdown" className={`z-10 ${showdropdown?"":"hidden"} absolute left-12 bg-neutral-700 border border-default-medium rounded-lg rounded-base shadow-lg w-44`}>
            <ul className="p-2 text-sm text-body font-medium" aria-labelledby="dropdownDefaultButton">
              <li>
                <Link href="/dashboard" className="inline-flex items-center w-full p-2 hover:bg-neutral-800 hover:text-heading rounded">Dashboard</Link>
              </li>
              <li>
                <Link href={`/${session.user.name}`} className="inline-flex items-center w-full p-2 hover:bg-neutral-800 hover:text-heading rounded">Your Page</Link>
              </li>
              <li>
                <Link href="#" className="inline-flex items-center w-full p-2 hover:bg-neutral-800 hover:text-heading rounded">Sign out</Link>
              </li>
            </ul>
          </div>

        </>}

        {session ? (<button onClick={() => signOut()} className="text-white cursor-pointer bg-red-600 hover:bg-red-700 font-medium rounded-lg text-sm px-4 py-2.5">
          Sign Out
        </button>) : (
          <Link href={"/login"}>
            <button type="button" className="text-white cursor-pointer bg-linear-to-br from-purple-600 to-blue-500 hover:bg-linear-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-4 py-2.5 text-center leading-5">Login</button>
          </Link>
        )}
      </div>
    </nav>
  )
}

export default Navbar
