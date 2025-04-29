window.onload = function () {
  /* loadJSON(); */
};

function loadJSON() {
  fetch("data/character.json")
    .then((response) => response.json())
    .then((listOfCharacter) => {
      nameTitle.innerHTML = listOfCharacter.data_characters[0].name;

      /* console.log(listOfCharacter);
      console.log(
        `character text : ${listOfCharacter.data_characters[0].name}`
      ); */
    })
    .catch((error) => console.error("Error fetching data:", error));
}

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

let characterId = 0;
// TODO: take a character id has parameter to update a specific character
function update() {
  fetch(pathToBaseCharacterJson)
    .then((response) => response.json)
    .then((data) => {
      //get the json data in localstorage or the local file then store it in variable jsonData
      let jsonData = JSON.parse(localStorage.getItem("jsonData")) || data;
      //then modify the data of the json stored in jsonData variable with the data in the input

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

/* populate character llist modal with the characters from the character.json file */
function getCharacterList(jsonData) {
  let listContent;
  //jsonData.data_characters.length;
  /* for (let index = 0; index < array.length; index++) {
    const element = array[index];
  } */

  for (let index = 0; index < jsonData.data_characters.length; index++) {
    jsonData.data_characters[index].id;
    jsonData.data_characters[index].name;
    jsonData.data_characters[index].characterImageIcon;
    listContent = ``;
  }

  <div class="d-grid gap-2">
    <button type="button" class="btn" id="0">
      <img
        src="images/Resonator/Charlotta/Carlotta_Icon.webp"
        alt=""
        width="48px"
      />
      Charlotta
    </button>
  </div>;

  $("#characterListEntry").html(listContent);
}

function showCharacterList() {
  const url = pathToBaseCharacterJson;
  fetch(url)
    .then((response) => response.json())
    .then((jsonData) => showCharacterList(jsonData));
}
