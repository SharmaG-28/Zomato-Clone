import { signInWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../firebase/setup'
import food from "../images/food.jpg"
import mail from "../images/mail.png"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EmailLogin = () => {

    const navigate = useNavigate()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    
    const emailLogin = async() =>{
        try{
            const data = await signInWithEmailAndPassword(auth, email, password)
            auth.currentUser?.emailVerified ? toast.success("LoggedIn successfully") : toast.error("Please verify email")
            setTimeout(()=>{
                auth.currentUser?.emailVerified && navigate("/")
            },1000)
        }
        catch(err:any){
            console.error(err);
            let errorMessage = "An error occurred. Please try again.";

            if (err.code === "auth/invalid-credential") {
                errorMessage = "Invalid email or password.";
            } else if (err.code === "auth/wrong-password") {
                errorMessage = "Invalid email or password.";
            } else if (err.code === "auth/too-many-requests") {
                errorMessage = "Too many unsuccessful login attempts. Please try again later.";
            }

            toast.error(errorMessage);
        }
    }

    return (
        <>
        <ToastContainer/>
        <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <div className="fixed inset-0 bg-black bg-opacity-85 transition-opacity" style={{backgroundImage:`linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,7)), url(${food})`}}></div>

            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-auto sm:max-w-lg">
                        <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                            <div className="sm:flex sm:items-start ">
                                <div className="mt-3 text-center sm:ml-4 sm:mr-4 sm:mt-0 sm:text-left">
                                    <div className=' flex'>
                                        <h3 className="text-3xl font-semibold leading-6 text-gray-600" id="modal-title">Login with Email</h3>
                                        <Link to='/'><h1 className=' ml-36 text-xl font-semibold cursor-pointer'>X</h1></Link>
                                    </div>

                                    <img src={mail} className='w-24 h-24 mt-14 ml-36'/>

                                    <input onChange={(e)=> setEmail(e.target.value)} className="mt-5 outline-none border border-gray-300 text-gray-900 text-lg rounded-lg  block w-96 p-2.5" placeholder="  Email" required/>

                                    <input type='password' onChange={(e)=> setPassword(e.target.value)} className="mt-5 outline-none border border-gray-300 text-gray-900 text-lg rounded-lg  block w-full p-2.5" placeholder="  Password" required/>

                                    <button onClick={emailLogin} className="mt-5 bg-rose-500 w-full h-12 tetx-2xl text-white py-2 px-4 rounded">
                                        Login with Email
                                    </button>

                                    <hr className='mt-4'/>
                                    <h1 className='text-base mt-5 ml-3'><Link to='/login'><span className='text-red-500 '>Login</span></Link> with other options.</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default EmailLogin