const getData = () => {
    
    const req = new XMLHttpRequest;
    req.open("GET", "data.json");
    req.setRequestHeader("Content-type", "application/json");
    req.send();

    req.onload = () => {
        const data = JSON.parse(req.response);
        document.querySelector(".cat").innerText = data.category;
        document.querySelector(".com").innerText = data.company;
        document.querySelector(".dur").innerText = data.duration;
    }
}

getData();