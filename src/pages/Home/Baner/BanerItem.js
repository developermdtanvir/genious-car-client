import React from 'react'
import './Baner.css'

export const BanerItem = ({ baner }) => {

    return (
        <div id={`slide${baner.id}`} className="carousel-item relative w-full">
            <div className='gradient'>
                <img alt="" src={baner.image} className="w-full rounded-xl" />
            </div>
            <div className="absolute flex  transform translate-y-1/2 right-3/4 left-5 text-5xl  text-white font-extrabold ">
                <h1 className=' font-bold'>Affordable <br /> Price For Car <br /> Servicing</h1>
            </div>
            <div className="absolute flex  transform translate-y-1/2 right-3/4 left-5 bottom-1/2 w-1/2 text-xl">
                <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            </div>
            <div className="absolute flex  transform translate-y-1/2 right-3/4 left-5 top-3/4 w-1/2 text-xl space-x-6">
                <button className="btn btn-warning">Warning</button>
                <button className="btn btn-outline btn-warning">Warning</button>
            </div>
            <div className="absolute flex  transform translate-y-1/2 left-3/4 right-5 top-3/4">
                <a href={`#slide${baner.prev}`} className="btn btn-circle m-5">❮</a>
                <a href={`#slide${baner.next}`} className="btn btn-circle m-5">❯</a>
            </div>
        </div>
    )
}
