let buttonOpenModal = document.querySelector(".search-btn");
let searchModal = document.querySelector(".modal");

buttonOpenModal.addEventListener("click", function () {
    searchModal.classList.toggle("search-modal");
})