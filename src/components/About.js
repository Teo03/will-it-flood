import React from 'react';
import logo from '../images/logo.png'

function About() {
  return (
    <div>
      <header className="w3-container w3-center" >
      <img style={{margin: 20}} src={logo} alt="logo" />
      <h1 className="w3-margin w3-jumbo">About us</h1>
        <p style={{fontSize: 20}}className="w3-xlarge">Planet Earth Protocol</p>
      </header>
      <div className="w3-row-padding w3-padding-64 w3-container">
        <div className="w3-content">
          <div className="w3-twothird">
            <h1>Our Website</h1>
          

            <p style={{fontSize: 20}}className="w3-text-black">The rising of sea levels is indeed true. It’s mainly due to two primary factors, thermal expansion of the oceans and seas, and the melting of ice sheets and glaciers. Both of these factors are linked to global warming.</p>
          </div>

          <div className="w3-third w3-center">

          </div>
        </div>
      </div>

      <div className="w3-row-padding w3-light-grey w3-padding-64 w3-container">
        <div className="w3-content">
          <div className="w3-third w3-center">
      
          </div>

          <div className="w3-twothird">
            <h1></h1>
          
          <h1>Our Mission</h1>
          

            <p style={{fontSize: 20}}className="w3-text-black">Our goal is to help people around the world by providing them with information concerning their current state in relation to the rising of sea levels. Our users are informed of the current and future state of their whereabouts. Many lives are at risk due to the rising of sea levels, our program is designed to help the world and prevent any possible future casualties.</p>
          </div>
        </div>
      </div>
      <div className="w3-row-padding w3-padding-64 w3-container">
        <div className="w3-content">
          <div className="w3-twothird">
            <h1>Who We Are</h1>
          

            <p style={{fontSize: 20}}className="w3-text-black">Planet Earth Protocol is a page created and designed by a team of five people. All of them high schoolers with a mission to save lives. Their names are Kristijan Krstevski, Teodor Bogoeski, Marija Velkovska, Stefanija Cvetanovska and Sofija Tasevska.</p>
          </div>

          <div className="w3-third w3-center">
        
          </div>
        </div>
      </div>
      </div>
  );
}

export default About;
