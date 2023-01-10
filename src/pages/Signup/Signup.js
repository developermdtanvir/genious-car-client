import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React from 'react';
import { FaFacebookF } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import app from '../../firebase/firebase.config';
import logOut from './../../assets/images/login/login.svg';
export const Signup = () => {
    const handleSignUp = e => {
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log('email:', email, 'Password:', password)
        e.preventDefault()
    }

    const auth = getAuth(app);

    const googleProvider = new GoogleAuthProvider();
    const handleGoogleSignUp = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                console.log(result);
            }).catch((error) => {

            });
    }
    return (
        <div className="hero my-8 bg-base-200 rounded-md">
            <div className="hero-content gap-20 flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <img src={logOut} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 space-y-10">
                    <form onSubmit={handleSignUp} className="card-body">
                        <h1 className="text-5xl text-center font-bold">Login now!</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" />

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
                </div>
            </div>
        </div>
    )
}
