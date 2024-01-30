import React from 'react'
import biriyani from "../images/biriyani.jpg"
import sandwich from "../images/sandwich.jpg"
import cake from "../images/cake.jpg"
import burger from "../images/burger.jpg"
import pizza from "../images/pizza.jpg"
import chicken from "../images/chicken.jpg"


const Menubar = () => {
  return (
    <div className='bg-zinc-100 p-10'>
        <h1 className='text-3xl'>Inspiration for your first order</h1>
        <div className='flex mt-5 '>
            <div className='ml-8'>
                <img src={pizza} className='rounded-full w-40 h-40'/>
                <h1 className='ml-14 mt-2 text-gray-600 text-lg font-semibold'>Pizza</h1>
            </div>
            <div className='ml-12'>
                <img src={burger} className='rounded-full w-40 h-40'/>
                <h1 className='ml-12 mt-2 text-gray-600 text-lg font-semibold'>Burger</h1>
            </div>
            <div className='ml-12'>
                <img src={cake} className='rounded-full w-40 h-40'/>
                <h1 className='ml-14 mt-2 text-gray-600 text-lg font-semibold'>Cake</h1>
            </div>
            <div className='ml-12'>
                <img src={biriyani} className='rounded-full w-40 h-40'/>
                <h1 className='ml-12 mt-2 text-gray-600 text-lg font-semibold'>Biriyani</h1>
            </div>
            <div className='ml-12'>
                <img src={sandwich} className='rounded-full w-40 h-40'/>
                <h1 className='ml-12 mt-2 text-gray-600 text-lg font-semibold'>Sandwich</h1>
            </div>
            <div className='ml-12'>
                <img src={chicken} className='rounded-full w-40 h-40'/>
                <h1 className='ml-12 mt-2 text-gray-600 text-lg font-semibold'>Chicken</h1>
            </div>
        </div>
    </div>
  )
}

export default Menubar