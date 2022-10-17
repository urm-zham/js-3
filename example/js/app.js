const modal = document.querySelector(".modal");
const modalTrigger = document.querySelector(".btn_white");
const closeModalBtn = document.querySelector(".modal__close");


const openModal = () => {
    modal.classList.add("show");
    modal.classList.remove("hide");
    document.body.style.overflow = "hidden"; //body stays still when scrolling if modal is open
}

const closeModal = () => {
    modal.classList.add("hide");
    modal.classList.remove("show");
    document.body.style.overflow = ""; //bring back the overflow
}

modalTrigger.addEventListener("click", openModal);
closeModalBtn.addEventListener("click", closeModal);


modal.addEventListener("click", (event) => {
    if (event.target === modal) {
        console.log(event.target);
        console.log(modal);
        closeModal();
    }
})