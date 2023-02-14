$(document).ready(function () {
    // $('#AA-title').hide();
    // $('#navbar-AA').hide();
    // $('#home-pic').hide();
    // $('#original-hand-painted-text').hide();
    // $('#goal').hide();
    // $('#home-links').hide();
    // $('footer').hide();
    // $('#AA-title').fadeIn(3000);
    // $('#navbar-AA').fadeIn(4000);
    // $('#home-pic').fadeIn(5000);
    // $('#original-hand-painted-text').fadeIn(6000);
    // $('#goal').fadeIn(7000);
    // $('#home-links').fadeIn(5000);
    // $('footer').fadeIn(5000);



});
function openNav() {
    if(document.getElementById("hamburger-side-nav").style.width == "250px"){
        closeNav();
    } else {
        document.getElementById("hamburger-side-nav").style.width = "250px";
    }

}
function closeNav() {
    document.getElementById("hamburger-side-nav").style.width = "0";
}