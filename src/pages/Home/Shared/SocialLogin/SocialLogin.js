import React, { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../../Contexts/AuthProvider/AuthProvider';
import { setAuthToken } from '../../../../Utils/Utils';

export const SocialLogin = () => {
    const { githubLogin } = useContext(AuthContext);

    const navigate = useNavigate()
    const location = useLocation()

    let from = location.state?.from?.pathname || "/";
    const handleGithubLogin = () => {
        githubLogin()
            .then(res => {
                const user = res.user;
                setAuthToken(user)
            })
    }
    return (
        <div>
            <p>Social Login</p>
            <button onClick={handleGithubLogin} className=' btn btn-primary'>GithubLogin Login</button>
        </div>
    )
}
