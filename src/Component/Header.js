import React from "react";
import { Navbar, NavbarBrand , Nav , NavbarToggler ,NavItem ,Collapse , } from 'reactstrap';
import { NavLink } from "react-router-dom";

class Header extends React.Component{
      constructor(props){
          super(props)
         this.state = {
             isNavOpen : false
         }
          this.toggleNav = this.toggleNav.bind(this);
      }
      toggleNav(){
          this.setState({
              isNavOpen : !this.state.isNavOpen
          })
      }

    render(){
        return(<div>
                 <Navbar dark  expand = 'md' >
          <div className='container'>
              <NavbarToggler onClick={this.toggleNav}/>
              <div> </div>
           
            <Collapse isOpen={this.state.isNavOpen} navbar  >
            <Nav navbar className="p-3">
                <NavItem>
                    <NavLink className='nav-link' to='/home'>
                        <span > Home</span>
                    </NavLink>
                </NavItem>
              
                <NavItem>
                    <NavLink className='nav-link' to='/services'>
                        <span> Services</span>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className='nav-link' to='/ourteam'>
                    <span> Our Team</span>
                      
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className='nav-link' to='/product'>
                    <span > Product</span>
                      
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className='nav-link' to='/hairstyle'>
                    <span >Top Hair Style</span>
                      
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className='nav-link' to='/about'>
                        <span > About Us</span>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className='nav-link' to='/contact'>
                        <span> Conatc Us</span>
                    </NavLink>
                </NavItem>
               
            </Nav>
            </Collapse>
          </div>
          
        </Navbar>
     
           
        
        </div>)
    }
}
export default Header;