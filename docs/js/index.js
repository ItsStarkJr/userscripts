console.log("bobo");

const scriptButton = document.getElementById("scripts-button");
const installButton = document.getElementById("install-button");
const scriptsContainer = document.getElementById("center-container-scripts");
const installContainer = document.getElementById("center-container-install");

scriptButton.addEventListener("click", function () {
  scriptButton.classList.add("top-button-active");
  installButton.classList.remove("top-button-active");
  installContainer.classList.add("hide");
  scriptsContainer.classList.remove("hide");
});

installButton.addEventListener("click", function () {
  installButton.classList.add("top-button-active");
  scriptButton.classList.remove("top-button-active");
  scriptsContainer.classList.add("hide");
  installContainer.classList.remove("hide");
});

document.getElementById("light-dark-button").addEventListener("click", () => {
  // document.body.classList.toggle("dark");
  console.log("liiiiiiiiiiiiiiight");
});
