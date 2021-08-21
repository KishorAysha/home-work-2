let btn = document.querySelector(".tog");
let nav = document.querySelector(".navbar");
btn.addEventListener("click", function(){
    if(nav.style.display == "none"){
        nav.style.display = "block"
        
    }else{
        nav.style.display = "none"
    }
    
})