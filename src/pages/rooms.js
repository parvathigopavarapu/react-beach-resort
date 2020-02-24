import React from 'react'
import Hero from '../components/Hero';
// import img from '../../public/images/room-2.jpg';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom'

const Rooms =() => {
    return (
  
    <Hero hero='roomHero'>
        <Banner title='Our Rooms'>
        <Link to='/' className='btn btn-warning'>Return Home</Link>
        </Banner>
    </Hero>
    )
}
export default Rooms;