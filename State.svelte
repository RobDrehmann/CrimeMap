<script>
import { Pie, Bar, Doughnut, Line } from 'svelte-chartjs';
import {
    Chart as ChartJS,
    Title,
    Tooltip,
    
    ArcElement,
    CategoryScale,
    BarElement,
    LinearScale,
    PointElement,
    LineElement
    
    
  } from 'chart.js';
import GMap from './GMap.svelte';

export let state_name;
export let ReportedPiedata;
export let UnreportedPiedata;
export let ReportedBardata;
export let UnreportedBardata;
export let LineReporteddata;
export let Homicidedata;
export let Arsondata;
export let Cords;
let Zoom = 6;

console.log(Cords);
  ChartJS.register(Title,  Tooltip, ArcElement, BarElement, LineElement, LinearScale, PointElement, CategoryScale,);
</script>

<main>
    <h1>{state_name}</h1>
    <GMap bind:Cords={Cords} bind:Zoom={Zoom}></GMap>
<div class="StateChartRow">
    <div class="StateCard">
        <h2>  Reported Crime Breakdown</h2>
        <Pie class="StatePie" style="position: relative; height:20vh; width:40vw" data={ReportedPiedata} options={{ responsive: true }} />
    </div>
    <div class="StateCard">
        <h2>Unreported Crime Breakdown</h2>
        <Pie class="StatePie" style="position: relative; height:20vh; width:40vw" data={UnreportedPiedata} options={{ responsive: true }} />
    </div>
</div>
<div class="StateChartRow2">
    <div class="StateCard">
        <h2>  Reported Crime vs National Average</h2>
        <Bar class="StatePie" style="position: relative; height:50vh; width:40vw" data={ReportedBardata} options={{ responsive: true }} />
    </div>
    <div class="StateCard">
        <h2>Unreported Crime vs National Average</h2>
        <Bar class="StatePie" style="position: relative; height:50vh; width:40vw" data={UnreportedBardata} options={{ responsive: true }} />
    </div>
</div>
<div class="StateChartRow">
    <div class="StateCard">
        <h2>Homicide Reported vs Unreported</h2>
        <Doughnut class="StatePie" style="position: relative; height:20vh; width:40vw" data={Homicidedata} options={{ responsive: true }} />
    </div>
    <div class="StateCard">
        <h2>Arson Reported vs Unreported</h2>
        <Doughnut class="StatePie" style="position: relative; height:20vh; width:40vw" data={Arsondata} options={{ responsive: true }} />
    </div>
</div>
<div class="StateChartRow2">
    <div class="StateCard">
        <h2>  Reported Crime Breakdown Overtime</h2>
        <Line class="StatePie" style="position: relative; height:50vh; width:40vw" data={LineReporteddata} options={{ responsive: true }} />
    </div>
    <div class="StateCard">
        <h2>Unreported Crime Breakdown Overtime</h2>
        <Line class="StatePie" style="position: relative; height:50vh; width:40vw" data={LineReporteddata} options={{ responsive: true }} />
    </div>
</div>
   </main>

<style>
    .StateChartRow{
        display: flex;
        width: 89vw;
        justify-content: space-between;
        height: 95vh;
        color: white;
        padding-top: 8vh;
    }
    .StateChartRow2{
        display: flex;
        width: 100vw;
        justify-content: space-evenly;
        height: 70vh;
        margin-left: -5em;
        background-Color: white;
        padding-top: 8vh;
        padding: 1vw;
       
    }
    .StateCard{
        
    }
    .StateCard > h2{
        font-size: 2vw;
    }
    .StateChartRow2 > .StateCard > h2{
        font-size: 2vw;
        color:  #242424;
    }
    
</style>