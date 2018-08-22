(function(){
    'use strict';
    var header = document.getElementById('header');
    var deg = 0;
    function rotateHeader() {
        deg = deg + 2;
        deg = deg % 360;
        if ((0 <= deg && deg < 90) || (270 <= deg && deg < 360)) {
            header.className = 'face';
        } else {
            header.className = 'back';
        }
        header.style.transform = 'rotateY(' + deg +  'deg)';
    }
    setInterval(rotateHeader, 20);
})();
//タイトルを回転させる

function add() {
    var waku = document.createElement("div");
    waku.innerHTML = '<h2>  <input type="text" > </h2>';
    var deruderu = document.getElementById("pi");
    deruderu.appendChild(waku);
}
//記入欄をだすスクリプト