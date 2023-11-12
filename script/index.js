// index.js

document.addEventListener("DOMContentLoaded", function () {
  const autoriserButton = document.getElementById("autoriserLectureAuto");

  // Gestionnaire d'événement pour le bouton
  autoriserButton.addEventListener("click", function () {
    autoriserButton.style.display = "none"; // Cache le bouton après l'autorisation
  });

  const video = document.getElementById("video");
  const qrCode = document.getElementById("qr-code");
  function checkIsPlaying() {
    // Effectuer une requête GET à la route /checkIsPlaying
    fetch("https://coffee-game-back.vercel.app/wins/checkIsPlaying")
      .then((response) => response.json())
      .then((data) => {
        const isPlaying = data.isPlaying;
        if (isPlaying === true) {
          qrCode.style.display = "none";
          video.play();
        }
      })
      .catch((error) => {
        console.error("Une erreur s'est produite :", error);
      });
  }

  video.addEventListener("ended", function () {
    video.currentTime = 0;
    qrCode.style.display = "block";
  });

  setInterval(checkIsPlaying, 1500);
});
