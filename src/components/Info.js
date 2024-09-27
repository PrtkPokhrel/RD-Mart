import React, { Component } from 'react';

export default class Info extends Component {
  componentDidMount() {
    this.startAutoSlider();
  }

  componentWillUnmount() {
    clearInterval(this.sliderInterval);
  }

  startAutoSlider() {
    const slides = document.querySelectorAll(".sliderItem");
    let currentIndex = 0;

    this.sliderInterval = setInterval(() => {
      slides.forEach((slide, index) => {
        slide.style.display = index === currentIndex ? "flex" : "none"; // Show one slide at a time
      });
      currentIndex = (currentIndex + 1) % slides.length;
    }, 3000); // Change slide every 3 seconds
  }

  render() {
    return (
      <>
        {/* Slider for small screens */}
        <div className="containerInfo flex flex-col md:flex-row justify-around items-center py-10 space-y-6 md:space-y-0 md:space-x-4 bg-[#F5EDED]">
          
          {/* box1 */}
          <div className="sliderItem box0 flex flex-col items-center justify-center w-[80%] md:w-[20%] text-[#6482AD] ">
            <div className="heading font-bold">
              <h2 className="text-[1.25rem] font-bold font-inter leading-tight mb-2">Quality Guarantee</h2>
            </div>
            <div className="para text-md text-center leading-relaxed w-full md:w-[90%]">
              <p className="font-inter font-[400] text-[0.9rem]">We handpick the best products to ensure you get top quality every time.</p>
            </div>
          </div>

          {/* box2 */}
          <div className="sliderItem box1 flex flex-col items-center justify-center w-[80%] md:w-[20%] text-[#6482AD] ">
            <div className="heading font-bold">
              <h2 className="text-[1.25rem] font-bold font-inter leading-tight mb-2">Daily Offers</h2>
            </div>
            <div className="para text-md text-center leading-relaxed w-full md:w-[90%]">
              <p className="font-inter font-[400] text-[0.9rem]">Enjoy amazing deals on your favorite items every day.</p>
            </div>
          </div>

          {/* box3 */}
          <div className="sliderItem box1 flex flex-col items-center justify-center w-[80%] md:w-[20%] text-[#6482AD] ">
            <div className="heading font-bold">
              <h2 className="text-[1.25rem] font-bold font-inter leading-tight mb-2">Secure Payment</h2>
            </div>
            <div className="para text-md text-center leading-relaxed w-full md:w-[90%]">
              <p className="font-inter font-[400] text-[0.9rem]">Shop with confidence, knowing your transactions are safe and secure.</p>
            </div>
          </div>

          {/* box4 */}
          <div className="sliderItem box1 flex flex-col items-center justify-center w-[80%] md:w-[20%] text-[#6482AD] ">
            <div className="heading font-bold">
              <h2 className="text-[1.25rem] font-bold font-inter leading-tight mb-2">Service</h2>
            </div>
            <div className="para text-md text-center leading-relaxed w-full md:w-[90%]">
              <p className="font-inter font-[400] text-[0.9rem]">We're here to help with a smile every step of the way.</p>
            </div>
          </div>
        </div>

        <div className="emptyContainer h-[6rem] bg-[#6482AD]"></div>

        {/* Custom Styles for Slider and Layout */}
        <style jsx>{`
          @media (max-width: 750px) {
            .containerInfo {
              flex-direction: column;
              position: relative;
              overflow: hidden;
              width: 100%;
              height: 320px; /* Fixed height for the slider box */
            }

            .sliderItem {
              display: none; /* Hide all items initially */
              width: 100%;
              height: 100%;
              justify-content: center;
              align-items: center;
              text-align: center;
              background: #fff; /* Ensure the boxes have a background on mobile */
              padding: 20px; /* Add padding for better spacing on small screens */
              border-radius: 10px;
              box-shadow: 0 4px 15px rgba(0, 0, 0); /* Add shadow for mobile */
            }

            .sliderItem:first-child {
              display: flex; /* Show first slide initially */
            }

            .heading h2 {
              font-size: 1.5rem; /* Make the heading size larger on small screens */
              margin-bottom: 10px; /* Add space between heading and paragraph */
            }

            .para {
              width: 100%; /* Ensure the paragraphs take full width */
              max-width: 250px; /* Define a max width for paragraphs */
              text-align: center; /* Center-align text */
            }

            .para p {
              font-size: 1rem; /* Slightly larger paragraph text for readability */
              word-wrap: break-word; /* Ensure no text overflows */
            }

            .emptyContainer {
              display: none; /* Remove empty space on mobile */
            }
          }

          @media (min-width: 800px) {
            .sliderItem {
              display: flex; /* For large screens, show all items in row */
              width: auto;
              height: auto;
              margin: 0 10px;
              padding: 30px;
              border-radius: 0;
              background: transparent;
              box-shadow: none; /* No shadow for large screens */
            }

            .containerInfo {
              flex-direction: row; /* Default row layout */ 
              padding: 0 20px;
            }

            .heading h2 {
              font-size: 1.75rem; /* Larger heading for large screens */
              margin-bottom: 10px; /* Add space between heading and paragraph */
            }

            .para p {
              font-size: 1.1rem;
            }
          }
        `}</style>
      </>
    );
  }
}
