import React from 'react';

export default function Error ({ message }){

  return (
    <>
      <div className='w-full justify-center items-center'>
        <h1 className='font-bold text-2xl text-white'>
          {message}
        </h1>

      </div>
    </> 
  )
}
