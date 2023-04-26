fetch("https://dog.ceo/api/breeds/image/random/2")
  .then(response => response.json())
  .then(data => {
    const dogImageElements = document.getElementsByClassName("dog-image");
    for (let i = 0; i < dogImageElements.length; i++) {
      dogImageElements[i].innerHTML = `<img src="${data.message[i]}" alt="Foto de un perrito">`;
    }
  })
  .catch(error => {
    console.error("No se pudo obtener foto de perrito:", error);
  });