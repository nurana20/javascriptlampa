let lampa=document.querySelector(".isiqli")
let anaekran=document.querySelector("body")
lampa.addEventListener("click",function () {
    if (!anaekran.classList.contains("sari")) {
        anaekran.classList.add("sari")
        anaekran.classList.remove("qara")
    }
    else{
        anaekran.classList.add("qara")
        anaekran.classList.remove("sari")
    }

})