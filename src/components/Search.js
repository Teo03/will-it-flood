import React from 'react';

function Search(props) {

  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(sendPosition);
    } else { 
      alert('Geolocation not supported.')
    }
  }
  
  function sendPosition(position) {
    var crd = {
      'latitude': position.coords.latitude,
      'longitude': position.coords.longitude
    }
    props.history.push('/map', {crd: crd});
  }

  return (
    <header class="w3-container w3-theme w3-padding" id="myHeader">
  
      <div class="w3-center">
      
      <h1 class="w3-xxxlarge w3-animate-bottom">Will it Flood?</h1>
        <div class="w3-padding-32">
          <button class="w3-btn w3-xlarge w3-blue w3-hover-light-white"  style={{fontWeight: 900}} onClick={() => getLocation()} >Search for my region</button>
        </div>
      </div>
    </header>
  );
}

export default Search;
