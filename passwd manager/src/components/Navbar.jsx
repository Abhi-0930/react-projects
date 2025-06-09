import React from 'react'

const Navbar = () => {
    return (
        <nav className='bg-purple-300 text-white '>
            <div className="mycontainer flex justify-between items-center px-4 py-5 h-14">
                <div className='logo font-bold text-white text-2xl'>
                <h1 className='text-3xl font-bold text-center'>
                    <span className='text-green-700'>&lt;</span>
                    <span className='text-black'>Password</span>
                    <span className='text-green-700'> Manager &gt;</span>
                </h1>
                </div>
               <button className='text-white bg-green-700 my-5 mx-2 rounded-full flex justify-between items-center'>
                <img className='invert w-10 p-1' src="/images/git.svg" alt="github logo" />
                <span className='font-bold px-2'>Github</span>
               </button>
                
            </div>
        </nav>
    )
}

export default Navbar
