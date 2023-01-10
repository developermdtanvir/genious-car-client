import React, { useEffect, useState } from 'react';
import { ProductCard } from './ProductCard';

export const Product = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('product.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);
    return (
        <div className=' py-10'>
            <div className=' text-center space-y-8'>
                <p className=' text-orange-500 font-semibold'>Popular Products</p>
                <h1 className=' text-5xl font-bold'>Browse Our Products</h1>
                <p className=' text-[#737373]'>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
            </div>
            <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 rounded-md gap-6'>
                {
                    products.map(product => <ProductCard product={product} />)
                }
            </div>
            <div className=' text-center pt-5'>
                <button className="btn btn-outline btn-secondary ">More Products</button>
            </div>
        </div>
    )
}
