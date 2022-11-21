const navRespnsive = document.querySelector(".navIconsContent");
const navToggle = document.querySelector((".navHambuger"));

navToggle.addEventListener("click",openNav);
function openNav(){
    navRespnsive.classList.toggle("active");
    navToggle.classList.toggle("active");
}

const profileDropdown = document.querySelector(".profileDropdown");
const profileToggle = document.querySelector((".profileToggle"));

profileToggle.addEventListener("click",openProfile);
function openProfile(){
    profileToggle.classList.toggle("active");
    profileDropdown.classList.toggle("active");
}