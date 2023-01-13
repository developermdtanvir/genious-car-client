import React, { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

export const LogOut = () => {
    const { logOutUser } = useContext(AuthContext);
    const handleLogOut = e => {
        logOutUser().then(res => res.json())
            .then(user => console.log(user));
    }
    return (
        <div>
            <button onClick={handleLogOut} className=' btn btn-outline'>LogOut</button>
        </div>
    )
}
