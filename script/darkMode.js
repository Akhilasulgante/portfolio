function switchMode(mode) {
  let headingClasses, bgClasses, descClasses;
  console.log(mode);
  if (mode === "dark") {
    headingClasses = document.getElementsByClassName("text-info");
    console.log(
      headingClasses,
      "d",
      document.getElementsByClassName("text-info")
    );
    updateClasses(headingClasses, "text-danger");
    bgClasses = document.getElementsByClassName("bg-light");
    updateClasses(bgClasses, "bg-dark");
  } else {
    headingClasses = document.getElementsByClassName("text-danger");
    console.log(headingClasses);

    updateClasses(headingClasses, "text-info");
    bgClasses = document.getElementsByClassName("bg-dark");
    updateClasses(bgClasses, "bg-light");
  }
}

function updateClasses(elements, finalClass) {
  for (let element of Object.values(elements)) {
    console.log(element);
    element.className = finalClass;
  }
}
