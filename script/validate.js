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
    return true;
  }

  return false;
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