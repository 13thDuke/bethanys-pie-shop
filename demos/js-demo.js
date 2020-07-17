//console.log("Hello from the JavaScript file");

window.addEventListener("DOMContentLoaded", function(e) {
    console.log("The Page Is Loaded");
});

let btn = document.querySelector('#click-me');
btn.addEventListener("click", function(e) {
    console.log("The button was clicked");
});

window.addEventListener("orientationchange", function(e){
    let screen = window.screen;
    let angle = screen.orientation.angle;
    let type = screen.orientation.type;

    console.log(`screen: ${screen}, angle: ${angle}, type ${type}`);
})