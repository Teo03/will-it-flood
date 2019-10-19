import React, {useState} from 'react';

var facts = ["Not only are sea levels rising; the rate of their rise is rising.", "Global sea levels have already risen by 8 inches since 1900, that's the fastest sea-level rise Earth has experienced in 3,000 years.", "Every vertical inch of sea-level rise moves the ocean 50 to 100 inches.", "The rising of sea levels is already causing flood problems in many big coastal cities.", "“Sea levels could rise another 1.3 meters in the next 80 years.", "Up to 216 million people currently live on land that will be below sea level or regular flood levels by 2100.", "Sea-level rise can contaminate water used for drinking and irrigation.", "Sea-level rise can threaten coastal plant and animal life.", "Global flood damage for large coastal cities could cost $1 trillion a year if cities don't take steps to adapt.", "It's too late to stop sea-level rise — but not too late to save lives from it.", "If the entire Greenland's Jakobshavn ice sheet melted, sea levels would rise about 6 meters, or 20 feet.", "Rising sea levels could slow down Earth's rotation.", "Sea levels are rising because of climate change.", "Sea level varies by region in response to many factors, from gravity to land motion to rainfall.", "Ice loss near the poles from glaciers and ice sheets is one of the most significant contributions to global sea level rise.", "Greenland’s contribution to global sea-level rise is the largest, and increases every decade.", "Antartic's ice loss is equal to 127 gigatons per year.", "Greenland's ice loss is equal to 286 gigatons per year.", "Much of the ice lost from ice sheets comes from a process called calving where ice erodes, breaks off, and flows rapidly into the ocean. ", "Should all the glaciers, icebergs, and icesheets melt in an instant, sea levels would rise 262 feet. This is enough to fully submerge most coastal cities in the world.", "The early 1980s saw the very first attempt to measure ice sheets using satellite radar altimetry, with observations only of limited parts of Greenland and Antarctica.", "To determine to what extent Greenland’s glaciers are being melted from underneath NASA began a mission called OMG - Oceans Melting Greenland", "Ice sheet modeling is critical to any projection of future sea level rise, but remains in its early stages."];

function Search(props) {

  const [fact, setFact] = useState(facts[Math.floor(Math.random() * facts.length)]);

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
    <div className='center w3-center'>
        <div className="w3-center">
        <h1 className="w3-xxxlarge">Will it Flood?</h1>
          <div className="w3-padding-32">
            <button className="w3-btn w3-xlarge" style={{fontWeight: 900, backgroundColor: '#22A3B5', color: 'white'}} onClick={() => getLocation()}>Search for my region</button>
          </div>
        </div>
        <div>
          <h1 className="w3-center w3-xxlarge w3-animate-bottom">random fact</h1>
          <h1 className="w3-center w3-xlarge w3-animate-bottom" style={{color: 'green', margin: 50}}>{fact}</h1>
        </div>
      </div>
  );
}

export default Search;
