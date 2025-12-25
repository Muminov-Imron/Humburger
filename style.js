const hamburgBtn = document.getElementById("btn-hed");
const navbar = document.getElementById("navbar");

btnhed.addEventListener("click", () => {
  navbar.classList.toggle("open");
  btnhed.classList.toggle("close-btn");
});

// DOM document object model

// snake case hamburg_btn
// kebab case hamburg-btn
// camel case hamburgBtn
