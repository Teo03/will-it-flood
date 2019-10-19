import React from 'react';
import h2o from '../images/h2o.png'
import cfc from '../images/cfc.png'
import co2 from '../images/co2.png'
import n2o from '../images/n2o.png'
import ch4 from '../images/ch4.png'

function Causes() {
  return (
      <div style={{padding: 150}} style={{textAlign: "center"}}>
          <div className='text-center'>

            <div className="w3-container" id="services" style={{marginTop: 75}}>
            <h1 className="w3-xxxlarge w3-text-blue"><b>CAUSES</b></h1>
            <hr style={{width: 50, border: 5 }} className="w3-round" />
            </div>
            </div>
            <div className="w3-container" id="services" style={{marginTop: 75}}>
                <h1 className="w3-xxxlarge w3-text-blue"><b>Water vapor</b></h1>
                <hr style={{width: 50, border: 5 }} className="w3-round" />
            
                <p style={{fontSize: 25, padding: 30, margin: -25}}>•  Vaporized water. Water vapor increases as the Earth's atmosphere warms, but so does the possibility of clouds and precipitation, making these some of the most important feedback mechanisms to the greenhouse effect.
                </p>
                <img style={{margin: 20}} src={h2o} alt="compound" />;
                

            </div>
            
            <div className="w3-container" id="designers" style={{marginTop: 75}}>
                <h1 className="w3-xxxlarge w3-text-blue"><b>Nitrous oxide</b></h1>
                <hr style={{width: 50, border: 5 }} className="w3-round"/>
                
                <p style={{fontSize: 25, padding: 30, margin: -25}}>Nitrous oxide. A powerful greenhouse gas produced by soil cultivation practices, especially the use of commercial and organic fertilizers, fossil fuel combustion, nitric acid production, and biomass burning
                </p>
                <img style={{margin: 20}} src={n2o} alt="compound" />;
            
            </div>

            
            <div className="w3-container" id="packages" style={{marginTop: 75}}>
                <h1 className="w3-xxxlarge w3-text-blue"><b>Carbor</b></h1>
                <hr style={{width: 50, border: 5 }} className="w3-round"/>
                <p style={{fontSize: 25, padding: 30, margin: -25}}>Carbon dioxide (CO2). A minor but very important component of the atmosphere, carbon dioxide is released through natural processes such as respiration and volcano eruptions and through human activities such as deforestation, land use changes, and burning fossil fuels. Humans have increased atmospheric CO2 concentration by more than a third since the Industrial Revolution began. This     is the most important long-lived "forcing" of climate change.</p>
                <img style={{margin: 20}} src={co2} alt="compound" />;
            </div>
            <div className="w3-container" id="packages" style={{marginTop: 75}}>
                <h1 className="w3-xxxlarge w3-text-blue"><b>Methan</b></h1>
                <hr style={{width: 50, border: 5 }} className="w3-round"/>
                <p style={{fontSize: 25, padding: 30, margin: -25}}>•  Methane. A hydrocarbon gas produced both through natural sources and human activities, including the decomposition of wastes in landfills, agriculture, and especially rice cultivation, as well as ruminant digestion and manure management associated with domestic livestock. On a molecule-for-molecule basis, methane is a far more active greenhouse gas than carbon dioxide, but also one which is much less abundant in the atmosphere.</p>
                <img style={{margin: 20}} src={ch4} alt="compound" />;
            </div>
            
            
            <div className="w3-container" id="packages" style={{marginTop: 75}}>
                <h1 className="w3-xxxlarge w3-text-blue"><b>Chlorofluorocarbons</b></h1>
                <hr style={{width: 50, border: 5 }} className="w3-round"/>
                <p style={{fontSize: 25, padding: 30, margin: -25}}>Chlorofluorocarbons (CFCs). Synthetic compounds entirely of industrial origin used in a number of applications, but now largely regulated in production and release to the atmosphere by international agreement for their ability to contribute to destruction of the ozone layer. They are also greenhouse gases.</p>
                <img style={{margin: 20}} src={cfc} alt="compound" />;
            </div>
            
            <hr/>
            <div className="w3-container" id="packages" style={{marginTop: 75}}>
                <h1 className="w3-xxxlarge w3-text-blue"><b>Other Contributing Factors to the Rising of Ocean Temperatures</b></h1>
                <hr style={{width: 50, border: 5 }} className="w3-round" />
                <p style={{fontSize: 25, padding: 30, margin: -25}}>
            We all know that the main component of the ocean is the ocean water. The ocean water is a source of life for the marine creatures. It also maintains the overall temperature of the earth’s climate. While doing all that, the ocean tries very hard to maintain its own water temperature. But can ocean temperature rise? It definitely can and we will tell you how. Beside global warming, the changing climate and the greenhouse effect, below are a few more causes for the rising of ocean temperatures.
            </p>
            <p style={{fontSize: 25, padding: 30, margin: -25}}>
            1.<b> El Nino</b><br />
            El Nino is a severe climate condition that can potentially increase the ocean water. The temperature of the ocean is able to rise up between 3 to 5 degrees when El Nino happens. For more information visit: https://en.wikipedia.org/wiki/El_Ni%C3%B1o
            </p>
            <br />
            <p style={{fontSize: 25, padding: 30, margin: -25}}><b>2.La Nina</b> 
            La Nina functions in the same way as El Nino. It is also able to raise the sea temperature up to 6 degrees. La Nina is a weather fluctuation in the climate that affects the atmospheric pressure. Those two work together and cause an increase in the temperature. For more information visit: https://en.wikipedia.org/wiki/La_Ni%C3%B1a
            </p>
            <br />
            <p style={{fontSize: 25, padding: 30, margin: -25}}><b>3. Cars</b> 
            Cars release harmful gases due to the fossil fuels that they use. When there are a lot of people using cars on land, these gasses end up in the air. The air then travels down over the ocean. The ocean will receive these toxic gasses and damages the ocean’s ability to maintain its normal temperature.</p>
            <br />
            <p style={{fontSize: 25, padding: 30, margin: -25}}><b>4. Water Pollution</b> Water pollution is a highly serious condition where the ocean water can get affected too. The polluted water from the rivers in the people’s home can flow right into the ocean. This majorly cause ocean acidification and ocean pollution  but it can also cause the temperature of the ocean to rise as a negative reaction to the pollution.
            </p>

        </div>
      </div>
  );
}

export default Causes;
