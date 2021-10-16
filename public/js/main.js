const sectionButton = document.getElementById("section__button");
const sectionImage = document.getElementById("section__image");
const courageArray = [
  "./images/courage-eyes.jpg",
  "./images/courage-happy.jpg",
  "./images/courage-scared.png",
  "./images/courage.jpg",
];
const img = document.querySelectorAll('img');
const galleryImageSecondary = document.querySelectorAll('.gallery__image--secondary');

sectionButton.addEventListener("click", (e) => {
  e.preventDefault();
  const randomNum = Math.floor(Math.random() * (3 - 0 + 1)) + 0;
  sectionImage.setAttribute("src", `${courageArray[randomNum]}`);
});

// can't get this working
for (let i = 0; i < img.length; i++) {
  img.addEventListener("click", (e) => {
    e.preventDefault();
    const p = document.createElement('p');
    p.innerText = 'hello world';
    galleryImageSecondary[i].append(p);
  });
}
