//button status
const buttonStatus= document.querySelectorAll("[button-status]");
if(buttonStatus.length>0){
    buttonStatus.forEach(button=>{
        let url = new URL(window.location.href); 

        button.addEventListener("click",()=>{
            const status = button.getAttribute("button-status");
            if(status){
                url.searchParams.set("status", status);
            }else{
                url.searchParams.delete("status");
            }

            window.location.href= url.href;
        })
    })
}

//from search
const fromSearch=document.querySelector("#form-search");
if(fromSearch){
    let url = new URL(window.location.href); 
    fromSearch.addEventListener("submit",(e)=>{
        e.preventDefault();
        const keyWord = e.target.elements.keyword.value;
        if(keyWord){
            url.searchParams.set("keyWord", keyWord);
        }else{
            url.searchParams.delete("keyWord");
        }
        window.location.href= url.href;
    });
}