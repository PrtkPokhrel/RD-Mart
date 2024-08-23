 import React, { Component } from 'react'
 
 export default class Navigation extends Component {
   render() {
   
     return (
      <>

      {/* Location */}
      <div className="top bg-[#6482AD] py-3 flex justify-center">Koteshwor, Kathmandu</div>

      {/* Navigation starts from here */}
      <nav className='pt-2  pb-10 border border-black'>
        <div className="containerNav flex justify-between">
        <img className="w-36" src={this.props.logo} alt="RD Mart" /> 
        <ul className='flex gap-4 text-[#6482AD] mx-8'>
            <li className='list-none'>Home</li>
            <li>Product</li>
            <li>Contact Us</li>
            <li>Location</li>
        </ul>
        </div>

      </nav>
      </>
     )
   }
 }
 