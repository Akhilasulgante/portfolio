const { doc } = require("prettier");

function switchMode(mode) {
  let headingClasses, bgClasses, descClasses;

  if (mode === "light") {
    headingClasses = document.getElementsByClassName("text-info");
    updateClasses(headingClasses, "text-danger");
    bgClasses = document.getElementsByClassName("bg-light");
    updateClasses(bgClasses, "bg-dark");
  } else {
    headingClasses = document.getElementsByClassName("text-danger");
    updateClasses(headingClasses, "text-info");
    bgClasses = document.getElementsByClassName("bg-dark");
    updateClasses(bgClasses, "bg-light");
  }
}

function updateClasses(elements, finalClass) {
  for (let element of elements) {
    element.className = finalClass;
  }
}
