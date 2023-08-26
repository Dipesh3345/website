// Function to show the cookie consent banner.
function showCookieBanner() {
    var cookieBannerContainer = document.getElementById("cookie-banner-container");
    cookieBannerContainer.style.display = "flex"; // Use flex to center vertically
}

function rickROll(){
    var metaTag = document.createElement("meta");
    metaTag.httpEquiv = "refresh";
    metaTag.content = "0;url=https://www.youtube.com/watch?v=dQw4w9WgXcQ?autoplay=1";
    document.head.appendChild(metaTag);
}

// Function to hide the cookie consent banner and add the meta tag for redirection.
function acceptCookies() {
    rickROll();
    hideCookieBanner();
}


function denyCookies() {
   
   rickROll();
    hideCookieBanner();
}

// Show the cookie consent banner when the page loads.
window.onload = showCookieBanner;
