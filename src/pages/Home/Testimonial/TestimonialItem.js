import React from 'react'

export const TestimonialItem = ({ baner }) => {
    return (
        <div id={`slider${baner.id}`} className="carousel-item relative w-full grid grid-cols-2 gap-4">
            <div>
                <div className='gradient'>
                    <img alt="" src={baner.image} className="w-full rounded-xl" />
                </div>
                <div className="absolute flex  transform translate-y-1/2 left-3/4 right-5 top-3/4">
                    <a href={`#slider${baner.prev}`} className="btn btn-circle m-5">❮</a>
                    <a href={`#slider${baner.next}`} className="btn btn-circle m-5">❯</a>
                </div>
            </div>
            <div>
                <div className='gradient'>
                    <img alt="" src={baner.image} className="w-full rounded-xl" />
                </div>
                <div className="absolute flex  transform translate-y-1/2 left-3/4 right-5 top-3/4">
                    <a href={`#slider${baner.prev}`} className="btn btn-circle m-5">❮</a>
                    <a href={`#slider${baner.next}`} className="btn btn-circle m-5">❯</a>
                </div>
            </div>
        </div>
    )
}
