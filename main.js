// get div contents heights
//var introOffsetHeight = document.getElementById("intro-container").offsetHeight;
var currNav = null;
var currLink = null;

// add scroll events to resize and highlight nav
window.addEventListener("scroll", resizeNav);
window.addEventListener("scroll", highlightNav);
// add event listeners to navbar links for smooth scrolling
document.getElementById("intro-link").addEventListener("click", () => {
    scrollTo(document.getElementById("intro-container"));
});

document.getElementById("about-link").addEventListener("click", () => {
    scrollTo(document.getElementById("about-container"));
});

document.getElementById("cs-link").addEventListener("click", () => {
    scrollTo(document.getElementById("cs-container"));
});

document.getElementById("other-link").addEventListener("click", () => {
    scrollTo(document.getElementById("other-container"));
});


// add slide indexing
// var slideIndex = 1;
// slideshow(slideIndex);
/**
document.getElementById("prev-btn").addEventListener("click", () => {
    nextSlides(-1);
});

document.getElementById("next-btn").addEventListener("click", () => {
    nextSlides(1);
});
*/

// implement modals for slide show images
/**
var frenchOpenModal = document.getElementById("french-open-modal");
var frenchClick = false;
var wimbledonModal = document.getElementById("wimbledon-modal");
var wimbyClick = false;
var usOpenModal = document.getElementById("us-open-modal");
var usOpenClick = false;

document.getElementById("french-open-img").addEventListener("click", () => {
    frenchOpenModal.style.display = "block";
    frenchClick = true;
});

document.getElementById("wimbledon-img").addEventListener("click", () => {
    wimbledonModal.style.display = "block";
    wimbyClick = true;
});

document.getElementById("us-open-img").addEventListener("click", () => {
    usOpenModal.style.display = "block";
    usOpenClick = true;
})

Array.from(document.getElementsByClassName("close-btn")).forEach(function(element) {
    element.addEventListener("click", () => {
        if (frenchClick) {
            frenchOpenModal.style.display = "none";
            frenchClick = false;
        } else if (wimbyClick) {
            wimbledonModal.style.display = "none";
            wimbyClick = false;
        } else if (usOpenClick) {
            usOpenModal.style.display = "none";
            usOpenClick = false;
        }
    });
});

window.onclick = function(event) {
    if (event.target == frenchOpenModal) {
        frenchOpenModal.style.display = "none";
        frenchClick = false;
    } else if (event.target == wimbledonModal) {
        wimbledonModal.style.display = "none";
        wimbyClick = false;
    } else if (event.target == usOpenModal) {
        usOpenModal.style.display = "none";
        usOpenClick = false;
    }
}
*/

//next and previous button controls
/**
function nextSlides(n) {
    slideshow(slideIndex += n);
}
*/

// full function that involves button  navigation
/**
function slideshow(n) {
    var slides = document.getElementsByClassName("slides");
    // wrap back to first slide after reaching end of carousel
    if (n > slides.length) {
        slideIndex = 1;
    }
    // wrap to last slide when hitting previous slide
    if (n < 1) {
        slideIndex = slides.length;
    }
    // set all slides invisible
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    // make the specified button and slide displayed and active
    slides[slideIndex - 1].style.display = "block";
}
*/

/**
 * Function that will scroll to element. Got code from:
 * https://stackoverflow.com/questions/17733076/smooth-scroll-anchor-links-without-jquery
 * from user Alexander Svetly
 */
function scrollTo(container) {
    var smallNavbarOffsetHeight = 50;
    window.scroll({
        behavior: "smooth",
        left: 0,
        top: container.offsetTop - smallNavbarOffsetHeight
    });
}

/**
 * This function will resive the navbar depending on where the page is.
 * This is added to a scroll event listener to check position
 * each time a user scrolls.
 */
function resizeNav() {
    if (document.body.scrollTop > 75 || document.documentElement.scrollTop > 75) {
        document.getElementById("main-header").style.padding = "15px 10px";
        document.getElementById("main-header").style.fontSize = "1rem";
    } else {
        document.getElementById("main-header").style.padding = "25px 10px";
        document.getElementById("main-header").style.fontSize = "1.2rem";
    }
}

/**
 * Helper function for highlightNav
 * @param newNav: current nav page is on
 * @param newLink: current link page is on
 */
function highlightHelper(newNav, newLink) {
    newNav.style.backgroundColor = "rgb(237,245,225)";
    newLink.style.color = "rgb(11, 12, 16)";
    // revert changes to old nav link if needed and set currNav to different
    if (currNav == null || currLink == null) {
        currNav = newNav;
        currLink = newLink;
    } else if (currNav != newNav) {
        currNav.style.backgroundColor = "rgb(11, 12, 16)";
        currLink.style.color = "rgb(237,245,225)";
        currNav = newNav;
        currLink = newLink;
    }
}

/**
 * Highlights the current nav the page is currently on
 */
function highlightNav() {
    // get offset heights
    var aboutOffsetHeight = document.getElementById("about-container").offsetTop;
    var csOffsetHeight = document.getElementById("cs-container").offsetTop;
    var otherOffsetHeight = document.getElementById("other-container").offsetTop;
    // find current scroll position + navbar offset
    var scrollPos = (document.documentElement.scrollTop || document.body.scrollTop);
    var navbarOffsetHeight = document.getElementById("main-header").offsetHeight;
    scrollPos = scrollPos + navbarOffsetHeight;
    if (scrollPos < aboutOffsetHeight) {
        // change highlight of nav if at that position
        var introNav = document.getElementById("intro-nav");
        var introLink = document.getElementById("intro-link");
        // revert changes to old nav link if needed and set currNav to different
        highlightHelper(introNav, introLink);
    } else if (scrollPos >= aboutOffsetHeight && scrollPos < csOffsetHeight) { // check if at "about"
        // highlight current nav
        var aboutNav = document.getElementById("about-nav");
        var aboutLink = document.getElementById("about-link");
        // revert changes to old nav link if needed and set currNav to different
        highlightHelper(aboutNav, aboutLink);
    } else if (scrollPos >= csOffsetHeight && scrollPos < otherOffsetHeight) {  // check if at "cs"
        // highlight current nav
        var csNav = document.getElementById("cs-nav");
        var csLink = document.getElementById("cs-link");
        // revert changes to old nav link if needed and set currNav to different
        highlightHelper(csNav, csLink);
    } else if (scrollPos > csOffsetHeight) {
        // highlight current nav
        var otherNav = document.getElementById("other-nav");
        var otherLink = document.getElementById("other-link");
        // revert changes to old nav link if needed and set currNav to different
        highlightHelper(otherNav, otherLink);
    }
}
