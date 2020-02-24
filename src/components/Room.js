import React from "react";
// import img from '../../public/images/room-2.jpg'
// import defaultImg from 'images/room-2.jpg'

class Room extends React.Component {
    render() {
        const {name,slug,price,images} = this.props.room;
        // let image = images[0]
        console.log('from room'+images[0])
        return <React.Fragment>
            
               
                 
                      <div className='col-s-3 p-5'>
                      {/* <img src={`../${images}`} alt='room'/> */}
                      <img src={images[0]} alt='room'/>

                      </div>
                
                 
            
        </React.Fragment>
    }
}
export default Room;