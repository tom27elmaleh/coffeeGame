document.addEventListener("DOMContentLoaded", function () {
  const playerForm = document.getElementById("player-form");

  playerForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const firstName = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;

    if (firstName && lastName && email && phone) {
      // Envoyer les données côté serveur (Node.js) pour les enregistrer dans la base de données.
      // Vous pouvez ajouter du code de redirection ici si nécessaire.
    }
  });
});
