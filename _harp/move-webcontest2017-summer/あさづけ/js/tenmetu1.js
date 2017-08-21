(function() {

    'use strict'

    let flag = true;
    //表示 true  非表示 false　

    function tenmetu() {
        if (flag === true) {
            document.getElementById("text1").innerText = ('');
            flag = false;
        } else {
            document.getElementById("text1").innerText = ('スタートボタンを押してね！');
            flag = true;
        }
    };

    setInterval(tenmetu, 3000);
    //　３秒間隔で点滅



})();