import React from 'react'
import { FaUserLarge } from "react-icons/fa6";
import author from "../../assets/Photos/mosarkar.png"
import { Link } from 'react-router-dom';
function Navbar() {
  return (
    <>
    <div className='flex justify-around h-20 w-full items-center text-center bg-orange-300 text-white text-2xl'>
        <div className='logo border-2 rounded'><img src={author} alt="" height={10} width={60} /></div>
        <div className='flex gap-4'>
           <Link to="/"><div className=' hover:bg-green-500 p-1 rounded-lg'>Home</div></Link> 
            <Link to="/abhijogpage"><div className=' hover:bg-green-500 p-1 rounded-lg'>ମୋ ଅଭିଜୋଗ</div></Link>
            <div></div>
        </div>
        <div className=' hover:bg-green-500 p-3 rounded-lg'>
        <Link to="/status"><FaUserLarge /></Link>
        </div>

    </div>
    </>
  )
}

export default Navbar