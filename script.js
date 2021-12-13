let n = window.prompt("Enter the Country Number");

function searchEvent(){
    let some=document.getElementById("search");
}
searchEvent();

fetch('https://api.covid19api.com/summary')
    .then(res => res.json())
    .then(death2 => {

        let countryName = death2.Countries[n].Country;
        let newCase = death2.Countries[n].NewConfirmed;
        let totalCase = death2.Countries[n].TotalConfirmed;
        let newDeath = death2.Countries[n].NewDeaths;
        let totalDeath = death2.Countries[n].TotalDeaths;

        let name=document.getElementById('country');
        let newC=document.getElementById('new-case');
        let tC=document.getElementById('total-case');
        let newD=document.getElementById('new-death');
        let tD=document.getElementById('total-death');

        name.innerHTML = countryName;
        newC.innerHTML = newCase;
        tC.innerHTML = totalCase;
        newD.innerHTML = newDeath;
        tD.innerHTML = totalDeath;

        /* 
        console.log("Country Name: "+countryName);
        console.log("New Case: "+newCase);
        console.log("Total Case: "+totalCase);
        console.log("New Death: "+newDeath);
        console.log("Total Death: "+totalDeath); */
        
        
    })
    .catch("Error")