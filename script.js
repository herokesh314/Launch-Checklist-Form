// Write your JavaScript code here!

// Write your JavaScript code here!

<script>
      let button = document.getElementById("update");
      button.addEventListener("click", function() {
         let input = document.getElementById("pilotName");
         input.value = input.value ;
      });
       window.addEventListener("load", function() {
         let form = document.querySelector("form");
         form.addEventListener("submit", function(event) {
            alert("submit clicked");
            let usernameInput = document.querySelector("input[name=username]"
         });
         event.preventDefault();
      });
      if (fuelLevel < 10000) {
         document.getElementById("faultyItems").style.visibility = "visible";
         document.getElementById("faultyItems").innerHTML ="Not enough fuel for the journey";
         document.getElementById("launchStatus").style.color = "red";
         document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch";
      } if (cargoMass > 10000) {
         document.getElementById("faultyItems").style.visibility = "visible"; 
         document.getElementById("cargoStatus").innerHTML = "Too much mass for the shuttle to take off";
         document.getElementById("launchStatus").style.color = "red";
         document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch";
      } else {
         document.getElementById("launchStatus").style.color = "green";
         document.getElementById("launchStatus").innerHTML = "Shuttle ready for launch";
      }

   </script>

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

