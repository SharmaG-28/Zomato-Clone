import React, { useEffect, useState } from 'react'
import welcome from "../images/welcome.jpg"
import { Link } from 'react-router-dom'
import arrow from "../images/right-arrow.png"
import { auth } from '../firebase/setup'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import out from "../images/logout.png"
import Avatar from 'react-avatar'

const Welcome = () => {

  const [rest, setRest] = useState([])
  const [authStore, setAuthStore] = useState<any>([])

  const getRestaurants = async() =>{
    try{
      await fetch("https://api.spoonacular.com/food/restaurants/search?apiKey=3ebd66013394402e85ff4dabb211dc1c")
      .then(res => res.json())
      .then(json => setRest(json.restaurants))
    }
    catch(err){
      console.error(err)
    }
  }

  const logout = async() =>{
    try{
        await signOut(auth)
        toast.success("Logged Out Successfully")
    }catch(err){
        console.error(err)
        toast.error("Something went wrong")
    }
  }

   
  useEffect(() => {
    getRestaurants()
  },[])

  useEffect(()=>{
    onAuthStateChanged(auth,(user)=>{
      setAuthStore(user)
    })
  },[auth])

  return (
    <>
      <div style={{backgroundImage:`linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.7)), url(${welcome})`,backgroundRepeat:"no-repeat",backgroundSize:"cover"}} className='h-screen text-white text-center'>
        <div className='text-white text-center text-xl ml-80 pt-5'>
          {!auth.currentUser && <Link to='/login'><button className='ml-96'>Log in</button></Link>}
          {!auth.currentUser && <Link to='/signup'><button className='ml-9'>Sign up</button></Link>}
          <div className=' flex items-center ml-96'>
            {authStore?.photoURL 
              ? <div className='flex items-center ml-80'>
                  <img src={authStore?.photoURL} className='w-12 h-12 rounded-full'/>
                  <h1 className=' ml-2'>{authStore?.displayName?.substring(0, authStore?.displayName.indexOf(" ")) ?? authStore?.email?.substring(0, authStore?.email.indexOf("@"))}</h1>
                </div>
              : authStore?.email 
                ? <div className='flex items-center'>
                    <Avatar name={authStore?.displayName ?? authStore?.email} round={true} size='40' className='ml-36 mr-10'/> 
                    <h1 className=' ml-28'>{authStore?.displayName?.substring(0, authStore?.displayName.indexOf(" ")) ?? authStore?.email?.substring(0, authStore?.email.indexOf("@"))}</h1>
                  </div>
                : ''}

            {auth.currentUser && <button onClick={logout} className=' ml-6 pl-2 pr-2 pb-1 rounded-lg border border-spacing-1'>Log out</button>}
          </div>
        </div>
        <h1 className=' text-7xl italic font-extrabold mt-40'>Zomato clone</h1>
        <h1 className='text-4xl mt-7'>Find the best restaurants, cafés and <br/>bars around the World</h1>
      </div>
      <div className=' text-center'>
        <h1 className='text-4xl mt-10'>Popular locations around the World</h1>
        <h1 className='text-2xl text-gray-600 mt-10'>From swanky upscale restaurants to the cosiest hidden gems serving the most incredible food,<br/> Zomato Clone covers it all. Explore menus, and millions of restaurant photos and reviews from users <br /> just like you, to find your next great meal.</h1>
      </div>
      <div className=' grid grid-cols-3 pl-16 pt-10'>
        {rest?.map((data:any) => {
          return <>
            <Link to="/main" state={{city:data.address?.city}}>
              <div className=' flex items-center border border-spacing-1 shadow-lg w-80 p-5 rounded-lg mt-10'>
                <h1 className='text-xl w-64'>{data.address?.city}</h1>
                <img src={arrow} className='w-2 h-2 ml-5' />
              </div>
            </Link>
          </>
        })}
      </div>
    </>
  )
}

export default Welcome