import React from 'react'
import Hero from '../components/Hero';
// import img from '../../public/images/defaultBcg.jpg'
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import Services from '../components/Services';
import FeaturedRooms from '../components/FeaturedRooms';

function Home() {
    return (
        <React.Fragment>
            <Hero hero='defaultHero'>
                <Banner title='Luxurious Rooms'
                    subTitle='Deluxe Rooms Starting At $299'>
                    <Link to='/rooms' className='btn btn-warning'>OUR ROOMS</Link>
                </Banner>
            </Hero>
            <Services />
            <FeaturedRooms/>
        </React.Fragment>
    )
}

export default Home;