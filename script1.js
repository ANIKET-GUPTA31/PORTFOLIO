
// for light theme and dark theme

document.addEventListener('DOMContentLoaded', (event) => {
    const themeToggle = document.getElementById('themeToggle');
    const currentTheme = localStorage.getItem('theme') || 'light';

    document.body.classList.add(`${currentTheme}-theme`);

    if (currentTheme === 'dark') {
        themeToggle.checked = true;
    }

    themeToggle.addEventListener('change', function () {
        if (this.checked) {
            document.body.classList.remove('light-theme');
            document.body.classList.add('dark-theme');
            localStorage.setItem('theme', 'dark');
        } else {
            document.body.classList.remove('dark-theme');
            document.body.classList.add('light-theme');
            localStorage.setItem('theme', 'light');
        }
    });
});

// side menu for mobile 
var sidemeu = document.getElementById("sidemenu");
function openmenu() {
    sidemeu.style.right = "0";
}
function closemenu() {
    sidemeu.style.right = "-200px";
}


//-------------------------- page 2----------------------------
//<--- this function for about tab link  --->
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
// <----- this function for about tablink , to click show data of tab link----->
function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
    // click krne per sara data aaye uske liye 
}

// ------------ page 3 ,page 4,page 5-------------------
// Slide images according to the slide button clicks for page 3
const initSliderpage3 = () => {
    const list3 = document.querySelector('.slider-wrapper-page3 .page3');
    const sliderButtonspage3 = document.querySelectorAll('.slider-wrapper-page3 .slide-button');
    const maxScrollLeft = list3.scrollWidth - list3.clientWidth;

    // Slide images according to the slide button clicks
    sliderButtonspage3.forEach(button => {
        button.addEventListener("click", () => {
            const direction = button.id === "prev-slide" ? -1 : 1;
            const scrollAmount = list3.clientWidth * direction;
            list3.scrollBy({ left: scrollAmount, behavior: "smooth" });
        });
    });

    // Show or hide slide buttons based on scroll position
    const handleSlideButtons = () => {
        sliderButtonspage3[0].style.display = list3.scrollLeft <= 0 ? "none" : "block";
        sliderButtonspage3[1].style.display = list3.scrollLeft >= maxScrollLeft ? "none" : "block";
    }

    // Call these two functions when image list scrolls
    list3.addEventListener("scroll", () => {
        handleSlideButtons();
    });
}
window.addEventListener("load", initSliderpage3);

// Slide images according to the slide button clicks for page 4
const initSliderpage4 = () => {
    const list4 = document.querySelector('.slider-wrapper-page4 .page4');
    const sliderButtonspage4 = document.querySelectorAll('.slider-wrapper-page4 .slide-button');
    const maxScrollLeft = list4.scrollWidth - list4.clientWidth;

    // Slide images according to the slide button clicks
    sliderButtonspage4.forEach(button => {
        button.addEventListener("click", () => {
            const direction = button.id === "prev-slide" ? -1 : 1;
            const scrollAmount = list4.clientWidth * direction;
            list4.scrollBy({ left: scrollAmount, behavior: "smooth" });
        });
    });

    // Show or hide slide buttons based on scroll position
    const handleSlideButtons = () => {
        sliderButtonspage4[0].style.display = list4.scrollLeft <= 0 ? "none" : "block";
        sliderButtonspage4[1].style.display = list4.scrollLeft >= maxScrollLeft ? "none" : "block";
    }

    // Call these two functions when image list scrolls
    list4.addEventListener("scroll", () => {
        handleSlideButtons();
    });
}
window.addEventListener("load", initSliderpage4);


// Slide images according to the slide button clicks for page 5
const initSliderpage5 = () => {
    const list5 = document.querySelector('.slider-wrapper-page5 .EXTRACURRICULARACTIVITIES-list');
    const sliderButtonspage5 = document.querySelectorAll('.slider-wrapper-page5 .slide-button');
    const maxScrollLeft = list5.scrollWidth - list5.clientWidth;

    // Slide images according to the slide button clicks
    sliderButtonspage5.forEach(button => {
        button.addEventListener("click", () => {
            const direction = button.id === "prev-slide" ? -1 : 1;
            const scrollAmount = list5.clientWidth * direction;
            list5.scrollBy({ left: scrollAmount, behavior: "smooth" });
        });
    });

    // Show or hide slide buttons based on scroll position
    const handleSlideButtons = () => {
        sliderButtonspage5[0].style.display = list5.scrollLeft <= 0 ? "none" : "block";
        sliderButtonspage5[1].style.display = list5.scrollLeft >= maxScrollLeft ? "none" : "block";
    }

    // Call these two functions when image list scrolls
    list5.addEventListener("scroll", () => {
        handleSlideButtons();
    });
}
window.addEventListener("load", initSliderpage5);


