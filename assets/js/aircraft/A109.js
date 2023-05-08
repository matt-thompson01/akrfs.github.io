const A109 = {
    aircraftName: "A-109",
    aircraftType: "rotary",
    categoryRating: 4,
    minPOB: 2,
    maxPOB: 6,
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
            incidentType: "Belly Landing",
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
            "Engine": [1, 2],
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