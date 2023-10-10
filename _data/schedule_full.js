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
        {"start": "14:00", "end": "14:30", "name": "Streamlining Research Data Storage: A user-centric approach (Julia Gustavsen)", "type": "plenary", "merged": true},
        {"start": "14:30", "end": "15:00", "name": "EnhanceR Seminar announcement + community needs discussion", "type": "announcement", "merged": true},
        {"start": "15:00", "end": "15:30", "name": "Slot 3", "type": "session", "timeslot": 3},
        {"start": "15:30", "end": "16:00", "name": "Slot 4", "type": "session", "timeslot": 4},
        {"start": "16:00", "end": "16:30", "name": "Slot 5", "type": "session", "timeslot": 5},
        {"start": "16:30", "end": "17:00", "name": "Slot 6", "type": "session", "timeslot": 6},
        {"start": "17:00", "end": "17:10", "name": "Farewell", "type": "announcement", "merged": true}
    ]
    let presentations = [
        {
          "name": "AiiDAlab journey: navigating development challenges and community growth",
          "host": "Aliaksandr Yakutovich",
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
          "name": "Automated Lab Data Management - from experiment to report",
          "host": "David Meyer",
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
          "name": "Empowering biological data re-use with interactive dashboards",
          "host": "Anna Sintsova",
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
          "name": "GenSpectrum: Database Engine and Dashboards for Genomic Epidemiology",
          "host": "Chaoran Chen",
          "code": "d",
          "slots": [
            {
              "timeslot": 3,
              "station": "D"
            },
            {
              "timeslot": 5,
              "station": "C"
            }
          ]
        },
        {
            "name": "inseri.swiss – connecting data repositories, research methods, and researchers",
            "host": "Andrei Plamada",
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
          "name": "MIDAP: development of an image analysis software for cell segmentation and tracking",
          "host": "Franziska Oschmann",
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
          "name": "Modern ways of thinking about research data: relations, representations, storage, safety, flow, and impact",
          "host": "Mykhailo Vladymyrov",
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
          "name": "OpenBIS chef: on-demand custom data entry workflows for ELNs",
          "host": "Simone Baffelli",
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
        },
        {
          "name": "Personalis: a clinical decision support software for the personalized diagnosis of autoimmune diseases",
          "host": "Enkelejda Miho",
          "code": "i",
          "slots": [
            {
              "timeslot": 5,
              "station": "A"
            },
            {
              "timeslot": 6,
              "station": "A"
            }
          ]
        },
        {
          "name": "Reproducibility in practice: Snakemake with Galaxy containers",
          "host": "Michal Okoniewski",
          "code": "j",
          "slots": [
            {
              "timeslot": 1,
              "station": "C"
            },
            {
              "timeslot": 4,
              "station": "C"
            }
          ]
        },
        {
          "name": "Scalable Lidar data processing pipeline for the generation of 3D fuel models for wildfire simulations",
          "host": "Daniel Roten",
          "code": "k",
          "slots": [
            {
              "timeslot": 2,
              "station": "B"
            }
          ]
        },
        {
          "name": "Usability when building UI, Documentation, Outreach",
          "host": "Ana Stojiljkovic",
          "code": "l",
          "slots": [
            {
              "timeslot": 4,
              "station": "B"
            },
            {
              "timeslot": 6,
              "station": "B"
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