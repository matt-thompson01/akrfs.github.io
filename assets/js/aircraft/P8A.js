const P8A = {
    aircraftName: "P8-A Posideon",
    aircraftType: "fixed",
    categoryRating: 7,
    minPOB: 3,
    maxPOB: 8,
    fuel: undefined,
    dg: undefined,
    incident: [
        {
            incidentType: "Crash",
            state: "Crash",
            location: ["primary", "secondary"]
        },
        {
            incidentType: "Thermal Runaway",
            state: "Full Emergency",
            location: ["primary", "secondary"]
        },
        {
            incidentType: "Gear-Up Landing",
            state: "Crash",
            location: ["primary", "secondary"]
        },
        {
            incidentType: "Hot Brakes",
            state: "Local Standby",
            side: ["Port", "Starboard"],
            location: ["primary", "secondary"]
        },
        {
            incidentType: "Wheel Assembly Fire",
            state: "Full Emergency",
            side: ["Port", "Starboard"],
            location: ["primary", "secondary"]
        },
        {
            incidentType: "Smoke in Cockpit",
            state: "Local Standby",
            location: ["primary", "secondary"]
        },
        {
            incidentType: "Fire in Cockpit",
            state: "Full Emergency",
            location: ["primary", "secondary"]
        },
        {
            incidentType: "Engine Fire",
            state: "Full Emergency",
            engine: [1, 2],
            location: ["primary", "secondary"]
        },
        {
            incidentType: "APU Fire",
            state: "Full Emergency",
            location: ["primary", "secondary"]
        },
        {
            incidentType: "Short Landing",
            state: "Crash",
            location: ["primary", "secondary"]
        },
        {
            incidentType: "Overshot Runway",
            state: "Crash",
            location: ["primary", "secondary"]
        },
        {
            incidentType: "Fire in Cabin",
            state: "Full Emergency",
            location: ["primary", "secondary"]
        }
    ]
}