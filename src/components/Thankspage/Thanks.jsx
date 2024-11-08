import React from 'react'
import { Link } from 'react-router-dom'

function Thanks() {
  return (
   <>
   <div className=' bg-orange-500 h-96 text-center text-zinc-50 pt-12'>
    <h1 className=' pt-4'>ଆପଣଙ୍କ ଅଭିଯୋଗର ସଙ୍ଖ୍ୟା : </h1>
    <h2 className=' pt-4'>ଆପଣଙ୍କ ଅଭିଯୋଗର ସମାଧାନ ତୁରନ୍ତ କରିବା ପାଇଁଁ ଓଡ଼ିଶା ସରକାର ଯଥା ସମ୍ଭବ ପ୍ରଚେଷ୍ଟା କରିବେ</h2>
   <Link to="/"> <h3 className=' pt-10'>ଧନ୍ୟବାଦ</h3></Link>
   </div>
   </>
  )
}

export default Thanks