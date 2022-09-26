function switchMode(mode) {
  let headingClasses, bgClasses, descClasses, navBarClasses;
  console.log(mode);
  if (mode === "dark") {
    headingClasses = document.getElementsByClassName("text-info");
    updateClasses(headingClasses, "text-danger");
    bgClasses = document.getElementsByClassName("bg-light");
    updateClasses(bgClasses, "bg-dark");
    descClasses = document.getElementsByClassName("text-dark");
    updateClasses(descClasses, "text-light");
    navBarClasses = document.getElementsByClassName("navBarlight");
    updateClasses(navBarClasses, "navBardark");
  } else {
    headingClasses = document.getElementsByClassName("text-danger");
    updateClasses(headingClasses, "text-info");
    bgClasses = document.getElementsByClassName("bg-dark");
    updateClasses(bgClasses, "bg-light");
    descClasses = document.getElementsByClassName("text-light");
    updateClasses(descClasses, "text-dark");
    navBarClasses = document.getElementsByClassName("navBardark");
    updateClasses(navBarClasses, "navBarlight");
  }
}

function updateClasses(elements, finalClass) {
  for (let element of Object.values(elements)) {
    console.log(element);
    element.className = finalClass;
  }
}
