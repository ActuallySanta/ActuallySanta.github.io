let GamePageIcons = document.getElementsByClassName("ProjectListItem");

console.log("Script is loaded");

for (let element of GamePageIcons) {
  console.log("Element: " + element.className);
  //Add the page open event
  element.addEventListener("click", (e) => {
    console.log("Clicked!");
    // debugger;
    OpenProjectPage(element.dataset.link);
  });

  element.addEventListener("mouseover", (e) => {
    {
      element.style.backgroundColor = "#e9edc9";
    }

    element.addEventListener("mouseout", (e) => {
      element.removeAttribute("style");
    });
  });
}

function OpenProjectPage(link) {
  console.log(link);
  window.open(link);
}
