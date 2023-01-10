import React from 'react';
import { FaLongArrowAltRight } from 'react-icons/fa';
export const ServicCard = ({ service }) => {
    const { title, img, price } = service;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <div className=' flex'>
                    <p className=' font-semibold text-lg text-orange-600'>${price}</p>
                    <div className="card-actions justify-end">
                        <FaLongArrowAltRight className=' text-2xl text-orange-600 cursor-pointer' />
                    </div>
                </div>
            </div>
        </div>
    )
}
