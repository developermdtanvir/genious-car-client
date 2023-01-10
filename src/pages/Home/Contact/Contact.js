import React from 'react'
import { FiPhoneCall } from 'react-icons/fi'
import { GoLocation } from 'react-icons/go'
import { MdDateRange } from 'react-icons/md'
export const Contact = () => {
    return (
        <div className="hero min-h-full bg-[#151515] my-10 rounded-md">
            <div className="hero-content flex-col lg:flex-row space-x-20 font-bold text-2xl text-white p-14">
                <div>
                    <div><MdDateRange className=' text-4xl text-orange-500' /></div>
                    <div>
                        <p>We are open monday-friday</p>
                        <h1>7:00 am - 9:00 pm</h1>
                    </div>
                </div>
                <div>
                    <div>
                        <FiPhoneCall className=' text-4xl text-orange-500' />
                    </div>
                    <div>
                        <p>Have a question?</p>
                        <h1>+2546 251 2658</h1>
                    </div>
                </div>
                <div>
                    <div>
                        <GoLocation className=' text-4xl text-orange-500' />
                    </div>
                    <div>
                        <p>Need a repair? our address</p>
                        <h1>Liza Street, New York</h1>
                    </div>
                </div>

            </div>
        </div>
    )
}
