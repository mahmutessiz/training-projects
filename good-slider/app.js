const img = document.querySelector(".child-div");
const buton = document.querySelector(".buton");

let number = 0;
buton.addEventListener("click", () => {
    if (number <= -250) {
        number = 0;
    } else {
        number = number - 50;
    }
    img.style.transform = `translateX(${number}rem)`;
    
});

setInterval(() => {
    if (number <= -250) {
        number = 0;
    } else {
        number = number - 50;
    }
    img.style.transform = `translateX(${number}rem)`;
}, 5000);
