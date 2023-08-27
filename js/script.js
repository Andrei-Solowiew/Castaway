window.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".header__burger").addEventListener("click", function () {
      document.querySelector(".header__list").classList.toggle("open");
    });
  document.querySelector(".header__burger").addEventListener("click", function () {
      document.querySelector(".header__burger").classList.toggle("active");
    });
  $(".header__burger").on("click", function (event) {
    $(".header__list").slideToggle(400);
    event.preventDefault();
    console.log("a");
  });
});
