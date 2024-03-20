function logoanimation(){
    let logo = document.querySelector(".logo");
    let logoShadow =document.querySelector(".logo-shadow");
    
    logo.addEventListener("mouseenter", function(){
        logoShadow.style.opacity = "1"
    })
    logo.addEventListener("mouseleave", function(){
        logoShadow.style.opacity = "0"
    })
}
logoanimation();



