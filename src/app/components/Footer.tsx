import Image from 'next/image'
import React from 'react'

const Footer = ()=> {
  return (
    <div className='w-full min-h-28 bg-black  p-12'>
        <div className='flex flex-col gap-y-2 items-start justify-center w-fit'>
             <Image
                      className="object-contain rounded"
                      alt="icon"
                      src={"/Thooba.png"}
                      height={40}
                      width={80}
                    />
           <div className=''>
             <p className='text-gray-500'>Copyrights @ThoobaVaali. All rights reserved.</p>
            <p className='text-gray-500'>thoobalvaali@gmail.com</p>
            <p className='text-gray-500'>+91 7898378118</p>
           </div>

        </div>
    </div>
  )
}

export default Footer