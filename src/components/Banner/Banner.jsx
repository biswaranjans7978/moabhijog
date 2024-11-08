import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';
import BannerImage from '../BannerImage/BannerImage';

function Banner() {
  return (
    <>
    <div className='fullbanner h-96'>
       <img className=" h-72 lg:h-fit w-fit  " src="https://assets.futuregenerali.in/1440x500/government-health-insurance-schemes-in-india.webp" alt=""  />
    </div>
   <div className=' absolute top-20'>
   <BannerImage />
   </div>
   <Link to="/abhijogpage"><h3 className=" hover:bg-green-700 hover:text-white p-2 pr-10 bg-gray-200 border rounded absolute pt-6 lg:pt-4 text-xl top-96 left-10 lg:bg-slate-50 text-l lg:top-96 lg:m-8 lg:left-20">ଆପଣଙ୍କ ଅଭିଯୋଗ ଦାଖଲ କରନ୍ତୁ <FaArrowRight className=' absolute bottom-3 left-64'/></h3></Link>
    </>
  )
}

export default Banner