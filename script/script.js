window.onload = function () {
  /* loadJSON(); */
};

let nameTitle = document.getElementById("nameTitle");
let inputLevelCurrent = document.getElementById("currentLevel");
let inputLevelTarget = document.getElementById("targetLevel");
let inputLevelResult = document.getElementById("resultLevel");
let total = 0;
let inputAscensionTarget = document.getElementById("targetAscension");
let inputAscensionCurrent = document.getElementById("currentAscension");
let inputAscensionResult = document.getElementById("resultAscension");

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
  return ascensionLevel;
}

function loadJSON() {
  fetch("data/character.json")
    .then((response) => response.json())
    .then((listOfCharacter) => {
      /* let nameTitle = document.getElementById("nameTitle"); */
      nameTitle.innerHTML = listOfCharacter.data_characters[0].name;

      /* listOfCharacter.data_characters[0].targetLevel = targetLevelInput.value; // does not save in the json file
      listOfCharacter.data_characters[0].currentLevel = currentLevel.value; */

      /* console.log(listOfCharacter);
      console.log(
        `character text : ${listOfCharacter.data_characters[0].name}`
      ); */
    })
    .catch((error) => console.error("Error fetching data:", error));
}

/* var dataCharacters;
fetch("data/character.json")
  .then((response) => response.json())
  .then((listOfCharacter) => {
    dataCharacters = JSON.stringify(listOfCharacter);
    console.log(`fetch for variable : ${listOfCharacter}`);
  })
  .catch((error) => console.error("Error fetching data:", error)); */

//Option 1: Use localStorage (Client-Side Only)

// Load JSON from localStorage or use default JSON
/* let jsonData = JSON.parse(localStorage.getItem("jsonData")) || {
  data_characters: [
    {
      id: 1,
      name: "C_Carlotta",
      currentLevel: 0,
      targetLevel: 0,
      currentAscension: 0,
      targetAscension: 0,
    },
  ],
};

// Modify JSON
jsonData.data_characters[0].targetLevel = 10;

// Save JSON to localStorage
localStorage.setItem("jsonData", JSON.stringify(jsonData));
console.log(jsonData.data_characters[0].targetLevel);
console.log("Updated JSON saved to localStorage:", jsonData); */

function localstorageIsEmpty(key) {
  /**
   * verification if localstorage is empty use data from character.json file
   * if not use data from localstorage
   */
  if (
    localStorage.getItem(key) == null ||
    localStorage.getItem(key) == undefined
  ) {
    return true;
  } else {
    return false;
  }
}
let jsonDataKey = "jsonData";
let pathToBaseCharacterJson = "data/character.json";
/**
 * fetch to load the initial data of characters,
 * either from the character json file
 * or from localstorage of the browser
 */
fetch(pathToBaseCharacterJson)
  .then((response) => response.json())
  .then((data) => {
    // Store it in a variable variable to store data
    let jsonData /*= JSON.parse(localStorage.getItem("jsonData")) || data*/;

    /**
     * verification if localstorage is empty use data from character.json file
     * if not use data from localstorage
     */
    if (localstorageIsEmpty(jsonDataKey)) {
      // Store the JSON data into localStorage
      jsonData = data;
    } else {
      jsonData = JSON.parse(localStorage.getItem(jsonDataKey));
    }

    // Store the JSON data into localStorage
    localStorage.setItem("jsonData", JSON.stringify(jsonData));

    console.log("JSON data stored in localStorage:", jsonData);
  })
  .catch((error) => console.error("Error loading JSON file:", error));

function update() {
  fetch(pathToBaseCharacterJson)
    .then((response) => response.json)
    .then((data) => {
      //get the json data in localstorage or the local file then store it in variable jsonData
      let jsonData = JSON.parse(localStorage.getItem("jsonData")) || data;
      //then modify the data of the json stored in jsonData variable with the data in the input
      let characterId = 0;
      let valueLevelCurrent = inputLevelCurrent.value;
      let valueLevelTarget = inputLevelTarget.value;
      jsonData.data_characters[characterId].currentLevel = valueLevelCurrent;
      jsonData.data_characters[characterId].targetLevel = valueLevelTarget;
      // store the modified jsonData in localStorage
      localStorage.setItem("jsonData", JSON.stringify(jsonData));
      console.log("JSON data updated and stored in localStorage:", jsonData);
      console.log("current level updated in json:", valueLevelCurrent);
    })
    .catch((error) => console.error("Error updating JSON file:", error));
}
