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

    document.querySelectorAll('.Tshirt').forEach(item => {
        item.addEventListener('click', event => {
            const product = {
                name: item.dataset.name,
                image: item.dataset.image,
                description: item.dataset.description,
                price: item.dataset.price
            };

            localStorage.setItem('selectedProduct', JSON.stringify(product));
            window.location.href = 'produktdetail.html';
        });

        item.addEventListener('mouseover', event => {
            const img = item.querySelector('.produkt');
            const hoverImg = item.querySelector('.produkt.new-image');
            img.style.opacity = '0';
            hoverImg.style.opacity = '1';
        });

        item.addEventListener('mouseout', event => {
            const img = item.querySelector('.produkt');
            const hoverImg = item.querySelector('.produkt.new-image');
            img.style.opacity = '1';
            hoverImg.style.opacity = '0';
        });
    });
});




            document.addEventListener("DOMContentLoaded", function() {
                var selectedCategory = localStorage.getItem('selectedCategory');
            
                if (selectedCategory && selectedCategory !== 'all') {
                    filterProducts(selectedCategory);
                }
            
                function filterProducts(category) {
                    var allProducts = document.querySelectorAll('.Tshirt');
            
                    allProducts.forEach(function(product) {
                        var productCategory = product.dataset.category;
            
                        if (productCategory === category) {
                            product.style.display = 'block';
                        } else {
                            product.style.display = 'none';
                        }
                    });
                }
            
                var navLinks = document.querySelectorAll('nav a');
            
                navLinks.forEach(function(link) {
                    link.addEventListener('click', function() {
                        localStorage.setItem('selectedCategory', 'all');
                    });
                });
            
                document.querySelectorAll('.Tshirt').forEach(item => {
                    item.addEventListener('click', event => {
                        const product = {
                            name: item.dataset.name,
                            image: item.dataset.image,
                            description: item.dataset.description,
                            price: item.dataset.price
                        };
            
                        localStorage.setItem('selectedProduct', JSON.stringify(product));
                        window.location.href = 'produktdetail.html';
                    });
            
                    item.addEventListener('mouseover', event => {
                        const img = item.querySelector('.produkt');
                        const hoverImg = item.querySelector('.produkt.new-image');
                        img.style.opacity = '0';
                        hoverImg.style.opacity = '1';
                    });
            
                    item.addEventListener('mouseout', event => {
                        const img = item.querySelector('.produkt');
                        const hoverImg = item.querySelector('.produkt.new-image');
                        img.style.opacity = '1';
                        hoverImg.style.opacity = '0';
                    });
                });
            });
            