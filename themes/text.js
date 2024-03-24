function load() {
  document.querySelectorAll(".hover-line").forEach((item) => {
    // Go through each child of the hover-line element
    item.childNodes.forEach((child) => {
      // Only work for <p> elements
      if (child.tagName !== "P") return;
      // Add mouse click event listener to each child
      child.addEventListener("click", (e) => {
        // Remove the selected class from all children
        item.childNodes.forEach((child) => {
          child.classList?.remove("selected");
        });
        // Add the selected class to the clicked child
        child.classList?.add("selected");
      });
    });
  });

  // Hide table content until clicked
  document.querySelectorAll("td").forEach((item) => {
    item.style.opacity = 0;
    // Add mouse click event listener to each child
    item.addEventListener("click", (e) => {
      // Toggle the opacity of the clicked item
      item.style.opacity = item.style.opacity === "1" ? 0 : 1;
      item.style.setProperty("--n", item.textContent.length * 2);
      item.classList.toggle("typed-out")
      // Add the --n css variable to the clicked item
    });
  });

  document.querySelectorAll(".slide-in").forEach((item) => {
    item.style.opacity = 0;
    // Add mouse click event listener to each child
    item.addEventListener("click", (e) => {
      // Toggle the opacity of the clicked item
      item.style.opacity = item.style.opacity === "1" ? 0 : 1;
      item.style.setProperty("--n", item.textContent.length * 2);
      item.classList.toggle("typed-out")
      // Add the --n css variable to the clicked item
    });
  });
}

window.onload = load;