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