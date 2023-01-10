import React from 'react'
import img1 from './../../../assets/images/banner/1.jpg'
import img2 from './../../../assets/images/banner/2.jpg'
import img3 from './../../../assets/images/banner/3.jpg'
import img4 from './../../../assets/images/banner/4.jpg'
import img5 from './../../../assets/images/banner/5.jpg'
export const Baner = () => {
    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
                <img alt="" src={img1} className="w-full" />
                <div className="absolute flex  transform translate-y-1/2 right-3/4 left-5 text-5xl bottom-1/2 text-white font-extrabold top-1/4">
                    <h1 className=' font-bold'>Affordable <br /> Price For Car <br /> Servicing</h1>
                </div>
                <div className="absolute flex  transform translate-y-1/2 right-3/4 left-5 bottom-40">
                    <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                </div>
                <div className="absolute flex  transform translate-y-1/2 left-3/4 right-5 top-3/4">
                    <a href="#slide4" className="btn btn-circle m-5">❮</a>
                    <a href="#slide2" className="btn btn-circle m-5">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img alt="" src={img2} className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img alt="" src={img3} className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img alt="" src={img4} className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide5" className="carousel-item relative w-full">
                <img alt="" src={img5} className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    )
}
