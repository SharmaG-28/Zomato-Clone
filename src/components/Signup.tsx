import React, { useState } from 'react'
import search from "../images/search.png"
import food from "../images/food.jpg"
import { createUserWithEmailAndPassword, onAuthStateChanged, sendEmailVerification, signInWithPopup } from 'firebase/auth'
import { auth, googleProvider } from '../firebase/setup'
import { Link } from 'react-router-dom'

const Signup = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const googleSignin = async() =>{
        try{
            await signInWithPopup(auth, googleProvider)
        }catch(err){
            console.error(err)
        }
    }

    const emailSignup = async() =>{
        try{
            await createUserWithEmailAndPassword(auth, email, password)
            onAuthStateChanged(auth,async(user:any)=>{
                await sendEmailVerification(user)
            })
        }catch(err){
            console.error(err)
        }
    }

    return (
        <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <div className="fixed inset-0 bg-black bg-opacity-85 transition-opacity" style={{backgroundImage:`linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,7)), url(${food})`}}></div>

            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-auto sm:max-w-lg">
                        <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                            <div className="sm:flex sm:items-start ">
                                <div className="mt-3 text-center sm:ml-4 sm:mr-4 sm:mt-0 sm:text-left">
                                    <div className=' flex'>
                                        <h3 className="text-3xl font-semibold leading-6 text-gray-600" id="modal-title">Sign up</h3>
                                        <Link to='/'><h1 className=' ml-64 text-xl font-semibold cursor-pointer'>X</h1></Link>
                                    </div>

                                    
                                    <input onChange={(e)=> setEmail(e.target.value)} className="mt-12 outline-none border border-gray-300 text-gray-900 text-lg rounded-lg  block w-96 p-2.5" placeholder="  Email" required/>

                                    <input type='password' onChange={(e)=> setPassword(e.target.value)} className="mt-5 outline-none border border-gray-300 text-gray-900 text-lg rounded-lg  block w-full p-2.5" placeholder="  Password" required/>

                                    <button onClick={emailSignup} className="mt-5 bg-rose-500 w-full h-12 tetx-2xl text-white py-2 px-4 rounded">
                                        Create account
                                    </button>

                                    <h1 className='mt-3 text-center '>or</h1>
                                    <div onClick={googleSignin} className=' cursor-pointer mt-3 flex items-center text-center border border-spacing-1 border-gray-600 rounded-lg p-3'>
                                        <img src={search} className='w-7 h-7 ml-12'/>
                                        <button className='ml-5 text-gray-500 text-lg'>Continue with Google</button>
                                    </div>
                                    <hr className='mt-4'/>
                                    <h1 className='text-base mt-5'>Already have an account? <Link to='/login'><span className='text-red-500'>Login</span></Link></h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup