// index.js

document.addEventListener("DOMContentLoaded", function () {
  const video = document.getElementById("video");
  function checkIsPlaying() {
    // Effectuer une requête GET à la route /checkIsPlaying
    fetch("http://localhost:3000/wins/checkIsPlaying")
      .then((response) => response.json())
      .then((data) => {
        const isPlaying = data.isPlaying;
        if (isPlaying === true) {
          video.play();
        }
      })
      .catch((error) => {
        console.error("Une erreur s'est produite :", error);
      });
  }

  // Appeler checkIsPlaying toutes les 1 seconde
  setInterval(checkIsPlaying, 1000);
});
