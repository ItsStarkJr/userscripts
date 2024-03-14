const scriptButton = document.getElementById("scripts-button");
const installButton = document.getElementById("install-button");
const scriptsContainer = document.getElementById("center-container-scripts");
const installContainer = document.getElementById("center-container-install");
const very = document.getElementById("very");

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

very.addEventListener("click", function () {
  alert("VERY");
});

document.getElementById("light-dark-button").addEventListener("click", () => {
  document.body.classList.toggle("dark");
  var aTags = document.getElementsByTagName("a");
  var scriptsContainers = document.getElementsByClassName("script-container");
  const lightDarkButton = document.getElementById("light-dark-button");
  lightDarkButton.classList.toggle("dark");
  toggleDark(aTags);
  toggleDark(scriptsContainers);
});

function toggleDark(elements) {
  for (var i = 0; i < elements.length; i++) {
    elements[i].classList.toggle("dark");
  }
}
