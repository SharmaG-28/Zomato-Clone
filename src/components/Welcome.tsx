import React from 'react'
import welcome from "../images/welcome.jpg"
import { Link } from 'react-router-dom'

const Welcome = () => {
  return (
    <div style={{backgroundImage:`linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.7)), url(${welcome})`,backgroundRepeat:"no-repeat",backgroundSize:"cover"}} className='h-screen text-white text-center'>
        <div className='text-white text-center text-xl ml-80 pt-5'>
            <Link to='/login'><button className='ml-96'>Log in</button></Link>
            <Link to='/signup'><button className='ml-9'>Sign up</button></Link>
        </div>
        <h1 className=' text-7xl italic font-extrabold mt-40'>Zomato clone</h1>
        <h1 className='text-4xl mt-7'>Find the best restaurants, cafés and <br/>bars around the World</h1>
    </div>
  )
}

export default Welcome