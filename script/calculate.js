let nameTitle = document.getElementById("nameTitle");

// input for character level
let inputLevelCurrent = document.getElementById("current-level");
let inputLevelTarget = document.getElementById("target-level");
let inputLevelResult = document.getElementById("result-level");

let totalLevel = 0;

let btnLevel10 = document.getElementById("btnLevel10");
// button to set target character level to 10
btnLevel10.onclick = function name(params) {
  inputLevelTarget.value = btnLevel10.value;
};

// input for character ascension
let inputAscensionCurrent = document.getElementById("current-ascension");
let inputAscensionTarget = document.getElementById("target-ascension");
let inputAscensionResult = document.getElementById("result-ascension");

// input for basic attack level
let inputLevelCurrentBasicAttack = document.getElementById(
  "current-basic-attack-level"
);
let inputLevelTargetBasicAttack = document.getElementById(
  "target-basic-attack-level"
);
let inputLevelResultBasicAttack = document.getElementById(
  "result-basic-attack-level"
);

let totalBasicAttackLevel = 0;

// input for resonance skill level
let inputLevelCurrentResonanceSkill = document.getElementById(
  "current-resonance-skill-level"
);
let inputLevelTargetResonanceSkill = document.getElementById(
  "target-resonance-skill-level"
);
let inputLevelResultResonanceSkill = document.getElementById(
  "result-resonance-skill-level"
);

let totalResultResonanceSkillLevel = 0;

// input for forte circuit level
let inputLevelCurrentForteCircuit = document.getElementById(
  "current-forte-circuit-level"
);
let inputLevelTargetForteCircuit = document.getElementById(
  "target-forte-circuit-level"
);
let inputLevelResultForteCircuit = document.getElementById(
  "result-forte-circuit-level"
);

let totalResultForteCircuitLevel = 0;

// input for resonance liberation level
let inputLevelCurrentResonanceLiberation = document.getElementById(
  "current-resonance-liberation-level"
);
let inputLevelTargetResonanceLiberation = document.getElementById(
  "target-resonance-liberation-level"
);
let inputLevelResultResonanceLiberation = document.getElementById(
  "result-resonance-liberation-level"
);

let totalResultResonanceLiberationLevel = 0;

// input for intro skill level
let inputLevelCurrentIntroSkill = document.getElementById(
  "current-intro-skill-level"
);
let inputLevelTargetIntroSkill = document.getElementById(
  "target-intro-skill-level"
);
let inputLevelResultIntroSkill = document.getElementById(
  "result-intro-skill-level"
);

let totalResultIntroSkillLevel = 0;

/** calculate characters levels */
function calculateLevel() {
  if (
    inputLevelCurrent.value == null ||
    inputLevelTarget.value == null ||
    inputLevelCurrent.value == 0 ||
    inputLevelTarget.value == 0
  ) {
    inputLevelCurrent.value = 1;
    inputLevelTarget.value = 1;
  }
  totalLevel =
    parseInt(inputLevelTarget.value) - parseInt(inputLevelCurrent.value);
  inputLevelResult.value = totalLevel;

  inputAscensionTarget.value = calculateAscension(inputLevelTarget.value);
  inputAscensionCurrent.value = calculateAscension(inputLevelCurrent.value);

  console.log("%c calculating levels", "color:orange;font-weight:bold");
  console.log(`target level : ${inputLevelTarget.value}`);
  console.log(`current level : ${inputLevelCurrent.value}`);

  console.log(
    "%c calculating ascension Levels",
    "color:orange;font-weight:bold"
  );
  console.log(
    `current Ascension level : ${calculateAscension(inputLevelCurrent.value)}`
  );
  console.log(
    `target Ascension level : ${calculateAscension(inputLevelTarget.value)}`
  );
}

/* assign ascension levels based the level's range */
function calculateAscension(level) {
  let ascensionLevel = 0;
  if (level >= 1 && level <= 20) {
    ascensionLevel = 0;
  } else if (level > 20 && level <= 40) {
    ascensionLevel = 1;
  } else if (level > 40 && level <= 50) {
    ascensionLevel = 2;
  } else if (level > 50 && level <= 60) {
    ascensionLevel = 3;
  } else if (level > 60 && level <= 70) {
    ascensionLevel = 4;
  } else if (level > 70 && level <= 80) {
    ascensionLevel = 5;
  } else if (level > 80 && level <= 90) {
    ascensionLevel = 6;
  }
  /* console.log("%c calculating ascension Levels", "color:orange;font-weight:bold");
  console.log(ascensionLevel); */
  return ascensionLevel;
}

