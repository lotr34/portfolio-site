import React from 'react'
import travelAdvisor from '../assets/travelAdvisor.png'

const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline vorder-b-4 text-gray-300 border-pink-600'>work</p>
                <p className='pb-6'>""Check out some of my recent work</p>
            </div>

            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                {/* Works */}
                <div style={{backgroundImage: `url(${travelAdvisor})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            React Js App
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='https://lotr34.github.io/travel-advisor/' target='_blank'>
                                <button className='text-center rounded-lg px-4 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href='https://github.com/lotr34/travel-advisor' target='_blank'>
                                <button className='text-center rounded-lg px-4 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        

    </div>
  )
}

export default Work