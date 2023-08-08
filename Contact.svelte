<script>
import { db } from './assets/js/firebase';
import { collectionData } from 'rxfire/firestore';
import { startWith } from 'rxjs/operators';

var MessageName = "";
var MessageEmail = "";

var MessageContent = "";

function AddMessage() {
      db.collection('Messages').add({MessageName, MessageEmail, MessageContent});
      MessageName = "";
     MessageEmail = "";

MessageContent = "";
    }
   
</script>

<main>
    <h1>Contact</h1>
    <h2>Name:</h2>
    <input bind:value={MessageName} />
    <h2>Email:</h2>
    <input bind:value={MessageEmail}/>
    <h2>Message:</h2>
    <textarea  bind:value={MessageContent}/>
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