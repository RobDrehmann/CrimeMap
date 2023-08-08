<script>
  export let Page;
  export let ChangePage = () => {};
  export let MapChocie;
  export let ChangeMap = () => {};

</script>

<main >
 <div class="sc-dIZcFb ljvCOG"><div class="sc-eLuUwk gXMitS"><svg width="24" height="24" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M7 17h4v2H5v-6h2v4zM19 5v6h-2V7h-4V5h6z"></path></svg></div></div>
 
  <!-- ======= Header ======= -->
  <header id="header" class="header fixed-top" data-scrollto-offset="0">
    <div class="container-fluid d-flex align-items-center justify-content-between">
      
      <nav id="navbar" class="navbar">
        
        <ul>
         <a  class="logo d-flex align-items-center scrollto me-auto me-lg-0">
            <h1><span>C</span>rime <span>M</span>ap<span>.</span></h1>
            <!--  <img src={svelteLogo} alt=""> -->
          
          <li><a  ><span on:click={() => ChangePage(0)} >Home</span> <i class="nav-link scrollto"></i></a></li>
         
          <li><a class="nav-link scrollto" ><span on:click={() => ChangePage(1)} >Statistics</span></a></li>
        
         <!--  <li><a class="nav-link scrollto"  on:click={() => ChangePage(2)} >By State</a></li> -->
          <!-- <li><a class="nav-link scrollto" href="#team" >Most Wanted</a></li>  -->
          <li><a class="nav-link scrollto"  on:click={() => ChangePage(3)} >Info</a></li>
          
          
        
          <li><a class="nav-link scrollto"  on:click={()=> ChangePage(4)} >Contact</a></li>
          <li><a class="nav-link scrollto"  on:click={()=> ChangePage(6)} >API</a></li>
        </ul>
        <i class="bi bi-list mobile-nav-toggle d-none"></i>
      </nav><!-- .navbar -->
      {#if Page == 0}
      <div class="SortBtn">
        
        
        <button on:click={() => ChangeMap(1)}>Reported Crime</button>
        <button on:click={() => ChangeMap(2)}>Unreported Crime</button>
        <button on:click={() => ChangeMap(3)}>All Crime</button>
        <button on:click={() => ChangeMap(0)}>None</button>
      </div>
      {/if}
   
    </div>
  </header><!-- End Header -->
 </main>
 

<style>
  .SortBtn{
    display:flex;
    justify-content: center;
    height: 8vh;
    margin-top: 1vh;
    margin-bottom: 1vh;
  }
  .SortBtn > button{
    height: 5vh;
    margin: 1vh;
  }
  .navbar{
    position: sticky;
    margin-top: 3vh;
    
    
    }
</style>

