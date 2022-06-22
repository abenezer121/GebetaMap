import React from "react";
import sourcetodistance from "./../assets/sourcetodistance.PNG"
import isodistance from "./../assets/isodistance.PNG"
const ServiceIntro = () => {
    return (
        <div className="w-full bg-yellow text-white pt-10 pb-10">
            <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="mx-10 w-[100%] md:w-[30%]">
                    <h1 className="font-bold text-4xl">Navigation</h1>
                    <h3 className="mt-2 text-gray-400 font-bold">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum debitis aspernatur quas at ad distinctio non earum sapiente fugit accusamus.</h3>
                    <button className=" mt-5 px-8 py-2 border border-white rounded-full text-sm text-white font-bold">Explore Navigation</button>
                </div>
                <div className="mt-5 mr-20">
                    <img src={sourcetodistance} className="rounded-md" alt="" />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 mt-5">
                <div className="mt-5 ml-10">
                    <img src={isodistance}  className="rounded-md" alt="" />
                </div>
                <div className="mx-10 w-[100%] md:w-[30%]">
                    <h1 className="font-bold text-4xl">IsoDistance</h1>
                    <h3 className="mt-2 text-gray-400 font-bold">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum debitis aspernatur quas at ad distinctio non earum sapiente fugit accusamus.</h3>
                    <button className=" mt-5 px-8 py-2 border border-white rounded-full text-sm text-white font-bold">Explore IsoDistance</button>
                </div>
                
            </div>

             <div className=' flex items-center'>
                <button className="  m-auto mt-5 px-8 py-2 border border-white-600 rounded-full text-sm text-white font-bold">Explore full solution</button>
            </div>
        </div>
    )
}

export default ServiceIntro