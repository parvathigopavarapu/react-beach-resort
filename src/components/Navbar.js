import React from 'react';
import { FaAlignRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';


class Navbar extends React.Component {
    constructor(){
        super()
        this.state={
            show:false
        }
    }
   
    handleMenu=()=>{
        this.setState({
            show:!this.state.show
        })
        console.log('t'+ this.state.show)
    }

    render() {
        return (<React.Fragment>

            <nav className='navbar bg-mainGray'>
                <Link to='/'> <h4 className='text-translate'>Beatch resort</h4></Link>
                <ul className='nav '>
                    <li className='nav-item ml-5 li-display '>
                        <Link to='/'>Home</Link></li>
                    <li className='nav-item ml-5 li-display'>
                        <Link to='/rooms'>Rooms</Link></li>
                </ul>
                <FaAlignRight className='menu-icon' onClick={this.handleMenu}></FaAlignRight>

                {this.state.show ? ( <ol className='nav ' show={this.state.show}>
                    <li className='nav-item ml-5 ' show={this.state.show}>
                        <Link to='/'>Home</Link></li>
                    <li className='nav-item ml-5' show={this.state.show}>
                        <Link to='/rooms'>Rooms</Link></li>
                </ol>): null}

            </nav>
         

        </React.Fragment>)
    }
}
export default Navbar;