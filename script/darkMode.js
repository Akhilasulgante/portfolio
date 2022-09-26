function switchMode(mode) {
  let bgClasses, descClasses, navBarClasses, heading, lineClasses;
  if (mode === "dark") {
    bgClasses = document.getElementsByClassName("bg-light");
    updateClasses(bgClasses, "bg-dark");
    descClasses = document.getElementsByClassName("text-dark");
    updateClasses(descClasses, "text-light");
    navBarClasses = document.getElementsByClassName("navBarlight");
    updateClasses(navBarClasses, "navBardark");
    heading = document.getElementsByClassName("headerlight");
    updateClasses(heading, "headerdark");
  } else {
    bgClasses = document.getElementsByClassName("bg-dark");
    updateClasses(bgClasses, "bg-light");
    descClasses = document.getElementsByClassName("text-light");
    updateClasses(descClasses, "text-dark");
    navBarClasses = document.getElementsByClassName("navBardark");
    updateClasses(navBarClasses, "navBarlight");
    heading = document.getElementsByClassName("headerdark");
    updateClasses(heading, "headerlight");
  }
}

function updateClasses(elements, finalClass) {
  for (let element of Object.values(elements)) {
    console.log(element);
    element.className = finalClass;
  }
}
