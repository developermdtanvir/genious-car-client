import React, { useEffect, useState } from 'react';
import { ServicCard } from './ServicCard';
export const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/service`)
            .then(res => res.json())
            .then(data => {
                setServices(data);
                console.log(data);
            });
    }, [])
    console.log(services);
    return (
        <div className=' space-y-8'>
            <div className=' text-center space-y-10'>
                <p className='font-bold text-xl text-center text-orange-600'>Services</p>
                <h1 className=' text-5xl font-semibold'>Our Service Area </h1>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
            </div>
            <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-auto'>
                {
                    services.map(service => <ServicCard className=' space-x-10' service={service} />)
                }
            </div>
            <div className=' text-center pb-8'>
                <button className="btn btn-outline btn-secondary">More Services</button>
            </div>
        </div>
    )
}
