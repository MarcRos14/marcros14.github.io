const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/1.webp") {
    myImage.setAttribute("src", "images/2.jpg");
  } else {
    myImage.setAttribute("src", "images/1.webp");
  }
};