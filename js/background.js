

const images =[
    "operahouse.jpg",
    "paris.jpg",
    "seahole.jpg"
]

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
bgImage.classList.add("background_image");
bgImage.src=`img/${chosenImage}`;
document.body.style.backgroundImage = `url(img/${chosenImage})`;
//document.body.appendChild(bgImage);



