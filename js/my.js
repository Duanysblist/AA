
$(document).ready(function () {

// Get the modal
    var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
    var images = document.getElementsByClassName("myImages");
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");

    // Iterate through the images and place them in the modal when clicked
    for (var i = 0; i < images.length; i++) {
        var img = images[i];

        img.onclick = function(evt){
            modal.style.display = "block";
            modalImg.src = this.src;
            captionText.innerHTML = this.alt;
        }
    }


// Get the <span> element that closes the modal
    var span = document.getElementsByClassName('close')[0];

// When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }



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





