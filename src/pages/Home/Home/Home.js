import React from 'react'
import { About } from '../About/About'
import { Baner } from '../Baner/Baner'
import { Contact } from '../Contact/Contact'
import { Product } from '../Product/Product'
import { Services } from '../Services/Services'
import { Team } from '../Team/Team'
import { Testimonial } from '../Testimonial/Testimonial'

export const Home = () => {
    return (
        <div>
            <Baner />
            <About />
            <Services />
            <Contact />
            <Product />
            <Team />
            <Testimonial />
        </div>
    )
}
