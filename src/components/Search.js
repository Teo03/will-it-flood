import React from 'react';
import Button from '@material-ui/core/Button';

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
    props.history.push('/map/' + crd.latitude + '/' + crd.longitude);
  }

  return (
    <div className="Search">
        <p>search/main page</p>
        <Button variant="contained" onClick={() => getLocation()}>
          Get my location
        </Button>
    </div>
  );
}

export default Search;
