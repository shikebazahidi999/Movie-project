const hbtn = document.getElementById('hbtn');
const rbtn = document.getElementById("rbtn");
const sbtn = document.getElementById("sbtn");
const cbtn = document.getElementById("cbtn");
const horrordiv = document.getElementById("horror");
const romantictiv = document.getElementById("romantic");
const spiderdiv = document.getElementById("spider");
const comedydiv = document.getElementById("comedy");
const input = document.getElementById("input");
hbtn.addEventListener("click",()=>{
    if(horrordiv.classList.contains("hidden")){
        horrordiv.classList.remove("hidden");
        horrordiv.classList.add("flex");
        romantictiv.classList.remove("flex");
        romantictiv.classList.add("hidden");
        spiderdiv.classList.remove("flex");
        spiderdiv.classList.add("hidden")
        comedydiv.classList.remove("flex");
        comedydiv.classList.add("hidden");
        input.innerText = "horror";
    }
})