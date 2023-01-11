import React from 'react'

import img1 from './../../../assets/images/banner/1.jpg'
import img2 from './../../../assets/images/banner/2.jpg'
import img3 from './../../../assets/images/banner/3.jpg'
import img4 from './../../../assets/images/banner/4.jpg'
import img5 from './../../../assets/images/banner/5.jpg'
import img6 from './../../../assets/images/banner/6.jpg'
import { TestimonialItem } from './TestimonialItem'

const banerData = [
    {
        image: img1,
        id: 1,
        next: 2,
        prev: 6
    },
    {
        image: img2,
        id: 2,
        next: 3,
        prev: 1
    },
    {
        image: img3,
        id: 3,
        next: 4,
        prev: 2
    },
    {
        image: img4,
        id: 4,
        next: 5,
        prev: 3
    },
    {
        image: img5,
        id: 5,
        next: 6,
        prev: 5
    }, {
        image: img6,
        id: 6,
        next: 1,
        prev: 5
    }

]

export const Testimonial = () => {
    return (
        <div>
            <div className=' space-y-7'>
                <p className=' text-center text-orange-600 font-semibold'>Testimonial</p>
                <h1 className=' text-center text-5xl font-bold'>What Customer Says</h1>
                <p className=' text-gray-400 text-center'>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
            </div>

            <div className='carousel'>
                {
                    banerData.map(baner => <TestimonialItem baner={baner} />)
                }
            </div>
        </div>
    )
}
