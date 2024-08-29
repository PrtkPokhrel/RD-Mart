import React, { Component } from 'react'

export default class Contact extends Component {
  render() {
    return (
      <>
        <div className="texts">
          <h3 className='text-center text-4xl   text-[#6482AD] font-semibold mt-6  ' >Contact us</h3>
          <p className="para text-[#6482AD] text-center my-3 text-xl ">Any question or remarks? Just write us a message!</p>
        </div>



        <div className="container flex  justify-between mt-5  p-3 ">

          <div className="left bg-[#6482AD] w-1/3 rounded-xl ">


            <div className=" flex flex-col justify-around ml-6 text-white h-[30rem] ">
              <div className="heading text-white text-4xl  font-semibold  "><h2>Contact Information</h2></div>
              <ul className='flex flex-col    -red-800'>
                <li className='list-none flex       text-xl gap-3 '>  <span className=" material-symbols-outlined">call</span> +977 9876543210</li>
                <li className='flex pt-11 pb-11 text-xl gap-3 ' > <span className="material-symbols-outlined   ">email</span> rdmart@gmail.com</li>
                <li className='flex text-xl gap-3 ' > <span className="material-symbols-outlined ">place</span> Koteshwor, Kathmandu</li>
              </ul>
            </div>
          </div>



          <div className="right w-[65%] flex overflow-hidden bg-[#F5EDED] rounded-xl">



            <div className='flex flex-col justify-evenly items-center'>

              <div className="top   ">
                <div className='flex gap-5 w-[50vw] justify-center'>

                  <label htmlFor="firstName" className='block' ></label>
                  <input type="text" name="" id="" placeholder='First Name' className='  -2  -t-white  -l-white  -r-white   -b   w-[40%] p-3 ' />

                  <label htmlFor="firstName" className='block' ></label>
                  <input type="text" name="" id="" placeholder='Last Name' className='  -2  -t-white  -l-white  -r-white   -b    w-[40%] p-3 ' />
                </div>


              </div>


              <div className="mid   ">
                <div className='flex gap-5     -red-600 w-[50vw] justify-center'>

                  <label htmlFor="firstName" className='block' ></label>
                  <input type="text" name="" id="" placeholder='Email' className='  -2  -t-white  -l-white  -r-white   -b   w-[40%] p-3' />

                  <label htmlFor="firstName" className='block' ></label>
                  <input type="text" name="" id="" placeholder='Phone Number' className='  -2  -t-white  -l-white  -r-white   -b    w-[40%] p-3' />
                </div>

              </div>

              <div className="bottom flex justify-around   w-[50vw] ">
                <label htmlFor="firstName" className='block' ></label>
                <input type="text" name="" id="" placeholder='Write your message here' className='  -2  -t-white  -l-white  -r-white   -b   w-[90%] p-3  ' />

              </div>

<div className="btn btn-primary">Send Message</div>






            </div>




          </div>
        </div>
      </>
    )
  }
}
