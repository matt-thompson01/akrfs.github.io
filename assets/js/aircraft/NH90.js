const NH90 = {
    aircraftName: "NH-90",
    aircraftType: "rotary",
    categoryRating: 4,
    minPOB: 3,
    maxPOB: 20,
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
            incidentType: "Hard Landing",
            state:"Full Emergency",
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
            incidentType: "Fire During Hot Refuel",
            state: "Full Emergency",
            location: ["Spot"]
        }
    ]
}