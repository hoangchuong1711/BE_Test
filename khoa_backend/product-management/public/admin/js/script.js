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

//form search
const fromSearch=document.querySelector("#form-search");
if(fromSearch){
    let url = new URL(window.location.href); 
    fromSearch.addEventListener("submit",(e)=>{
        e.preventDefault();
        const keyword = e.target.elements.keyword.value;
        if(keyword){
            url.searchParams.set("keyword", keyword);
        }else{
            url.searchParams.delete("keyword");
        }
        window.location.href= url.href;
    });
}

//pagination
const buttonsPagination= document.querySelectorAll("[button-pagination]")
if(buttonsPagination){
    let url = new URL(window.location.href); 

    buttonsPagination.forEach(button=>{
        button.addEventListener("click",()=>{
            const page = button.getAttribute("button-pagination")
            url.searchParams.set("page", page);
            window.location.href= url.href;
        })
    })
}