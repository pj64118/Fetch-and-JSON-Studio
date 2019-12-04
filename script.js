// TODO: add code here
window.addEventListener("load", function() {
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response) {
        response.json().then( function(json) {
            let rocketeer = {};
            while (0<json.length) {
                rocketeer = json.shift();
                console.log(rocketeer.firstName);
                const div = document.getElementById("container");
                div.innerHTML += `
                    <div class="astronaut">
                        <div class="bio">
                            <h3>${rocketeer.firstName} ${rocketeer.lastName}</h3>
                            <ul>
                            <li>Hours in space: ${rocketeer.hoursInSpace}</li>
                            <li>Active: ${rocketeer.active}</li>
                            <li>Skills: ${rocketeer.skills}</li>
                        </ul>    
                        </div>
                        <img class="avatar" src="${rocketeer.picture}">
                    </div> 
                `;  
            };
    });
  });
});