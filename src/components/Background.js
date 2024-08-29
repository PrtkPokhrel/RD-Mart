import React, { Component } from 'react'
import './Css/background.css'

export default class Background extends Component {
    render() {
        let { imageUrl } = this.props
        return (
            <>


                <div className='containerBg  h-[55vh] border border-black bg-no-repeat  bg-cover bg-center flex items-center overflow-hidden' style={{ backgroundImage: `url(${imageUrl})` }} >
                    <div className="backgroundtextContainer w-[30vw] text-center  ">

                        <h1 className='backgroundH1 text-[#a6c2dd] text-4xl font-bold leading-[4rem]'>Your Neighborhood Stop for Everyday Essentials!</h1>
                        <button className="btn btn-primary my-3">Shop Now</button>
                    </div>
                </div>




            </>
        )
    }
}
