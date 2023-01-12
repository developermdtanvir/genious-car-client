import React from 'react';
import { Link } from 'react-router-dom';

export const ProductCard = ({ product }) => {
    console.log(product);
    const { img, price, title, _id } = product;
    console.log(img);
    return (

        <div className=" cursor-pointer card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body text-center">
                <h2 className="card-title text-center">{title}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-center">
                    <div className="rating">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    </div>
                </div>
                <Link to={`/checkout/${_id}`}> <button className=' btn btn-success'>Bye Now</button> </Link>
            </div>
        </div>
    )
}
