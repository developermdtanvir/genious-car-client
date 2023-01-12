import React, { useContext, useEffect, useState } from 'react';
import { MdCancel } from 'react-icons/md';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
import { TableRow } from './TableRow';
export const Order = () => {
    const [order, setOrder] = useState([]);
    const { user } = useContext(AuthContext);
    useEffect(() => {
        fetch(`http://localhost:5000/order?email=freelencertanvirhossain@gmail.com`)
            .then(res => res.json())
            .then(data => setOrder(data));

    }, [user?.email])
    console.log(order);
    return (
        <div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <MdCancel className=' text-3xl cursor-pointer' />
                                </label>
                            </th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            order.map(order => <TableRow order={order} />)
                        }
                    </tbody>
                </table>
            </div></div>
    )
}
