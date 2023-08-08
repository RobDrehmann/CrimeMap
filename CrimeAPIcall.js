  
  fetch("https://api.usa.gov/crime/fbi/cde/arrest/state/"+StateName+"/all?from=2020&to=2020&API_KEY=Og7mw8irag1z9akdrkzx5Vj1lgEe5xNQxwgqXwRx")
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
  fetch("https://api.usa.gov/crime/fbi/cde/estimate/state/"+StateName+"?year=2020&API_KEY=S50UdID1U9qFjosiD2h6SFRpg79KjcfD97cc3KYq")
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
