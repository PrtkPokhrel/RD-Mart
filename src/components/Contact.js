import React, { Component } from 'react';
import emailjs from '@emailjs/browser';

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      message: '',
      email: '',
      phoneNumber: '',
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { firstName, lastName, message, email, phoneNumber } = this.state;

    const templateParams = {
      to_name: 'Recipient Name', // Replace this with the actual recipient's name or email
      from_name: `${firstName} ${lastName}`,
      message: message,
      email: email,
      phone: phoneNumber, // If you want to include the phone number
    };

    // Replace these with your EmailJS Service ID, Template ID, and User ID
    const SERVICE_ID = 'service_k0odfjf';  // Your Service ID
    const TEMPLATE_ID = 'template_c2km7ub'; // Your Template ID
    const USER_ID = 'POB2gd_Cx19E9Ld9A';    // Your User ID

    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, USER_ID)
      .then(
        (result) => {
          alert('Message sent successfully!');
          this.setState({
            firstName: '',
            lastName: '',
            message: '',
            email: '',
            phoneNumber: '',
          });
        },
        (error) => {
          console.error('Error sending email:', error.text);
          alert('Failed to send message. Please try again later.');
        }
      );
  };


  render() {
    const { firstName, lastName, message, email, phoneNumber } = this.state;

    return (
      <>
      <div className='bg-[#F5EDED] container '>

        <div className="texts flex flex-col items-center justify-center ">
          <h3 className="text-center text-3xl md:text-4xl text-[#6482AD] font-semibold pt-6">Contact us</h3>
          <p className="para text-[#6482AD]    my-3 text-lg md:text-xl">
            Any question or remarks? Just write us a message!
          </p>
        </div>

        <div className="contactContainer bg-white container flex flex-col md:flex-row justify-between mt-5 p-3 space-y-5 md:space-y-0 rounded-[3px] ">
          {/* Left Contact Section */}
          <div className="leftContact bg-[#6482AD] md:w-1/3 w-full rounded-xl p-6">
            <div className="flex flex-col justify-evenly text-white h-full">
              <div className="heading text-white text-3xl md:text-4xl font-semibold">
                <h2 className='font-poppins font-[600] text-[2.5rem]  ' >Contact Information</h2>
              </div>
              <ul className="flex flex-col space-y-9 text-white text-lg md:text-xl">
                <li className="flex gap-3 items-center font-poppins font-[400]">
                  <span className="material-symbols-outlined" >call</span> +977 9876543210
                </li>
                <li className="flex gap-3 items-center font-poppins font-[400]">
                  <span className="material-symbols-outlined">email</span> rdmart@gmail.com
                </li>
                <li className="flex gap-3 items-center font-poppins font-[400]">
                  <span className="material-symbols-outlined">place</span> Koteshwor, Kathmandu
                </li>
              </ul>
            </div>
          </div>

          {/* Right Contact Form Section */}
          <div className="rightContact md:w-[65%] w-full bg-white rounded-xl p-6 flex flex-col justify-evenly items-center">
            {/* Name and Message Fields */}
            <div className="topRightContact w-full">
              <div className="topG flex flex-col gap-5">
                <input
                  type="text"
                  name="firstName"
                  value={firstName}
                  onChange={this.handleChange}
                  placeholder="First Name"
                  className="w-full p-3 border border-gray-300 rounded-lg"
                />
                <input
                  type="text"
                  name="lastName"
                  value={lastName}
                  onChange={this.handleChange}
                  placeholder="Last Name"
                  className="w-full p-3 border border-gray-300 rounded-lg"
                />
                <input
                  type="text"
                  name="message"
                  value={message}
                  onChange={this.handleChange}
                  placeholder="Write your message here"
                  className="w-full p-4 border border-gray-300 rounded-lg"
                />
              </div>
            </div>

            {/* Email and Phone Fields */}
            <div className="midRightContact w-full mt-5">
              <div className="topH flex flex-col md:flex-row gap-5 justify-center">
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={this.handleChange}
                  placeholder="Email"
                  className="w-full md:w-[50%] p-3 border border-gray-300 rounded-lg"
                />
                <input
                  type="text"
                  name="phoneNumber"
                  value={phoneNumber}
                  onChange={this.handleChange}
                  placeholder="Phone Number"
                  className="w-full md:w-[50%] p-3 border border-gray-300 rounded-lg"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div
              className="btn btn-primary mt-5 bg-blue-500 text-white py-3 px-6 rounded-lg cursor-pointer"
              onClick={this.handleSubmit}
            >
              Send Message
            </div>
          </div>
        </div>
      </div>

      </>
    );
  }
}
