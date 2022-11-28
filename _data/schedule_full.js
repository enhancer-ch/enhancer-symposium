module.exports = function() {
    let stations = [
        {code: "A", name: "Track A"},
        {code: "B", name: "Track B"},
        {code: "C", name: "Track C"}
    ];
    let schedule = [
        {"start": "9:30", "end": "10:00", "name": "Registration / Coffee", "merged": true},
        {"start": "10:00", "end": "10:30", "name": "Welcome", "merged": true},
        {"start": "10:30", "end": "11:00", "name": "Slot 1", "timeslot": 1},
        {"start": "11:00", "end": "11:30", "name": "Slot 2", "timeslot": 2},
        {"start": "11:30", "end": "12:00", "name": "Slot 3", "timeslot": 3},
        {"start": "12:00", "end": "12:30", "name": "Slot 4", "timeslot": 4},
        {"start": "12:30", "end": "13:00", "name": "Slot 5", "timeslot": 5},
        {"start": "13:00", "end": "14:00", "name": "Lunch (restaurant Grosse Schanze)", "merged": true},
        {"start": "14:00", "end": "15:00", "name": "Community needs discussion", "merged": true},
        {"start": "15:00", "end": "15:30", "name": "Slot 6", "timeslot": 6},
        {"start": "15:30", "end": "16:00", "name": "Slot 7", "timeslot": 7},
        {"start": "16:00", "end": "16:15", "name": "Farewell", "merged": true}
    ];
    let presentations = [
        {
            "name": "UniFR - Vulnerability Scanner on Scientific IT machines",
            "host": "Arnaud Fortier (UniFR)",
            "code": "a",
            "slots": [
                {"timeslot": 1, "station": "A"},
                {"timeslot": 7, "station": "A"}
            ]
        },
        {
            "name": "openRDM.swiss: data management service for the Swiss academic community",
            "host": "Caterina Barillari & Rostyk Kuzyakiv (ETHZ)",
            "code": "b",
            "slots": [
                {"timeslot": 4, "station": "C"},
                {"timeslot": 7, "station": "C"}
            ]
        },
        {
            "name": "E-Assessment on BYOD (Bring Your Own Device)",
            "host": "Merima Hotic & Simon Kaspar (FHNW)",
            "code": "c",
            "slots": [
                {"timeslot": 3, "station": "A"},
                {"timeslot": 4, "station": "A"}
            ]
        },
        {
            "name": "Overview of CSCS Services and Partners",
            "host": "Alex Upton (CSCS)",
            "code": "d",
            "slots": [
                {"timeslot": 5, "station": "A"},
                {"timeslot": 6, "station": "A"}
            ]
        },
        {
            "name": "Business Models for Research Support Units",
            "host": "Sigve Haug (UniBE)",
            "code": "e",
            "slots": [
                {"timeslot": 2, "station": "C"},
                {"timeslot": 3, "station": "C"}
            ]
        },
        {
            "name": "Bioinformatics co-analysis service at the ETH Zurich",
            "host": "Michal Okoniewski (ETHZ)",
            "code": "f",
            "slots": [
                {"timeslot": 1, "station": "B"},
                {"timeslot": 3, "station": "B"}
            ]
        },
        {
            "name": "Data Science support at ETH - from computer vision to NLP",
            "host": "Franziska Oschmann & Tarun Chadha (ETHZ)",
            "code": "g",
            "slots": [
                {"timeslot": 6, "station": "B"},
                {"timeslot": 7, "station": "B"}
            ]
        },
        {
            "name": "Agroscope: Access to HPC prototype",
            "host": "Julia Gustavsen (Agroscope)",
            "code": "h",
            "slots": [
                {"timeslot": 2, "station": "B"},
                {"timeslot": 5, "station": "B"}
            ]
        }
    ];

    schedule.forEach(scheduleItem => {
        if (scheduleItem.timeslot) {
            scheduleItem.presentations = {};
            stations.forEach(station => {
                scheduleItem.presentations[station.code] =
                    presentations.find(presentation => presentation.slots.some(slot => slot.timeslot == scheduleItem.timeslot && slot.station == station.code));
            })
        }
    });

    presentations.sort((presentationA, presentationB) => {
        if (presentationA.slots[0].timeslot - presentationB.slots[0].timeslot !== 0) {
            return presentationA.slots[0].timeslot - presentationB.slots[0].timeslot;
        } else if (presentationA.slots[0].station > presentationB.slots[0].station) {
            return 1;
        } else if (presentationA.slots[0].station < presentationB.slots[0].station) {
            return -1;
        } else {
            return 0;
        }
    });

    presentations.forEach((presentation, index) => {
        presentation.slots.forEach(slot => {
            slot.start = schedule.find(scheduleItem => scheduleItem.timeslot == slot.timeslot)?.start;
            slot.end = schedule.find(scheduleItem => scheduleItem.timeslot == slot.timeslot)?.end;
        })
        presentation.color = `hsl(${Math.floor(360 * index / (presentations.length + 1))}, 100%, 95%)`
    });

    let maxRepeats = Math.max(...presentations.map(presentation => presentation.slots.length));

    return {
        stations,
        schedule,
        presentations,
        maxRepeats
    };
}