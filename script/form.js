document.addEventListener("DOMContentLoaded", function () {
  const playerForm = document.getElementById("player-form");

  playerForm.addEventListener("submit", function (event) {
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
  });
});
