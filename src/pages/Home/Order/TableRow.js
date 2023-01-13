import React, { useEffect, useState } from 'react';
import { MdCancel } from 'react-icons/md';
export const TableRow = ({ order, handleDeletOrder, handleStatusUpdate }) => {
    const { serviceName, name, email, service, _id, status } = order;
    console.log(order);
    const [img, setImg] = useState({})
    console.log(img);
    useEffect(() => {
        fetch(`http://localhost:5000/service/${service}`)
            .then(res => res.json())
            .then(data => setImg(data));
    }, [service]);


    return (
        <div> <tr>
            <th>
                <label>
                    <MdCancel onClick={() => handleDeletOrder(_id)} className=' text-3xl cursor-pointer' />
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            {
                                img?.img && <img src={img.img} alt="Avatar Tailwind CSS Component" />}
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{email}</div>
                        <div className="text-sm opacity-50">United States</div>
                    </div>
                </div>
            </td>
            <td>
                {name}
                <br />
                <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
            </td>
            <td>{serviceName}</td>
            <th>
                <button onClick={() => handleStatusUpdate(_id)} className="btn btn-ghost btn-xs">{status ? status : 'PANDING'}</button>
            </th>
        </tr>
        </div>
    )
}
