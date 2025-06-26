function showCharacterList() {
  const url = pathToBaseCharactersJson;
  fetch(url)
    .then((response) => response.json())
    .then((jsonData) => getCharacterList(jsonData));
}