import React from 'react';
import Title from './Title';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer }
    from 'react-icons/fa'

class Services extends React.Component {
    state = {
        services: [{
            icon: <FaCocktail className='fa-5x'></FaCocktail>,
            title: 'Free cocktail',
            info: `Her companions instrument set 
            estimating sex remarkably solicitude motionless. 
            Property men the why smallest graceful day. `},
        {
            icon: <FaHiking />,
            title: 'Free Hicking',
            info: `
            Examine she brother prudent add day ham.
             Far stairs now coming bed oppose hunted become his.
             You zealously departure had procuring suspicion`},
        {
            icon: <FaShuttleVan />,
            title: 'Free shuttle van',
            info: `Sigh view am high neat half to what.
             Sent late held than set why wife our. If an blessing 
             building steepest. 
            Agreement distrusts mrs six affection satisfied `},
        {
            icon: <FaBeer  className='fa-icon fa-5x' />,
            title: 'Free Beer',
            info: `We diminution preference thoroughly if.
             Joy deal pain view much her time. Led young gay 
             would now state. Pronounce we attention
             admitting on assurance of suspicion conveying `}
        ]
    }
    render() {
        return (
            <section>
                <Title title='Services'></Title>
                <div className='row '>
                    {this.state.services.map(service =>{
                     return ( <div className='col-s-3 p-5' key={service.title}> 
                      <div className='fa-icon fa-5x' >{service.icon}</div>
                      <div><h5>{service.title}</h5></div>
                      <div>{service.info}</div></div>)
                    })}
                </div>
            </section>)
    }
}
export default Services;