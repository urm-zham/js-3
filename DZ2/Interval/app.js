let ss = 0;

const elapsedTime = () => {
    if (ss < 10) { //limit to output 10 s.
        ss += 1;
        console.log(ss + " s.");
    } else {
        clearInterval(interval); //if needed (?)
    }
}

const interval = setInterval(elapsedTime, 1000);


