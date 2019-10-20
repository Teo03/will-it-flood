(this["webpackJsonpwill-it-flood"]=this["webpackJsonpwill-it-flood"]||[]).push([[0],{25:function(e,t,a){e.exports=a.p+"static/media/logo.7f9904e2.png"},26:function(e,t,a){e.exports=a.p+"static/media/h2o.9137fa03.png"},27:function(e,t,a){e.exports=a.p+"static/media/cfc.a7910652.png"},28:function(e,t,a){e.exports=a.p+"static/media/co2.ae4c8813.png"},29:function(e,t,a){e.exports=a.p+"static/media/n2o.d7900490.png"},30:function(e,t,a){e.exports=a.p+"static/media/ch4.eb23556d.png"},34:function(e,t,a){e.exports=a(47)},39:function(e,t,a){},47:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(24),s=a.n(i),o=(a(39),a(15)),l=a(12),c=a(32),h=["Not only are sea levels rising; the rate of their rise is rising.","Global sea levels have already risen by 8 inches since 1900, that's the fastest sea-level rise Earth has experienced in 3,000 years.","Every vertical inch of sea-level rise moves the ocean 50 to 100 inches.","The rising of sea levels is already causing flood problems in many big coastal cities.","\u201cSea levels could rise another 1.3 meters in the next 80 years.","Up to 216 million people currently live on land that will be below sea level or regular flood levels by 2100.","Sea-level rise can contaminate water used for drinking and irrigation.","Sea-level rise can threaten coastal plant and animal life.","Global flood damage for large coastal cities could cost $1 trillion a year if cities don't take steps to adapt.","It's too late to stop sea-level rise \u2014 but not too late to save lives from it.","If the entire Greenland's Jakobshavn ice sheet melted, sea levels would rise about 6 meters, or 20 feet.","Rising sea levels could slow down Earth's rotation.","Sea levels are rising because of climate change.","Sea level varies by region in response to many factors, from gravity to land motion to rainfall.","Ice loss near the poles from glaciers and ice sheets is one of the most significant contributions to global sea level rise.","Greenland\u2019s contribution to global sea-level rise is the largest, and increases every decade.","Antartic's ice loss is equal to 127 gigatons per year.","Greenland's ice loss is equal to 286 gigatons per year.","Much of the ice lost from ice sheets comes from a process called calving where ice erodes, breaks off, and flows rapidly into the ocean. ","Should all the glaciers, icebergs, and icesheets melt in an instant, sea levels would rise 262 feet. This is enough to fully submerge most coastal cities in the world.","The early 1980s saw the very first attempt to measure ice sheets using satellite radar altimetry, with observations only of limited parts of Greenland and Antarctica.","To determine to what extent Greenland\u2019s glaciers are being melted from underneath NASA began a mission called OMG - Oceans Melting Greenland","Ice sheet modeling is critical to any projection of future sea level rise, but remains in its early stages."];var m=function(e){var t=Object(n.useState)(h[Math.floor(Math.random()*h.length)]),a=Object(c.a)(t,2),i=a[0],s=a[1];function o(t){var a={latitude:t.coords.latitude,longitude:t.coords.longitude};e.history.push("/map",{crd:a})}return r.a.createElement("div",{className:"center w3-center"},r.a.createElement("div",{className:"w3-center"},r.a.createElement("h1",{className:"w3-xxxlarge"},"Will it Flood?"),r.a.createElement("div",{className:"w3-padding-32"},r.a.createElement("button",{className:"w3-btn w3-xlarge",style:{fontWeight:900,backgroundColor:"#22A3B5",color:"white"},onClick:function(){navigator.geolocation?navigator.geolocation.getCurrentPosition(o):alert("Geolocation not supported.")}},"Search for my region"))),r.a.createElement("div",null,r.a.createElement("h1",{className:"w3-center w3-xxlarge w3-animate-bottom"},"Random Fact",r.a.createElement("i",{onClick:function(){return s(h[Math.floor(Math.random()*h.length)])},style:{marginLeft:13},className:"fa fa-refresh"})),r.a.createElement("h1",{className:"w3-center w3-xlarge w3-animate-bottom",style:{color:"green",margin:50}},i)))},d=a(40);a(41);var u=d.Map,g=d.View,f=d.layer.Image,p=d.layer.Tile,w=d.proj.fromLonLat,v=d.source.Raster,b=d.source.TileJSON,y=d.source.XYZ;var E=function(e){var t=new y({url:"https://api.mapbox.com/v4/mapbox.terrain-rgb/{z}/{x}/{y}.pngraw?access_token=pk.eyJ1IjoidGVvMDMwOCIsImEiOiJjazF1d2l5cWcwOWE4M2NvNjFsajVhcHpwIn0.MmkaCjrSsN0s7KRdhF0gKw",crossOrigin:"anonymous"}),a=new v({sources:[t],operation:function(e,t){var a=e[0];return a[3]&&(.1*(256*a[0]*256+256*a[1]+a[2])-1e4<=t.level?(a[0]=0,a[1]=115,a[2]=182,a[3]=230):a[3]=0),a}});return Object(n.useEffect)((function(){var t=e.location.state.crd.latitude,n=e.location.state.crd.longitude;new u({target:"map",controls:d.control.defaults({attribution:!1}),layers:[new p({source:new b({url:"https://api.tiles.mapbox.com/v4/mapbox.streets.json?secure&access_token=pk.eyJ1IjoidGVvMDMwOCIsImEiOiJjazF1d2l5cWcwOWE4M2NvNjFsajVhcHpwIn0.MmkaCjrSsN0s7KRdhF0gKw",crossOrigin:"anonymous"})}),new f({opacity:.8,source:a})],view:new g({center:w([21.2,41.23]),zoom:8})}).setView(new g({center:d.proj.fromLonLat([n,t]),zoom:7}));var r=document.getElementById("level"),i=document.getElementById("output"),s=document.getElementById("years"),o=!0;r.addEventListener("input",(function(){i.innerText=100*r.value,s.innerText=80*r.value,a.changed(),o=!1})),i.innerText=100*r.value,s.innerText=r.value,a.on("beforeoperations",(function(e){o&&(e.data.level=2,r.value=2,i.innerText=200,s.innerText=160,a.changed()),e.data.level=r.value,o=!1}))}),[e,a]),r.a.createElement("div",{style:{margin:20}},r.a.createElement("div",{id:"map"}),r.a.createElement("div",{className:"slider"},r.a.createElement("input",{id:"level",style:{fontSize:50,marginTop:20},type:"range",min:"0",max:"250",defaultValue:"0"}),r.a.createElement("p",{style:{fontSize:16.5}},"Move the slider above to change the value"),r.a.createElement("br",null),r.a.createElement("span",{style:{display:"inline",fontSize:35}},"In   ",r.a.createElement("span",{id:"years",style:{color:"red"}})," years the water will rise ",r.a.createElement("span",{id:"output",style:{color:"red"}})," centimeters!")))},x=a(25),N=a.n(x);var S=function(){return r.a.createElement("div",null,r.a.createElement("header",{className:"w3-container w3-center"},r.a.createElement("img",{style:{margin:20},src:N.a,alt:"logo"}),r.a.createElement("h1",{className:"w3-margin w3-jumbo"},"About us"),r.a.createElement("p",{style:{fontSize:20},className:"w3-xlarge"},"Planet Earth Protocol")),r.a.createElement("div",{className:"w3-row-padding w3-padding-64 w3-container"},r.a.createElement("div",{className:"w3-content"},r.a.createElement("div",{className:"w3-twothird"},r.a.createElement("h1",null,"Our Website"),r.a.createElement("p",{style:{fontSize:20},className:"w3-text-black"},"The rising of sea levels is indeed true. It\u2019s mainly due to two primary factors, thermal expansion of the oceans and seas, and the melting of ice sheets and glaciers. Both of these factors are linked to global warming.")),r.a.createElement("div",{className:"w3-third w3-center"}))),r.a.createElement("div",{className:"w3-row-padding w3-light-grey w3-padding-64 w3-container"},r.a.createElement("div",{className:"w3-content"},r.a.createElement("div",{className:"w3-third w3-center"}),r.a.createElement("div",{className:"w3-twothird"},r.a.createElement("h1",null,"Our Mission"),r.a.createElement("p",{style:{fontSize:20},className:"w3-text-black"},"Our goal is to help people around the world by providing them with information concerning their current state in relation to the rising of sea levels. Our users are informed of the current and future state of their whereabouts. Many lives are at risk due to the rising of sea levels, our program is designed to help the world and prevent any possible future casualties.")))),r.a.createElement("div",{className:"w3-row-padding w3-padding-64 w3-container"},r.a.createElement("div",{className:"w3-content"},r.a.createElement("div",{className:"w3-twothird"},r.a.createElement("h1",null,"Who We Are"),r.a.createElement("p",{style:{fontSize:20},className:"w3-text-black"},"Planet Earth Protocol is a page created and designed by a team of five people. All of them high schoolers with a mission to save lives. Their names are",r.a.createElement("b",null," Stefanija Cvetanovska Teodor Bogoeski, Marija Velkovska, Kristijan Krstevski and Sofija Tasevska."))),r.a.createElement("div",{className:"w3-third w3-center"}))))},k=a(26),T=a.n(k),z=a(27),C=a.n(z),A=a(28),I=a.n(A),O=a(29),j=a.n(O),M=a(30),W=a.n(M);var F=function(){return r.a.createElement("div",{style:{padding:150,textAlign:"center"}},r.a.createElement("div",{className:"text-center"},r.a.createElement("div",{className:"w3-container",id:"services"},r.a.createElement("h1",{className:"w3-xxxlarge w3-text-blue"},r.a.createElement("b",null,"CAUSES")),r.a.createElement("hr",{style:{width:50,border:5},className:"w3-round"}))),r.a.createElement("div",{className:"w3-container",id:"services",style:{marginTop:75}},r.a.createElement("h1",{className:"w3-xxxlarge w3-text-blue"},r.a.createElement("b",null,"Water vapor")),r.a.createElement("hr",{style:{width:50,border:5},className:"w3-round"}),r.a.createElement("p",{style:{fontSize:25,padding:30,margin:-25}},"\u2022 Vaporized water. Water vapor increases as the Earth's atmosphere warms, but so does the possibility of clouds and precipitation, making these some of the most important feedback mechanisms to the greenhouse effect."),r.a.createElement("img",{style:{margin:20},src:T.a,alt:"compound"})),r.a.createElement("div",{className:"w3-container",id:"designers",style:{marginTop:75}},r.a.createElement("h1",{className:"w3-xxxlarge w3-text-blue"},r.a.createElement("b",null,"Nitrous oxide")),r.a.createElement("hr",{style:{width:50,border:5},className:"w3-round"}),r.a.createElement("p",{style:{fontSize:25,padding:30,margin:-25}},"Nitrous oxide. A powerful greenhouse gas produced by soil cultivation practices, especially the use of commercial and organic fertilizers, fossil fuel combustion, nitric acid production, and biomass burning"),r.a.createElement("img",{style:{margin:20},src:j.a,alt:"compound"})),r.a.createElement("div",{className:"w3-container",id:"packages",style:{marginTop:75}},r.a.createElement("h1",{className:"w3-xxxlarge w3-text-blue"},r.a.createElement("b",null,"Carbon")),r.a.createElement("hr",{style:{width:50,border:5},className:"w3-round"}),r.a.createElement("p",{style:{fontSize:25,padding:30,margin:-25}},'Carbon dioxide (CO2). A minor but very important component of the atmosphere, carbon dioxide is released through natural processes such as respiration and volcano eruptions and through human activities such as deforestation, land use changes, and burning fossil fuels. Humans have increased atmospheric CO2 concentration by more than a third since the Industrial Revolution began. This is the most important long-lived "forcing" of climate change.'),r.a.createElement("img",{style:{margin:20},src:I.a,alt:"compound"})),r.a.createElement("div",{className:"w3-container",id:"packages",style:{marginTop:75}},r.a.createElement("h1",{className:"w3-xxxlarge w3-text-blue"},r.a.createElement("b",null,"Methane")),r.a.createElement("hr",{style:{width:50,border:5},className:"w3-round"}),r.a.createElement("p",{style:{fontSize:25,padding:30,margin:-25}},"\u2022 Methane. A hydrocarbon gas produced both through natural sources and human activities, including the decomposition of wastes in landfills, agriculture, and especially rice cultivation, as well as ruminant digestion and manure management associated with domestic livestock. On a molecule-for-molecule basis, methane is a far more active greenhouse gas than carbon dioxide, but also one which is much less abundant in the atmosphere."),r.a.createElement("img",{style:{margin:20},src:W.a,alt:"compound"})),r.a.createElement("div",{className:"w3-container",id:"packages",style:{marginTop:75}},r.a.createElement("h1",{className:"w3-xxxlarge w3-text-blue"},r.a.createElement("b",null,"Chlorofluorocarbons")),r.a.createElement("hr",{style:{width:50,border:5},className:"w3-round"}),r.a.createElement("p",{style:{fontSize:25,padding:30,margin:-25}},"Chlorofluorocarbons (CFCs). Synthetic compounds entirely of industrial origin used in a number of applications, but now largely regulated in production and release to the atmosphere by international agreement for their ability to contribute to destruction of the ozone layer. They are also greenhouse gases."),r.a.createElement("img",{style:{margin:20},src:C.a,alt:"compound"})),r.a.createElement("hr",null),r.a.createElement("div",{className:"w3-container",id:"packages",style:{marginTop:75}},r.a.createElement("h1",{className:"w3-xxxlarge w3-text-blue"},r.a.createElement("b",null,"Other Contributing Factors to the Rising of Ocean Temperatures")),r.a.createElement("hr",{style:{width:50,border:5},className:"w3-round"}),r.a.createElement("p",{style:{fontSize:25,padding:30,margin:-25}},"We all know that the main component of the ocean is the ocean water. The ocean water is a source of life for the marine creatures. It also maintains the overall temperature of the earth\u2019s climate. While doing all that, the ocean tries very hard to maintain its own water temperature. But can ocean temperature rise? It definitely can and we will tell you how. Beside global warming, the changing climate and the greenhouse effect, below are a few more causes for the rising of ocean temperatures."),r.a.createElement("p",{style:{fontSize:25,padding:30,margin:-25}},"1.",r.a.createElement("b",null," El Nino"),r.a.createElement("br",null),"El Nino is a severe climate condition that can potentially increase the ocean water. The temperature of the ocean is able to rise up between 3 to 5 degrees when El Nino happens. For more information visit: https://en.wikipedia.org/wiki/El_Ni%C3%B1o"),r.a.createElement("br",null),r.a.createElement("p",{style:{fontSize:25,padding:30,margin:-25}},r.a.createElement("b",null,"2.La Nina"),r.a.createElement("br",null),"La Nina functions in the same way as El Nino. It is also able to raise the sea temperature up to 6 degrees. La Nina is a weather fluctuation in the climate that affects the atmospheric pressure. Those two work together and cause an increase in the temperature. For more information visit: https://en.wikipedia.org/wiki/La_Ni%C3%B1a"),r.a.createElement("br",null),r.a.createElement("p",{style:{fontSize:25,padding:30,margin:-25}},r.a.createElement("b",null,"3. Cars"),r.a.createElement("br",null),"Cars release harmful gases due to the fossil fuels that they use. When there are a lot of people using cars on land, these gasses end up in the air. The air then travels down over the ocean. The ocean will receive these toxic gasses and damages the ocean\u2019s ability to maintain its normal temperature."),r.a.createElement("br",null),r.a.createElement("p",{style:{fontSize:25,padding:30,margin:-25}},r.a.createElement("b",null,"4. Water Pollution"),r.a.createElement("br",null)," Water pollution is a highly serious condition where the ocean water can get affected too. The polluted water from the rivers in the people\u2019s home can flow right into the ocean. This majorly cause ocean acidification and ocean pollution but it can also cause the temperature of the ocean to rise as a negative reaction to the pollution.")))};var G=function(){return r.a.createElement("div",{style:{padding:150,textAlign:"center"}},r.a.createElement("div",{className:"text-center"},r.a.createElement("div",{className:"w3-container",id:"about"},r.a.createElement("div",{className:"w3-content",style:{maxWidth:700}},r.a.createElement("div",{className:"w3-container",id:"services"},r.a.createElement("h1",{className:"w3-xxxlarge w3-text-blue"},r.a.createElement("b",null,"EFFECTS")),r.a.createElement("hr",{style:{width:50,border:5},className:"w3-round"})),r.a.createElement("div",{className:"w3-container",id:"services",style:{marginTop:75}},r.a.createElement("h1",{className:"w3-xxxlarge w3-text-blue"},r.a.createElement("b",null,"The Rising Of Sea Levels")),r.a.createElement("hr",{style:{width:50,border:5},className:"w3-round"})),r.a.createElement("p",{style:{fontSize:20}},"Global climate change involves the rising of sea level around the world. This is driven by two primary factors: the thermal expansion of water as it heats up, and the melting of ice at the poles increasing the amount of liquid water in the oceans. The oceans currently rise at a rate of slightly more than three millimeters each year."),r.a.createElement("p",{style:{fontSize:20}},"Approximately 40% of the entire human population lives in coastal areas, and eight of the ten largest cities in the world are located on the coast. As sea level continues to rise, these coastal areas will face increasingly severe impacts from hurricanes, storm surge, and flooding in general, affecting billions of people."),r.a.createElement("p",{style:{fontSize:20}},"Although this issue is one of the first that comes to mind when considering the effects of climate change, it is difficult to envision the effects of oceans rising by less than a centimeter each year."),r.a.createElement("hr",null),r.a.createElement("div",{className:"w3-container",id:"services",style:{marginTop:75}},r.a.createElement("h1",{className:"w3-xxxlarge w3-text-blue"},r.a.createElement("b",null,"The Effects Of Climate Change")),r.a.createElement("hr",{style:{width:50,border:5},className:"w3-round"})),r.a.createElement("p",{style:{fontSize:20}},"Global climate change has already had observable effects on the environment. Glaciers have shrunk, ice on rivers and lakes is breaking up earlier, plant and animal ranges have shifted and trees are flowering sooner."),r.a.createElement("p",{style:{fontSize:20}},"Effects that scientists had predicted in the past would result from global climate change are now occurring: loss of sea ice, accelerated sea level rise and longer, more intense heat waves."),r.a.createElement("p",{style:{fontSize:20}},"Scientists have high confidence that global temperatures will continue to rise for decades to come, largely due to greenhouse gases produced by human activities. The Intergovernmental Panel on Climate Change (IPCC), which includes more than 1,300 scientists from the United States and other countries, forecasts a temperature rise of 2.5 to 10 degrees Fahrenheit over the next century."),r.a.createElement("p",{style:{fontSize:20}},"According to the IPCC, the extent of climate change effects on individual regions will vary over time and with the ability of different societal and environmental systems to mitigate or adapt to change."),r.a.createElement("p",{style:{fontSize:20}},"The IPCC predicts that increases in global mean temperature of less than 1.8 to 5.4 degrees Fahrenheit (1 to 3 degrees Celsius) above 1990 levels will produce beneficial impacts in some regions and harmful ones in others. Net annual costs will increase over time as global temperatures increase."),r.a.createElement("p",{style:{fontSize:20}},'"Taken as a whole," the IPCC states, "the range of published evidence indicates that the net damage costs of climate change are likely to be significant and to increase over time."'),r.a.createElement("hr",null),r.a.createElement("div",{className:"w3-container",id:"services",style:{marginTop:75}},r.a.createElement("h1",{className:"w3-xxxlarge w3-text-blue"},r.a.createElement("b",null,"Rising Sea Levels: Effects")),r.a.createElement("hr",{style:{width:50,border:5},className:"w3-round"})),r.a.createElement("p",{style:{fontSize:20}},"It\u2019s true that the global sea level has been rising in the last two decades. The satellite record since 1993 has revealed that the sea level was above the 1993 average in 2014 and likely rise at higher rates in the coming years, posing a huge threat to the environment and the living beings inhabiting it. The rapid growth in science and technology has led to the rise in carbon dioxide and carbon monoxide emissions into the atmosphere, deteriorating our environment and ecology at a significant pace."),r.a.createElement("p",{style:{fontSize:20}},"According to latest reports, it has been estimated that the world would see a sea level rise of around 2.3 meters for each degree Celsius of temperature rise within the next two thousand years. Researchers are also suggested that the sea level rise in some locations would be higher from that of the global average because of local factors including subsidence, the difference in ocean currents, erosion, and variations in land height, among others. However, the increasing sea level will see deadly storms that enter inland than they did earlier, putting the lives of every single living being on earth into risk."),r.a.createElement("hr",null),r.a.createElement("p",{style:{fontSize:20}},"These rising sea levels pose a major threat to island nations and coastal areas meaning that these areas could be swamped and submerged by water anytime in the future. In countries like the United States, where almost 40% of the population resides in coastal areas, the flooding due to sea-level rise is expected to create adverse effects. Studies have suggested that the frequency of disruptive flooding in the region is expected to increase from 300% to 900% compared to the frequency recorded in fifty years ago. In order to invite the global attention to such a threat, the Indian Ocean island nation the Maldives had conducted the world\u2019s first underwater cabinet meeting in 2009. This island nation\u2019s 350,000 inhabitants are reportedly residing on 1,192 coral islands, which are located an average of only 2.1m above the sea level."),r.a.createElement("p",{style:{fontSize:20}},"Additionally, because of global warming and the resultant rising sea levels, there is a threat of extinction of several types of plants and animals which need and thrive only in the cold climate. Animals like the polar bear and penguins essentially need the coldness for their existence and due to our continuous abuse of carbon dioxide and monoxide gas, are the first ones to face the possibilities of a sure-shot extinction. Besides these, the rise in sea level would also make an impact on the lives on beaches. The presence of more saltwater on the shores will disrupt the ecosystem, resulting in the vanishing of different kinds of plants. In addition to it would make to the soil and plants, the wildlife on the beaches would also be damaged by the rapid changes in the climate conditions."),r.a.createElement("p",{style:{fontSize:20}},"And if these animals are facing the threat of extinction, then humans living in coastal areas and island nations also face the threat of getting submerged in case a deluge happens. Rising sea levels could cause the water levels to increase and invade in the residential areas thus causing a lot of problem to the locales. And unlike other natural calamities, where migration could solve problems, in the case of rising sea levels and the expectant troubles, migration to other parts of the world will be futile because every land form in the globe is bordered by in one way or the other."),r.a.createElement("p",{style:{fontSize:20}},"Since around 71% of the Earth\u2019s surface is water-covered, one of the biggest crisis that human and other beings on earth would face is the contamination of drinking water. Higher sea levels mean the surge of to farther inland areas and contaminating drinking water sources. Similarly, the contamination of freshwater sources would also affect irrigation and farming, eventually leading us to a food crisis. And, the cost associated with the seawater desalination would make an unsustainable practice to deal with the crisis."),r.a.createElement("p",{style:{fontSize:20}},"One of the immediate impacts of the increasing sea level on the economy would be the threat posed the tourism industry. The frequent flooding and the destruction of beaches would break the backbone of the tourism industry. Recently in North Carolina, US, the local authorities had restricted coastal policymakers from using rising sea-level rise predictions to serve the economic interests of the region."),r.a.createElement("p",{style:{fontSize:20}},"Since the total concentration of the water-bodies being more than two-thirds of the earth, global warming and the rising sea levels are a serious problem that has to be tackled. A natural calamity like the Katrina or the Tsunami that hit the coasts of the South East Asian Nations is itself difficult to tackle. In a way, these calamities are restricted to just one part of the world, but because of rising sea levels, the whole world stands to lose ground at a single time. And this is a crisis that is occurring every day. Every day, little-by-little the glaciers in the Arctic and the Antarctic are melting thus giving way to rising sea levels and a little less chance to experience living for the future generation."),r.a.createElement("p",{style:{fontSize:20}},"At the present moment, most of us are worried about the extinction of the tigers and vultures, but with the development has led to an adverse effect on the environment, it has become evident that even our survival in the future has become questionable. But, whether human innovations can save the earth from an anticipated disaster remains controversial. Since there are more political and social factors playing roles in this, the result of such efforts is unpredictable. However, in line with the Paris climate accord, many countries across the world are working hard to cut greenhouse gases. We should all ensure that it is quite possible that if we try and change, we can put an end to the problem of global warming and rising sea levels. And since it is a question of need and wants, it becomes very important that we change and start to respect and preserve our ecology and environment."),r.a.createElement("hr",null),r.a.createElement("div",{className:"w3-container",id:"services",style:{marginTop:75}},r.a.createElement("h1",{className:"w3-xxxlarge w3-text-blue"},r.a.createElement("b",null,"Effects from Rising Ocean Temperatures")),r.a.createElement("hr",{style:{width:50,border:5},className:"w3-round"})),r.a.createElement("p",{style:{fontSize:20}},"You already know the causes now it is time to know the effects from rising ocean temperature which you can read below:"),r.a.createElement("p",{style:{fontSize:20}},"\u2022 Stronger Storms: Warmer oceans means stronger storms in the future. Different types of ocean such as hurricanes and cyclones feed off warm temperature. They gain their energy from ocean\u2019s warmth.",r.a.createElement("br",null),"\u2022 Higher Sea Level: As the ocean becomes hotter and hotter, it will spread out and cause a higher sea level. Rising ocean temperature is one of the causes of sea level rise.",r.a.createElement("br",null),"\u2022 Melting Ice: An increase in the ocean temperature will cause the ice in the ocean to melt at a faster rate than ever before.",r.a.createElement("br",null),"\u2022 Destruction of Ocean Habitat: Some habitats are vulnerable to ocean temperature such as coral reefs. Annually, many coral reefs experience bleaching due to rising temperature in the ocean.",r.a.createElement("br",null),"\u2022 Death to Marine Creatures: Both marine animals and plants are at a very high risk of death when they experience a rise in the ocean temperature. They are highly sensitive to the slight changes in ocean\u2019s condition. The destruction of ocean habitat due to warm ocean can also kill them off.",r.a.createElement("br",null),"\u2022 Loss of Land: Many lands used for human settlements and recreations will no longer exist due to warmer ocean temperature. As said before, warm temperature causes water to expand. All the water will take up most of the land that human use.")))))},R=a(61),B=a(64),L=a(62),P=a(63),q=Object(R.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}}));function V(){var e=q();return r.a.createElement("div",{className:e.root},r.a.createElement(B.a,{position:"static",style:{backgroundColor:"#1D8A99"}},r.a.createElement(L.a,null,r.a.createElement(P.a,{variant:"h6",className:e.title},r.a.createElement(o.b,{to:"/"},"Will it Flood?")),r.a.createElement(o.b,{to:"/about",style:{marginRight:20}},"About"),r.a.createElement(o.b,{to:"/causes",style:{marginRight:20}},"Causes"),r.a.createElement(o.b,{to:"/effects"},"Effects"))))}var H=function(){return r.a.createElement(o.a,{basename:"will-it-flood"},r.a.createElement(V,null),r.a.createElement("div",null,r.a.createElement(l.a,{path:"/",exact:!0,component:m}),r.a.createElement(l.a,{path:"/map",exact:!0,component:E}),r.a.createElement(l.a,{path:"/about",exact:!0,component:S}),r.a.createElement(l.a,{path:"/causes",exact:!0,component:F}),r.a.createElement(l.a,{path:"/effects",exact:!0,component:G})))};s.a.render(r.a.createElement(H,null),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.2d575823.chunk.js.map