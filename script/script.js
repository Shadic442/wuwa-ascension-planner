window.onload = function () {
  loadJSON();
};

let nameTitle = document.getElementById("nameTitle");
let currentLevelInput = document.getElementById("currentLevel");
let targetLevelInput = document.getElementById("targetLevel");
let resultLevelInput = document.getElementById("resultLevel");
let total = 0;

function calculateLevel() {
  total = parseInt(targetLevelInput.value) - parseInt(currentLevelInput.value);
  resultLevelInput.value = total;
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
