var h = document.querySelector(".heading");
var hola = document.querySelector(".heading1");
var hel = document.querySelector("h1");
var Female = document.querySelector(".heading2");
var Kids = document.querySelector(".heading3");
var Fu = document.querySelector(".headingg");
var flag = 0;

hola.addEventListener("click", function(){
    if (flag == 0) {
        hel.innerHTML = "Best Mens Formal collection:";
        flag = 1;
    }
    else {
        hel.innerHTML = "UrbanSwag Best Collection:";
        flag = 0;
    }
});
Fu.addEventListener("click", function(){
    if (flag == 0) {
        hola.style.opacity = 1;
        Female.style.opacity = 1;
        Kids.style.opacity = 1;
        hola.style.transition = "ease-in 1.2s";
        Female.style.transition = "ease-in 1.6s";
        Kids.style.transition = "ease-in 1.9s";
        flag =1;
    }
    else {
        hola.style.opacity = 0;
        Female.style.opacity = 0;
        Kids.style.opacity = 0;
        flag =0;
    }
    

});

