import React from 'react';
import { FaFacebookSquare, FaGithub, FaYoutube } from 'react-icons/fa';
import logo from '../../../../assets/logo.svg';
export const Footer = () => {
    return (
        <footer className="footer p-32 bg-black text-white rounded-md">
            <div>
                <img src={logo} alt="" />
                <p>ACME Industries Ltd.<br />Providing reliable tech since 1992</p>
                <div className=' flex gap-x-7 text-2xl'>
                    <FaFacebookSquare className='text-blue-900 hover:-translate-y-2 cursor-pointer duration-300' />
                    <FaYoutube className='text-red-700 hover:-translate-y-2 cursor-pointer duration-300' />
                    <a target='_blank' href="https://github.com/mdtanvirgit" rel="noreferrer"><FaGithub className=' text-slate-700 hover:-translate-y-2 cursor-pointer duration-300' /></a>
                </div>
            </div>
            <div>
                <span className="footer-title">Services</span>
                <a href='/' className="link link-hover">Branding</a>
                <a href='/' className="link link-hover">Design</a>
                <a href='/' className="link link-hover">Marketing</a>
                <a href='/' className="link link-hover">Advertisement</a>
            </div>
            <div>
                <span className="footer-title">Company</span>
                <a href='/' className="link link-hover">About us</a>
                <a href='/' className="link link-hover">Contact</a>
                <a href='/' className="link link-hover">Jobs</a>
                <a href='/' className="link link-hover">Press kit</a>
            </div>
            <div>
                <span className="footer-title">Legal</span>
                <a href='/' className="link link-hover">Terms of use</a>
                <a href='/' className="link link-hover">Privacy policy</a>
                <a href='/' className="link link-hover">Cookie policy</a>
            </div>
        </footer>
    )
}
