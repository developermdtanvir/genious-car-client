import React from 'react';
import { useParams } from 'react-router-dom';
import img from './../../../assets/images/banner/3.jpg';
import service from './../../../assets/images/checkout/checkout.png';
import './../Baner/Baner.css';
export const ProductDetails = () => {
    const { id } = useParams();
    console.log(id);
    return (
        <div>
            <div className=' relative my-10'>
                <div className='gradient'>
                    <img src={service} className=' w-full' alt="" />
                </div>
                <div>
                    <h1 className=' absolute top-1/2 left-1/4 text-white text-5xl font-bold'>Service Details</h1>
                </div>
            </div>
            <div>

                <div className="hero min-h-screen ">
                    <div className="hero-content flex-col lg:flex-row space-x-10">
                        <img src={img} className="max-w-sm rounded-lg shadow-2xl" />
                        <div className='bg-base-200 space-y-5 p-16'>
                            <p>Services</p>
                            <input className=' py-2 px-20 text-white font-bold rounded bg-[#FF3811] cursor-pointer' type="button" name="" value="Full Car Rifiar" />
                            <input className=' block py-2 px-20 text-black font-bold rounded bg-white cursor-pointer' type="button" name="" value="Full Car Rifiar" />
                            <input className=' block py-2 px-20 text-black font-bold rounded bg-white cursor-pointer' type="button" name="" value="Full Car Rifiar" />
                            <input className=' block py-2 px-20 text-black font-bold rounded bg-white cursor-pointer' type="button" name="" value="Full Car Rifiar" />
                            <input className=' block py-2 px-20 text-black font-bold rounded bg-white cursor-pointer' type="button" name="" value="Full Car Rifiar" />

                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
