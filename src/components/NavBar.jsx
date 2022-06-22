import React, {useState} from "react"
import { SearchIcon , MenuIcon, XIcon , ArrowsExpandIcon } from "@heroicons/react/outline";

const NavBar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav)
    return (
        <div className="w-full h-[80px]">
                <div className="flex justify-between items-center  h-full  text-white">
                    <p className="text-3xl font-bold mr-4 sm:text-4xl ml-10">Gebeta Map</p>
                    <div className="flex">
                        <ul className=" hidden lg:flex items-center space-x-4">
                            <li>Products</li>
                            <li>Solutions</li>
                            <li>Developers</li>
                            <li>Pricing</li>
                        </ul>
                        <div className="flex pr-4 mx-3 items-center">
                            <button className="border-none bg-transparent text-black mr-4 text-white text-sm font-bold">Log in</button>
                            <button className="px-2 py-1 border border-blue-600 bg-blue-600 rounded-full text-sm text-white font-bold">Sign Up</button>
                            <div onClick={handleClick} className='mx-4 lg:hidden'>
                                {!nav ? <MenuIcon className="w-5" /> : <XIcon className="w-5" />}
                            </div>
                         </div> 
                    </div>
            </div>
           
            {<div className="w-full">
                    <ul className={!nav ? 'hidden' : "  w-[80%] m-auto rounded overflow-hidden shadow-lg bg-white px-5 py-5"}>
                
                            <li className="text-xl text-black-500 py-3 border-b-2 border-black-500 font-bold">Products</li>
                            <li className="text-xl text-black-500 py-3 border-b-2 border-black-500 font-bold">Solutions</li>
                            <li className="text-xl text-black-500 py-3 border-b-2 border-black-500 font-bold">Developers</li>
                            <li className="text-xl text-black-500 py-3 border-b-2 border-black-500 font-bold">Pricing</li>
                            <li className="text-xl text-black-500 py-3  font-bold">About</li>
                        
                    </ul>
            </div>
                }
          
               
           
             
                
        </div>
    )
}

export default NavBar