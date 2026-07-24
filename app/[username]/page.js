import React from 'react'

const Username = async ({ params }) => {
  const { username } = await params
  return (
    <>
      <div className="relative">
        <div className="cover w-full relative">
          <img className='h-130 w-full object-cover' src="/cover.png" alt="" />
        </div>

        <div className='absolute -bottom-20 left-1/2 -translate-x-1/2'>
          <img className='rounded-full border-4 border-white' width={200} height={200} src="/profile.png" alt="" />
        </div>
      </div>

      <div className="info text-white flex justify-center items-center flex-col my-25">
        <div className='font-bold text-2xl'>
          @{username}
        </div>
        <div className='text-slate-400'>
          Full Stack Developer
        </div>
        <div className='text-slate-400'>
          5,000 members 80 posts $15,500/release
        </div>

        <div className="payment flex gap-3 w-[80%] mt-10">
          <div className="supporters w-1/2 bg-slate-900 rounded-lg text-white p-10">
          {/* Show list of all the supporters as a leaderboard. */}
          <h2 className='text-2xl font-bold mb-5'>Supporters</h2>
          <ul className='mx-5'>
            <li className='my-2'>Shubham donated $30 with a message ""</li>
            <li className='my-2'>Ramesh donated $40 with a message ""</li>
            <li className='my-2'>Dhruv donated $90 with a message ""</li>
            <li className='my-2'>Shubham donated $30 with a message ""</li>
            <li className='my-2'>Ramesh donated $40 with a message ""</li>
            <li className='my-2'>Dhruv donated $90 with a message ""</li>
            <li className='my-2'>Shubham donated $30 with a message ""</li>
            <li className='my-2'>Ramesh donated $40 with a message ""</li>
            <li className='my-2'>Dhruv donated $90 with a message ""</li>
          </ul>
          </div>

          <div className="makePayment w-1/2 bg-slate-900 rounded-lg text-white p-10">
            <h2 className="text-2xl font-bold my-5">Make a Payment</h2>
            <div className="flex gap-2">
              <input type="text" className='w-full p-3 rounded-lg bg-slate-800' placeholder='Enter Amount' />
              <button className='bg-slate-800 p-3 rounded-lg'>Pay</button>
            </div>
            {/* Or choose from these amount */}
            <div className="flex gap-2 mt-5">
              <button className='bg-slate-800 p-3 rounded-lg'>Pay $10</button>
              <button className='bg-slate-800 p-3 rounded-lg'>Pay $20</button>
              <button className='bg-slate-800 p-3 rounded-lg'>Pay $30</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Username
