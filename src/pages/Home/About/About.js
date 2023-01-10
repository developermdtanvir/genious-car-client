import React from 'react'
import person2 from './../../../assets/images/about_us/parts.jpg'
import person from './../../../assets/images/about_us/person.jpg'
export const About = () => {
    return (
        <div className=' flex space-x-40'>
            <div className='w-1/2 py-20 relative'>
                <img className=' rounded-md' src={person} alt="" />
                <img className=' h-60 absolute left-2/4 top-2/4 border-solid bg-white p-5 rounded-md' src={person2} alt="" />
            </div>
            <div className='w-1/2 py-20 space-y-5'>
                <h1 className=' text-5xl font-extrabold'>We are qualified <br /> & of experience <br /> in this field</h1>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>
        </div>
    )
}
