import React from 'react'
import { TeamCard } from './TeamCard'

export const Team = () => {
    return (
        <div className=' space-y-10 pb-10'>
            <div className=' text-center space-y-10'>
                <p className=' text-orange-500 font-bold text-xl'>Team</p>
                <h1 className='font-bold text-5xl'>Meet Our Team</h1>
                <p className=' text-gray-400'>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
            </div>
            <div>
                <TeamCard />
            </div>
        </div>
    )
}
