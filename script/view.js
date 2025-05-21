function showCharacterList() {
  const url = pathToBaseCharacterJson;
  fetch(url)
    .then((response) => response.json())
    .then((jsonData) => getCharacterList(jsonData));
}