import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { FaFacebookF } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import app from '../../firebase/firebase.config';
import logOut from './../../assets/images/login/login.svg';
export const Signup = () => {
    const auth = getAuth(app);

    const { createUser } = useContext(AuthContext)
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        isLogin: false,
        success: false
    })
    console.log('Name:', user.email, 'password', user.password)
    const handleBlur = e => {
        let isValid;
        if (e.target.name === 'email') {
            isValid = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(e.target.value);
        }
        if (e.target.name === 'password') {
            isValid = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(e.target.value);
        }
        if (isValid) {
            const newUser = { ...user };
            newUser[e.target.name] = e.target.value;
            setUser(newUser);
        }
        e.preventDefault()
    }
    const handleSubmit = (e) => {
        if (user.email && user.password) {
            createUser(auth, user.email, user.password)
                .then(res => {
                    console.log(res);
                    const { email } = res.user;
                    const newUser = { ...user };
                    newUser.email = email;
                    newUser.success = true
                    setUser(newUser);
                })
                .catch((error) => {
                    const errorMessage = error.message;
                    console.log(errorMessage);                    // ..
                });
        }
        e.preventDefault();
    }


    const googleProvider = new GoogleAuthProvider();
    const handleGoogleSignUp = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const { displayName, email } = result.user;
                const newUser = { ...user };
                newUser.name = displayName
                newUser.email = email
                newUser.success = true;
                newUser.isLogin = true
                setUser(newUser);
            }).catch(error => {

            });
    }
    return (
        <div className="hero my-8 bg-base-200 rounded-md">
            <div className="hero-content gap-20 flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <img src={logOut} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 space-y-10">
                    <form onSubmit={handleSubmit} className="card-body">
                        <h1 className="text-5xl text-center font-bold">Login now!</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input onBlur={handleBlur} type="text" name='name' placeholder="name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input onBlur={handleBlur} type="email" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input onBlur={handleBlur} type="password" name='password' placeholder="password" className="input input-bordered" />

                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" name="button" value="Sign up" />
                        </div>
                    </form>
                    <p className=' text-center'>Al ready have an account ? <Link className=" text-orange-600 font-semibold" to='/login'>Login</Link> </p>
                    <div className=' flex space-x-10 pb-8 justify-center items-center'>
                        <FaFacebookF className=' text-3xl cursor-pointer' />
                        <FcGoogle onClick={handleGoogleSignUp} className=' text-3xl cursor-pointer' />
                    </div>
                    {user.success && alert('User Created Successfully')}
                </div>
            </div>
        </div>
    )
}
