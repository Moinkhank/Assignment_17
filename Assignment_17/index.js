
const first = document.getElementById("one");
first.addEventListener("click",currentLink);
function currentLink(){
    var currentURL = window.location.href;
    var windowSize = "Width: " + window.innerWidth + " pixels, Height: " + window.innerHeight + " pixels";
    alert("Current URL are: " + currentURL + "\nWindow Size: " + windowSize);
}
const second = document.getElementById("two");
second.addEventListener("click",currentPixel);
function currentPixel(){
    var screenWidth = screen.width;
    var screenHeight = screen.height;
    var screenColorDepth = screen.colorDepth;
    alert("Screen Dimensions are: " + screenWidth + " x " + screenHeight + " pixels\nColor Depth: " + screenColorDepth);
}
