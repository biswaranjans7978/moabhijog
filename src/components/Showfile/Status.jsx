import React from 'react'

function Status() {
  return (
    <>
    <div className=' bg-red-200 h-52 text-center'>
        <div className=' pt-4'>
            <h1>ମୋବାଇଲ୍ ନମ୍ବର୍: <input type="text" /></h1>
            <h1 className=' p-4'>କିମ୍ବା</h1>
            <h1>ଅଭିଯୋଗର ସଙ୍ଖ୍ୟା: <input type="text" /></h1>
            <button className=' bg-yellow-400 p-1 mt-2 rounded-md hover:bg-blue-600 '>Submit</button>
            <div className=' pt-4 '><p>ଆପଣଙ୍କ ଅଭିଯୋଗ ଏବେ ପଞ୍ଚାୟତ ଅଫିସ୍ ସ୍ତରରେ ଅଛି...</p></div>
        </div>
      
    </div>
    </>
  )
}

export default Status