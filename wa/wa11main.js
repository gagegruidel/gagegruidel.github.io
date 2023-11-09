const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

const arrayImage = ["goat1.jpg", "goat2.jpg", "goat3.jpg", "goat4.jpg", "goat5.jpg"];

for (let i = 0; i < arrayImage.length; i++) {
    const newImage = document.createElement('img');

    newImage.setAttribute('src', `/img/${arrayImage[i]}`);
    newImage.setAttribute('alt', `/img/ ${i + 1}`);

    thumbBar.appendChild(newImage);

    newImage.addEventListener("click", function() {

        displayedImage.src = newImage.src;
        displayedImage.alt = newImage.alt;

    });

}

thumbBar.addEventListener("click",function(event) {

    if(event.target.tagName === "img") {
        displayedImage.src = event.target.src;
        displayedImage.alt = event.target.alt;
    }
});

btn.addEventListener("click", function() {

    if (btn.getAttribute("class") === "dark") {

        btn.setAttribute("class", "light");
        btn.textContent = "Lighten";
        overlay.style.backgroundColor = "rgba(0,0,0,0.5)";

    } else { 
        
        btn.setAttribute("class", "dark");
        btn.textContent = "Darken";
        overlay.style.backgroundColor = "rgba(0,0,0,0)";

    }
});
