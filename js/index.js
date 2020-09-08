const openModalBtn = document.querySelector('button[data-action="open-modal"]');
const closeModalBtn = document.querySelector(
  'button[data-action="close-modal"]'
);
const backdropRef = document.querySelector(".js-backdrop");

openModalBtn.addEventListener("click", onOpenModal);
closeModalBtn.addEventListener("click", onCloseModal);
backdropRef.addEventListener("click", onBackdropClick);

function onOpenModal() {
  window.addEventListener("keydown", onPressESC);
  document.body.classList.add("show-modal");
}

function onCloseModal() {
  window.removeEventListener("keydown", onPressESC);
  document.body.classList.remove("show-modal");
}

function onBackdropClick() {
  if (event.target === event.currentTarget) {
    onCloseModal();
  }
}

function onPressESC(event) {
  if (event.code === "Escape") {
    onCloseModal();
  }
}
