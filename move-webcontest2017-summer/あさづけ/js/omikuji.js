(function() {
    'use strict';


    //////////////// 変数作成エリア ////////////////////

    const omikuji = ['大凶', '凶', '小吉', '中吉', '大吉']; //おみくじ内容

    const assessmentbutton = document.getElementById('assessment'); //ボタン設定

    let kaeru = document.getElementById('omikujikaeru'); //画像のcss値取得


    ////////////          音設定           /////////////
    const garagara = new Audio('se/omikuji.mp3');
    const don = new Audio('se/roll.mp3');
    const gaaan = new Audio('se/drop.mp3');
    const tukomi = new Audio('se/tukomi.mp3');
    const kirakira = new Audio('se/kirakira.mp3');

    ////////////////////////////////////////////////////





    ////////////////////////////////////////
    //ボタン押された時のアクション内容ここから//
    ////////////////////////////////////////

    assessmentbutton.onclick = function() {


        while (resultarea.firstChild) {
            resultarea.removeChild(resultarea.firstChild);
        }
        // リザルトエリアの子要素削除//


        var randnum = Math.floor(Math.random() * 5);
        //ランダム値作成。floorで少数点以下切り捨て。０～４の５枠作成//

        kaeru.style.backgroundImage = "url('images/inori.png')";
        //cssの画像アドレス書き換え
        garagara.play();
        //効果音:ガラガラ//
        document.getElementById("pandacome").innerText = ('ガラガラうるせーな！');
        //パンダのコメント//


        setTimeout(function() {
            /*結果表示遅らせる：３秒*/

            if (randnum > 1) {
                //小吉以上

                document.getElementById("resultarea").innerText = omikuji[randnum];
                //ランダム値表示
                don.play();
                //結果の音//
                kaeru.style.backgroundImage = "url('images/kusudama.png')";
                //くすだま画像に変換
                document.getElementById("pandacome").innerText = ('はぶあないすで～～');
                //ぱんだこめんと


            } else {
                //凶の時
                document.getElementById("resultarea").innerText = omikuji[randnum];
                //結果表示
                gaaan.play();
                //効果音
                kaeru.style.backgroundImage = "url('images/kyou.png')";
                //ショックの画像
                document.getElementById("pandacome").innerText = ('そんな時もあるさ');
                //ぱんだこめんと

                setTimeout(function() {
                    //凶の結果がでて1．５秒後のアクション

                    kaeru.style.backgroundImage = "url('images/nannde.png')";
                    //つっこみ画像に変換
                    tukomi.play();
                    //効果音

                    setTimeout(function() {
                        //つっこみを入れてから１秒後のアクション
                        document.getElementById("resultarea").innerText = "";
                        //結果の文字消去
                        garagara.play();
                        //効果音

                        setTimeout(function() {
                            //文字消してから2秒後のアクション
                            document.getElementById("resultarea").innerText = omikuji[4];
                            //大吉表示
                            kirakira.play();
                            //効果音                            
                            kaeru.style.backgroundImage = "url('images/kusudama.png')";
                            //吉以上のときの画像
                            document.getElementById("pandacome").innerText = ('・・・いいのかそれで。');
                            //パンダのコメント
                        }, 2000); //文字消してから2秒後のアクション
                    }, 1000); //つっこみを入れてから１秒後のアクション
                }, 1500); //凶の結果がでて1．５秒後のアクション
            }　 //elseの}
        }, 2500); //ボタンを押してから結果までの時間
    };
})();