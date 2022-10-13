const rel = document.querySelector(".relative");
const abs = document.querySelector(".absolute");
const moveBtn = document.querySelector(".moveBtn");
const repos = rel.offsetWidth - abs.offsetWidth;


let  horiz = abs.offsetWidth;
let vert = abs.offsetHeight;

function move() {
   
    if (horiz <= repos){
        abs.style.left = `${horiz}px`;
        horiz += abs.offsetWidth;
        setTimeout(move, 500);
    } else if (horiz <= repos && vert >= repos ){
        abs.style.top = `${vert}px`;
        vert += abs.offsetHeight;
        setTimeout(move, 500);
    }

}

moveBtn.addEventListener("click", move);



