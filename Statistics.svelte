<script>
    import { Pie, Bar } from 'svelte-chartjs';
    import {
        Chart as ChartJS,
        Title,
        Tooltip,
        Legend,
        ArcElement,
        CategoryScale,
        BarElement,
        LinearScale,
      } from 'chart.js';
    import GMap from './GMap.svelte';
    export let state_name;
    export let ReportedPiedata;
    export let UnreportedPiedata;
    let Cords = {lat: 39, lng: -98.5};
    let Zoom = 4;
      ChartJS.register(Title, Legend, Tooltip, ArcElement, BarElement, CategoryScale, LinearScale,);
    </script>
    
    <main>
        <h1>National</h1>
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
            <h2>  Reported Crime Breakdown</h2>
            <Bar class="StatePie" style="position: relative; height:50vh; width:40vw" data={ReportedPiedata} options={{ responsive: true }} />
        </div>
        <div class="StateCard">
            <h2>Unreported Crime Breakdown</h2>
            <Bar class="StatePie" style="position: relative; height:50vh; width:40vw" data={UnreportedPiedata} options={{ responsive: true }} />
        </div>
    </div>
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
            <h2>  Reported Crime Breakdown</h2>
            <Bar class="StatePie" style="position: relative; height:50vh; width:40vw" data={ReportedPiedata} options={{ responsive: true }} />
        </div>
        <div class="StateCard">
            <h2>Unreported Crime Breakdown</h2>
            <Bar class="StatePie" style="position: relative; height:50vh; width:40vw" data={UnreportedPiedata} options={{ responsive: true }} />
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