let wantToSee = new Set();
let randomSeed = Math.floor(Math.random() * 1000000);

function loadLocal() {
  if (localStorage.getItem("wantToSee")) {
    try {
      let maybeArr = JSON.parse(localStorage.getItem("wantToSee"));
      if (Array.isArray(maybeArr)) {
        wantToSee = new Set(maybeArr);
      }
    } catch(err) {
      console.error(err);
    }
  }
  if (localStorage.getItem("randomSeed")) {
    randomSeed = JSON.parse(localStorage.getItem("randomSeed"));
  }
}

function saveLocal() {
  localStorage.setItem("wantToSee", JSON.stringify(Array.from(wantToSee.values())));
  localStorage.setItem("randomSeed", JSON.stringify(randomSeed));
}

loadLocal();

document.querySelectorAll(".want-to-see").forEach(el => {el.removeAttribute("hidden");});
document.getElementById("sessions-header").setAttribute(
  "colspan",
  document.getElementById("sessions-header").getAttribute("colspan") + 1
);

const checkboxes = Array.from(document.querySelectorAll(".want-to-see input"));

checkboxes.forEach(el => {
  if (wantToSee.has(el.dataset.index)) {
    el.checked = true;
  }
});

function calculateSessions() {
  const wants = [...wantToSee.values()];

  const timeslots = Array.from(document.querySelectorAll("[data-timeslot]"));

  /*const slotMap = new Map(
    wants.map(want => [want, timeslots.filter(slot => slot.dataset.index == want).map(slot => slot.dataset.timeslot)])
  );
  const relevantSlots = new Set([...slotMap.values()].flatMap(slots => slots));
  const reverseSlotMap = new Map(
    [...relevantSlots].map(slot => [slot, [...slotMap.keys()].filter(want => slotMap.get(want)?.includes(slot))])
  );

  if (relevantSlots.size < wants.length) {
    timeslots.forEach(el => el.classList.remove("must-see"));
    checkboxes.forEach(
      el => { if (el.checked) { el.parentElement.classList.add("cant-see"); }}
    );
    return false;
  } else {
    checkboxes.forEach(el => el.parentElement.classList.remove("cant-see"));
  }*/

  let solutions = wants.reduce((acc, want) => 
    timeslots.filter(
      slot => slot.dataset.index == want
    ).map(
      slot => slot.dataset.timeslot
    ).map(
      timeslot =>
        acc.filter(
          solution => !Object.values(solution).includes(timeslot)
        ).map(solution => ({...solution, [want]: timeslot}))
    ).reduce((acc2, solutions) => [...acc2, ...solutions], []),
    [{}]
  );

  timeslots.forEach(el => el.classList.remove("must-see"));
  checkboxes.forEach(el => el.parentElement.classList.remove("cant-see"));

  if (!solutions.length) {
    checkboxes.forEach(
      el => { if (el.checked) { el.parentElement.classList.add("cant-see"); }}
    );
  } else {
    const solution = solutions[randomSeed % solutions.length];
    timeslots.filter(el => solution[el.dataset.index]?.includes(el.dataset.timeslot)).forEach(el => {
      el.classList.add("must-see");
      document.querySelector(`[data-timeslot="${el.dataset.timeslot}"][data-station="${el.dataset.station}"]`).classList.add("must-see")
    });
  }

  console.log(solutions);
}

function wantChange() {
  // this - checkbox that changed
  const isChecked = this.checked;
  const index = this.dataset.index;

  if (isChecked) {
    wantToSee.add(index);
  } else {
    wantToSee.delete(index);
  }

  saveLocal();

  calculateSessions();
}

document.querySelectorAll(".want-to-see input").forEach(el => el.addEventListener("change", wantChange));

calculateSessions();