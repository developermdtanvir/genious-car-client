import React, { useContext, useEffect, useState } from 'react';
import { MdCancel } from 'react-icons/md';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
import { TableRow } from './TableRow';
export const Order = () => {
    const [order, setOrder] = useState([]);
    const { user, logOutUser } = useContext(AuthContext);
    useEffect(() => {
        fetch(`http://localhost:5000/order?email=${user?.email}`, {
            headers: {
                autorizetion: `bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    logOutUser()
                    window.location.reload()
                }
                return res.json()
            })
            .then(data => setOrder(data));

    }, [user?.email])
    console.log(order);

    const handleDeletOrder = id => {
        console.log(id);
        const proside = window.confirm('Are You Sure delete');
        if (proside) {
            fetch(`http://localhost:5000/order/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const reminning = order.filter(oder => oder._id !== id);
                        setOrder(reminning);
                    }
                });
        }
    }

    const handleStatusUpdate = id => {
        fetch(`http://localhost:5000/order/${id}`, {
            method: `PATCH`,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'APPROVED' })

        }).then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {

                    const reminning = order.filter(odr => odr._id !== id);
                    const approving = order.find(odr => odr._id === id);
                    approving.status = `APPROVED`;
                    const newOrder = [approving, ...reminning];
                    setOrder(newOrder);
                }
            })
    }
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
                            order.map(order => <TableRow handleStatusUpdate={handleStatusUpdate} order={order} handleDeletOrder={handleDeletOrder} />)
                        }
                    </tbody>
                </table>
            </div></div>
    )
}
