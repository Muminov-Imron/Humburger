const hamburgBtn = document.getElementById("btn-hed");
const navbar = document.getElementById("navbar");

btnhed.addEventListener("click", () => {
  navbar.classList.toggle("ul-hed");
  btnhed.classList.toggle("hed-li");
});

// DOM document object model

// snake case hamburg_btn
// kebab case hamburg-btn
// camel case hamburgBtn
