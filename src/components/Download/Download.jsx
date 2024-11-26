import React from 'react'
// import app from "../../../assets/download/app.png";
import googleplay from '../../../public/assets/download/googleplay.png'
import app from '../../../public/assets/download/app.png'



function Download() {
  return (
    <div className='bg-green-400'>
      <div className="flex flex-col   justify-center items-center pt-28 pb-28">
        <h2 className=' text-3xl font-semibold p-4'>Get Unine App On Google Play or App Store</h2>
        <p className='text-center mt-3 text-gray-800'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora,  </p>
        <p className='text-center  text-gray-800'>eius nisi dignissimos odio sint enim assumenda labore temporibus? Rem,</p>
        <div className="flex gap-4 justify-center items-center  p-6">
            <div className="max-w-[100px]">
              <a href="">
                <img src={googleplay} alt="logo" />
                </a>
            </div>
            <div className="max-w-[100px]">
              <a href="">
              <img src={app} alt="logo" />
              </a>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Download
