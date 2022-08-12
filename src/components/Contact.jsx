import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center p-4 pt-8'>
        <form method='POST' action="https://getform.io/f/92f38e5d-eccb-478f-94f2-d8acfc0cea62" className='flex flex-col max-w-[600px] w-full pt-16'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-pink-600 text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'>// Submit the form bellow or shoot me an email - halimdalgin@hotmail.com</p>
            </div>
            <input className='bg-[#ccd6f6] p-2' type='text' placeholder='Name' name='name' />
            <input className='bg-[#ccd6f6] my-4' type='text' placeholder='Email' name='email' />
            <textarea className='bg-[#ccd6f6] p-2' rows='10' placeholder='Message' name='message'></textarea>
            <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Submit</button>
        </form>
    </div>
  )
}

export default Contact