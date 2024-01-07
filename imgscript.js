let childElement = document.querySelectorAll(".img-cont");

let imgUrls = [
  "assets/img/achievements/certf_1.jpg",
  "assets/img/achievements/certf_2.jpg",
  "assets/img/achievements/certf_3.jpg",
];

let zIndex = 1;

childElement.forEach((element, index) => {
  let img = document.createElement("img");
  img.setAttribute("src", imgUrls[index]);
  img.setAttribute("class", "image");
  element.appendChild(img);

  element.addEventListener("click", () => {
    zIndex -= 3;
    element.style.right = "50em";
    element.style.zIndex = zIndex.toString();
    element.style.transform = "rotate(0deg)";

    element.style.transition = "right 0.3s ease";

    setTimeout(() => {
      zIndex -= 3;
      element.style.right = "";
      element.style.zIndex = zIndex.toString();
      element.style.transform = "";

      element.style.transition = "all 0.3s ease";

      setTimeout(() => {
        element.style.transition = "";
      }, 300);
    }, 1000);
  });
});
