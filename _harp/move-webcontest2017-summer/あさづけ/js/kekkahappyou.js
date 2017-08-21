(function() {
    'use strict'


    ////////////////////////////////////////////////////
    let data = localStorage.tensuu;

    ////////////          音設定           /////////////
    const kekkahappyou = new Audio('se/sceneswitch2.mp3');
    kekkahappyou.volume = 0.5;
    ////////////////////////////////////////////////////
    kekkahappyou.play();
    setTimeout(function() {
        window.location.href = 'score.html';
    }, 2000);







})();