/** calculate characters basic attacks levels */
function calculateLevelBasicAttack() {
  if (
    inputLevelCurrentBasicAttack.value == null ||
    inputLevelTargetBasicAttack.value == null ||
    inputLevelCurrentBasicAttack.value == 0 ||
    inputLevelTargetBasicAttack.value == 0
  ) {
    inputLevelCurrentBasicAttack.value = 1;
    inputLevelTargetBasicAttack.value = 1;
  }
  totalBasicAttackLevel =
    parseInt(inputLevelTargetBasicAttack.value) -
    parseInt(inputLevelCurrentBasicAttack.value);
  inputLevelResultBasicAttack.value = totalBasicAttackLevel;

  console.log(
    "%c calculating Basic Attack level",
    "color:orange;font-weight:bold"
  );
  console.log(
    `current Basic Attack level : ${inputLevelCurrentBasicAttack.value}`
  );
  console.log(
    `target Basic Attack level : ${inputLevelTargetBasicAttack.value}`
  );
}

/** calculate characters resonance skill levels */
function calculateLevelResonanceSkill(current, target) {
  inputIsEmpy(current, target);

  totalBasicAttackLevel = parseInt(target.value) - parseInt(current.value);
  inputLevelResultBasicAttack.value = totalBasicAttackLevel;

  console.log(
    "%c calculating resonance skill level",
    "color:orange;font-weight:bold"
  );
  console.log(`current resonance skill level : ${current.value}`);
  console.log(`target resonance skill level : ${target.value}`);
  console.log(`total resonance skill level up : ${totalBasicAttackLevel}`);
}

// function calculateLevelResonanceSkill() {
//   /* if (
//     inputLevelCurrentResonanceSkill.value == null ||
//     inputLevelTargetResonanceSkill.value == null ||
//     inputLevelCurrentResonanceSkill.value == 0 ||
//     inputLevelTargetResonanceSkill.value == 0
//   ) {
//     inputLevelCurrentResonanceSkill.value = 1;
//     inputLevelTargetResonanceSkill.value = 1;
//   } */

//   inputIsEmpy(inputLevelCurrentResonanceSkill, inputLevelTargetResonanceSkill);

//   totalBasicAttackLevel =
//     parseInt(inputLevelTargetResonanceSkill.value) -
//     parseInt(inputLevelCurrentResonanceSkill.value);
//   inputLevelResultBasicAttack.value = totalBasicAttackLevel;

//   console.log(
//     "%c calculating resonance skill level",
//     "color:orange;font-weight:bold"
//   );
//   console.log(
//     `current resonance skill level : ${inputLevelCurrentResonanceSkill.value}`
//   );
//   console.log(
//     `target resonance skill level : ${inputLevelTargetResonanceSkill.value}`
//   );
// }

/** calculate characters Forte Circuit levels */
function calculateLevelForteCircuit(current, target) {
  inputIsEmpy(current, target);

  totalResultForteCircuitLevel =
    parseInt(target.value) - parseInt(current.value);
  inputLevelResultForteCircuit.value = totalResultForteCircuitLevel;

  console.log(
    "%c calculating resonance skill level",
    "color:orange;font-weight:bold"
  );
  console.log(`current Forte Circuit level : ${current.value}`);
  console.log(`target Forte Circuit level : ${target.value}`);
  console.log(`total Forte Circuit level up : ${totalResultForteCircuitLevel}`);

  return totalResultForteCircuitLevel;
}

/** calculate characters resonance liberation levels */
function calculateLevelResonanceLiberation(current, target) {
  inputIsEmpy(current, target);

  totalResultResonanceLiberationLevel =
    parseInt(target.value) - parseInt(current.value);
  inputLevelResultResonanceLiberation.value =
    totalResultResonanceLiberationLevel;

  console.log(
    "%c calculating resonance liberation level",
    "color:orange;font-weight:bold"
  );
  console.log(`current resonance liberation level : ${current.value}`);
  console.log(`target resonance liberation level : ${target.value}`);
  console.log(
    `total resonance liberation level up : ${totalResultResonanceLiberationLevel}`
  );

  return totalResultResonanceLiberationLevel;
}

/** calculate characters intro skill levels */
function calculateLevelIntroSkill(current, target) {
  inputIsEmpy(current, target);

  totalResultIntroSkillLevel = parseInt(target.value) - parseInt(current.value);
  inputLevelResultIntroSkill.value = totalResultIntroSkillLevel;

  console.log(
    "%c calculating intro skill level",
    "color:orange;font-weight:bold"
  );
  console.log(`current intro skill level : ${current.value}`);
  console.log(`target intro skill level : ${target.value}`);
  console.log(`total intro skill level up : ${totalResultIntroSkillLevel}`);

  return totalResultIntroSkillLevel;
}

/** Calculate all characters stats levels */
function calculate() {
  calculateLevel();
  calculateLevelBasicAttack();
  calculateLevelResonanceSkill(
    inputLevelCurrentResonanceSkill,
    inputLevelTargetResonanceSkill
  );
  calculateLevelForteCircuit(
    inputLevelCurrentForteCircuit,
    inputLevelTargetForteCircuit
  );
  calculateLevelResonanceLiberation(
    inputLevelCurrentResonanceLiberation,
    inputLevelTargetResonanceLiberation
  );
  calculateLevelIntroSkill(
    inputLevelCurrentIntroSkill,
    inputLevelTargetIntroSkill
  );
}
