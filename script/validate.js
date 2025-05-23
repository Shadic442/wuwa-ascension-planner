/*  if the input fields are empty their values are set to 1
 based on the current and target level received has parameter */
function inputIsEmpty(inputCurrent, inputTarget) {
  if (
    inputCurrent.value == null ||
    inputTarget.value == null ||
    inputCurrent.value == 0 ||
    inputTarget.value == 0
  ) {
    inputCurrent.value = 1;
    inputTarget.value = 1;
    //return true;
  } /* else if (inputCurrent.value < inputCurrent.min) {
    inputCurrent.value = inputCurrent.min;
  } else if (inputCurrent.value > inputCurrent.max) {
    inputCurrent.value = inputCurrent.max;
  } else if (inputTarget.value < inputTarget.min) {
    inputTarget.value = inputTarget.min;
  } else if (inputTarget.value > inputTarget.max) {
    inputTarget.value = inputTarget.max;
  } */ else if (inputCurrent.value > inputTarget.value) {
    inputCurrent.value = inputTarget.value;
  }

  //return false;
}

/* validate if value of input is within min and max range of the html input tag
if not replace value with min or max value */
function enforceMinMax(inputValue) {
  if (inputValue.value != "") {
    if (parseInt(inputValue.value) < parseInt(inputValue.min)) {
      inputValue.value = inputValue.min;
    }
    if (parseInt(inputValue.value) > parseInt(inputValue.max)) {
      inputValue.value = inputValue.max;
    }
  }
}

function validateInputs() {
  if (
    inputLevelCurrent.value == null ||
    inputLevelTarget.value == null ||
    inputLevelCurrent.value == 0 ||
    inputLevelTarget.value == 0 ||
    inputLevelCurrentBasicAttack.value == null ||
    inputLevelTargetBasicAttack.value == null ||
    inputLevelCurrentBasicAttack.value == 0 ||
    inputLevelTargetBasicAttack.value == 0 ||
    inputLevelCurrentResonanceSkill.value == null ||
    inputLevelTargetResonanceSkill.value == null ||
    inputLevelCurrentResonanceSkill.value == 0 ||
    inputLevelTargetResonanceSkill.value == 0
  ) {
    inputLevelCurrent.value = 1;
    inputLevelTarget.value = 1;
    inputLevelCurrentBasicAttack.value = 1;
    inputLevelTargetBasicAttack.value = 1;
    inputLevelCurrentResonanceSkill.value = 1;
    inputLevelTargetResonanceSkill.value = 1;
  }

  /* if (
    inputLevelCurrentBasicAttack.value == null ||
    inputLevelTargetBasicAttack.value == null ||
    inputLevelCurrentBasicAttack.value == 0 ||
    inputLevelTargetBasicAttack.value == 0
  ) {
    inputLevelCurrentBasicAttack.value = 1;
    inputLevelTargetBasicAttack.value = 1;
  } */

  /*  if (
    inputLevelCurrentResonanceSkill.value == null ||
    inputLevelTargetResonanceSkill.value == null ||
    inputLevelCurrentResonanceSkill.value == 0 ||
    inputLevelTargetResonanceSkill.value == 0
  ) {
    inputLevelCurrentResonanceSkill.value = 1;
    inputLevelTargetResonanceSkill.value = 1;
  } */
}
