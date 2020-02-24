import React from 'react';
import {RoomContext} from '../Context';
import Title from '../components/Title';
import Room from './Room';


class FeaturedRooms extends React.Component{
    static contextType = RoomContext;
    render(){
        
        let {featuredRooms: rooms} = this.context;
       
        return <React.Fragment>
            <Title title='Featured Rooms'></Title>
            <div className='row'>
             {rooms = rooms.map(room => 
             (<div  key={room.id}>
             <Room room={room}></Room>
             </div>
             ))}
            </div>
        </React.Fragment>
    }
}
export default FeaturedRooms;