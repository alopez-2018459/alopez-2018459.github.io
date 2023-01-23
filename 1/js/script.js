
const link1 = document.getElementById('linkGT');

const link2 = document.getElementById('linkBio');

const img = document.getElementById("imgKinal");

const imgGTab = document.getElementById("imgGTab");

const imgKinal_Blanco_URL = "https://static.wixstatic.com/media/128120_ada5c38b420b4cafaaa830d63b5cb56b~mv2.png/v1/fill/w_352,h_154,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/FUNDACI%C3%93N%20KINAL-02.png";

const imgKinal_Azul_URL = "https://static.wixstatic.com/media/128120_36d5cb356247423cada1d6bfdcc5b4f3~mv2.png/v1/fill/w_294,h_106,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/1FUNDACI%C3%93N%20KINAL%20VECTOR--04.png";

let imgBioTab_State = false;

let navStick = document.querySelector("nav");

let imageChanged = false;

let openNewTab = function openNewTab(pageUrl) {
    window.open(pageUrl, "_blank");
}

console.log(imgKinal_Azul_URL);

function addTransition(elementId, duration, effect) {
    let element = document.getElementById(elementId);
    element.style.transition = `opacity ${duration}s ${effect}`;
    element.style.opacity = 0;
    setTimeout(() => {
        element.style.opacity = 1
    }, 10);
}


let firstPageLoading = async function(){
    let response = await fetch("https://alopez-2018459.github.io/1/1/gt.html")
    let bannerResponse = await fetch("https://alopez-2018459.github.io/1/Banners/bannerGT.html");

    let data = await response.text();
    let dataBanner = await bannerResponse.text();
    

    document.getElementById("bannerHeader").innerHTML = dataBanner;
    document.getElementById("main").innerHTML = data;

    addTransition("main", 0.5, "ease")
}

firstPageLoading();


link1.addEventListener("click", async function(){
    let response = await fetch("../1/gt.html")
    let data = await response.text();
    navStick.classList.remove("bio-tab-active")

    document.getElementById("main").innerHTML = data

    

    imgBioTab_State = false;
    
    img.removeAttribute("style")
    
   
    addTransition("main", 0.5, "ease")

   
    check_kinalIMG();
    
    firstPageLoading();
})

link2.addEventListener("click", async function(){
    addTransition("main", 1, "addTransition")

    let response = await fetch("../3/Biografia.html");
    let bannerResponse = await fetch("../Banners/bannerBio.html");

    let data = await response.text();
    let dataBanner = await bannerResponse.text();

    document.getElementById("bannerHeader").innerHTML = dataBanner;
    document.getElementById("main").innerHTML = data;


    
    navStick.classList.toggle("bio-tab-active");

    imgBioTab_State = true;
 


    let assingToBanner = document.getElementById("topBanBio");
    let titleSpan = document.getElementById("title");


    addTransition("rightText_bio", 5, "ease")


    
    check_kinalIMG();

    
    window.addEventListener("scroll", function() {
        assingToBanner.classList.toggle("scroll-active-bg", window.scrollY > 0);
        titleSpan.classList.toggle("black-title", window.scrollY > 0);

        assingToBanner.classList.toggle("blur-bg-banner", window.scrollY > 235);
        
        
    })


})

let resizeNavTitles_small = function () {

    navStick.classList.toggle("sticky");
    imageChanged = true;

    imgGTab.src = "./img/icons/raceWhite.png"
    buttonGT.style.display = "none";

}

let resizeNavTitles_big = function () {

    navStick.classList.remove("sticky");
    imageChanged = false

    buttonGT.style.display = "flex";
    imgGTab.src = "./img/icons/race.png"

}


let check_kinalIMG = function () {

    let txtBio_active_bio = document.getElementById("navBio_active");


//----- Cuando el navbar no esta en la pestaña bio y esta compacta ----

    if (!imgBioTab_State && window.scrollY > 252.6) { 

        img.src = imgKinal_Azul_URL;
        navStick.classList.remove("nav-black-blur");

//---- Cuando el navbar esta en la pestaña bio y esta compacta ----

    } else if (imgBioTab_State == true && window.scrollY > 252.6) { 

        navStick.classList.toggle("nav-black-blur");
        img.src = imgKinal_Blanco_URL;

        txtBio_active_bio.style.color = "white";
        img.style.width = "13vh"

//---- Cuando el navbar no esta en la pestaña bio y esta expandida ----
    } else if (!imgBioTab_State && window.screenY < 251){ 

        link1.removeAttribute("Style")
        navStick.removeAttribute("Style")

        img.src = imgKinal_Blanco_URL;

//---- Cuando el navbar esta en la pestaña bio y esta expandida ----
    } else if (imgBioTab_State == true && window.screenY < 251){ 

        link1.style.backgroundColor = "blue";

        navStick.classList.remove("nav-black-blur");
        txtBio_active_bio.removeAttribute("Style")

        img.src = imgKinal_Azul_URL;
        img.style.width = "18vh";

    }
}




window.addEventListener("scroll", function() {

    buttonGT = document.getElementById("btn-gt");

    if (window.scrollY > 252.6 && !imageChanged){
        check_kinalIMG();
        resizeNavTitles_small();

        link1.style.backgroundColor = "black";


    } else if (window.scrollY < 251) {
        check_kinalIMG();
        resizeNavTitles_big();
    }

})














