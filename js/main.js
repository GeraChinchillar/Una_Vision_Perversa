var mostrar=0;
window.onload = function(){

    window.onscroll = function() {myFunction()};

    var myheader = document.getElementById("myHeader");
    var header = document.querySelector(".header");
    var img = document.querySelector(".img");
    var main = document.getElementById("main");
    var h1 = document.getElementById("h1-top");
    var h2 = document.getElementById("h2-top");
    var sticky = header.offsetTop;

    function myFunction() {
        if (window.pageYOffset > sticky) {
            myheader.classList.add("sticky");
            header.classList.add("top");
            img.classList.add("img-top");
            main.classList.add("content");
            h2.classList.add("h2-top");
            h1.classList.add("h1-top");

        } else {
            myheader.classList.remove("sticky");
            header.classList.remove("top");
            img.classList.remove("img-top");
            main.classList.remove("content");
            h2.classList.remove("h2-top");
            h1.classList.remove("h1-top");
        }
    }

    
    var nav = document.querySelector(".opt");
    var opt= document.querySelectorAll(".day");
    var menu = document.getElementsByClassName("item")

    nav.addEventListener("click",function(event){

        
        opt[mostrar].setAttribute("hidden",true);
        menu[mostrar].style.background = null;

        mostrar=event.srcElement.id;

        opt[mostrar].removeAttribute("hidden");
        menu[mostrar].style.background ="white";
    });


}