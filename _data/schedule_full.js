export default function () {
    let stations = [
        {code: "A", name: "Track A (WHGA/001)", locator: "WHGA/001"},
        {code: "B", name: "Track B (WHGA/121)", locator: "WHGA/121"},
        {code: "C", name: "Track C (WHGA/021)", locator: "WHGA/021"},
        {code: "D", name: "Track D (WBBC/111)", locator: "WBBC/111"},
        {code: "E", name: "Track E (WHGA/U129)", locator: "WHGA/U129"}
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
          "name": "Coding Agents and Software Variability: Threats and Opportunities for Replicability in Science (Mathieu Acher)",
          "type": "keynote", "merged": true
        },
        {
          "start": "11:00", "end": "11:15",
          "name": "Community Announcements",
          "type": "announcement", "merged": true
        },
        {
          "start": "11:00", "end": "11:45",
          "name": "Coffee Break",
          "type": "lunch", "merged": true
        },
        {
          "start": "11:45", "end": "12:20",
          "name": "Show & Tell session 1",
          "type": "session", "timeslot": 1
        },
        {
          "start": "12:20", "end": "13:00",
          "name": "From Junior to Senior in the Age of AI (April Yi Wang)",
          "type": "keynote", "merged": true
        },
        {
          "start": "13:00", "end": "14:00",
          "name": "Lunch",
          "type": "lunch", "merged": true
        },
        {
          "start": "14:00", "end": "14:35",
          "name": "Show & Tell session 2",
          "type": "session", "timeslot": 2
        },
        {
          "start": "14:35", "end": "15:10",
          "name": "Show & Tell session 3",
          "type": "session", "timeslot": 3
        },
        {
          "start": "15:10", "end": "15:40",
          "name": "Coffee Break & Networking",
          "type": "lunch", "merged": true
        },
        {
          "start": "15:40", "end": "16:25",
          "name": "Quantum computing and Artificial Intelligence - where we stand and who benefits whom (Cornelius Hempel)",
          "type": "keynote", "merged": true
        },
        {
          "start": "16:25", "end": "17:00",
          "name": "Show & Tell session 4",
          "type": "session", "timeslot": 4
        },
        {
          "start": "17:00", "end": "17:15",
          "name": "Final Remarks & Farewell",
          "type": "announcement", "merged": true
        }
    ]
    let presentations = [
        {
          "name": "Teaching Git, GitHub, and AI coding agents to researchers who do not come from IT",
          "host": "Lars Schöbitz",
          "affiliation": "ETHZ",
          "confirmed": true,
          "type": "show-and-tell",
          "code": "schoebitz",
          "slots_code": "A",
          "summary": "Global Health Engineering (GHE) is an interdisciplinary research group of 15 people at ETH Zurich. We work with partners in resource-constrained countries, and most of us come from disciplines with little computing tradition. Digital skills in our sector are low, and it shows in the output. Little data is published following FAIR sharing principles, and almost no work is computationally reproducible. GHE responded by hiring an Open Science Specialist who comes from research in the sector rather than from IT. I am that specialist, and I am not a research IT expert.<br />The talk makes that missing expertise its starting point. Experts carry mental models they no longer notice, e.g., an expert treats reading an error message as a normal step, while a novice reads it as proof they did something wrong. Material built on expert mental models fails novices, who often stay quiet because they fear being judged for how they use technology. I will show how we design against that fear in our two-part workshop series, Agents for Scientists. The foundation workshop, Git &amp; GitHub for Scientists, teaches seven Git commands, the branch-and-PR cycle, and GitHub Issues and Project boards through participatory live coding, and spends explicit time on the aspects where beginners give up: authentication, merge conflicts, and committing on the wrong branch. The follow-up workshop, Agentic Coding for Collaboration and Scientific Work, teaches risk assessment, the handling of personal and sensitive data, and working with Claude Code as a versioned, reviewable collaborator. The foundation workshop materials are published as Open Educational Resources and will continue to evolve with each iteration.\nFor years we battled to establish our coding, data, and writing workflows on Git version control, and the struggle was rooted in our non-IT backgrounds. AI tools, and coding agents in particular, have lowered that barrier, and we are using the gain to invest further in rigorous, transparent, and reproducible research. We teach Git first because version control makes agent use traceable and disclosable, and that record is what lets a novice work with an agent confidently. I will close with what our non-restrictive approach to agent access has changed in the group, and with the blind spots I would ask this expert audience to check for in their own teaching material."
        },
        {
          "name": "Using AI to map complex physical state machines and improve failure recovery",
          "host": "Alvin Acerbo",
          "affiliation": "PSI",
          "confirmed": true,
          "type": "show-and-tell",
          "code": "acerbo",
          "slots_code": "B",
          "summary": "Automating the handling of delicate scientific instrumentation requires robust state management and a constant, precise read on physical parameters. This is especially true at the XIL beamline, one of the beamlines at the Swiss Light Source (SLS), where highly automated mask and wafer loading procedures are key to daily operations. These complex procedures are implemented by finite state machines that govern the transitions through several distinct states. To accurately track what the hardware is doing at any given moment, the control software constantly tracks a range of signals. Device state determination relies on everything from encoded linear positioners, binary switches, force sensors, temperature readouts, and voltage readbacks from clamping mechanisms.<br />Currently, when an unexpected hardware state occurs, the system defaults to a hard stop. Safely extracting the hardware and resetting the system is a largely manual process left to the operator.\nFor this show-and-tell, I will share some ongoing work exploring how we can transition to an intelligent, human-in-the-loop recovery model. Rather than handing execution over to an automated black box, I am looking at how AI can be used offline to analyze the existing state machine architecture, spot logical vulnerabilities, and help draft structured, guided recovery workflows for the operator. I plan to outline our current challenges with this sensor-dense environment and open up a discussion on how others might be leveraging AI tools to untangle and improve physical control logic."
        },
        {
          "name": "NTSuisse: how AI is used in the development of a web platform for Swiss surface water data",
          "host": "Kai Kammer",
          "affiliation": "Eawag",
          "confirmed": true,
          "type": "show-and-tell",
          "code": "kammer",
          "slots_code": "C",
          "summary": "NTSuisse is a national Swiss water-quality monitoring platform for high-resolution mass spectrometry (HRMS) data, used by cantonal environmental agencies, water suppliers, and the Swiss Federal Office for the Environment. The platform centralises data upload, automated processing, target and suspect screening, semi-quantification, and visualisation. It runs on Azure (with a separate staging instance), while the architecture supports local deployment equally well, which is how the development team iterates day-to-day.<br />The platform is built and maintained by a teamof three which is atypically large for a science project, but still small byany software-engineering standard. The stack is polyglot: React + TypeScript frontend, Python/Airflow orchestration, PostgreSQL + LabKey for data and auth, and Docker throughout. The backend enforces a strict layered architecture, separating pure functional logic separated from I/O, which keeps the offline test suite fast and refactoring safe. CI enforces linting, formatting, and the offline test suite at every merge request<br />We use AI tooling in many parts of the project: day-to-day coding, project-specific instruction files, domain-knowledge skill files, agent-callable planning workflows, code reviews.<br />Optimizing these AI-powered workflows has become an integral part of our work routine. My show-and-tell would include a general overview of the platform, the technologies used and how and where AI is used in development."
        },
        {
          "name": "Where was the Soviet Ambassador to India this day, 60 years ago?",
          "host": "Piotr Jacobsson",
          "affiliation": "UniFr",
          "confirmed": true,
          "type": "show-and-tell",
          "code": "jacobsson",
          "slots_code": "D",
          "summary": "The talk covers ongoing development of humanities-oriented AI-assisted data extraction and management processes. Cannot guarantee that we can answer the title in the quesiton."
        },
        {
          "name": "Agent capabilities for SQL access via the Model Context Protocol",
          "host": "Audrius Meskauskas",
          "affiliation": "ETHZ",
          "confirmed": true,
          "type": "show-and-tell",
          "code": "meskauskas",
          "slots_code": "E",
          "summary": "Using data from two different projects, we investigated whether an AI agent could effectively use controlled SQL access to domain-specific databases exposed through a Model Context Protocol (MCP) server. The two case studies were a database of protein structural changes in response to perturbations (DSPAtlas) and the Environmental Policy Atlas for Germany.<br />The AI was restricted to read-only access (SELECT statements) on human-curated database views. Security measures included whitelisting permitted SQL constructs and functions, and deploying both the MCP server and the database in a confined container with a read-only filesystem. The AI was also provided with documentation (\"skills\") describing the database schema and recommended querying practices. A few additional helper tools were also provided.<br />In both case studies, the AI successfully understood the database schema and the imposed restrictions. I response to every single question from researcher, it generated multiple and efficient SQL queries, itself processing the results. The agent was able to answer a wide range of questions by constructing multi-table joins and using statistical and spatial functions where appropriate. Furthermore, the AI explained the reasoning and intermediate steps leading to its conclusions, enabling subsequent human verification.<br />MCP allows to supply data and algorithms to widely known AI agents, allowing to use domain specific data rather than relying on their unknow and likely incomplete training datasets. We found that interactions between researchers and the AI / MCP system greatly increased their ability to investigate their own data using only natural language. Researchers were able to ask very specific questions that would have previously taken in-depth data science support and a much longer time to answer thanks to the decreased barrier."
        },
        {
          "name": "Local vs. Frontier Foundation Models: Secure, Automated Data Pre-Labeling for Complex Engineering Workflows",
          "host": "Danuta Paraficz",
          "affiliation": "Fernfachhochschule",
          "confirmed": true,
          "type": "show-and-tell",
          "code": "paraficz",
          "slots_code": "F",
          "summary": "Training specialized deep learning architectures like Channel Vision Transformers (ChannelViT) requires vast quantities of annotated training data. For the EAGLE photovoltaics project, manually tracking complex, concurrent cell failures (cracks, corrosion, and polymer discoloration) across thousands of multi-spectral images created a massive operational bottleneck. While frontier Vision-Language Models (VLMs) via external APIs offer a high-throughput solution for automated pre-labeling, uploading proprietary or sensitive engineering data to cloud servers introduces critical data privacy and security risks.<br />This 20-minute show-and-tell session demonstrates a practical data-engineering pipeline that evaluates the efficiency-versus-privacy trade-offs of using downloadable, open-weight foundation models locally. Rather than focusing on software deployment code, this interactive session directly benchmarks the annotation accuracy and processing speeds of local open-source architectures against frontier cloud models. We will run our automated labeling workflow live on screen using a secure, fully local environment, showing how structured prompts guide the vision model to isolate overlapping multi-spectral defects. Finally, we will present concrete validation data comparing the zero-shot classifications of local open models against a verified expert dataset, showing attendees how to maintain absolute data privacy without compromising labeling throughput and precision."
        },
        {
          "name": "Beyond the Chatbot: LLM-Powered Learning for Process Engineering",
          "host": "Aris Marcolongo",
          "affiliation": "FFHS",
          "confirmed": true,
          "type": "show-and-tell",
          "code": "marcolongo",
          "slots_code": "G",
          "summary": "We showcase an LLM-powered educational application developed within the Innosuisse project “GenAI P&amp;ID-Design: Efficiency in Process Engineering”, a collaboration between FFHS, FHNW, Swiss Smart Factory, and the startup Aitexa.<br />Process and Instrumentation Diagrams (P&amp;IDs) are fundamental to the design and operation of industrial plants. Learning to read and interpret them is essential for future engineers. The project explores two applications of generative AI: a web application supporting the creation of new P&amp;IDs, and an interactive learning tool in which students learn how to operate a plant and achieve a selected goal (e.g. the production of a compound).<br />During the show-and-tell session, we will focus on the educational tool. Students are presented with a plant and a target and must determine the next operational step. They formulate their instruction and receive immediate, LLM-generated feedback, allowing them to test their understanding of the process and practice expressing precise operational instructions.<br />The LLM is not used as a standalone chatbot or tutor. Instead, its capabilities are embedded in a structured, domain-specific learning workflow designed to guide students through the learning process. The demo will illustrate how LLMs can become an integrated component of interactive learning environments rather than simply a conversational interface. We will also share insights and lessons learned from student feedback collected during the development and testing of the application."
        },
        {
          "name": "AI usage patterns among researchers and RSE's, a sociological study",
          "host": "Michal Okoniewski",
          "affiliation": "ETHZ",
          "confirmed": true,
          "type": "show-and-tell",
          "code": "okoniewski",
          "slots_code": "H"
        },
        {
          "name": "LLM in analytics of small molecules",
          "host": "Sasa Bjelic",
          "affiliation": "PSI",
          "confirmed": true,
          "type": "show-and-tell",
          "code": "bjelic",
          "slots_code": "I"
        },
        {
          "name": "An MCP server for agent-driven symbolic computation",
          "host": "Sudeepan Datta",
          "affiliation": "PSI",
          "confirmed": true,
          "type": "show-and-tell",
          "code": "datta",
          "slots_code": "J",
          "summary": "Symbolic calculations in theoretical particle physics often involve extensive use of Mathematica notebooks, specialised Wolfram Language packages, and intermediate results within a running kernel. Integrating AI agents into these workflows raises practical questions regarding kernel state management, calculation logging, and the reproducibility of results.<br />I present an open-source Model Context Protocol (MCP) server developed to help with these tasks. The server connects an agent to a persistent Wolfram kernel through the Wolfram Symbolic Transfer Protocol (WSTP), and provides tools for notebook interaction, execution recording, and recovery following interrupted client sessions. Calculations can be recorded in Mathematica notebooks for inspection, providing an auditable record of the agent's work. Replay in a fresh kernel and explicit checkpoints help identify missing dependencies and changed results.<br />A small physics example will be used to illustrate the workflow, from working with an existing notebook to reviewing and rerunning the agent's calculations. The talk will cover key implementation choices, experience from development and testing, and current limitations, including the distinction between reproducing an execution and establishing the correctness of a scientific result."
        },
        {
          "name": "To vibe or not to vibe, that is the question",
          "host": "Linus Gasser",
          "affiliation": "EPFL",
          "confirmed": true,
          "type": "show-and-tell",
          "code": "gasser",
          "slots_code": "K",
          "summary": "There is anecdotical evidence of vibe coding being the next big thing, right after personal computers. Other anecdotical evidence points to it being the downfall of IT by adding more bugs it can ever fix.<br />I'll give some anecdotes for both, drawn from working in a scientific environment and in Open Source projects. Then I'll show some paths forward and what currently works for us."
        },
        {
          "name": "From Satellite Archives to Training Data: An Automated Pipeline for Multimodal Earth Observation Data Cubes",
          "host": "Bryant Weber-Hansen",
          "affiliation": "FHNW",
          "confirmed": true,
          "type": "show-and-tell",
          "code": "hansen",
          "slots_code": "L",
          "summary": "The presentation will focus on certain aspects of my recent master's thesis work (FHNW, MSc Data Science), which involved using Deep Learning for Earth Observation analysis, specifically for the purpose of identifying forest disturbances in the Amazon. I built an automated, open-data pipeline which transforms Sentinel-1 radar and Sentinel-2 multispectral time series, a digital elevation model, and Brazil's PRODES deforestation maps into co-registered, multimodal spatiotemporal data cubes for training models. The current dataset is 833 versioned NetCDF data cubes covering five 110 x 110 km tiles (about 60,000 km^2). This same workflow could scale much further; the limits are primarily storage and processing time, not code.<br />In this show-and-tell, I'll walk through the workflow from catalogue query (STAC) to training-ready data cubes, focusing on the research-software side rather than model performance. Topics: aligning sources with different geometries and revisit schedules into one format, versioning the data format, and keeping such a pipeline reproducible and maintainable. The application context is the EU Deforestation Regulations (EUDR), which requires companies to show that products are not linked to recent deforestation. Along the way, I'll touch on my interactions integrating coding assistants into a traditional workflows, carefully and within explicit limits, using it to facilitate development rather than to replace engineering judgement."
        },
        {
          "name": "Wô les moteurs - Slow down, in the time of speeding up",
          "host": "Dawn Duan",
          "affiliation": "PSI",
          "confirmed": true,
          "type": "show-and-tell",
          "code": "duan",
          "slots_code": "M",
          "summary": "\"Wô les moteurs\" is a quebec expression meaning \"slow down, calm down\"<br />I find it fitting because my brain constantly overheat if I don't mindfully stop the context switching and decision making because the AI is feeding me back way more information I can handle. Plus I want to really learn something instead of just sit aside and see it fly...<br />I could demonstrate how I use AI in developing software and workflow in the MX group, could also touch basis on how I use AI to develop my own skill in various aspects: as software engineer, scientist, and as language learner."
        },
        {
          "name": "Towards Collaborative Agentic Data Science",
          "host": "Johannes Kirschner / Rok Roškar",
          "affiliation": "ETHZ/SDSC",
          "confirmed": true,
          "type": "show-and-tell",
          "code": "kirschner",
          "slots_code": "N",
          "summary": "We will present agentic tools and workflows that we are actively developing and testing in our data science projects. We plan to present two parts (~10 min each), which will include demonstrations, examples and experiences from our projects.<br /><strong>1. Renku as a platform for AI-assisted data science</strong><br />The Renku platform provides data scientists and researchers with a space for projects throughout their entire lifecycle: from ideation and data exploration in interactive cloud-based compute sessions, to bulk model training or data processing with non-interactive jobs, and finally to presentation and dissemination of models or dashboards via standalone apps. Users can now also take advantage of AI tools and agents to enhance their work within the platform. For example, when Renku builds images with project dependencies, users can choose to also automatically add agent harnesses such as Pi, Claude or Codex to their environment. When configuring their sessions, users can then choose what type of access the agents should have to the data and to their secrets, to safeguard against unintentionally leaking sensitive data or credentials. Similarly, users can take advantage of Renku's MCP server to use AI assistants to create and configure Renku projects such that the work done through a coding assistant can easily be shared with others.<br /><strong>2. Hiraku: A toolkit for AI-assisted data science research</strong><br />Hiraku is a framework for AI-assisted research in data science and machine learning. It introduces a lightweight, hierarchical record structure that connects research goals and experiments with source commits, executable entrypoints, tracked runs, and results. Hiraku integrates with existing tools: Runs and metrics remain owned by user-managed tracking backends such as Weights &amp; Biases, MLflow, or CSV files, and are queried through a common backend interface. Entrypoints and project-defined dispatch scripts enable reproducible execution across local and remote compute environments while preserving attribution to records and source commits.<br />Data scientists manage this workflow through the CLI and inspect results via dashboards, while coding agents operate on the same workflow through a project-local skill or a customized harness. This framework is explicitly designed to support both interactive, human-in-the-loop experimentation and autonomous research workflows. We are actively exploring Hiraku's capabilities in on-going SDSC projects."
        }
      ];
    
    let slots = {
      "A": [{"station": "A", "timeslots": [1], "name": "A1"}, {"station": "B", "timeslots": [3], "name": "B3"}],
      "B": [{"station": "B", "timeslots": [1], "name": "B1"}],
      "C": [{"station": "C", "timeslots": [1], "name": "C1"}],
      "D": [{"station": "D", "timeslots": [1], "name": "D1"}],
      "E": [{"station": "A", "timeslots": [2], "name": "A2"}, {"station": "E", "timeslots": [4], "name": "E4"}],
      "F": [{"station": "B", "timeslots": [2], "name": "B2"}],
      "G": [{"station": "C", "timeslots": [2], "name": "C2"}],
      "H": [{"station": "D", "timeslots": [2], "name": "D2"}],
      "I": [{"station": "E", "timeslots": [2], "name": "E2"}, {"station": "C", "timeslots": [3], "name": "C3"}],
      "J": [{"station": "A", "timeslots": [3], "name": "A3"}],
      "K": [{"station": "D", "timeslots": [3], "name": "D3"}, {"station": "A", "timeslots": [4], "name": "A4"}],
      "L": [{"station": "E", "timeslots": [3], "name": "E3"}, {"station": "C", "timeslots": [4], "name": "C4"}],
      "M": [{"station": "B", "timeslots": [4], "name": "B4"}],
      "N": [{"station": "D", "timeslots": [4], "name": "D4"}]
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