(function() {
    'use strict'


    ////////////////////////////////////////////////////
    let data = localStorage.tensuu;

    ////////////          音設定           /////////////
    const happyou = new Audio('se/game.mp3');
    const roru = new Audio('se/tympani.mp3');
    const roru2 = new Audio('se/roll.mp3');
    const s = new Audio('se/sugoi.mp3');
    const a = new Audio('se/ganba.mp3');
    const b = new Audio('se/atocyotto.mp3');
    happyou.volume = 0.5;
    roru.volume = 0.5;
    roru2.volume = 0.5;
    ////////////////////////////////////////////////////
    happyou.play();
    setTimeout(function() {
        document.getElementById("scoreboard").innerHTML = ('あなたの成績<br><font color="gold">' + data + '</font>');
        setTimeout(function() {
            roru.play();
            setTimeout(function() {
                roru2.play();
                if (data < 2000) {
                    document.getElementById("hyouka").innerHTML = ('B');
                    b.play();
                } else if (data >= 2000 && data < 4000) {
                    document.getElementById("hyouka").innerHTML = ('A');
                    a.play();
                } else {
                    document.getElementById("hyouka").innerHTML = ('S');
                    s.play();
                }


            }, 5000);

        }, 2000);
    }, 1500);







})();