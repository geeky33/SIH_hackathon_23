var icon = document.querySelector(".icon");
var act = false;
              icon.addEventListener("click", function(){
                document.querySelector("body").classList.toggle("active");
                if(!act){
                window.scrollBy(0, 25);
                act = true;
              }
              else{
                window.scrollBy(0, -25);
                act = false;
              }
              });
