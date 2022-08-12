import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600'>About</p>
                </div>
            </div>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Education </p>
                </div>
                <div>
                    <p>
                        Yeditepe University <small className='text text-[#ac4c4c]'>2014-2019</small>
                    </p>
                    <ul className='list-disc pl-10'>
                        <li className='pl-0'>
                        In 2019 summer, i completed my whole lecture except thesis and compulsory internship. 
                        After that because of the economic conditions i had to have dropped the college and kept 
                        going to improve myself on software technologies.
                        </li>
                    </ul>
                </div>
            </div>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8 mt-8 overflow-auto scrollbar-hide'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Experiences </p>
                </div>
                <div>
                    <p>
                        Kontrolmatik Technologies <small className='text text-[#ac4c4c]'>2021 Dec - Present</small>
                    </p>
                    <ul className='list-disc pl-10'>
                        <li className='pl-0'>
                            Coding web platforms which are inform the clients about collected datas by showing them as a charts,
                             graphs, tables etc.. and publishing them on a Linux based operating systems with Nginx web server
                        </li>
                        <li className='pl-0'>
                        	ApexCharts, ChartJs and GoogleCharts were used for charts, GoogleMaps, OpenstreetMap and MapBox were 
                            used for maps on content
                        </li>
                        <li className='pl-0'>
                        	Designed dynamic and browser compatible pages using HTML, CSS, jQuery, and Javascript.
                        </li>
                        <li className='pl-0'>
                        	Built single page applications (SPA), responsive web design, UI using HTML5 grid layouts, CSS3 media 
                            queries where its an expression and can be used to either true or false.
                        </li>
                        <li className='pl-0'>
                        	Coding dashboards for users with live data flow. Benefit from web socket by using it switching protocol.
                        </li>
                        <li className='pl-0'>
                        	Using Python's Django for the backend of the web platforms
                        </li>
                        <li className='pl-0'>
                        	Getting the datas from database then splitting, parsing or manipulating it to make them meaningfull, and 
                            rendering the relevant page with the response of necessary functions, routings or calculations.
                        </li>
                    </ul>
                    <p className='mt-8'>
                        Akçalı Enerji <small className='text text-[#ac4c4c]'>2019 Nov - 2020 Feb</small>
                    </p>
                    <ul className='list-disc pl-10'>
                        <li className='pl-0'>
                        	It was a remote freelance job where we drew the projects of the buildings and determined the energy classes of 
                            them. I was a Project member who drawing the buildings' projects in a Autocad-like drawing application and the 
                            application can calculate the energy classes.
                        </li>
                    </ul>
                    <p className='mt-8'>
                        Ryan's Grill Buffet&Bakery <small className='text text-[#ac4c4c]'>2016 Summer</small>
                    </p>
                    <ul className='list-disc pl-10'>
                        <li className='pl-0'>
                        	It was a work and travel program. While i was working as a waiter in a restaurant, i got chance to improve my 
                            english skills and earned some money at the same time. It was a fun work experience
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About