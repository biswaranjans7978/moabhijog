import React from 'react'

function BannerImage() {
  return (
    <>
      <div className=' m-5'>
        <img className=' h-36 lg:ml-8 border-2 rounded  inset-0 object-cover transition-opacity duration-500 opacity-100 hover:opacity-50' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4AGTCLjmVutWSLP8gwqTAZqwEn2c5HSrnrw&s" alt="" />
        <img className=' h-36 ml-12 lg:ml-20 border-2 rounded  inset-0 object-cover transition-opacity duration-500 opacity-100 hover:opacity-50' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTozWOkRiu6-ekpsDiohuj9o2qKeqyVM1Yp9A&s" alt="" />
      </div>
    </>
  )
}

export default BannerImage