document.addEventListener("DOMContentLoaded", function() {
    var video = document.getElementById("background-video");
    var toggleButton = document.getElementById("toggle-video");
    var volumeButton = document.getElementById("volume-button");
    
    toggleButton.addEventListener("click", function() {
        if (video.paused) {
            video.play();
            toggleButton.innerHTML = '<i class="fa-regular fa-circle-pause"></i>';
        } else {
            video.pause();
            toggleButton.innerHTML = '<i class="fa-regular fa-circle-play"></i>';
        }
    });

    volumeButton.addEventListener("click", function() {
        if (video.muted) {
            video.muted = false;
            volumeButton.innerHTML = '<i class="fa-solid fa-volume-low"></i>';
        } else {
            video.muted = true;
            volumeButton.innerHTML = '<i class="fa-solid fa-volume-off"></i>';
        }
    });
});

function showNewImage() {
    document.getElementById("originalImage").style.display = "none";
    document.getElementById("newImage").style.display = "block";
}

function showOriginalImage() {
    document.getElementById("originalImage").style.display = "block";
    document.getElementById("newImage").style.display = "none";
}

function showNewImage2() {
    document.getElementById("originalImage2").style.display = "none";
    document.getElementById("newImage2").style.display = "block";
}

function showOriginalImage2() {
    document.getElementById("originalImage2").style.display = "block";
    document.getElementById("newImage2").style.display = "none";
}

function showNewImage3() {
    document.getElementById("originalImage3").style.display = "none";
    document.getElementById("newImage3").style.display = "block";
}

function showOriginalImage3() {
    document.getElementById("originalImage3").style.display = "block";
    document.getElementById("newImage3").style.display = "none";
}

function showNewImage4() {
    document.getElementById("originalImage4").style.display = "none";
    document.getElementById("newImage4").style.display = "block";
}

function showOriginalImage4() {
    document.getElementById("originalImage4").style.display = "block";
    document.getElementById("newImage4").style.display = "none";
}

function showNewImage5() {
    document.getElementById("originalImage5").style.display = "none";
    document.getElementById("newImage5").style.display = "block";
}

function showOriginalImage5() {
    document.getElementById("originalImage5").style.display = "block";
    document.getElementById("newImage5").style.display = "none";
}

function showNewImage6() {
    document.getElementById("originalImage6").style.display = "none";
    document.getElementById("newImage6").style.display = "block";
}

function showOriginalImage6() {
    document.getElementById("originalImage6").style.display = "block";
    document.getElementById("newImage6").style.display = "none";
}


document.querySelectorAll('.Tshirt').forEach(item => {
    item.addEventListener('click', event => {
        const product = {
            name: event.currentTarget.querySelector('a').textContent.trim(),
            image: event.currentTarget.querySelector('img').src,
            description: 'Beschreibung des Produkts', // Hier eine passende Beschreibung einfügen
            price: event.currentTarget.querySelector('a:nth-child(3)').textContent.trim()
        };

        localStorage.setItem('selectedProduct', JSON.stringify(product));
        window.location.href = 'produktdetail.html';
    });
});
