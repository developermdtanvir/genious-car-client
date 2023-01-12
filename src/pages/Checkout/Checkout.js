import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
export const Checkout = () => {
    const service = useLoaderData();
    console.log(service);
    const { _id, description, title, price } = service;
    const { user } = useContext(AuthContext);
    const handlePlaceOrder = e => {
        e.preventDefault()
        const form = e.target.form
        const name = `${e.target.fristName.value} ${e.target.lastName.value}`
        const phone = e.target.phone.value;
        const email = e.target.email.value;
        const message = e.target.messege.value;
        const order = {
            service: _id,
            serviceName: title,
            price,
            name,
            phone,
            email,
            message,
        };
        console.log(order);
        fetch('http://localhost:5000/order', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(order),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    alert('Youser created successfully ')
                    form.reset()
                }
            });

    }
    return (
        <div>
            <h1>Title:: - {title}</h1>
            <p>{description}</p>
            <form onSubmit={handlePlaceOrder} className=' space-y-5'>
                <div className=' grid grid-cols-1 lg:grid-cols-2 gap-10'>
                    <input name='fristName' type="text" placeholder="Frist Name" className="input input-bordered input-accent w-full" />
                    <input name='lastName' type="text" placeholder="Last Name" className="input input-bordered input-accent w-full" />
                    <input required name='phone' type="number" placeholder="Your PhoneNumber" className="input input-bordered input-accent w-full" />
                    <input required name='email' type="email" placeholder="Your Email" defaultValue={user?.email} className="input input-bordered input-accent w-full" readOnly />
                </div>
                <div>
                    <textarea name='messege' className="textarea textarea-info textarea-bordered h-24 w-full" placeholder="Bio"></textarea>
                </div>

                <input type="submit" name="" value="placeorder" className=' btn btn-secondary' />
            </form>
        </div>
    )
}
