document.addEventListener("DOMContentLoaded", function() {
    
    var menButton = document.querySelector(".Menbutton");
    var womenButton = document.querySelector(".Womenbutton");
    var Mannbutton = document.querySelector(".Mannbutton");
    var Fraubutton = document.querySelector(".Fraubutton");
    var Kinderbutton = document.querySelector(".Kinderbutton");

    menButton.addEventListener("mouseover", function() {
        changeButtonColor(menButton, "#000000", "#ffffff"); 
    });

    menButton.addEventListener("mouseout", function() {
        changeButtonColor(menButton, "#ffffff", "#000000"); 
    });

    womenButton.addEventListener("mouseover", function() {
        changeButtonColor(womenButton, "#000000", "#ffffff"); 
    });

    womenButton.addEventListener("mouseout", function() {
        changeButtonColor(womenButton, "#ffffff", "#000000"); 
    });

    Mannbutton.addEventListener("mouseover", function() {
        changeButtonColor(Mannbutton, "#000000", "#ffffff"); 
    });

    Mannbutton.addEventListener("mouseout", function() {
        changeButtonColor(Mannbutton, "#ffffff", "#000000"); 
    });

    Fraubutton.addEventListener("mouseover", function() {
        changeButtonColor(Fraubutton, "#000000", "#ffffff"); 
    });

    Fraubutton.addEventListener("mouseout", function() {
        changeButtonColor(Fraubutton, "#ffffff", "#000000"); 
    });

    Kinderbutton.addEventListener("mouseover", function() {
        changeButtonColor(Kinderbutton, "#000000", "#ffffff"); 
    });

    Kinderbutton.addEventListener("mouseout", function() {
        changeButtonColor(Kinderbutton, "#ffffff", "#000000"); 
    });

    function changeButtonColor(button, bgColor, textColor) {
        button.style.backgroundColor = bgColor;
        button.style.color = textColor;
    }
});
