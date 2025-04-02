let nameTitle = document.getElementById("nameTitle");
let inputLevelCurrent = document.getElementById("currentLevel");
let inputLevelTarget = document.getElementById("targetLevel");
let inputLevelResult = document.getElementById("resultLevel");
let total = 0;
let inputAscensionTarget = document.getElementById("targetAscension");
let inputAscensionCurrent = document.getElementById("currentAscension");
let inputAscensionResult = document.getElementById("resultAscension");
let btnLevel10 = document.getElementById("btnLevel10");

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
  total = parseInt(inputLevelTarget.value) - parseInt(inputLevelCurrent.value);
  inputLevelResult.value = total;

  inputAscensionTarget.value = calculateAscension(inputLevelTarget.value);
  inputAscensionCurrent.value = calculateAscension(inputLevelCurrent.value);

  /* console.log(
    `target Ascension level : ${calculateAscension(targetLevelInput.value)}`
  );
  console.log(
    `current Ascension level : ${calculateAscension(currentLevelInput.value)}`
  ); */
}

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
  console.log(ascensionLevel);
  return ascensionLevel;
}
