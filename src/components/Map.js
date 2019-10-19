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
  useEffect(() => {
    var lat = props.location.state['crd'].latitude;
    var lon = props.location.state['crd'].longitude;
    console.log( lat + " " + lon );
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
          extent: map.getView().calculateExtent(map.getSize()),   
          zoom: 5
        })
    );
    
    const control = document.getElementById('level');
    const output = document.getElementById('output');

    control.addEventListener('input', function() {
      output.innerText = control.value;
      raster.changed();
    });

    output.innerText = control.value;

    raster.on('beforeoperations', function(event) {
      event.data.level = control.value;
    });

  }, [props]);

  return (
    <div>
        <div id="map"></div>
        <p>Water level: </p><span id="output"></span> m
        <input id="level" type="range" min="0" max="300" defaultValue='0'/>
    </div>
  );
}

export default MapScreen;