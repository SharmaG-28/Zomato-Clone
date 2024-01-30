import React, { useEffect, useState } from 'react'
import lens from '../images/lens.png'
import { auth } from '../firebase/setup'
import Avatar from 'react-avatar'
import user from '../images/user.png'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { Link, useLocation } from 'react-router-dom'
import locations from "../images/location.png"
import drop from "../images/drop.png"
import out from "../images/logout.png"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface cityProp {
    city?:any
    setSearch?:any
  }

const Navbar = (props:cityProp) => {

    const location = useLocation()

    const [authStore, setAuthStore] = useState<any>([])

    useEffect(()=>{
        onAuthStateChanged(auth,(user)=>{
          setAuthStore(user)
        })
    },[auth])

    const logout = async() =>{
        try{
            await signOut(auth)
            toast.success("Logged Out Successfully")
        }catch(err){
            console.error(err)
            toast.error("Something went wrong")
        }
    }

    return (
        <>
        <ToastContainer/>
        <div className='flex p-5'>
            <h1 className=' text-4xl font-extrabold italic ml-12'>Zomato</h1>
            <div className='ml-6 shadow-lg flex items-center border border-gray-300 w-7/12 rounded-lg p-3 h-12'>
                <img src={locations} className='h-5 w-5 ml-2'/>
                <input className="outline-none text-gray-900 text-sm rounded-lg  block w-40 p-2.5" placeholder={props?.city ? props?.city : location?.state?.city ? location?.state?.city : "Location"} required />
                <img src={drop} className='h-3 w-3 ml-5'/>
                <h1 className='ml-3 text-gray-400'>|</h1>
                <input onChange={(e)=> props.setSearch(e.target.value)} className="outline-none text-gray-900 text-sm rounded-lg  block w-96 p-2.5" placeholder="Search for restaurants" required />
            </div>
            <div className=' flex items-center'>
                {authStore?.photoURL ? <img src={authStore?.photoURL} className='w-12 h-12 ml-28 rounded-full'/>
                : authStore?.email ? <Avatar name={authStore?.displayName ?? authStore?.email} round={true} size='40' className='ml-10 mr-10'/>
                : ''}
                <h1 className=' ml-2'>{authStore?.displayName?.substring(0, authStore?.displayName.indexOf(" ")) ?? authStore?.email?.substring(0, authStore?.email.indexOf("@"))}</h1>
                {!auth.currentUser && <Link to="/login"><h1 className='ml-28 text-gray-600 text-lg cursor-pointer'>Log in</h1></Link>}
                {!auth.currentUser && <Link to="/signup"><h1 className='text-gray-600 text-lg ml-10 cursor-pointer'>Sign up</h1></Link>}
                {auth.currentUser && <div onClick={logout} className='flex items-center ml-6 cursor-pointer'>
                <img src={out} className=' w-auto h-5' />
                <h1 className='ml-1 font-semibold'>logout</h1>
                </div>}
            </div>
        </div>
        </>
    )
}

export default Navbar