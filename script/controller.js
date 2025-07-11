window.onload = function () {
  showCharacterList();
};

let jsonDataKeyCharacters = "jsonData";
let pathToBaseCharactersJson = "data/character.json";

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

/**
 * verification if localstorage is empty use data from character.json file
 * if not use data from localstorage
 */
function localstorageIsEmpty(key) {
  if (
    localStorage.getItem(key) == null ||
    localStorage.getItem(key) == undefined
  ) {
    return true;
  } else {
    return false;
  }
}

/**
 * fetch to load the initial data of characters,
 * either from the character json file
 * or from localstorage of the browser
 */
fetch(pathToBaseCharactersJson)
  .then((response) => response.json())
  .then((data) => {
    // Store it in a variable variable to store data
    let jsonData /*= JSON.parse(localStorage.getItem("jsonData")) || data*/;

    /**
     * verification if localstorage is empty use data from character.json file
     * if not use data from localstorage
     */
    if (localstorageIsEmpty(jsonDataKeyCharacters)) {
      // Store the JSON data into localStorage
      jsonData = data;
    } else {
      jsonData = JSON.parse(localStorage.getItem(jsonDataKeyCharacters));
    }

    // Store the JSON data into localStorage
    localStorage.setItem(jsonDataKeyCharacters, JSON.stringify(jsonData));

    console.log("JSON data stored in localStorage:", jsonData);
  })
  .catch((error) => console.error("Error loading JSON file:", error));

let characterId = 0;
// TODO: take a character id has parameter to update a specific character
function update() {
  fetch(pathToBaseCharactersJson)
    .then((response) => response.json)
    .then((data) => {
      //get the json data in localstorage or the local file then store it in variable jsonData
      let jsonData =
        JSON.parse(localStorage.getItem(jsonDataKeyCharacters)) || data;

      //then modify the data of the json stored in jsonData variable with the data in the input
      let valueLevelCurrent = inputLevelCurrent.value;
      let valueLevelTarget = inputLevelTarget.value;
      jsonData.data_characters[characterId].currentLevel = valueLevelCurrent;
      jsonData.data_characters[characterId].targetLevel = valueLevelTarget;
      // store the modified jsonData in localStorage
      localStorage.setItem(jsonDataKeyCharacters, JSON.stringify(jsonData));

      console.log("%c update button :", "color:orange;font-weight:bold");
      console.log("JSON data updated and stored in localStorage:", jsonData);
      console.log("current level updated in json:", valueLevelCurrent);
    })
    .catch((error) => console.error("Error updating JSON file:", error));
}

/* populate character llist modal with the characters from the character.json file */
function getCharacterList(jsonData) {
  let listContent = "";

  if (localstorageIsEmpty(jsonDataKeyCharacters)) {
    // Store the JSON data into localStorage
    jsonData = data;
  } else {
    jsonData = JSON.parse(localStorage.getItem(jsonDataKeyCharacters));
  }

  //data-bs-toggle="modal" data-bs-target="#modal-calculate"
  jsonData.data_characters.forEach((a_Character) => {
    listContent += `<div class="d-grid gap-2">
    <button type="button" class="btn" id="${a_Character.id}" onclick='testModalFunction( ${JSON.stringify(a_Character)} )'>
      <img
        src=${a_Character.characterImageIcon}
        alt="Carlotta_Icon"
        width="48px"
      />
      ${a_Character.name}
    </button>
    <input type="hidden" id="${a_Character.id}" />
  </div>`;

    console.log("%c list character buttons :", "color:orange;font-weight:bold");
    console.log(`name : ${a_Character.name}`);
    console.log("%c one character :", "color:orange;font-weight:bold");
    console.log(`name : ${a_Character.name}`);
    console.log(`data : ${JSON.stringify(a_Character, null, 2)}`);
  });

  /* for (let index = 0; index < jsonData.data_characters.length; index++) {
    listContent += `<div class="d-grid gap-2">
    <button type="button" class="btn" id="${jsonData.data_characters[index].id}">
      <img
        src=${jsonData.data_characters[index].characterImageIcon}
        alt="Carlotta_Icon"
        width="48px"
      />
      ${jsonData.data_characters[index].name}
    </button>
  </div>`;

    console.log("%c list value", "color:orange;font-weight:bold");
    console.log(`name : ${jsonData.data_characters[index].name}`);
  } */

  $("#characterListEntry").html(listContent);
}

function testModalFunction(jsonData) {
  /* let MyModal = ``;
  document.getElementById("contenu").innerHTML = form;
  $("#testModal").modal("show"); */

  //const myModal = new bootstrap.Modal(document.getElementById('modal-calculate'));
  //JSON.stringify(jsonData);
  //JSON.parse(jsonData);
  document.getElementById("modal-calculate-label").innerHTML = jsonData.name;
  $("#modal-calculate").modal("toggle");
}
