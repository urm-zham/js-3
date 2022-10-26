const kgs = document.querySelector("#kgs");
const usd = document.querySelector("#usd");
const eur = document.querySelector("#eur");


const handleConvert = (inp) => {

    inp.addEventListener("input", () => {
    const req = new XMLHttpRequest();
    req.open("GET", "data.json");
    req.setRequestHeader("Content-type", "application/json");
    req.send();

    req.addEventListener("load", () => {
        const resp = JSON.parse(req.response);
        
        switch(inp.id) {
            case "kgs": 
            usd.value = (inp.value / resp.usd).toFixed(2);
            eur.value = (inp.value / resp.eur).toFixed(2);
            if (inp.value === "")  {
                usd.value = "";
                eur.value = "";
            }
            break;

            case "usd": 
            kgs.value = (inp.value * resp.usd).toFixed(2);
            eur.value = ((inp.value * resp.usd) / resp.eur).toFixed(2);
            if (inp.value === "")  {
                kgs.value = "";
                eur.value = "";
            }            
            break;

            case "eur": 
            kgs.value = (inp.value * resp.eur).toFixed(2);
            usd.value = ((inp.value * resp.eur) / resp.usd).toFixed(2);
            if (inp.value === "")  {
                kgs.value = "";
                usd.value = "";
            }
            break;
        }

    })

})
}

const getContext = (event) => {
    handleConvert(event.target);
}

kgs.addEventListener("click", getContext);
usd.addEventListener("click", getContext);
eur.addEventListener("click", getContext);
