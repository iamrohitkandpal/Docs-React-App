// eslint-disable-next-line no-unused-vars
import React from 'react'

const Background = () => {
  return (
    <>
        <div className='w-full fixed z-[2] h-screen'>
            <div className="absolute top-[5%] w-full py-10 flex justify-center text-zinc-600 text-xl font-semibold">Documents</div>
            <h1 className='absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] text-[13vw] font-[550] text-zinc-900 leading-none tracking-tighter'>Docs.</h1>
        </div>
    </>
  )
}

export default Background