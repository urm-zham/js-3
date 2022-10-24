const kgs = document.querySelector("#kgs");
const usd = document.querySelector("#usd");

// kgs.addEventListener("input", () => {
//     const req = new XMLHttpRequest;
//     req.open("GET", "data.json");
//     req.setRequestHeader("Content-type", "application/json");
//     req.send();

//     req.addEventListener("load", () => {
//         const resp = JSON.parse(req.response);
//         console.log(resp);
//         usd.value = (kgs.value / resp.usd).toFixed(2);
//     })

// })

const handleConvert = (elem, target, isTrue) => { //e.g. kgs - element, usd - target, dynamic parameters
    elem.addEventListener("input", () => {
    const req = new XMLHttpRequest();
    req.open("GET", "data.json");
    req.setRequestHeader("Content-type", "application/json");
    req.send();

    req.addEventListener("load", () => {
        const resp = JSON.parse(req.response);
        //ternary
        isTrue ?
            target.value = (elem.value / resp.usd).toFixed(2)
            :
            target.value = (elem.value * resp.usd).toFixed(2);
        

        // elem.value === "" ? (target.value = "") : null; //if one input is empty erase other input too
        elem.value === "" && (target.value = ""); //same but without ELSE 
    })

})
}

handleConvert(kgs, usd, true); // /
handleConvert(usd, kgs, false); // *