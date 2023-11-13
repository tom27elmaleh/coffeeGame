document.addEventListener("DOMContentLoaded", function () {
  const socket = new WebSocket("ws:https://coffee-game-back.vercel.app");

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

  // Écoute des événements de formulaire validé
  document.getElementById("player-form").addEventListener("submit", (event) => {
    event.preventDefault();

    const firstName = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;
    const email = document.getElementById("email").value;
    const number = document.getElementById("number").value;

    if (firstName && lastName && email && number) {
      fetch("https://coffee-game-back.vercel.app/users/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email,
          firstName: firstName,
          lastName: lastName,
          number: number,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          fetch("https://coffee-game-back.vercel.app/wins/", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              nameLastWinner: "firstName",
            }),
          })
            .then((response) => response.json())
            .then((data) => {
              console.log(data);
            });
        });
    }

    // Envoi d'un message au serveur WebSocket
    socket.send("formOK");
    console.log("submit");
  });
});
