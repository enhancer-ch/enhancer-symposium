const {DateTime, Interval} = luxon;

const audio = new Audio("/assets/bell.wav");

const clock = document.getElementById("clock");

const schedule_full = JSON.parse(document.getElementById("schedule_full").text);

let lastScheduleItem = undefined;

let debugOffset = 0;
if (location.hash) {
  debugOffset = parseInt(location.hash.slice(1));
}

function hMS(duration) {
  if (duration.hours) {
    return `${duration.hours}:${String(duration.minutes).padStart(2, "0")}:${String(Math.floor(duration.seconds)).padStart(2, "0")}`;
  } else {
    return `${String(duration.minutes).padStart(2, "0")}:${String(Math.floor(duration.seconds)).padStart(2, "0")}`;
  }
}

function HM(dt) {
  return `${String(dt.hour).padStart(2, "0")}:${String(dt.minute).padStart(2, "0")}`;
}

function updateClock() {
  const dtNow = DateTime.now().plus({minutes: debugOffset});

  document.getElementById("now").replaceChildren(HM(dtNow)); //.toLocaleString(DateTime.TIME_24_WITH_SECONDS));

  const scheduleItem = schedule_full.schedule.find(item => DateTime.fromISO(item.end) > dtNow);
  if (!scheduleItem) {
    document.getElementById("slot").replaceChildren();
    document.getElementById("slot-name").replaceChildren();
    document.getElementById("next-name").replaceChildren();
    document.getElementById("slot-contents").replaceChildren("That's all, folks!");
    document.getElementById("clock").replaceChildren();
    return;
  }

  if (lastScheduleItem && lastScheduleItem != scheduleItem) {
    audio.pause();
    audio.currentTime = 0;
    audio.play();
  }
  lastScheduleItem = scheduleItem;

  const nextScheduleItem = schedule_full.schedule.find(item => DateTime.fromISO(item.start) > dtNow);
  if (nextScheduleItem) {
    if (nextScheduleItem.merged) {
      const nextNameSpan = document.createElement("span");
      nextNameSpan.classList.add("orange")
      nextNameSpan.textContent = nextScheduleItem.name;
  
      document.getElementById("next-name").replaceChildren("Next up: ", nextNameSpan, " at ", nextScheduleItem.start);
      document.getElementById("next-slot-contents").replaceChildren();
    } else {
      document.getElementById("next-name").replaceChildren("Next up at ", nextScheduleItem.start);
      document.getElementById("next-slot-contents").replaceChildren(...schedule_full.stations.map(station => {
        const div = document.createElement("div");
        div.classList.add("next-slot");

        const nameSpan = document.createElement("span");
        if (nextScheduleItem.presentations[station.code]) {
          nameSpan.style.color = nextScheduleItem.presentations[station.code].fgColor;
          nameSpan.textContent = nextScheduleItem.presentations[station.code].name;
        }

        div.replaceChildren(`${station.name}: `, nameSpan);
        return div;
      }));
    }
  } else {
    document.getElementById("next-name").replaceChildren();
  }

  document.getElementById("slot").innerText = `${scheduleItem.start}–${scheduleItem.end}`;

  if (scheduleItem.merged) {
    const nameSpan = document.createElement("span");
    nameSpan.classList.add("orange");
    nameSpan.textContent = scheduleItem.name;

    document.getElementById("slot-contents").replaceChildren(nameSpan);
  } else {
    document.getElementById("slot-name").innerText = scheduleItem.name;
    document.getElementById("slot-contents").replaceChildren(
      ...schedule_full.stations.map(station => {
        const div = document.createElement("div");
        div.classList.add("slot");

        const nameSpan = document.createElement("span");
        if (scheduleItem.presentations[station.code]) {
          nameSpan.style.color = scheduleItem.presentations[station.code].fgColor;
          nameSpan.textContent = scheduleItem.presentations[station.code].name;
        }

        div.replaceChildren(`${station.name}: `, nameSpan);
        return div;
      })
    );
  }

  const remaining = Interval.fromDateTimes(dtNow, DateTime.fromISO(scheduleItem.end)).toDuration(["hours", "minutes", "seconds"]);
  document.getElementById("clock").replaceChildren(hMS(remaining));
  document.getElementById("clock").classList.toggle("hurry", remaining.minutes < 5);
}

updateClock();
setInterval(updateClock, 1000);

document.addEventListener("keydown", (ev) => {
  if (ev.key === "b") {
    audio.pause();
    audio.currentTime = 0;
    audio.play();
  }
})