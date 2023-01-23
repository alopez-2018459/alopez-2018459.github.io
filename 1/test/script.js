let bannerTop = document.getElementById("topBanBio");

window.addEventListener("scroll", function() {
        bannerTop.classList.toggle("scroll-active-bg", window.scrollY > 0); 
        bannerTop.classList.toggle("blur-bg-banner", window.scrollY > 150);    
})
