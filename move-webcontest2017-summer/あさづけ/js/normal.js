(function() {
    'use strict'


    //////////BGMとランダム値生成を50までにする以外はeasy.jsと同じ//////////


    ////////////////////////////////////////////////////
    let flag = null;
    var score = 0;
    const passbutton = document.getElementById('pass'); //ボタン設定
    const fizzbutton = document.getElementById('fizz'); //ボタン設定
    const buzzbutton = document.getElementById('buzz'); //ボタン設定
    const fizzbuzzbutton = document.getElementById('fizzbuzz'); //ボタン設定

    ////////////////////////////////////////////////////

    ////////////          音設定           /////////////
    const hajime = new Audio('se/hazimemasu1.mp3');
    const youi = new Audio('se/youi1.mp3');
    const donn = new Audio('se/don1.mp3');
    const seikai = new Audio('se/correct3.mp3');
    const fuseikai = new Audio('se/incorrect1.mp3');
    const sokomade = new Audio('se/sokomade1.mp3');
    const gong = new Audio('se/gong.mp3');
    const count = new Audio('se/countdown.mp3');
    const battle1 = new Audio('se/normal.mp3');
    battle1.loop = true;
    battle1.volume = 0.5;
    ///////////////////////////////////////////////

    battle1.play();


    //ランダム値作成関数
    function saikoro() {
        let randnum = Math.floor(Math.random() * 50 + 1);
        document.getElementById("numarea").innerHTML = randnum;

        if (randnum % 15 === 0) {
            flag = 0; //fizzbuzz
        } else if (randnum % 5 === 0) {
            flag = 1; //buzz
        } else if (randnum % 3 === 0) {
            flag = 2; //fizz
        } else {
            flag = 3; //pass
        }

        if (flag === 0) {
            fizzbuzzbutton.onclick = function() {
                seikai.play();
                score = score + 100
                document.getElementById("scorearea").innerText = (score);
                saikoro();
            };
            fizzbutton.onclick = function() {
                fuseikai.play();
                saikoro();
            };
            buzzbutton.onclick = function() {
                fuseikai.play();
                saikoro();
            };
            passbutton.onclick = function() {
                fuseikai.play();
                saikoro();
            };
        } else if (flag === 1) {
            fizzbuzzbutton.onclick = function() {
                fuseikai.play();
                saikoro();
            };
            fizzbutton.onclick = function() {
                fuseikai.play();
                saikoro();
            };
            buzzbutton.onclick = function() {
                seikai.play();
                score = score + 100
                document.getElementById("scorearea").innerText = (score);
                saikoro();
            };
            passbutton.onclick = function() {
                fuseikai.play();
                saikoro();
            };
        } else if (flag === 2) {
            fizzbuzzbutton.onclick = function() {
                fuseikai.play();
                saikoro();
            };
            fizzbutton.onclick = function() {
                seikai.play();
                score = score + 100
                document.getElementById("scorearea").innerText = (score);
                saikoro();
            };
            buzzbutton.onclick = function() {
                fuseikai.play();
                saikoro();
            };
            passbutton.onclick = function() {
                fuseikai.play();
                saikoro();
            };
        } else if (flag === 3) {
            fizzbuzzbutton.onclick = function() {
                fuseikai.play();
                saikoro();
            };
            fizzbutton.onclick = function() {
                fuseikai.play();
                saikoro();
            };
            buzzbutton.onclick = function() {
                fuseikai.play();
                saikoro();
            };
            passbutton.onclick = function() {
                seikai.play();
                score = score + 100
                document.getElementById("scorearea").innerText = (score);
                saikoro();
            };
        };

    };


    document.getElementById("scorearea").innerText = (score);

    setTimeout(function() {
        //3秒後のアクション
        document.getElementById("numarea").innerHTML = ('<font size="40" color="gold">Ready</font>');
        hajime.play();
        //効果音
        setTimeout(function() {
            count.play();
        }, 23000);
        setTimeout(function() {

            youi.play();
            //効果音
            setTimeout(function() {

                donn.play();
                //効果音
                saikoro();

                setTimeout(function() {

                    sokomade.play();
                    gong.play();

                    //効果音
                    setTimeout(function() {
                        localStorage.tensuu = (score);
                        localStorage.nanido = ('NORMAL');
                        window.location.href = 'scoretitle.html';

                    }, 2000);

                }, 30000);

            }, 2000);

        }, 2000);

    }, 2000);

})();