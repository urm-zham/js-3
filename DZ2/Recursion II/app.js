const rel = document.querySelector(".relative");
const abs = document.querySelector(".absolute");
const moveBtn = document.querySelector(".moveBtn");

const width = rel.offsetWidth - abs.offsetWidth;
const height = rel.offsetHeight - abs.offsetHeight;

let  right = 0;
let down = 0;


function move() {
   
    if (right <= width && down === 0){
        abs.style.left = `${right}px`;
        right += abs.offsetWidth;
        setTimeout(move, 100);

    } else if (right >= width && down <= height ){
        abs.style.top = `${down}px`;
        down += abs.offsetHeight;
        setTimeout(move, 100);

    } else if (right > 0 && down >= height) {
        right -= abs.offsetWidth;
        abs.style.left = `${right}px`;
        setTimeout(move, 100);

    } else if (right === 0 && down > 0) {
        down -= abs.offsetHeight;
        abs.style.top = `${down}px`;
        
        setTimeout(move, 100);
    }     
        
}


moveBtn.addEventListener("click", move);



