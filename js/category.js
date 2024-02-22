let currentIndex = 0;
const totalItems = document.querySelectorAll(".carousel-item").length;

// Viser et bestemt billede i karrusellen.

// Funktionen holder styr på det aktuelle billede med variablen currentIndex

function showSlide(index) {
  const container = document.querySelector(".carousel-container");
  const slideWidth = document.querySelector(".carousel-item").offsetWidth;
  container.style.transform = `translateX(-${index * slideWidth}px)`;
  currentIndex = index;
}

// Næste billede

function prevSlide() {
  currentIndex = (currentIndex - 1 + totalItems) % totalItems;
  showSlide(currentIndex);
}

// Forrige billede

function nextSlide() {
  currentIndex = (currentIndex + 1) % totalItems;
  showSlide(currentIndex);
}
