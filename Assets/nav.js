// JavaScript to handle navbar behavior on scroll
document.addEventListener("DOMContentLoaded", function() {
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            document.querySelector("nav").style.top = "0"; // Show navbar when scrolling up
        } else {
            document.querySelector("nav").style.top = "-80px"; // Hide navbar when scrolling down
        }
        prevScrollpos = currentScrollPos;
    }
});
