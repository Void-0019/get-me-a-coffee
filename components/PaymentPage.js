"use client"
import React, { useEffect, useState } from 'react'
import Script from 'next/script'
import { useSession } from 'next-auth/react'
import { fetchuser, fetchpayments, initiate } from '@/actions/useractions'

const PaymentPage = ({ username }) => {
    const { data: session } = useSession();
    const [currentUser, setcurrentUser] = useState({})
    const [payments, setPayments] = useState([])
    const [paymentform, setPaymentform] = useState({
        name: "",
        message: "",
        amount: "",
    })

    useEffect(() => {
        getData()
    }, [])

    const handleChange = (e) => {
        setPaymentform({ ...paymentform, [e.target.name]: e.target.value })
    }

    const getData = async () => {
        let u = await fetchuser(username)
        setcurrentUser(u)
        let dbpayments = await fetchpayments(username)
        setPayments(dbpayments)
    }


    const pay = async (amount) => {
        // get the order Id
        let a = await initiate(amount, username, paymentform)
        let orderId = a.id
        var options = {
            "key": currentUser.razorpayid, // Enter the Key ID generated from the Dashboard
            "amount": amount, // Amount is in currency subunits. 
            "currency": "INR",
            "name": "Get Me A Coffee", //your business name
            "description": "Test Transaction",
            "image": "https://example.com/your_logo",
            "order_id": orderId, // This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            "callback_url": `${process.env.NEXT_PUBLIC_URL}/api/razorpay`,
            "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
                "name": "Gaurav Kumar", //your customer's name
                "email": "gaurav.kumar@example.com",
                "contact": "+919876543210" //Provide the customer's phone number for better conversion rates 
            },
            "notes": {
                "address": "Razorpay Corporate Office"
            },
            "theme": {
                "color": "#3399cc"
            }
        }

        var rzp1 = new Razorpay(options);
        rzp1.open();

    }
    return (
        <>
            <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>


            <div className="relative">
                <div className="cover w-full relative">
                    <img className='h-130 w-full object-cover' src={currentUser.coverpic} alt="" />
                </div>

                <div className='absolute -bottom-20 left-1/2 -translate-x-1/2'>
                    <img className='rounded-full border-4 border-white' width={200} height={200} src={currentUser.profilepic} alt="" />
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
                            {payments.length === 0 && <li>No payments yet</li>}
                            {payments.map((p) => {
                                return (
                                <li key={p._id} className='my-2 flex gap-2 items-center'>
                                    <img width={35} src="/avatar.gif" alt="user avatar" />
                                    <span>{p.name} donated <span className='font-bold'>₹{p.amount/100}</span> with a message "{p.message}"</span>
                                </li>
                                )
                            })}
                        </ul>
                    </div>

                    <div className="makePayment w-1/2 bg-slate-900 rounded-lg text-white p-10">
                        <h2 className="text-2xl font-bold my-5">Make a Payment</h2>
                        <div className="flex gap-2 flex-col">
                            {/* input for name and message */}
                            <div className='flex flex-col gap-2'>
                                <input onChange={handleChange} value={paymentform.name} name='name' type="text" className='w-full p-3 rounded-lg bg-slate-800' placeholder='Enter Name' />
                                <input onChange={handleChange} value={paymentform.message} name='message' type="text" className='w-full p-3 rounded-lg bg-slate-800' placeholder='Enter Message' />
                            </div>
                            <input onChange={handleChange} value={paymentform.amount} name='amount' type="text" className='w-full p-3 rounded-lg bg-slate-800' placeholder='Enter Amount' />
                            <button onClick={()=>pay(Number.parseInt(paymentform.amount)*100)} type="button" disabled={paymentform.name.length<2 || paymentform.message.length<4 || paymentform.amount.length<1} className="text-white cursor-pointer bg-linear-to-br from-purple-600 to-blue-500 hover:bg-linear-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-4 py-2.5 text-center leading-5 disabled:opacity-50 disabled:cursor-not-allowed">Pay</button>
                        </div>
                        {/* Or choose from these amount */}
                        <div className="flex gap-2 mt-5">
                            <button className='bg-slate-800 p-3 rounded-lg' onClick={() => pay(1000)}>Pay ₹10</button>
                            <button className='bg-slate-800 p-3 rounded-lg' onClick={() => pay(2000)}>Pay ₹20</button>
                            <button className='bg-slate-800 p-3 rounded-lg' onClick={() => pay(3000)}>Pay ₹30</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PaymentPage
