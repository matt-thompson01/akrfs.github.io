const T6C = {
    aircraftName: "Texan T6",
    aircraftType: "fixed",
    categoryRating: 4,
    minPOB: 1,
    maxPOB: 2,
    fuel: null,
    dg: null,
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
            state: "Crash"
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
            engine: [1],
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
        }
    ]
}