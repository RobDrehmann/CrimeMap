<script>
    import { db } from './assets/js/firebase';
import { collectionData } from 'rxfire/firestore';
import { startWith } from 'rxjs/operators';

var APIName = "";
var APIEmail = "";

function generateUUID()
{
	var d = new Date().getTime();
	
	if( window.performance && typeof window.performance.now === "function" )
	{
		d += performance.now();
	}
	
	var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c)
	{
		var r = (d + Math.random()*16)%16 | 0;
		d = Math.floor(d/16);
		return (c=='x' ? r : (r&0x3|0x8)).toString(16);
	});

return uuid;
}


function AddMessage() {
    let key = generateUUID();
      db.collection('API_Users').add({APIName, APIEmail, key});
      db.collection('API_keys').add({key});
      APIName = "";
     APIEmail = "";


    }
   
</script>

<main>
    <h1>Request an API key</h1>
    <h2>Name:</h2>
    <input bind:value={APIName} />
    <h2>Email:</h2>
    <input bind:value={APIEmail}/>
    
    <div>
    <button class="formbtn" on:click={() => AddMessage()}>Send</button>
    </div>
</main>

<style>
    .formbtn{
        margin-top: 1vh;
    }
    h2{
        text-align: left;
        margin-left: 10vw;
    }
    input{
        width: 70vw;
        height: 4vh;
        border-radius: 7px;
        border-color: white;
        border: solid;
    }
    textarea{
        width: 70vw;
        height: 20vh;
        border-radius: 7px;
        border-color: white;
        border: solid;
    }
</style>