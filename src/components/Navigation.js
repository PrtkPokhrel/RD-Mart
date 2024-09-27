// Navigation.js
import React, { Component } from 'react';
import { Link } from 'react-scroll';
import './Css/navigation.css'; 
 



export default class Navigation extends Component {
  state = {
    isOpen: false, // State to toggle the menu
  };

  toggleMenu = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <>
        {/* Location */}
        <div className="top bg-[#6482AD] py-3 flex justify-center">
         R.D Mart Koteshwor, Kathmandu
        </div>

        {/* Navigation */}
        <nav className="pt-2 pb-11 border border-black bg-[#F5EDED]">
          <div className="containerNav flex justify-between items-center">
            <img className="w-[5rem] md:ml-10 " src={this.props.logo} alt="RD Mart" />

            {/* Hamburger Icon */}
            <div
              className={`hamburger-icon ${this.state.isOpen ? 'open' : ''}`}
              onClick={this.toggleMenu}
            >
              <span className="line"></span>
              <span className="line"></span>
              <span className="line"></span>
            </div>

            {/* Menu Items */}
            <ul
              className={`menu ${
                this.state.isOpen ? 'active' : ''
              } flex gap-4 text-[#6482AD] mx-8`}
            >
              <Link className="cursor-pointer li font-bold  font-inter " to="Home" smooth={true} duration={500}>
                Home
              </Link>
              <Link className="cursor-pointer li font-bold font-inter " to="Product" smooth={true} duration={500}>
                Product
              </Link>
              <Link className="cursor-pointer li font-bold font-inter " to="Contact" smooth={true} duration={500}>
                Contact
              </Link>
               
            </ul>
          </div>
        </nav>
      </>
    );
  }
}

