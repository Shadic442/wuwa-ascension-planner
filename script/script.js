window.onload = function () {
  loadJSON();
};

let nameTitle = document.getElementById("nameTitle");
let currentLevelInput = document.getElementById("currentLevel");
let targetLevelInput = document.getElementById("targetLevel");
let resultLevelInput = document.getElementById("resultLevel");
let total = 0;
let targetAscensionInput = document.getElementById("targetAscension");
let currentAscensionInput = document.getElementById("currentAscension");
let resultAscensionInput = document.getElementById("resultAscension");

function calculateLevel() {
  if (
    currentLevelInput.value == null ||
    targetLevelInput.value == null ||
    currentLevelInput.value == 0 ||
    targetLevelInput.value == 0
  ) {
    currentLevelInput.value = 1;
    targetLevelInput.value = 1;
  }
  total = parseInt(targetLevelInput.value) - parseInt(currentLevelInput.value);
  resultLevelInput.value = total;

  targetAscensionInput.value = calculateAscension(targetLevelInput.value);
  currentAscensionInput.value = calculateAscension(currentLevelInput.value);

  console.log(
    `target Ascension level : ${calculateAscension(targetLevelInput.value)}`
  );
  console.log(
    `current Ascension level : ${calculateAscension(currentLevelInput.value)}`
  );
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

      console.log(listOfCharacter);
      console.log(
        `character text : ${listOfCharacter.data_characters[0].name}`
      );
    })
    .catch((error) => console.error("Error fetching data:", error));
}

//Option 1: Use localStorage (Client-Side Only) chatgpt

// Load JSON from localStorage or use default JSON
/* let jsonData = JSON.parse(localStorage.getItem("jsonData")) || {
  "data_characters": [
     {
       "id": 1,
       "name": "C_Carlotta",
       "currentLevel": 0,
       "targetLevel": 0,
       "currentAscension": 0,
       "targetAscension": 0
     }
   ]
};

// Modify JSON
jsonData.data_characters[0].targetLevel = 10;

// Save JSON to localStorage
localStorage.setItem("jsonData", JSON.stringify(jsonData));
console.log(jsonData.data_characters[0].targetLevel)
console.log("Updated JSON saved to localStorage:", jsonData); */
