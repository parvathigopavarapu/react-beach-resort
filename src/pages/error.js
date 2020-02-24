import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import { Link } from 'react-router-dom'

function Error(){
    return <React.Fragment>
        <Hero>
            <Banner title='404' subTitle='Page not found'>
                <Link to='/' className='btn btn-warning'>Return Home</Link>
            </Banner>
        </Hero>
    </React.Fragment>
}

export default Error;