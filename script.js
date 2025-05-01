function showinfo() {
    document.querySelector(".dropdiv").classList.toggle("visible");
}


let imgIndex = 0;
showImg(imgIndex);

function nextImg(){
    imgIndex++;
    showImg(imgIndex);
}

function prevImg(){
    imgIndex--;
    showImg(imgIndex);
}

function dotImg(n){
    showImg(imgIndex = n)
}

function showImg(n) {
    const slides = document.querySelectorAll(".picture-frame");
    const dots = document.querySelectorAll(".dot");

    if (n >= slides.length) {
        imgIndex = 0;
    }
    if (n < 0) {
        imgIndex = slides.length - 1;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
    }

    slides[imgIndex].style.display = "block";
    dots[imgIndex].classList.add("active");
}

setInterval(nextImg, 5000);