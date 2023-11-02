document.addEventListener("DOMContentLoaded", function () {
  const qrCode = document.getElementById("qr-code");
  const video = document.getElementById("video");

  qrCode.addEventListener("click", () => {
    video.style.display = "block";
    video.play();
  });
});
