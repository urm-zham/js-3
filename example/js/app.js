/******************************  IMAGE SLIDER  *************************/
const tabsParent = document.querySelector(".tabheader__items"); //parent div с надписями
const tabs = document.querySelectorAll(".tabheader__item"); //надписи
const tabContent = document.querySelectorAll(".tabcontent"); //images

//Скрыть содержимое
const hideTabContent = () => {
    //hide images
    tabContent.forEach(
        (item) => {
            item.style.display = "none";
        }
    )
    
    //remove class, который выделяет одну надпись
    tabs.forEach(
        (item) => {
            item.classList.remove("tabheader__item_active");
        }
    )
}


//Показать содержимое
const showTabContent = (i = 0) => {
    //show image from array
    tabContent[i].style.display = "block";
    //make text active
    tabs[i].classList.add("tabheader__item_active");
}

hideTabContent();
showTabContent(); //default i=0


//Div с надписями - onClick делать выбранный текст активным и показывать соотв. image
tabsParent.addEventListener("click", (event) => {
    clearInterval(autoSlider); //stop auto slider when user chooses something?

    const target = event.target; //e.g. clicked <div ...>
    
    //только с child items - tabheader__item
    if (target.classList.contains("tabheader__item")) {
        
        tabs.forEach((item, i) => {
            if (target === item) { //не брать весь массив, только выбранный элемент
                hideTabContent();
                showTabContent(i); //pass active item's index
            }
        
        });
    }
})


/******************************  AUTO SLIDER  *************************/
//on page load - change slides every n sec (but only until user chooses something?)
let slide = 0;
const slideFreq = 1500;
const autoSlider = setInterval(() => {

    hideTabContent();
    showTabContent(slide); 
    slide++;

    if (slide === tabs.length) { //reset to 0
        slide = 0;
    }
}, slideFreq);



/******************************  MODAL DIALOGUE  *************************/
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
    document.body.style.overflow = ""; //bring back overflow
}

modalTrigger.addEventListener("click", openModal);
closeModalBtn.addEventListener("click", closeModal);


modal.addEventListener("click", (event) => {
    if (event.target === modal) {
        // console.log(event.target);
        // console.log(modal);
        closeModal();
    }
})


/****************************** SCROLL END MODAL DIALOGUE  *************************/
window.addEventListener("scroll", () => {
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight; //document H - window H
    const scrolled = Math.ceil(window.scrollY);    

    if (scrolled === scrollHeight) {
        openModal();
    }

})