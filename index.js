
function toogleClass() {
    console.log("Here")
    document.getElementsByClassName("hamburger-menu")[0].classList.toggle('open')
    document.getElementsByClassName("sidebar")[0].classList.toggle('open')
    
    document.getElementsByClassName("hamburger-menu")[0].classList.toggle('active');
    document.getElementsByClassName("hamburger-menu")[0].classList.toggle('not-active');
}

