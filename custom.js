//puslapiu scrollinimas smooth

$(document).ready(function(){
    $('[data-fancybox="gallery1"]').fancybox({
        loop: true,
        animationEffect: "fade",
        animationDuration: 1000,
        transitionEffect: "circular",
        transitionDuration: 1000,
    });
});

$(document).ready(function(){
    $('[data-fancybox="gallery2"]').fancybox({
        loop: false,
        animationEffect: "zoom-in-out",
        animationDuration: 1000,
        transitionEffect: "zoom-in-out",
        transitionDuration: 1000,
    });
});

//Pagrindinio meniu suskleidimas plansetems
function myFunction(mMenu) {
            var x = document.getElementById("mMenu");
            if (x.style.display === "block") {
                x.style.display = "none";
            } else {
                x.style.display = "block";
            }
        }

//meniu socialiniu tinklu suskleidimas mobiliems
function myFunctionSoc(mSocMenu) {
            var x = document.getElementById("mSocMenu");
            if (x.style.display === "block") {
                x.style.display = "none";
            } else {
                x.style.display = "block";
            }
        }
