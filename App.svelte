<script>
  import Navbar from "./Navbar.svelte"
  import Map from "./Map.svelte"
  import API from "./API.svelte"
  import Statistics from "./Statistics.svelte"
  import ByState from "./ByState.svelte"
  import Info from "./Info.svelte"
  import Contact from "./Contact.svelte"
  import { onMount } from "svelte";
  import { apiData } from './store.js';
  import { Pie } from 'svelte-chartjs';
  import State from './State.svelte'
  import { db } from './assets/js/firebase';
  import { collectionData } from 'rxfire/firestore';
  import { startWith } from 'rxjs/operators';
  import {  collection, doc, getDoc, setDoc } from "firebase/firestore";
  
  import {
     Chart as ChartJS,
     Title,
     Tooltip,
     Legend,
     ArcElement,
     CategoryScale,
   } from 'chart.js';
  
  
   ChartJS.register(Title, Tooltip, ArcElement, CategoryScale);
  
  
  const apiDataR = new Object;
  let current_state;
  let ReportedPiedata;
  let UnreportedPiedata;
  let ReportedBardata;
  let UnreportedBardata;
  let Homicidedata;
  let Arsondata;
  let LineReporteddata;
  let chartdata;
  let chartdataR;
  let ReportedCrime;
  let unreportedCrime;
  let popOut = false;
  let state_name;
  let state_abbr = "";
  let aggravated_assault;
  let arson;
  let burglary;
  let homicide;
  let enter = false;
  let larceny;
  let motor_vehicle_theft;
  let population;
  let property_crime;
  let rape_revised;
  let robbery;
  let violent_crime;
  let aggravated_assaultR;
  let arsonR;
  let burglaryR;
  let homicideR;
  let larcenyR;
  let motor_vehicle_theftR;
  let rape_revisedR;
  let robberyR;
  let OtherR;
  let Cords = {lat: 39, lng: -98.5};
  let docSnap;
  let totalReported;
  let totalUnreported;
  
  function Entersite(){
    enter = true;
    ChangeMap(0);
  }
  
     
     
    
  let states = ["AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA",
  "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI",
  "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND",
  "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA",
  "WA", "WV", "WI", "WY"]
  function convertState(stateAbbr) {
   switch (stateAbbr) {
     case 'AL':
       return 'Alabama';
     case 'AK':
       return 'Alaska';
     case 'AZ':
       return 'Arizona';
     case 'AR':
       return 'Arkansas';
     case 'CA':
       return 'California';
     case 'CO':
       return 'Colorado';
     case 'CT':
       return 'Connecticut';
     case 'DE':
       return 'Delaware';
     case 'FL':
       return 'Florida';
     case 'GA':
       return 'Georgia';
     case 'HI':
       return 'Hawaii';
     case 'ID':
       return 'Idaho';
     case 'IL':
       return 'Illinois';
     case 'IN':
       return 'Indiana';
     case 'IA':
       return 'Iowa';
     case 'KS':
       return 'Kansas';
     case 'KY':
       return 'Kentucky';
     case 'LA':
       return 'Louisiana';
     case 'ME':
       return 'Maine';
     case 'MD':
       return 'Maryland';
     case 'MA':
       return 'Massachusetts';
     case 'MI':
       return 'Michigan';
     case 'MN':
       return 'Minnesota';
     case 'MS':
       return 'Mississippi';
     case 'MO':
       return 'Missouri';
     case 'MT':
       return 'Montana';
     case 'NE':
       return 'Nebraska';
     case 'NV':
       return 'Nevada';
     case 'NH':
       return 'New Hampshire';
     case 'NJ':
       return 'New Jersey';
     case 'NM':
       return 'New Mexico';
     case 'NY':
       return 'New York';
     case 'NC':
       return 'North Carolina';
     case 'ND':
       return 'North Dakota';
     case 'OH':
       return 'Ohio';
     case 'OK':
       return 'Oklahoma';
     case 'OR':
       return 'Oregon';
     case 'PA':
       return 'Pennsylvania';
     case 'RI':
       return 'Rhode Island';
     case 'SC':
       return 'South Carolina';
     case 'SD':
       return 'South Dakota';
     case 'TN':
       return 'Tennessee';
     case 'TX':
       return 'Texas';
     case 'UT':
       return 'Utah';
     case 'VT':
       return 'Vermont';
     case 'VA':
       return 'Virginia';
     case 'WA':
       return 'Washington';
     case 'WV':
       return 'West Virginia';
     case 'WI':
       return 'Wisconsin';
     case 'WY':
       return 'Wyoming';
     case 'US':
       return 'National';
     default:
       return 'Unknown state abbreviation';
   }
  }
  async function AddState() {
   
    fetch("https://api.usa.gov/crime/fbi/cde/arrest/national/all?from=2020&to=2020&API_KEY=S50UdID1U9qFjosiD2h6SFRpg79KjcfD97cc3KYq")
  .then(response => response.json())
  .then(data => {
    ReportedCrime = 0;
  Object.assign(apiDataR, data);
  console.log(apiDataR["data"]); 

  aggravated_assaultR = apiDataR["data"][0]["Aggravated Assault"];
  arsonR = apiDataR["data"][0]["Arson"];
  burglaryR = apiDataR["data"][0]["Burglary"];
  homicideR = apiDataR["data"][0]["Murder and Nonnegligent Manslaughter"];
  larcenyR = apiDataR["data"][0]["Larceny - Theft"];
  motor_vehicle_theftR = apiDataR["data"][0]["Motor Vehicle Theft"];
  rape_revisedR = apiDataR["data"][0]["Rape"];
  robberyR = apiDataR["data"][0]["Robbery"];
  OtherR = apiDataR["data"][0]["All Other Offenses (Except Traffic)"]
  ReportedCrime = aggravated_assaultR+arsonR+burglaryR+homicideR+larcenyR+motor_vehicle_theftR+rape_revisedR+robberyR+OtherR;
  fetch("https://api.usa.gov/crime/fbi/cde/estimate/national?year=2020&API_KEY=S50UdID1U9qFjosiD2h6SFRpg79KjcfD97cc3KYq")
.then(response => response.json())
.then(data => {
      console.log(data);
  Object.assign(apiData, data);
  console.log(apiData[0]); 
  state_abbr  = apiData[0]["state_abbr"]  
  state_name = convertState(state_abbr)
  aggravated_assault = apiData[0]["aggravated_assault"]  
  arson = apiData[0]["arson"] 
  burglary = apiData[0]["burglary"] 
  homicide = apiData[0]["homicide"] 
  larceny = apiData[0]["larceny"] 
  motor_vehicle_theft = apiData[0]["motor_vehicle_theft"] 
  population = apiData[0]["population"] 
  property_crime = apiData[0]["property_crime"] 
  rape_revised = apiData[0]["rape_revised"] 
  robbery = apiData[0]["robbery"] 
  violent_crime = apiData[0]["violent_crime"] 
  AddtoFire();
});});
  
  }
  async function AddtoFire(){
    try {
   const docRef = await setDoc(doc(db, "States", "National"), {
     fullname: "National",
     element: "US",
     population: population,
     unreported_crime:
         {
           aggravated_assault: aggravated_assault,
           arson: arson,
           burglary: burglary,
           homicide: homicide,
           larceny: larceny,
           motor_vehicle_theft: motor_vehicle_theft,
           property_crime: property_crime,
           rape_revised: rape_revised,
           robbery: robbery,
           violent_crime: violent_crime
         },
     reported_crime:
     {
           aggravated_assaultR: aggravated_assaultR,
           arsonR: arsonR,
           burglaryR: burglaryR,
           homicideR: homicideR,
           larcenyR: larcenyR,
           motor_vehicle_theftR: motor_vehicle_theftR,
           rape_revisedR: rape_revisedR,
           robberyR: robberyR,
           OtherR: OtherR
       }
   
   });
  
  
   //console.log("Document written with ID: ", docRef.id);
   } catch (e) {
   console.error("Error adding document: ", e);
   }

  }
  async function GetState(state_name){
   try{
     const docRef = doc(db, "States", state_name);
     docSnap = await getDoc(docRef);
  
  
     if (docSnap.exists()) {
      
       current_state = docSnap.data();
     } else {
       // doc.data() will be undefined in this case
        console.log("No such document!");
        return "Success";
  }
  totalUnreported = 
  parseInt(current_state.unreported_crime.aggravated_assault) +
  parseInt(current_state.unreported_crime.arson) +
  parseInt(current_state.unreported_crime.burglary) +
  parseInt(current_state.unreported_crime.homicide) +
  parseInt(current_state.unreported_crime.motor_vehicle_theft) +
  parseInt(current_state.unreported_crime.rape_revised) +
  parseInt(current_state.unreported_crime.robbery);

  totalReported = 
  parseInt(current_state.reported_crime.aggravated_assaultR) +
  parseInt(current_state.reported_crime.arsonR) +
  parseInt(current_state.reported_crime.burglaryR) +
  parseInt(current_state.reported_crime.homicideR) +
  parseInt(current_state.reported_crime.larcenyR) +
  parseInt(current_state.reported_crime.motor_vehicle_theftR) +
  parseInt(current_state.reported_crime.rape_revisedR) +
  parseInt(current_state.reported_crime.robberyR) +
  parseInt(current_state.reported_crime.OtherR);

  
  
   }catch(e){
     console.error("Error adding document: ", e);
   }
  }
  function getStateCoordinates(stateName, callback) {
  // Create a geocoder object
  var geocoder = new google.maps.Geocoder();

  // Geocode the state's name to get its coordinates
  geocoder.geocode({ address: stateName }, function(results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
      // Get the latitude and longitude of the state's center
      var lat = results[0].geometry.location.lat();
      var lng = results[0].geometry.location.lng();

      // Return an object containing the latitude and longitude
      var coordinates = { lat: lat, lng: lng };
      
      // Call the callback function with the coordinates as an argument
      callback(coordinates);
    } else {
      // If geocoding failed, call the callback function with null as an argument
      callback(null);
    }
  });
}
  window.onload = function() { 
   states.forEach(element => {
     
    
     let state = document.getElementsByClassName("sm_state_"+element);
     for(let i = 0;i < 4; i++){
         state[i].onclick = function () {
          
             StateClick(element);
         }
        }
        
     let state_label = document.getElementsByClassName("sm_label_"+element);
     for(let i = 0;i < 4; i++){
     if(state_label[i]){
         state_label[i].onclick = function () {
           StateClick(element);
         }
       }
      }
    
   });
    
    
  };
  onMount(async () => {
   });
  async function StateClick(StateName){
    
     popOut = false;
     ReportedCrime = 0;
     unreportedCrime = 0;
     state_name = convertState(StateName)
     GetState(state_name).then(
       function(value) {
       
         
         chartdata = {
   labels: ['Reported Crime', 'Unreported Crime'],
   datasets: [
     {
       data: [totalReported, totalUnreported],
       backgroundColor: [
         '#FF5733',
         '#008080',
       ],
       hoverBackgroundColor: [
         '#FF5733',
         '#008080',
       ],
     },
   ],
  };
  
  
  UnreportedPiedata = {
   labels: ['Aggravated Assault', 'Arson', 'Burglary', 'Homicide', 'Larceny', 'Motor Vehicle Theft', 'Rape', 'Robbery'],
   datasets: [
     {
       data: [current_state.unreported_crime.aggravated_assault, current_state.unreported_crime.arson, 
       current_state.unreported_crime.burglary, current_state.unreported_crime.homicide, current_state.unreported_crime.larceny, 
       current_state.unreported_crime.motor_vehicle_theft, current_state.unreported_crime.rape_revised,
       robbery],
       backgroundColor: [
        "#4B0082", "#6A0DAD", "#7F00FF", "#8A2BE2", "#C71585", "#A569BD", "#BA55D3", "#9B59B6" 
       ],
       hoverBackgroundColor: [
        "#4B0082", "#6A0DAD", "#7F00FF", "#8A2BE2", "#C71585", "#A569BD", "#BA55D3", "#9B59B6" 
       ],
     },
   ],
  };
  ReportedPiedata = {
    labels: ['Aggravated Assault', 'Arson', 'Burglary', 'Homicide', 'Larceny', 'Motor Vehicle Theft', 'Rape', 'Robbery'],

    datasets: [
     {
       data: [current_state.reported_crime.aggravated_assaultR,
        current_state.reported_crime.arsonR, 
        current_state.reported_crime.burglaryR,
        current_state.reported_crime.homicideR,
        current_state.reported_crime.larcenyR, 
        current_state.reported_crime.motor_vehicle_theftR,
        current_state.reported_crime.rape_revisedR,
        current_state.reported_crime.robberyR],
       backgroundColor: [
        "#4B0082", "#6A0DAD", "#7F00FF", "#8A2BE2", "#C71585", "#A569BD", "#BA55D3", "#9B59B6" 
       ],
       hoverBackgroundColor: [
        "#4B0082", "#6A0DAD", "#7F00FF", "#8A2BE2", "#C71585", "#A569BD", "#BA55D3", "#9B59B6" 
       ],
     },
   ],
   labels: ['Aggravated Assault', 'Arson', 'Burglary', 'Homicide', 'Larceny', 'Motor Vehicle Theft', 'Rape', 'Robbery'],
  };

  UnreportedBardata = {
   labels: [current_state.fullname+" %", "National %"],
   datasets: [
     {
       data: [parseInt(((totalUnreported)/(totalUnreported+totalReported))*100), 52],
       backgroundColor: [
         "#1643d9", "#1643d9", "#1643d9", "#1643d9",
       ],
       hoverBackgroundColor: [
        "#1643d9", "#1643d9", "#1643d9", "#1643d9",
       ],
     },
   ],
  };
  ReportedBardata = {
    labels: [current_state.fullname+" %", "National %"],

    datasets: [
     {
       data: [parseInt(((totalReported)/(totalUnreported+totalReported))*100), 48],
       backgroundColor: [
         "#d91616", "#d91616", "#d91616", "#d91616",
       ],
       hoverBackgroundColor: [
        "#d91616", "#d91616", "#d91616", "#d91616",
       ],
     },
   ],
  
  };

  LineReporteddata = {
    labels: ['2016', '2017', '2018', '2019','2020','2021'],
   datasets: [
     {
       data: [1153022, 1199310, 1285606, 1283875, 1252399, 1250393, 1313105,  ],
       backgroundColor: [
        "#000000"
       ],
       hoverBackgroundColor: [
        "#fad505", "#0e9905"
       ],
     },
   ],
  };
 
  Homicidedata = {
    labels: ['Homicide Reported', 'Homicide Unreported'],
   datasets: [
     {
       data: [current_state.unreported_crime.homicide, current_state.reported_crime.homicideR ],
       backgroundColor: [
        "#fad505", "#0e9905"
       ],
       hoverBackgroundColor: [
        "#fad505", "#0e9905"
       ],
     },
   ],
  };
  Arsondata = {
    labels: ['Arson Reported', 'Arson Unreported'],

    datasets: [
     {
       data: [
        current_state.unreported_crime.arson,
        current_state.reported_crime.arsonR 
        ],
       backgroundColor: [
        "#FFC0CB", "#0096FF"
       ],
       hoverBackgroundColor: [
        "#FFC0CB", "#0096FF"
       ],
     },
   ],
   
  };
  getStateCoordinates(state_name, function(coordinates) {
  if (coordinates) {
    // If coordinates were retrieved successfully, do something with them
    Cords = {lat: parseFloat(coordinates.lat.toFixed(1)), lng: parseFloat(coordinates.lng.toFixed(1))};
   
  } else {
    // If geocoding failed, handle the error
    console.log("Error: Could not retrieve coordinates");
  }
});
  
  
       },
       function(error) {
         console.log("failure")
       }
     );
    
  
  
  
  
  //AddState();
  
  popOut = true;
  document.getElementById("NoDataMap_outer").onclick = function (){
     popOut = false
  }
  document.getElementById("UnreportedMap_outer").onclick = function (){
     popOut = false
  }
  document.getElementById("ReportedMap_outer").onclick = function (){
     popOut = false
  }
  document.getElementById("TotalMap_outer").onclick = function (){
     popOut = false
  }
    
  }
  
  
  
  
  state_abbr=String(state_abbr);
  let Page = 0;
  let MapChocie = 2;
  function ChangeMap(x){
    MapChocie = x;
    if(MapChocie==0){
      document.getElementById("NoDataMap").style.display = "flex";
      document.getElementById("ReportedMap").style.display = "none";
      document.getElementById("UnreportedMap").style.display = "none";
      document.getElementById("TotalMap").style.display = "none";

    }else if(MapChocie==1){
      document.getElementById("ReportedMap").style.display = "flex";
      document.getElementById("NoDataMap").style.display = "none";
      document.getElementById("UnreportedMap").style.display = "none";
      document.getElementById("TotalMap").style.display = "none";
    }else if(MapChocie==2){
      document.getElementById("UnreportedMap").style.display = "flex";
      document.getElementById("ReportedMap").style.display = "none";
      document.getElementById("NoDataMap").style.display = "none";
      document.getElementById("TotalMap").style.display = "none";
    }else if(MapChocie==3){
      document.getElementById("TotalMap").style.display = "flex";
      document.getElementById("UnreportedMap").style.display = "none";
      document.getElementById("ReportedMap").style.display = "none";
      document.getElementById("NoDataMap").style.display = "none";
    }
    
  }
  
  async function ChangePage(x){
     
    
     
     popOut = false;
     Page = x;
     if(Page != 0){
      document.getElementById("TotalMap").style.display = "none";
      document.getElementById("UnreportedMap").style.display = "none";
      document.getElementById("ReportedMap").style.display = "none";
      document.getElementById("NoDataMap").style.display = "none";
     }else{
      document.getElementById("UnreportedMap").style.display = "flex";
     }
     if(Page == 1){
        
        await StateClick("US");
        Cords = {lat: 39, lng: -98.5};
        popOut = false;
        
     }
     
   }
  
   

  </script>
  
  <main>
    {#if !enter}
  <div class="landing" >
      <h1>Welcome to The Crime Map! Read the info page and have fun!</h1>
        <button on:click={() => Entersite()}>Enter</button>
  </div>
  {/if}
  <Navbar ChangeMap={(x) => ChangeMap(x)} bind:MapChocie={MapChocie} ChangePage={(x) => ChangePage(x)} bind:Page={Page}/>
   {#if Page == 1}
   <State 
   bind:state_name={state_name} 
   bind:ReportedPiedata={ReportedPiedata}
   bind:UnreportedPiedata={UnreportedPiedata} 
   bind:ReportedBardata={ReportedBardata}
   bind:UnreportedBardata={UnreportedBardata} 
   bind:Arsondata={Arsondata}
   bind:Homicidedata={Homicidedata} 
   bind:LineReporteddata={LineReporteddata}
   bind:Cords={Cords}/>
   {:else if Page == 2}
       <ByState/>
   {:else if Page == 3}
       <Info/>
   {:else if Page == 4}
       <Contact/>
    {:else if Page == 5}
       <State 
       bind:state_name={state_name} 
       bind:ReportedPiedata={ReportedPiedata}
       bind:UnreportedPiedata={UnreportedPiedata} 
       bind:ReportedBardata={ReportedBardata}
       bind:UnreportedBardata={UnreportedBardata} 
       bind:Arsondata={Arsondata}
       bind:Homicidedata={Homicidedata} 
       bind:LineReporteddata={LineReporteddata}
       bind:Cords={Cords}/>
    {:else if Page == 6}
     <API />
   {/if}
  

  {#if popOut && docSnap}
  <div class="popOut">
   <h2>{current_state.fullname}</h2>
   <p>Population: {current_state.population}</p>
   <h2>{parseInt(((totalUnreported)/(totalUnreported+totalReported))*100)}% of crimes in {current_state.fullname} go unreported to law enforcement</h2>
   <Pie data={chartdata} options={{ responsive: true }} />
   <button on:click={() => ChangePage(5)} >More details about {current_state.fullname}</button>
    
  
  </div>
  {/if}
  
  </main>
  
  
  <style>
   .logo {
     height: 6em;
     padding: 1.5em;
     will-change: filter;
   }
    .logo:hover {
     filter: drop-shadow(0 0 2em #646cffaa);
   }
   .logo.svelte:hover {
     filter: drop-shadow(0 0 2em #ff3e00aa);
   }
   .read-the-docs {
     color: #888;
   }
   button{
     margin-top: 5vh;
   }
   .landing{
     height: 100vh;
     width: 100vw;
     opacity: 1;
     position: fixed;
     left: 0px;
     top: 0px;
     background-Color: #242424;
     padding-top: 35vh;
     z-index: 5;
   }
   </style>
  
  
  