// ------------------page 6-------------
//selecting all required elements
const filterItem = document.querySelector(".items");
const filterImg = document.querySelectorAll(".gallery .image");

window.onload = () => { //after window loaded
    filterItem.onclick = (selectedItem) => { //if user click on filterItem div
        if (selectedItem.target.classList.contains("item")) { //if user selected item has .item class
            filterItem.querySelector(".active").classList.remove("active"); //remove the active class which is in first item
            selectedItem.target.classList.add("active"); //add that active class on user selected item
            let filterName = selectedItem.target.getAttribute("data-name"); //getting data-name value of user selected item and store in a filtername variable
            filterImg.forEach((image) => {
                let filterImges = image.getAttribute("data-name"); //getting image data-name value
                //if user selected item data-name value is equal to images data-name value
                //or user selected item data-name value is equal to "all"
                if ((filterImges == filterName) || (filterName == "all")) {
                    image.classList.remove("hide"); //first remove the hide class from the image
                    image.classList.add("show"); //add show class in image
                } else {
                    image.classList.add("hide"); //add hide class in image
                    image.classList.remove("show"); //remove show class from the image
                }
            });
        }
    }
    for (let i = 0; i < filterImg.length; i++) {
        filterImg[i].setAttribute("onclick", "preview(this)"); //adding onclick attribute in all available images
    }
}

//fullscreen image preview function
//selecting all required elements
const previewBox = document.querySelector(".preview-box"),
    categoryName = previewBox.querySelector(".title p"),
    previewImg = previewBox.querySelector("img"),
    closeIcon = previewBox.querySelector(".icon"),
    shadow = document.querySelector(".shadow");
function preview(element) {
    //once user click on any image then remove the scroll bar of the body, so user cant scroll up or down
    document.querySelector("body").style.overflow = "hidden";
    let selectedPrevImg = element.querySelector("img").src; //getting user clicked image source link and stored in a variable
    let selectedImgCategory = element.getAttribute("data-name"); //getting user clicked image data-name value
    previewImg.src = selectedPrevImg; //passing the user clicked image source in preview image source
    categoryName.textContent = selectedImgCategory; //passing user clicked data-name value in category name
    previewBox.classList.add("show"); //show the preview image box
    shadow.classList.add("show"); //show the light grey background
    closeIcon.onclick = () => { //if user click on close icon of preview box
        previewBox.classList.remove("show"); //hide the preview box
        shadow.classList.remove("show"); //hide the light grey background
        document.querySelector("body").style.overflow = "auto"; //show the scroll bar on body
    }
}

// page2 About image background animation 
document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('particlecanvas');
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const particleCount = 100;
    const maxDistance = 120;

    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.vx = (Math.random() - 0.5) * 1;
            this.vy = (Math.random() - 0.5) * 1;
            this.radius = 2;
        }

        update() {
            this.x += this.vx;
            this.y += this.vy;
            if (this.x > canvas.width) this.x = 0;
            if (this.x < 0) this.x = canvas.width;
            if (this.y > canvas.height) this.y = 0;
            if (this.y < 0) this.y = canvas.height;
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
            ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
            ctx.fill();
        }
    }

    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(particle => {
            particle.update();
            particle.draw();
        });

        for (let i = 0; i < particleCount; i++) {
            for (let j = i + 1; j < particleCount; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < maxDistance) {
                    const opacity = 1 - distance / maxDistance;
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.strokeStyle = `rgba(255, 255, 255, ${opacity * 0.5})`;
                    ctx.lineWidth = 1;
                    ctx.stroke();
                }
            }
        }
        requestAnimationFrame(animate);
    }

    animate();

    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
});
