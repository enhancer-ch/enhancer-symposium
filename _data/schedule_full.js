export default function () {
    let stations = [
        {code: "A", name: "Track A (room 001)", locator: "Room 001"},
        {code: "B", name: "Track B (room 012)", locator: "Room 012"},
        {code: "C", name: "Track C (room 015)", locator: "Room 015"},
        {code: "D", name: "Track D (room 205)", locator: "Room 205"}
    ];
    let schedule = [
        {
          "start":  "9:30", "end": "10:00",
          "name": "Registration / Coffee",
          "type": "registration", "merged": true
        },
        {
          "start": "10:00", "end": "10:15",
          "name": "Welcome",
          "type": "announcement", "merged": true
        },
        {
          "start": "10:15", "end": "11:00",
          "name": "Building Open-Source, Transparent, and Multilingual LLMs in Switzerland (Imanol Schlag)",
          "type": "keynote", "merged": true
        },
        {
          "start": "11:00", "end": "11:15",
          "name": "Coffee Break",
          "type": "lunch", "merged": true
        },
        {
          "start": "11:15", "end": "11:45",
          "name": "Show & Tell session 1",
          "type": "session", "timeslot": 1
        },
        {
          "start": "11:45", "end": "12:15",
          "name": "Show & Tell session 2",
          "type": "session", "timeslot": 2
        },
        {
          "start": "12:15", "end": "13:30",
          "name": "Lunch",
          "type": "lunch", "merged": true
        },
        {
          "start": "13:30", "end": "14:15",
          "name": "Workshop session 1",
          "type": "session", "timeslot": 3
        },
        {
          "start": "14:15", "end": "15:00",
          "name": "Workshop session 2",
          "type": "session", "timeslot": 4
        },
        {
          "start": "15:00", "end": "15:30",
          "name": "Coffee Break & Networking",
          "type": "lunch", "merged": true
        },
        {
          "start": "15:30", "end": "16:15",
          "name": "Scaling Jupyter to millions of users (Sylvain Corlay)",
          "type": "keynote", "merged": true
        },
        {
          "start": "16:15", "end": "16:45",
          "name": "Show & Tell session 3",
          "type": "session", "timeslot": 5
        },
        {
          "start": "16:45", "end": "17:15",
          "name": "Show & Tell session 4",
          "type": "session", "timeslot": 6
        },
        {
          "start": "17:15", "end": "17:30",
          "name": "Final Remarks & Farewell",
          "type": "announcement", "merged": true
        }
    ]
    let presentations = [
        {
          "name": "NTSuisse: a web platform for high-resolution mass spectrometry (HRMS) data",
          "host": "Kai-Michael Kammer",
          "affiliation": "Eawag",
          "confirmed": true,
          "type": "show-and-tell",
          "code": "kammer",
          "slots_code": "I",
          "summary": "I would like to present NTSuisse, a web platform being developed here at eawag for the analysis and management of high-resolution mass spectrometry (HRMS) data. It is accessible to participating cantons, Swiss water suppliers, expert bodies, and the Swiss Federal Office for the Environment. Key features of the NTSuisse platform include user-friendly data upload and storage capabilities, centralized automatic processing, target and suspect screening and quantification. The platform allows stakeholders to manage and analyze their own data independently and offers batch-wise data processing. It has been in development since 2023 with a planned release beginning of 2026. My colleague, Johannes Boog, will also attend and be able to answer questions. The show and tell would showcase the software and explain design decisions regarding frontend and backend."
        },
        {
          "name": "Midap-tools: a python package for post-processing and visualization of midap results",
          "host": "Lukas von Ziegler",
          "affiliation": "ETHZ",
          "confirmed": true,
          "type": "show-and-tell",
          "code": "ziegler",
          "slots_code": "P",
          "summary": "Midap-tools is a python package that allows post-processing and visualization of midap results. Midap is a machine vision powered imaging analysis pipeline developed by the SIS that: 1. segments fluorescent microscopy images from fluidic experiments to detect individual cells (i.e e.coli bacteria) at each frame 2. tracks and measures these individual cells over time While midap performs these functions very well and creates invaluable data for the researchers, its output data contains alot of complexity and can be challenging for the experimentalists to work with. midap-tools is a new tool that provide easy to use high level functions to process, analyze and visualize outputs from entire microfluicid experiments across many samples and color channels. Its goal is to further bridge the gap between the researcher and the complexity of microfluidic data."
        },
        {
          "name": "Buildpacks as reproducibilty enabler",
          "host": "Samuel Gaist",
          "affiliation": "Idiap",
          "confirmed": true,
          "type": "show-and-tell",
          "code": "gaist",
          "slots_code": "G",
          "summary": "Creating a reusable and reproducible environment for other people to use can be quite challenging especially for young researchers some of who may not have a computer science background as RSE have. Docker images are the simplest way to do that but they can be hard to build correctly and requires additional non-trivial knowledge that makes it a complicated tool to add to, often overwhelmed PhD students, tool belt. This presentation shows how using buildpacks can help achieve that goal in a simple fashion so people can concentrate on the code for their research."
        },
        {
          "name": "Sustaining Scientific Workflows: The Case for Stable RSE Roles in AiiDA Development",
          "host": "Edan Bainglass and Ali Khosravi",
          "affiliation": "PSI",
          "confirmed": true,
          "type": "show-and-tell",
          "code": "bainglass",
          "slots_code": "H",
          "summary": "We’ll share our experience developing AiiDA, a workflow management tool that helps scientists run and reproduce complex computational workflows. Over the past 10 years, AiiDA has grown a lot — and so has the challenge of keeping it running smoothly. With PhDs and postdocs constantly rotating in and out, passing on knowledge and maintaining the software has become a real struggle. We’ll talk about why stable, long-term RSE positions are essential to avoid burnout, lost expertise, and stalled progress. Using real examples from our recent work, we’ll show how RSEs can make a big difference — not just in keeping the software alive, but in pushing it forward and helping researchers do better science."
        },
        {
          "name": "CeDA's developement of a web app for interactively exploring the data on brain mechanisms related to the regulation of sleep",
          "host": "Rodrigo C. G. Pena",
          "affiliation": "UniBas",
          "confirmed": false,
          "cancelled": true,
          "type": "show-and-tell",
          "code": "pena",
          "summary": "At the Center for Data Analytics (CeDA) of the University of Basel, we partner up with research groups to share our expertise on data science and machine learning. One such project was with a team of neuroscientists investigating brain mechanisms related to the regulation of sleep. Among CeDA's contributions, I have developed for them a web app for interactively exploring the data and the results of our analysis. The user can draw, select, query and retrieve much more information than would fit a singe paper. Hopefully it inspires new scientific questions in the domain. I plan to show the app's development from prototyping in Jupyter notebooks, to a locally hosted Plotly Dash app, all the way to automatic release and deployment via Docker containers and GitLab CI."
        },
        {
          "name": "From Paper to Digital Tools: An Overview of the Transition at Empa",
          "host": "Stefanie Hauser",
          "affiliation": "Empa",
          "confirmed": true,
          "type": "show-and-tell",
          "code": "hauser",
          "slots_code": "N",
          "summary": "The transformation from paper to digital tools at Empa brings several challenges: limited time due to shorter project cycles, a lack of clear incentives, and insufficient capabilities as staff are overwhelmed by numerous parallel topics. These constraints hinder the adoption of new digital solutions, despite their potential to improve efficiency and collaboration in the long term."
        },
        {
          "name": "Take up the torch of an existing project",
          "host": "Diego Antolinos",
          "affiliation": "UniNE",
          "confirmed": true,
          "type": "show-and-tell",
          "code": "antolinos",
          "slots_code": "A",
          "summary": "Being recruited on a project that's already started brings a special challenge. I intend to speak around 15 minutes about the Panda project (NPR80 Pandemic Data) and try to bring forward some of the lessons I learned when joining a project of 3 years in journalism studies in the middle, as a temporary contracted research engineer. What does it mean to analyse data that's been collected by someone else? Navigating a research protocol that's been decided without you, yet trying to have a say in the project? Align your practices with the existing code base? Etc."
        },
        {
          "name": "PoC or Prod: What makes AI projects successful?",
          "host": "Roman Wixinger and Hannes Stählin",
          "affiliation": "Ergon Informatik AG, ETHZ",
          "confirmed": true,
          "type": "show-and-tell",
          "code": "wixinger",
          "slots_code": "C",
          "summary": "AI prototypes are easy, reliable AI systems are rare. In this show-and-tell we share three fast checks that helped our teams turn proof of concepts into production services.Business impact: An AI project needs to solve an actual problem, so there is a need for it beyond technical curiosity. DevOps and reproducibility: Software engineering practices are key for ensuring security and sustainable development and operations. Systematic evaluation: Data collection apps and synthetic benchmarks turn \"looks good\" into numbers and reveal how an AI solution actually performs.Throughout the talk, we draw on lessons from our own projects in industry and academia and leave participants with a practical checklist for their next AI project."
        },
        {
          "name": "Building Secure, GPU-Accelerated Applications on HPC Infrastructure",
          "host": "Ahmad Alhineidi and Viktor Kovtun",
          "affiliation": "UniBE",
          "confirmed": true,
          "type": "show-and-tell",
          "code": "alhineidi",
          "slots_code": "B",
          "summary": "This show-and-tell would present a project that demonstrates how High-Performance Computing (HPC) infrastructure can be leveraged to deploy secure, GPU-accelerated AI applications using the Open OnDemand web platform. By integrating language and speech models within an interactive, user-friendly interface, This enables researchers and students to run advanced NLP and text analysis tasks directly on the HPC cluster without needing deep technical expertise and with zero code."
        },
        {
          "name": "From research code to impact: 5 Years of RSE services for EPFL-ENAC",
          "host": "Charlie Weil",
          "affiliation": "EPFL",
          "confirmed": true,
          "type": "show-and-tell",
          "code": "weil",
          "slots_code": "D",
          "summary": "A short version of my EnhanceR Seminar series talk of June 25th, which is a presentation of our EPFL team of RSEs. ENAC-IT4R: A Technical Research Service to Foster a Collaborative, FAIR, and Open Research Data & Code Ecosystem — and Strengthen Scientific Valorization."
        },
        {
          "name": "iLog: a digital inventory logbook integrated with openBIS",
          "host": "Simone Baffelli",
          "affiliation": "Empa",
          "confirmed": true,
          "type": "show-and-tell",
          "code": "baffelli",
          "slots_code": "M",
          "summary": "During the ORD M1 project, we have developed a prototype of a digital inventory logbook integrated with the openBIS ELN-LIMS. This logbook allows users to easily define complex setups composed of multiple sub-objects, edit their state, and track their modifications over time in an user friendly and general manner. In this talk we present the design philosophy and the technical choices behind iLog and provide a short live demo of the tool in use."
        },
        {
          "name": "Web app for a Tumor Board",
          "host": "Boris Simic",
          "affiliation": "ETHZ",
          "confirmed": true,
          "type": "show-and-tell",
          "code": "simic",
          "slots_code": "L",
          "summary": " In collaboration with the HFR (hôpital fribourgeois) we developed a web application to display all relevant information on a screen in a Tumor Board (a session where oncologists decide on the treatment of cancer patients). HFR provides different treatment plans based on experience and published evidences. During such a treatment plan different bio samples are produced (i.e. blood, biopsy) and stored in a central biobank inside the hospital. Our database aims to connect the patient information with the treatment decisions and the bio samples in one database. This information is afterwards shareable with researchers. We will show and tell the concept and the application we built to support cancer treatment at HFR."
        },
        {
          "name": "AFFORD: a workflow for data stewards to make the data FAIRer",
          "host": "Gorka Fraga Gonzalez",
          "affiliation": "UZH",
          "confirmed": true,
          "type": "show-and-tell",
          "code": "gonzalez",
          "slots_code": "F",
          "summary": "For many researchers it may not be affordable to produce FAIR data. We propose a workflow to create a data index that will help data stewards and researchers curating the necessary metadata and documentation to facilitate finding and sharing their research data; making them effectively FAIRer. Developed by scientists without a software development background, the AFFORD workflow utilizes generalist open-source tools broadly used for scientific research (R, Quarto) as well as Git. It is intended to be maintainable by data stewards or researchers interested in data management, without requiring advanced programming skills. For this, we provide a demo website and a skeleton repository with the necessary materials ready for reuse (see <a href=\"https://osf.io/preprints/metaarxiv/64fch_v1\" rel=\"nofollow\" target=\"_blank\">our preprint</a>) . Our goal is to help researchers produce FAIRer data and, as a bonus, to help them adopt a set of tools that are important for scientific reproducibility in general."
        },
        {
          "name": "Style Transfer of unparallel text data",
          "host": "Luca Marin",
          "affiliation": "ETHZ",
          "confirmed": false,
          "cancelled": true,
          "type": "show-and-tell",
          "code": "marin",
          "summary": "I would like to present a small project which I am currently carrying out with 2 other master students of ETH about the topic of ''Style Transfer of unparallel text data''. The context is Natural Language Processing, and we are combining existing techniques to transfer the rhetorical styles of political discourses while preserving their content (for example, mapping Obama's to Trump's styles). We are running the models on GPUs on a small cluster and, perhaps, one didactical goal of my presentation could also be what best practices/difficulties/typical pitfalls one can experience while running LLMs on supercomputing clusters (of course, from the perspective of a non-expert like me)."
        },
        {
          "name": "How EUROfusion Advanced Computing Hubs Leverage HPC to Accelerate Research and Engineering in Nuclear Fusion",
          "host": "Gilles Fourestey",
          "affiliation": "EPFL",
          "confirmed": true,
          "type": "show-and-tell",
          "code": "fourestey",
          "slots_code": "K",
          "summary": "Within the framework of the EUROfusion consortium, the Advanced Computing Hub HPC centers of excellence actively engage in enhancing existing European fusion simulation codes. This effort is geared towards enabling researchers to fully harness the enhanced capabilities offered by the latest generations of supercomputers. These simulation codes are specifically designed for modeling plasmas within tokamaks and stellarators in order to accelerate the design of fusion experiments, such as ITER and JT-60SA, as well as the DEMO demonstration power plant."
        },
        {
          "name": "Box-Framework: web application generator for Postgres databases",
          "host": "Andrea Minetti",
          "affiliation": "WSL",
          "confirmed": true,
          "type": "show-and-tell",
          "code": "minetti",
          "slots_code": "J",
          "summary": "We are developing an open-source tool called <a href=\"https://www.boxframework.com/\" rel=\"nofollow\" target=\"_blank\">Box-Framework</a> that enables rapid creation of web interfaces for PostgreSQL databases. The tool is currently under active development and is already being used in approximately 15 applications. The two main use cases are: - Field Campaigns: Entering data directly into the database from the field. - Management Applications: Used for databases such as the national forest fire database and the Swiss forest protection database. The advantage of the tool is that it enables people with database knowledge but limited frontend expertise to quickly develop a productive web application."
        },
        {
          "name": "How Rust enables you to create a domain specific language",
          "host": "Jusong Yu",
          "affiliation": "PSI",
          "confirmed": true,
          "type": "show-and-tell",
          "code": "yu",
          "slots_code": "E",
          "summary": "We use rust to develop a domain specific language for workflow orchestrating. Rust ecosystem make building such thing fairly easy with a lot modern language features enabled. In the show-and-tell, I'll give an overview how this small language looks like and how rust make it easy to build it."
        },
        {
          "name": "Navigating through Research Software Engineering as an undergraduate",
          "host": "Sarans Chopra",
          "affiliation": "EPFL",
          "confirmed": false,
          "cancelled": true,
          "type": "show-and-tell",
          "code": "chopra",
          "slots_code": "O",
          "summary": "Research Software Engineering is primarily dominated by employees who hold a PhD, but this narrative is slowly changing, as even though a PhD teaches one essential research skills, programming skills can be learned without any formal education. Being a Research Software Engineer with just an undergraduate degree, I will be sharing the challenges I faced while navigating this relatively new field and how the experience has shaped my view of Research Software Engineering. Moreover, I will share my experience of working at UK's largest RSE group and how the Swiss RSE movement can take positive inspirations from our ways of working. Finally, I will be joining graduate school after working as an RSE for more than a year, which raises the question and the theme for my talk - should graduate-level education be an essential criteria for hiring an RSE?"
        },
        {
          "name": "Deploy a FAIR Python application in 30 minutes using Gradio",
          "host": "Simon Duerr",
          "affiliation": "HES-SO Valais-Wallis",
          "confirmed": true,
          "type": "workshop",
          "code": "duerr",
          "slots_code": "R",
          "summary": "This workshop will introduce the differences between various frameworks to build UIs using Python such as Streamlit, Marimo or Gradio. It will introduce various features of Gradio that make it ideal to deploy FAIR web applications quickly that are useable anywhere, packaged conveniently using Docker, extensible, expose a REST API and have little overhead over the actual research code."
        },
        {
          "name": "Exploring Drug Repurposing for Autoimmune Diseases with DeepLife's Cell Blueprint",
          "host": "Constance Beyer",
          "affiliation": "DeepLife",
          "confirmed": true,
          "type": "workshop",
          "code": "beyer",
          "slots_code": "U",
          "summary": "This workshop will provide participants with hands-on experience using DeepLife's Cell Blueprint software. The session will combine a live demo of the platform's features with a guided, interactive use case focusing on drug repurposing for autoimmune diseases. Participants will gain practical insights into leveraging cutting-edge tools for cellular network analysis and therapeutic discovery."
        },
        {
          "name": "RSEs and Data Stewards synergies finding",
          "host": "Moushumi Ulrich-Nath",
          "affiliation": "Lib4RI",
          "confirmed": true,
          "type": "workshop",
          "code": "ulrich",
          "slots_code": "T",
          "summary": "Research software engineers (RSEs) and data stewards (DS) share overlapping goals in advancing data-centric research, yet they often operate in silos, missing critical opportunities for collaboration that could significantly enhance both data and software practices. This workshop will bring these communities together to identify targeted project areas that leverage their combined expertise to address shared challenges. Participants will leave with actionable project concepts, new connections across communities, and clear next steps for further development through RSE and DS project teams. This workshop is ideal for those seeking to address specific data and software challenges through concrete, cross-disciplinary collaboration."
        },
        {
          "name": "Understand the value of Nix for stable development - The Fun Way",
          "host": "Gabriel Nuetzi",
          "affiliation": "SDSC",
          "confirmed": true,
          "type": "workshop",
          "code": "nuetzi",
          "slots_code": "V",
          "slot_span": 2,
          "summary": "We will explore how the Nix package manager can give you stable developer environments, packages and improve your development experience. Please make sure you have the <a href=\"https://github.com/sdsc-ordes/nix-workshop#requirements\" rel=\"nofollow\" target=\"_blank\">requirements</a> ready before the workshop."
        },
        {
          "name": "Connecting code, data & compute for collaborative research with Renku",
          "host": "Laura Kinkead",
          "affiliation": "SDSC",
          "confirmed": true,
          "type": "workshop",
          "code": "kinkead",
          "slots_code": "Q",
          "summary": "Data science projects combine code and data from diverse locations, such as git repositories, cloud storage platforms, specialized data repositories, and more. Coordinating these resources requires technical knowledge and represents time-consuming overhead that diverts time from core analytical work. Even more critically, this fragmentation presents a barrier to collaboration. When resources are not brought together in a repeatable, structured manner, team members struggle to replicate software environments or access necessary datasets, ultimately slowing project progress and hindering knowledge sharing. Renku is an open source collaboration platform built by the Swiss Data Science Center that empowers teams to focus on analytical insights rather than resource management. Renku is used nationwide to create collaborative and reproducible data science projects in research and teaching. Join our workshop to learn how you can use Renku to connect your data, code, compute in a unified and shareable workspace."
        },
        {
          "name": "Building Communities That Work: A Hands-On Workshop on Fighting Noise in Developer Forums",
          "host": "Linus Gasser",
          "affiliation": "EPFL",
          "confirmed": true,
          "type": "workshop",
          "code": "gasser",
          "slots_code": "S",
          "summary": "As research software engineers, we've all seen promising online communities deteriorate under waves of low-effort posts and automated spam - but what actually makes a community worth participating in? In this interactive workshop we want to explore what we're really trying to achieve when we build technical communities. Then, we'll dive into the trade-offs of different approaches: proof-of-personhood systems, web-of-trust networks, reputation scoring, and human curation. We'll report actionable insights you can apply to your own projects and collaborations. Come ready to share your own community horror and success stories!"
        },
        {
          "type": "blank",
          "slots_code": "W"
        }
      ];
    
    let slots = {
      "A": [{"station": "A", "timeslots": [1], "name": "A1"}],
      "B": [{"station": "A", "timeslots": [2], "name": "A2"}],
      "C": [{"station": "A", "timeslots": [5], "name": "A3"}],
      "D": [{"station": "A", "timeslots": [6], "name": "A4"}],
      "E": [{"station": "B", "timeslots": [1], "name": "B1"}],
      "F": [{"station": "B", "timeslots": [2], "name": "B2"}],
      "G": [{"station": "B", "timeslots": [5], "name": "B3"}],
      "H": [{"station": "B", "timeslots": [6], "name": "B4"}],
      "I": [{"station": "C", "timeslots": [1], "name": "C1"}],
      "J": [{"station": "C", "timeslots": [2], "name": "C2"}],
      "K": [{"station": "C", "timeslots": [5], "name": "C3"}],
      "L": [{"station": "C", "timeslots": [6], "name": "C4"}],
      "M": [{"station": "D", "timeslots": [1], "name": "D1"}],
      "N": [{"station": "D", "timeslots": [2], "name": "D2"}],
      "O": [],
      "P": [{"station": "D", "timeslots": [6], "name": "D4"}],
      "Q": [{"station": "A", "timeslots": [3], "name": "WA1"}],
      "R": [{"station": "A", "timeslots": [4], "name": "WA2"}],
      "S": [{"station": "B", "timeslots": [3], "name": "WB1"}],
      "T": [{"station": "B", "timeslots": [4], "name": "WB2"}],
      "U": [{"station": "C", "timeslots": [3], "name": "WC1"}],
      "V": [{"station": "D", "timeslots": [3, 4], "name": "WD"}],
      "W": [{"station": "D", "timeslots": [4]}]
    };

    presentations.forEach((presentation) => {
      if (presentation.slots_code) {
        presentation.slots = slots[presentation.slots_code];
      } else {
        presentation.slots = [];
      }
    });

    schedule.forEach(scheduleItem => {
        if (scheduleItem.timeslot) {
            scheduleItem.presentations = {};
            stations.forEach(station => {
                scheduleItem.presentations[station.code] =
                    presentations.find(presentation => presentation.slots.some(slot => slot.timeslots[0] == scheduleItem.timeslot && slot.station == station.code));
            })
        }
    });

    let valid_presentations = presentations.filter(presentation => !presentation.cancelled).filter(presentation => presentation.type != "blank");

    valid_presentations.sort((presentationA, presentationB) => {
        if (!presentationA.slots[0] || !presentationB.slots[0]) {
            return 0; // If either presentation has no slots, we can't compare them
        }

        if (presentationA.slots[0].timeslots[0] - presentationB.slots[0].timeslots[0] !== 0) {
            return presentationA.slots[0].timeslots[0] - presentationB.slots[0].timeslots[0];
        } else if (presentationA.slots[0].station > presentationB.slots[0].station) {
            return 1;
        } else if (presentationA.slots[0].station < presentationB.slots[0].station) {
            return -1;
        } else {
            return 0;
        }
    });

    valid_presentations.forEach((presentation, index) => {
        presentation.slots.forEach(slot => {
            slot.start = schedule.find(scheduleItem => scheduleItem.timeslot == slot.timeslots[0])?.start;
            slot.end = schedule.find(scheduleItem => scheduleItem.timeslot == slot.timeslots[slot.timeslots.length - 1])?.end;
            slot.locator = stations.find(station => station.code == slot.station)?.locator;
        });

        presentation.color = `hsl(${Math.floor(360 * index / (valid_presentations.length + 1))}, 100%, 95%)`;
        presentation.fgColor = `hsl(${Math.floor(360 * index / (valid_presentations.length + 1))}, 100%, 90%)`;

        if (presentation.confirmed) {
          presentation.bgStyle = `background-color: ${presentation.color}`;
        } else {
          presentation.bgStyle = `background: repeating-linear-gradient(-45deg, ${presentation.color}, ${presentation.color} 0.5em, white 0.5em, white 1em)`;
        }
    });

    let maxRepeats = Math.max(...presentations.map(presentation => presentation.slots.length));

    return {
        stations,
        schedule,
        presentations,
        maxRepeats,
        valid_presentations
    };
}