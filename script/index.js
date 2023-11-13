document.addEventListener("DOMContentLoaded", function () {
  const socket = new WebSocket("wss://coffee-game-back.vercel.app");

  console.log("Tentative de connexion au serveur WebSocket");

  const video = document.getElementById("video");
  const qrCode = document.getElementById("qr-code");
  const autoriserButton = document.getElementById("autoriserLectureAuto");

  autoriserButton.addEventListener("click", function () {
    autoriserButton.style.display = "none";
  });

  // Écoute des événements de connexion
  socket.addEventListener("open", (event) => {
    console.log("Connecté au serveur WebSocket");
  });

  // Écoute des événements de fermeture
  socket.addEventListener("close", (event) => {
    console.log("Connexion WebSocket fermée");
  });

  // Écoute des événements d'erreur
  socket.addEventListener("error", (event) => {
    console.error("Erreur WebSocket:", event);
  });

  // Écoute des messages du serveur WebSocket
  socket.addEventListener("message", (event) => {
    console.log("Message du serveur WebSocket:", event.data);

    if (event.data === "formOK") {
      video.play();
      qrCode.style.display = "none";
      console.log("Formulaire validé");
    }
  });

  video.addEventListener("ended", function () {
    video.currentTime = 0;
    qrCode.style.display = "block";
  });
});
