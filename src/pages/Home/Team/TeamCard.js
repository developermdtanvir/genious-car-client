import React from 'react';
import { AiFillFacebook, AiFillGithub, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai';
import img1 from '../../../assets/images/team/1.jpg';
import { default as img2, default as img3 } from '../../../assets/images/team/3.jpg';
export const TeamCard = () => {

    return (
        <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={img1} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-center">
                        <div className=' flex space-x-10 text-3xl '>
                            <AiFillFacebook className=' text-[#4267B2] cursor-pointer hover:-translate-y-2 duration-700' />
                            <AiFillYoutube className=' text-red-700 cursor-pointer hover:-translate-y-2 duration-700' />
                            <AiFillGithub className=' cursor-pointer hover:-translate-y-2 duration-700' />
                            <AiFillLinkedin className=' text-[#0A66C2] cursor-pointer hover:-translate-y-2 duration-700' />
                        </div>
                    </div>
                </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={img2} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-center">
                        <div className=' flex space-x-10 text-3xl'>
                            <AiFillFacebook className=' text-[#4267B2] cursor-pointer hover:-translate-y-2 duration-700' />
                            <AiFillYoutube className=' text-red-700 cursor-pointer hover:-translate-y-2 duration-700' />
                            <AiFillGithub className=' cursor-pointer hover:-translate-y-2 duration-700' />
                            <AiFillLinkedin className=' text-[#0A66C2] cursor-pointer hover:-translate-y-2 duration-700' />
                        </div>
                    </div>
                </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={img3} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-center">
                        <div className=' flex space-x-10 text-3xl'>
                            <AiFillFacebook className=' text-[#4267B2] cursor-pointer hover:-translate-y-2 duration-700' />
                            <AiFillYoutube className=' text-red-700 cursor-pointer hover:-translate-y-2 duration-700' />
                            <AiFillGithub className=' cursor-pointer hover:-translate-y-2 duration-700' />
                            <AiFillLinkedin className=' text-[#0A66C2] cursor-pointer hover:-translate-y-2 duration-700' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
