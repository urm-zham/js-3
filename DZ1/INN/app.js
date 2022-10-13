const innInp = document.querySelector(".innInp");
const innCheck = document.querySelector(".innCheck");
const innResult = document.querySelector(".innResult");

const innRegExp = /^[01]\d{13}$/;

innCheck.addEventListener("click", () => {
     if (innRegExp.test(innInp.value)) {
    innResult.innerText = "Valid INN";
    innResult.style.color = "green";
  } else {
    innResult.innerText = "Invalid INN";
    innResult.style.color = "red";
  }
});
