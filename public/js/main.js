const sectionButton = document.getElementById("section__button");
const sectionImage = document.getElementById("section__image");
const courageArray = [
  "./images/courage-eyes.jpg",
  "./images/courage-happy.jpg",
  "./images/courage-scared.png",
  "./images/courage.jpg",
];
sectionButton.addEventListener("click", (e) => {
  e.preventDefault();
  const randomNum = Math.floor(Math.random() * (3 - 0 + 1)) + 0;
  sectionImage.setAttribute("src", `${courageArray[randomNum]}`);
});
