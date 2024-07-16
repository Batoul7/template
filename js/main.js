// change background
let landing = document.querySelector('.landing');

let arrImgs = ["photo1.jpg","photo2.jpg","photo3.jpg","photo4.jpg","photo5.jpg","photo6.jpg","photo7.jpg"];


function changeImg(landing, arrImgs) {

    setInterval(function() {

        let randomNum = Math.floor(Math.random() * arrImgs.length);
        
        landing.style.backgroundImage = 'url("images/'+ arrImgs[randomNum] +'")';
    },5000);
}

changeImg(landing, arrImgs);