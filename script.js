const GRID = document.querySelector("[data-grid]");
const slider = document.querySelector("[data-slider]");
const screenValue = document.querySelector("[data-slider-value]");
const reset = document.querySelector("[data-reset]");
const black = document.querySelector("[data-black]");
const rainbow = document.querySelector("[data-rainbow]");
const whiteBtn = document.querySelector('[data-white]')

// put slider value
slider.addEventListener("input", () => {
  // slider initialization value
  let val = slider.value;
  screenValue.textContent = val;
});

// create default grid value
function createDefaultGrid() {
  // 16 x 16 = 256 grid value
  for (let i = 0; i < 256; i++) {
    // create div element
    const div = document.createElement("div");
    // adding class to div
    div.classList.add("border");
    div.classList.add("border-black");
    div.classList.add("bg-white");
    div.classList.add("cell");
    // add black bg moouseover
    div.addEventListener("mouseover", (e) => {
      e.target.style.backgroundColor = "black";
    });
    // add child to GRID
    GRID.appendChild(div);
  }
}
// initiate default grid
createDefaultGrid();

// remove children
function removeChildren() {
  while (GRID.hasChildNodes()) {
    GRID.removeChild(GRID.firstChild)
  }
}

// create grid based on slider
slider.addEventListener("change", () => {
  removeChildren()
  GRID.style.gridTemplateRows = `repeat(${slider.value}, 2fr)`;
  GRID.style.gridTemplateColumns = `repeat(${slider.value}, 2fr)`;
  

  let gridAll = slider.value * slider.value
  for (let i = 0; i < gridAll; i++) {
    const div = document.createElement("div");
    // adding class to div
    div.classList.add("border");
    div.classList.add("border-black");
    div.classList.add("bg-white");
    div.classList.add("cell");

    div.addEventListener("mouseover", (e) => {
      e.target.style.backgroundColor = "black";
    });

    GRID.appendChild(div)
  }
});

// create reset color button
reset.addEventListener("click", () => {
  const cell = document.querySelectorAll(".cell");
  cell.forEach((cell) => {
    cell.style.backgroundColor = "white";
  });
});

// create black color button
black.addEventListener("click", () => {
  const cell = document.querySelectorAll(".cell");
  cell.forEach((cell) => {
    cell.addEventListener("mouseover", (e) => {
      e.target.style.backgroundColor = "black";
    });
  });
});

// rainbow color function
function randomColor() {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// create rainbow color button
rainbow.addEventListener("click", () => {
  const cell = document.querySelectorAll(".cell");
  cell.forEach((cell) => {
    cell.addEventListener("mouseover", (e) => {
      e.target.style.backgroundColor = randomColor();
    });
  });
});

// create white or erase color button
whiteBtn.addEventListener("click", () => {
  const cell = document.querySelectorAll(".cell");
  cell.forEach((cell) => {
    cell.addEventListener("mouseover", e => {
      e.target.style.backgroundColor = "white"
    })
  })
})