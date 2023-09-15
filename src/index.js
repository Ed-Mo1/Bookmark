const details = [
  {
    title: `Bookmark in one click`,
    text: `Organize your bookmarks however you like. Our simple drag-and-drop interface 
  gives you complete control over how you manage your favourite sites.`,
    img: `./images/illustration-features-tab-1.svg`,
  },
  {
    title: `Intelligent search`,
    text: `Our powerful search feature will help you find saved sites in no time at all. 
    No need to trawl through all of your bookmarks.`,
    img: `./images/illustration-features-tab-2.svg`,
  },
  {
    title: `Share your bookmarks`,
    text: `Easily share your bookmarks and collections with others. Create a shareable 
    link that you can send at the click of a button.`,
    img: `./images/illustration-features-tab-3.svg`,
  },
];
const email_form = document.querySelector("input");
let counter = document
  .querySelector(".feature-item.active")
  .getAttribute("index-feat");
const openNav = document.querySelector("#open-nav");
const closeNav = document.querySelector("#close-nav");

openNav.onclick = function () {
  document.querySelector(
    ".navbar-brand"
  ).style.cssText = `visibility: hidden !important`;
  this.style.visibility = "hidden";
};

closeNav.onclick = function () {
  document.querySelector(".navbar-brand").style.visibility = "visible";
  openNav.style.visibility = "visible";
};
document.querySelectorAll(".feature-item").forEach((el) => {
  el.addEventListener("click", function () {
    document.querySelectorAll(".feature-item").forEach((el) => {
      el.classList.remove("active");
    });
    this.classList.add("active");
    counter = document
      .querySelector(".feature-item.active")
      .getAttribute("index-feat");
    updateContent();
  });
});
function updateContent() {
  document.querySelector("#feat-title").textContent = details[counter].title;
  document.querySelector("#feat-text").textContent = details[counter].text;
  document.querySelector("#feat-img img").src = details[counter].img;
}
updateContent();
email_form.oninput = () => {
  document.querySelector(".form-group").classList.remove("error");
};
document.forms[0].onsubmit = (e) => {
  e.preventDefault();
  if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email_form.value)) {
    document.querySelector(".form-group").classList.add("error");
  }
};
