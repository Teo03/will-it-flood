import React, { useEffect } from 'react';
var ol = require('openlayers');
require('openlayers/css/ol.css');
const Map = ol.Map;
const View = ol.View;
const ImageLayer = ol.layer.Image;
const TileLayer = ol.layer.Tile;
const fromLonLat = ol.proj.fromLonLat;
const RasterSource = ol.source.Raster;
const TileJSON = ol.source.TileJSON;
const XYZ = ol.source.XYZ;

function MapScreen(props) {

  function flood(pixels, data) {
    const pixel = pixels[0];
    if (pixel[3]) {
      const height = -10000 + ((pixel[0] * 256 * 256 + pixel[1] * 256 + pixel[2]) * 0.1);
      if (height <= data.level) {
        pixel[0] = 0;
        pixel[1] = 115;
        pixel[2] = 182;
        pixel[3] = 230;
      } else {
        pixel[3] = 0;
      }
    }
    return pixel;
  }
  
  const elevation = new XYZ({
    url: 'https://api.mapbox.com/v4/mapbox.terrain-rgb/{z}/{x}/{y}.pngraw?access_token=pk.eyJ1IjoidGVvMDMwOCIsImEiOiJjazF1d2l5cWcwOWE4M2NvNjFsajVhcHpwIn0.MmkaCjrSsN0s7KRdhF0gKw',
    crossOrigin: 'anonymous'
  });
  
  const raster = new RasterSource({
    sources: [elevation],
    operation: flood
  });
  

  useEffect(() => {
    var lat = props.location.state['crd'].latitude;
    var lon = props.location.state['crd'].longitude;
    console.log( lat + " " + lon );

    const map = new Map({
      target: 'map',
      controls: ol.control.defaults({ attribution: false }),
      layers: [
        new TileLayer({
          source: new TileJSON({
            url: 'https://api.tiles.mapbox.com/v4/mapbox.streets.json?secure&access_token=pk.eyJ1IjoidGVvMDMwOCIsImEiOiJjazF1d2l5cWcwOWE4M2NvNjFsajVhcHpwIn0.MmkaCjrSsN0s7KRdhF0gKw',
            crossOrigin: 'anonymous'
          })
        }),
        new ImageLayer({
          opacity: 0.8,
          source: raster
        })
      ],
      view: new View({
        center: fromLonLat([21.2, 41.23]),
        zoom: 8
      })
    });

    map.setView(
      new View({
          center: ol.proj.fromLonLat([lon, lat]),
          zoom: 7
        })
    );

    const control = document.getElementById('level');
    const output = document.getElementById('output');
    const years = document.getElementById('years');

    var init = true; 

    control.addEventListener('input', function() {
      output.innerText = control.value * 100;
      years.innerText = control.value * 80;
      raster.changed();
      init = false;
    });

    output.innerText = control.value * 100;
    years.innerText = control.value;

    raster.on('beforeoperations', function(event) {
      if(init) {
        setTimeout(() => {
          event.data.level = 10;
          control.value = 10;
          output.innerText = 10 * 100;
          years.innerText = 10 * 80;
          raster.changed();
        }, 1000)
        setTimeout(() => {
          event.data.level = 20;
          control.value = 20;
          output.innerText = 20 * 100;
          years.innerText = 20 * 80;
          raster.changed();
        }, 1500)
      }
      event.data.level = control.value;
      init = false;
    });

  }, [props, raster]);

  return (
    <div style={{margin: 20}}>
      <div id="map"></div>
      <div className='slider'>
        <input id="level" style={{fontSize: 50, margin: 20}} type="range" min="0" max="20" defaultValue='0'/>
        <br />
        <span style={{display: 'inline', fontSize: 35}}>In   <span id="years" style={{color: 'red'}}></span> years the water will rise <span id="output" style={{color: 'red'}}></span> centimeters!</span>
      </div>
    </div>
  );
}

export default MapScreen;