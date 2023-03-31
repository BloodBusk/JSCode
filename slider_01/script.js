// -------------carousel---------------
let sliderImg = document.getElementsByClassName("sliderImg");
let imgButton = document.getElementsByClassName("imgButton");
let imgContainers = document.getElementsByClassName("imgContainers");
let exit = document.getElementById("exit");

let carouselWrapper = document.getElementById("carouselWrapper");
let isDragging = false;

let itemToShow = document.getElementById("itemToShow");
let itemText = document.getElementById("itemText");

// click function
for (let i = 0; i < imgButton.length; i++) {
  imgButton[i].addEventListener("click", () => {
    exit.classList.add("exitCross");
    carouselWrapper.style.display = "none";

    // item to show
    itemToShow.style.display = "flex";
    const div = document.createElement("div");
    div.setAttribute("class", "sliderImg slider" + (i + 1));
    div.setAttribute("id", "idToRemove");
    // itemToShow.appendChild(div);
    itemToShow.insertBefore(div, itemText);
  });
}

// exit function

exit.addEventListener("click", () => {
  exit.classList.remove("exitCross");
  itemToShow.style.display = "none";
  carouselWrapper.style.display = "flex";
  document.getElementById("idToRemove").remove();
});

// ---------------draggable carousel--------------

const dragging = (e) => {
  if (!isDragging) {
    return;
  }
  e.preventDefault();
  carouselWrapper.scrollLeft -= e.movementX;
};

carouselWrapper.addEventListener("mousedown", () => (isDragging = true));
carouselWrapper.addEventListener("mouseup", () => (isDragging = false));
carouselWrapper.addEventListener("mousemove", dragging);
