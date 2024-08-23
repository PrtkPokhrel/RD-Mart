import React, { Component } from 'react'

export default class Background extends Component {
    render() {
        let { imageUrl } = this.props
        return (
            <>


                <div className='containerBg  h-[55vh] border border-black bg-no-repeat  bg-cover bg-center' style={{ backgroundImage: `url(${imageUrl})` }} >
                    <div className="textContainer w-[30vw] text-center mt-28 pb-16 ">

                        <h1 className='text-[#a6c2dd] text-4xl font-bold leading-[4rem]'>Your Neighborhood Stop for Everyday Essentials!</h1>
                        <button className="btn btn-primary my-3">Shop Now</button>
                    </div>
                </div>




            </>
        )
    }
}
