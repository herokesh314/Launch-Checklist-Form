
// Write your JavaScript code here!


       window.addEventListener("load", function() {
          fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
               response.json().then(function(json)) {
                  document.getElementById("missionTarget").innerHTML =
                  <h2>Mission Destination</h2>
                     <ol>
                        <li>Name: ${json[0].name}</li>
                        <li>Diameter: ${json[0].diameter}</li>
                        <li>Star: ${json[0].star}</li>
                        <li>Distance from Earth: ${json[0].distance}</li>
                        <li>Number of Moons: ${json[0].moons}</li>
                     </ol>
                     <img src="${json[0].image}"></img>
         
         let form = document.querySelector("form");
         form.addEventListener("submit", function(event) {
           
            pilotName = document.querySelector("input[name=pilotName]");
            copilotName = document.querySelector("input[name=copilotName");
            fuelLevel = document.querySelector("input[name=fuelLevel]");
            cargoMass = document.querySelector("input[name=cargoMass]");
           // event.preventDefault();
           
            if (isNaN(pilotName.value) || (isNaN(copilotName.value))) {
                  alert("All fields required");
                  event.preventDefault();
            } if(!(isNaN(pilotName.value)) || !(isNaN(copilotName.value))) {
                  alert("Enter Valid Information");
                  event.preventDefault();
            }  if (isNaN(fuelLevel.value) || (isNaN(cargoMass.value))) {
                  alert("Enter valid information");
                  event.preventDefault();

            } if (fuelLevel.value < 10000) {
                     document.getElementById("faultyItems").style.visibility = "visible";
                     document.getElementById("faultyItems").innerHTML ="Not enough fuel for the journey";
                     document.getElementById("launchStatus").style.color = "red";
                     document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch";
               
            } if (cargoMass.value > 10000) {
                     document.getElementById("faultyItems").style.visibility = "visible"; 
                     document.getElementById("cargoStatus").innerHTML = "Too much mass for the shuttle to take off";
                     document.getElementById("launchStatus").style.color = "red";
                     document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch";
            } else {
                     document.getElementById("launchStatus").style.color = "green";
                     document.getElementById("launchStatus").innerHTML = "Shuttle ready for launch";
                  }
         }
       
      
      
  

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/