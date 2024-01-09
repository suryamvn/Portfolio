const navbar = document.querySelector("#section-7");
const navbarOffset = navbar.offsetTop;
const sections = document.querySelectorAll("section");
const items = document.querySelectorAll(".list");
const year = document.querySelector(".txt");
const date = new Date();
year.innerHTML = date.getFullYear();
// const navbarLinks = document.querySelectorAll(".navbar_link_1");
// const progressBar = document.querySelector(".progress_bars_wrapper");
const progressBarPercents = [97, 89, 85, 87, 94, 95, 95, 90, 79, 81];
const pageColors = [
  "white",
  "lightblue",
  "#eef",
  "white",
  "black",
  "#eef",
  "white",
];

// var set = 0;
// function activeLink() {
//   items.forEach((item) => item.classList.remove("active"));
//   this.classList.add("active");
//   set = 1;
//   // console.log(this);
// }
// items.forEach((item) => item.addEventListener("click", activeLink));

window.addEventListener("scroll", () => {
  mainFn();
});

const mainFn = () => {
  if (window.pageYOffset >= navbarOffset - 136) {
    for (let i = 0; i < items.length; i++) {
      items[i].classList.remove("s1");
      items[i].classList.add("s2");
    }
    // console.log("s2" + window.pageYOffset);
  } else {
    for (let i = 0; i < items.length; i++) {
      items[i].classList.remove("s2");
      items[i].classList.add("s1");
    }
    // console.log("s1" + window.pageYOffset);
    // navbar.classList.remove("sticky");
  }

  sections.forEach((section, i) => {
    if (window.pageYOffset >= section.offsetTop - 10) {
      items.forEach((item) => {
        item.classList.remove("active");
      });
      items[i].classList.add("active");
    }
  });

  // if (window.pageYOffset + window.innerHeight >= progressBar.offsetTop) {
  //   document.querySelectorAll(".progress_bar_percent").forEach((el, i) => {
  //     el.style.width = `${progressBarPercents[i]}%`;
  //     el.previousElementSibling.firstElementChild.textContent =
  //       progressBarPercents[i];
  //   });
  // }
};

mainFn();

window.addEventListener("resize", () => {
  window.location.reload();
});

const cloudContainer = document.getElementById("cloud");
const cloudImage = cloudContainer.querySelector("img");

// Clone the image and append it to the container
const cloneImage = cloudImage.cloneNode(true);
cloudContainer.appendChild(cloneImage);

const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["Modukuri Venkata Nagasurya"];
const typingDelay = 100;
const erasingDelay = 100;
const newTextDelay = 2000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if (!cursorSpan.classList.contains("typing"))
      cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    cursorSpan.classList.remove("typing");
    // setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    if (!cursorSpan.classList.contains("typing"))
      cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(
      0,
      charIndex - 1
    );
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if (textArrayIndex >= textArray.length) textArrayIndex = 0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  // On DOM Load initiate the effect
  if (textArray.length) setTimeout(type, newTextDelay + 250);
});
