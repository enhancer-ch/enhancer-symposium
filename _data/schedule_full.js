module.exports = function() {
    let stations = [
        {code: "A", name: "Track A"},
        {code: "B", name: "Track B"},
        {code: "C", name: "Track C"},
        {code: "D", name: "Track D"}
    ];
    let schedule = [
        {"start":  "9:30", "end": "10:00", "name": "Registration / Coffee", "type": "registration", "merged": true},
        {"start": "10:00", "end": "10:15", "name": "Welcome", "type": "announcement", "merged": true},
        {"start": "10:15", "end": "11:00", "name": "The growth of Research Software Engineering and its vital place in research (Simon Hettrick)", "type": "keynote", "merged": true},
        {"start": "11:00", "end": "11:30", "name": "SWITCH Cloud – The cloud for education and research (Visho Jesudasan)", "type": "plenary", "merged": true},
        {"start": "11:30", "end": "12:00", "name": "Collaborative expertise: synergies between multi-disciplinary experts and end users in software development (Aaron Ponti)", "type": "plenary", "merged": true},
        {"start": "12:00", "end": "12:30", "name": "Slot 1", "type": "session", "timeslot": 1},
        {"start": "12:30", "end": "13:00", "name": "Slot 2", "type": "session", "timeslot": 2},
        {"start": "13:00", "end": "14:00", "name": "Lunch (restaurant Grosse Schanze)", "type": "lunch", "merged": true},
        {"start": "14:00", "end": "14:30", "name": "Building FAIR research repositories in practice (Lars Holm Nielsen, virtual talk)", "type": "keynote", "merged": true},
        {"start": "14:30", "end": "15:00", "name": "Building an RSE community in the ETH domain and steps towards a Swiss wide RSE community (Tarun Chadha + Uwe Schmitt)", "type": "plenary", "merged": true},
        {"start": "15:00", "end": "15:30", "name": "TBC (Giovanni Pizzi)", "type": "plenary", "merged": true},
        {"start": "15:30", "end": "16:00", "name": "Slot 3", "type": "session", "timeslot": 3},
        {"start": "16:00", "end": "16:30", "name": "Slot 4", "type": "session", "timeslot": 4},
        {"start": "16:30", "end": "17:00", "name": "Slot 5", "type": "session", "timeslot": 5},
        {"start": "17:00", "end": "17:10", "name": "Farewell", "type": "announcement", "merged": true}
    ]
    let presentations = [
        {
          "name": "A Platform for Simplifying and Accelerating Researcher Health Data Requests",
          "host": "Aleksandar Bobic",
          "confirmed": true,
          "code": "a",
          "slots": [
            {
              "timeslot": 1,
              "station": "D"
            },
            {
              "timeslot": 6,
              "station": "C"
            }
          ]
        },
        {
          "name": "Assisting FAIRness lifecycle: SMART-metrics for FAIR research data lifecycle management",
          "host": "Federico Grasso Toro",
          "confirmed": true,
          "code": "b",
          "slots": [
            {
              "timeslot": 2,
              "station": "D"
            },
            {
              "timeslot": 6,
              "station": "D"
            }
          ]
        },
        {
          "name": "Cloud deployments for research projects",
          "host": "Simone Baffelli",
          "confirmed": false,
          "code": "c",
          "slots": [
            {
              "timeslot": 1,
              "station": "B"
            },
            {
              "timeslot": 3,
              "station": "B"
            }
          ]
        },
        {
          "name": "Cloud storage and backup for research data",
          "host": "Jarunan Panyasantisuk",
          "confirmed": true,
          "code": "d",
          "slots": [
            {
              "timeslot": 4,
              "station": "C"
            },
            {
              "timeslot": 5,
              "station": "C"
            }
          ]
        },
        {
            "name": "Ethical AI in Refugee Support: Aligning ML with FAIR Principles",
            "host": "Renjun Tang",
            "confirmed": false,
            "code": "e",
            "slots": [
              {
                "timeslot": 4,
                "station": "D"
              },
              {
                "timeslot": 5,
                "station": "D"
              }
            ]
        },
        {
          "name": "OpenEM: Open electron microscopy data in Switzerland",
          "host": "Spencer Bliven",
          "confirmed": false,
          "code": "f",
          "slots": [
            {
              "timeslot": 1,
              "station": "A"
            },
            {
              "timeslot": 2,
              "station": "A"
            }
          ]
        },
        {
          "name": "Presentation of Beta Data Services & Outlook on EOSC Data Commons",
          "host": "Andrea Bertino",
          "confirmed": false,
          "code": "g",
          "slots": [
            {
              "timeslot": 3,
              "station": "A"
            },
            {
              "timeslot": 4,
              "station": "A"
            }
          ]
        },
        {
          "name": "Sharing pre-publication data across institutions via an internal data catalog",
          "host": "Nichole Wespe",
          "confirmed": true,
          "code": "h",
          "slots": [
            {
              "timeslot": 2,
              "station": "C"
            },
            {
              "timeslot": 3,
              "station": "C"
            }
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
        presentation.color = `hsl(${Math.floor(360 * index / (presentations.length + 1))}, 100%, 95%)`;
        presentation.fgColor = `hsl(${Math.floor(360 * index / (presentations.length + 1))}, 100%, 90%)`;
    });

    let maxRepeats = Math.max(...presentations.map(presentation => presentation.slots.length));

    return {
        stations,
        schedule,
        presentations,
        maxRepeats
    };
}