import React from 'react'

import StarImg from '../assets/images/Star.png'
const Feed = (props) => {
  return (
    <>
    <div className='bg-[#373737] flex justify-center'>
        <div className='flex items-center lg:justify-center bg-[#808080] w-2/3 border-4 sm:border-8 border-[rgb(255,215,0)] rounded-[60px] relative py-5 text-white'>
            <div className={`image absolute ${props.allignment}`}>
                <img className={`border-4 sm:border-8 border-[rgb(255,215,0)] rounded-[50%] w-36 h-36 sm:w-44 sm:h-44 object-cover`} src={props.Img} alt="Client-Image" />
            </div>
            <div className={`w-full ${props.padding} ${props.allignTitle} `}>
                <h1 className={`font-Averia text-xl font-semibold ${props.allignTitle}`}>{props.title}</h1>
                <p className='font-Poppins text-[10px] sm:text-sm opacity-60'>{props.desc}</p>
                <div className="stars flex gap-1 sm:gap-2 items-center justify-center mt-1 sm:mt-3">
                    <img src={StarImg} className='w-[20px] sm:w-[30px]' alt="Star-Image" />
                    <img src={StarImg} className='w-[20px] sm:w-[30px]' alt="Star-Image" />
                    <img src={StarImg} className='w-[20px] sm:w-[30px]' alt="Star-Image" />
                    <img src={StarImg} className='w-[20px] sm:w-[30px]' alt="Star-Image" />
                    <img src={StarImg} className='w-[20px] sm:w-[30px]' alt="Star-Image" />
                </div>
                
            </div>
            
        </div>
        
    </div>
    <div className='block mx-auto'>{props.dots}</div>
    </>
  )
}

export default Feed