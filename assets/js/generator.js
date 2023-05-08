function generate(selected) {
    //select object and set to aircraft
    scenario = eval(selected);

    // Select incident using random number
    let scenarioIncident = scenario.incident[Math.floor(Math.random() * (scenario.incident.length + 1))];

    // Display emergency state
    document.getElementById("state").innerHTML = scenarioIncident.state;

    // generate location of incident
    genLoc(scenarioIncident);

    // Display aircraft name
    document.getElementById("aircraft").innerHTML = scenario.aircraftName;

    // Display nature of trouble
    document.getElementById("n-o-t").innerHTML = scenarioIncident.incidentType;

    // Display POB
    document.getElementById("p-o-b").innerHTML = POB();
    
    // Display fuel and dangerous goods (both unknown)
    document.getElementById("fuel").innerHTML = 'Unknown';
    document.getElementById("d-g").innerHTML = 'Unknown';
}

function genLoc(scenarioIncident) {
    let locNum = Math.floor(Math.random() * scenarioIncident.location.length);
    let loc = scenarioIncident.location[locNum];

    if (loc == "primary") {
        document.getElementById("location").innerHTML = "Runway 03-21";
    } else if (loc == "secondary") {
        document.getElementById("location").innerHTML = "runway 08-26"
    } else {
        document.getElementById("location").innerHTML = loc;
    };
}

function POB() {
    let min = scenario.minPOB;
    let max = scenario.maxPOB;

    return Math.floor(Math.random() * (max - min + 1)) + min;
}