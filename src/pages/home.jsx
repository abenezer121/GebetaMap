import React from 'react'

const Home = () => {
    return (
        <div className='w-full text-white mt-20'>
            <div className='flex  w-[80%] md:w-[60%] lg:w-[45%] m-auto'>
                <div className='m-auto'>
                    <h1 className='font-bold text-7xl'>Maps and location for developers</h1>
                    <h3 className='mt-5 text-2xl text-gray-400'>Precise location data and powerful developer tools to change the way we navigate the world.</h3>
                    <button className=" mt-5 px-4 py-2 border border-blue-600 bg-blue-600 rounded-full text-sm text-white font-bold">Start routing</button>
                </div>
                
            </div>
        </div>
    )
}

export default Home