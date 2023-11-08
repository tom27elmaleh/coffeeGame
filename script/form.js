document.addEventListener("DOMContentLoaded", function () {
  const playerForm = document.getElementById("player-form");
  const videoPlayer = document.getElementById("video");

  playerForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const firstName = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;
    const email = document.getElementById("email").value;
    const number = document.getElementById("number").value;

    if (firstName && lastName && email && number) {
      fetch("http://localhost:3000/users/add", {
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
          fetch("http://localhost:3000/wins/", {
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
