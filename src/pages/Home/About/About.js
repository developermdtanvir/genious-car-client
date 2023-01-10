import React from 'react'
import person2 from '../../../assets/images/about_us/parts.jpg'
import person from '../../../assets/images/about_us/person.jpg'
export const About = () => {
    return (
        <div className="hero rounded-md mb-5  bg-base-200 space-x-80">
            <div className="hero-content flex-col justify-center items-center lg:flex-row space-x-40">
                <div className=' w-1/2'>
                    <div className='py-20 relative'>
                        <img className=' rounded-md' src={person} alt="" />
                        <img className=' h-60 absolute left-2/4 top-2/4 border-solid bg-white p-5 rounded-md' src={person2} alt="" />
                    </div>
                </div>
                <div className='w-1/2'>
                    <div className=' py-20 space-y-5'>
                        <p className=' text-orange-600 font-bold'>About us</p>
                        <h1 className=' text-5xl font-extrabold'>We are qualified <br /> & of experience <br /> in this field</h1>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                        <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                        <button className=' px-5 py-2 rounded-md text-white bg-gradient-to-l to-orange-700 from-orange-500 hover:scale-90 duration-500 font-bold'> Get More info</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
