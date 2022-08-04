"use strict";
let icon = document.querySelector('.mode');
icon.onclick = function(){
    document.body.classList.toggle('dark');
    if (document.body.classList.contains('dark')) {
        icon.innerHTML = 'LIGHT <ion-icon name="sunny"></ion-icon>';
    } else {
        icon.innerHTML = 'DARK <ion-icon name="moon"></ion-icon>';
    }
};
const searchBtn = document.querySelector('.search-panel button'),
    searchInput = document.querySelector('.search-panel input');
function apiSearch() {
    fetch(`https://api.github.com/users/${searchInput.value}`)
        .then(res => res.json())
        .then(JSON => console.log(JSON));
    searchInput.value = '';
}
searchBtn.addEventListener('click', apiSearch);
window.addEventListener('keydown',(e) => {
    if (e.code === 'Enter') {
        apiSearch();
    } 
});