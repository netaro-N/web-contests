(function() {
    'use strict'

    ///////////////////　変数設定　///////////////////////
    let flag = null;
    /*出たランダム数値の判断用変数
    fizzbuzz:0
    buzz:1
    fizz:2
    pass:3
    */

    var score = 0; //得点を入れる変数


    //////////////各ボタンの情報を格納する変数/////////////
    const passbutton = document.getElementById('pass');
    const fizzbutton = document.getElementById('fizz');
    const buzzbutton = document.getElementById('buzz');
    const fizzbuzzbutton = document.getElementById('fizzbuzz');
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
    const battle = new Audio('se/battle37.mp3');
    battle.loop = true; //ループ設定
    battle.volume = 0.5;　 //音量設定
    ///////////////////////////////////////////////



    /////////開幕からBGMを流す為の関数///
    battle.play();
    ///////////////////////////////////


    //////////////////////////////////////////////////////////////////////////
    ////////////////ランダム値作成&フィズバズ判断の関数ここから//////////////////
    /////////////////////////////////////////////////////////////////////////

    function saikoro() {
        let randnum = Math.floor(Math.random() * 15 + 1);
        //floorで小数点をバッサリ切り捨て。
        // x１５で０～１４までの数を生成したのを
        //　さらに+1して1～１５にしてrandnumに出力。



        // id=numareaのdivエリアに randmum値を表示。/////////////
        document.getElementById("numarea").innerHTML = randnum;




        //////////fizzbuzz判断と結果をflag変数に格納///////////
        if (randnum % 15 === 0) {
            flag = 0; //fizzbuzz
        } else if (randnum % 5 === 0) {
            flag = 1; //buzz
        } else if (randnum % 3 === 0) {
            flag = 2; //fizz
        } else {
            flag = 3; //pass
        }
        /////////////////////////////////////////////////////



        ////////////もしflagが０（fizzbuzz)の時/////////////
        if (flag === 0) {

            //fizzbuzzボタンを押した//
            fizzbuzzbutton.onclick = function() {
                seikai.play(); //正解音
                score = score + 100 //スコア変数に+100
                document.getElementById("scorearea").innerText = (score); //スコアをスコア欄に表示

                saikoro(); //ランダム関数をまた頭から開始
            };
            //fizzボタンを押した//
            fizzbutton.onclick = function() {
                fuseikai.play(); //不正解音
                saikoro();　 //ランダム関数をまた頭から開始
            };
            //buzzボタンを押した//
            buzzbutton.onclick = function() {
                fuseikai.play(); //不正解音
                saikoro(); //ランダム関数をまた頭から開始
            };
            //passボタンを押した//
            passbutton.onclick = function() {
                fuseikai.play(); //不正解音
                saikoro(); //ランダム関数をまた頭から開始
            };

            ////////////もしflagが１（fizz)の時/////////////
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

            ////////////もしflagが２（buzz)の時/////////////
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

            ////////////もしflagが３（pass)の時/////////////
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


    /////////////////saikoro関数ここまで///////////////////




    //score変数(初期値＝０)を表示
    document.getElementById("scorearea").innerText = (score);




    /////////////////////////////////////////////////////////
    ////////////時間、間隔を決める関数ここから/////////////////
    ////////////////////////////////////////////////////////

    setTimeout(function() {
        //ページを開いてから2秒後のアクション。//

        document.getElementById("numarea").innerHTML = ('<font size="40" color="gold">Ready</font>');
        //ランダム値表示の丸枠にreadyの文字を表示する。
        hajime.play();
        //ボイス：「はじめます」


        setTimeout(function() {
            //２３秒後のアクションの設定。２３の数値はタイミング調整。
            count.play();
            //ボイス：カウントダウン
        }, 23000);


        setTimeout(function() {
            //始めますの声から2秒後のアクション

            youi.play();
            //ボイス：「よーい」

            setTimeout(function() {
                //よーいの声から２秒後。
                donn.play();
                //ボイス：「どん！」
                saikoro();
                //上に書いたランダム値と判断の関数を起動。

                setTimeout(function() {
                    //ゲームが開始してから３０秒後のアクション

                    sokomade.play();
                    //ボイス：「そこまで！」
                    gong.play();
                    //効果音:ゴング音

                    setTimeout(function() {
                        //ゴングなってから２秒後のアクション

                        //////////////////////////////////////////
                        //　変数値を別ページにも持ち越すコマンド　 //
                        /////////////////////////////////////////
                        localStorage.tensuu = (score); //変数 tensuu　に　scoreを代入  
                        localStorage.nanido = ('EASY');　 //変数 nanido　に　Easyの文字を代入

                        window.location.href = 'scoretitle.html'; //scoretitleのページへジャンプ指示


                        //////////////////////////////////////////////////////////
                        ///　別ページに変数値を持ち越す方法探すのに苦労しました・・///
                        ///  (;´∀｀)localstorage　おそろしい相手だったぜぃ・・  ////
                        /////////////////////////////////////////////////////////

                    }, 2000);

                }, 30000);

            }, 2000);

        }, 2000);

    }, 2000);

})();