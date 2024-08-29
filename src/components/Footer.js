import React, { Component } from 'react'
import './Css/footer.css'

export default class Footer extends Component {
    render() {
        return (

            <>
                <div className="container flex justify-center mt-28">

                    <div className="footer border border-black w-[100%]">

                        <div className="secondContainer flex ">

                            <div className="left w-[30%]">
                                <h3 className='text-[#6482AD] text-2xl p-4 font-semibold '> Reach us</h3>
                                <ul>
                                    <li className='flex gap-3 p-4 text-[#6482AD] text-xl' ><span className=" material-symbols-outlined">call</span>+977 987654321</li>
                                    <li className='flex gap-3 p-4 text-[#6482AD] text-xl' ><span className=" material-symbols-outlined">mail</span>rdmart@gmail.com</li>
                                    <li className='flex gap-3 p-4 text-[#6482AD] text-xl' ><span className=" material-symbols-outlined">place</span>Koteshwor, Kathmandu</li>
                                </ul>
                            </div>


                            <div className="mid w-[40%] flex justify-center">
                                <div className="midContainer">
                                    <ul>
                                        <li className='text-[#6482AD] p-4 text-2xl font-semibold' >Company</li>
                                        <li className='text-[#6482AD] p-4 text-xl cursor-pointer' >Home</li>
                                        <li className='text-[#6482AD] p-4 text-xl cursor-pointer' >Products</li>
                                        <li className='text-[#6482AD] p-4 text-xl cursor-pointer' >Contact</li>
                                    </ul>
                                </div>

                            </div>

                           
                                <div className="end  ">
                                <h3 className='text-[#6482AD] text-2xl p-4 font-semibold '> Reach us</h3>
                                    <div className=" p-4 text-[#6482AD]">
                                        <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                                    </div>
                                    <div className="p-4 text-[#6482AD] ">
                                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Message</label>
                                        <textarea className="form-control" id="exampleFormControlTextarea1"  placeholder="Write your message here" rows="3"></textarea>
                                    </div>

                                    <button className='btn btn-secondary m-4 mt-2' >Message </button>
                                </div>
                            
                        </div>
                    </div>
                </div>
                    

            </>
        )
    }
}
