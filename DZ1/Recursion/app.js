const rel = document.querySelector(".relative");
const abs = document.querySelector(".absolute");
const moveBtn = document.querySelector(".moveBtn");
const repos = rel.offsetWidth - abs.offsetWidth;


let cnt = abs.offsetWidth;

function move() {
    abs.style.left = `${cnt}px`;
    cnt += abs.offsetWidth;
    
    console.log(cnt);

    if (cnt<=repos){
       move();
      }

}

moveBtn.addEventListener("click", move);



