"use client"
import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import Link from 'next/link'

const Navbar = () => {
  const { data: session } = useSession();

  return (
    <nav className='bg-gray-900 text-white flex justify-between items-center px-4 h-16'>
      <div className="logo font-bold text-lg flex justify-center items-center">
        <img width={50} src="/coffee.gif" alt="" />
        <span>GetMeACoffee</span></div>
        {/* <ul className="flex justify-center gap-4">
          <li>Home</li>
          <li>About</li>
          <li>Projects</li>
          <li>Sign Up</li>
          <li>Login</li>
        </ul> */}

        {session && (
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
        )}

        <div>
          {session? (<button onClick={()=> signOut()} className="text-white cursor-pointer bg-red-600 hover:bg-red-700 font-medium rounded-lg text-sm px-4 py-2.5">
          Sign Out
          </button>):(
          <Link href={"/login"}>
          <button type="button" className="text-white cursor-pointer bg-linear-to-br from-purple-600 to-blue-500 hover:bg-linear-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-4 py-2.5 text-center leading-5">Login</button>
          </Link>
          )}
        </div>
    </nav>
  ) 
}

export default Navbar
