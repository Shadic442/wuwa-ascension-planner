let nameTitle = document.getElementById("nameTitle");

let inputLevelCurrent = document.getElementById("current-level");
let inputLevelTarget = document.getElementById("target-level");
let inputLevelResult = document.getElementById("result-level");

let totalLevel = 0;

let inputAscensionTarget = document.getElementById("target-ascension");
let inputAscensionCurrent = document.getElementById("current-ascension");
let inputAscensionResult = document.getElementById("result-ascension");

let btnLevel10 = document.getElementById("btnLevel10");

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

btnLevel10.onclick = function name(params) {
  inputLevelTarget.value = btnLevel10.value;
};

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
    `target Ascension level : ${calculateAscension(inputLevelTarget.value)}`
  );
  console.log(
    `current Ascension level : ${calculateAscension(inputLevelCurrent.value)}`
  );
}

/* asing ascension levels based the level's range */
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
    `target Basic Attack level : ${inputLevelTargetBasicAttack.value}`
  );
  console.log(
    `current Basic Attack level : ${inputLevelCurrentBasicAttack.value}`
  );
}

/** Calculate all characters stats levels */
function calculate() {
  calculateLevel();
  calculateLevelBasicAttack();
}
