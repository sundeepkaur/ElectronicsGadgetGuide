//Section 1 --------------declare an array of images
var myImagesArray = ["images/1L.jpg","images/2L.jpg","images/3L.jpg","images/4L.jpg","images/5L.jpg","images/6L.jpg","images/7L.jpg"];
var currentIndex = 0;
var lowerLimit = 0;
var upperLimit = myImagesArray.length - 1;

setInterval('changeImage(1)' , 3000);
function changeImage(direction){
    currentIndex = currentIndex + direction;
    if(currentIndex > upperLimit){
        currentIndex = lowerLimit;
    }

    if(currentIndex < lowerLimit){
        currentIndex = upperLimit;
    }

    document.getElementById('slideShow').src = myImagesArray[currentIndex];
}