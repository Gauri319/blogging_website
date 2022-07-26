var navbar=document.getElementById("navbar");
var menu=document.getElementById("menu");
const collection = document.getElementsByClassName("s_content");
window.onscroll=function(){
    if(window.pageYOffset>=menu.offsetTop){
       navbar.classList.add("sticky");
    
     for (let i = 0; i < collection.length; i++) {
        collection[i].style.left = "0";
      }
    }
    else{
        navbar.classList.remove("sticky");
        for (let i = 0; i < collection.length; i++) {
            collection[i].style.left = "100%";
          }
    }
}
