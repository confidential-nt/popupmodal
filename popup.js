const openBtn = document.getElementById("jsOpenBtn");
const modal = document.getElementById("jsModal");
const closeBtn = document.getElementById("jsCloseBtn");
const overlay = document.getElementById("jsOverlay");

function closeModal() {
  modal.classList.add("hide");
}

function openModal() {
  modal.classList.remove("hide");
}

openBtn.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);
