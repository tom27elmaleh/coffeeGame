// index.js

document.addEventListener("DOMContentLoaded", function () {
  const autoriserButton = document.getElementById("autoriserLectureAuto");

  // Gestionnaire d'événement pour le bouton
  autoriserButton.addEventListener("click", function () {
    autoriserButton.style.display = "none"; // Cache le bouton après l'autorisation
  });

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

  video.addEventListener("ended", function () {
    // L'événement "ended" est déclenché lorsque la vidéo atteint la fin.
    // Pour remettre automatiquement la vidéo au début sans redémarrer la lecture :
    video.currentTime = 0; // Remettez la vidéo au début
  });

  // Appeler checkIsPlaying toutes les 1 seconde
  setInterval(checkIsPlaying, 1000);
});
