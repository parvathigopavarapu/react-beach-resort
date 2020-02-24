import React from 'react';
import items from './data';

const RoomContext = React.createContext();


class RoomProvider extends React.Component{
    state={
        rooms:[],
        sortedRooms:[],
        featuredRooms:[],
        loading:true
    }
    //getData
    componentDidMount(){
        
        let rooms=this.formateData(items)
        console.log(rooms)
        let featuredRooms = rooms.filter(room => room.featured)
        console.log(featuredRooms)
        this.setState({
            rooms,
            featuredRooms,
            sortedRooms:rooms,
            loading:false
        })
    }
    formateData = (items) =>{
        let tempRooms = items.map(item =>{
            let id = item.sys.id;
            let images = item.fields.images.map(image =>
                image.fields.file.url
           );
           let room = {...item.fields,images,id}
           return room;
        });
        return tempRooms;
    }
    render(){
        return (<RoomContext.Provider
         value={{...this.state}}>
            {this.props.children}

          </RoomContext.Provider>)
    }
}
const RoomConsumer = RoomContext.Consumer;
export  {RoomProvider,RoomConsumer,RoomContext};