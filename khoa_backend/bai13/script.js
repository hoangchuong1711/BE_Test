localStorage.setItem("name","hoang chuong");
const ten=localStorage.getItem("name")

const test=document.querySelector("#ten");
test.innerHTML = ten;

const curMode=localStorage.getItem("mode");
if(curMode){
    const body=document.querySelector("body");
    body.classList.toggle(curMode);
}

const changeMode=document.querySelector("#nut");
changeMode.addEventListener("click",()=>{
    const body=document.querySelector("body");
    body.classList.toggle("dark")
    const curMode=localStorage.getItem("mode");
    if(curMode){
        localStorage.setItem("mode","")
    }
    else localStorage.setItem("mode","dark")
})