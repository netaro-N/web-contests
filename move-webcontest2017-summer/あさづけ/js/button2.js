(function() {
    'use strict'

    let linkbutton = document.getElementById("button2");
    //リンクボタンの要素を取得

    linkbutton.onclick = function() {
        //リンクボタンを押された時のアクション
        let disp = document.getElementById("fizzbuzz").style.display;
        //ツイッターエリア全体の箱のid=allのディスプレイ情報をdispに詰め込む
        if (disp === "none") {
            //ディスプレイがnoneの時
            document.getElementById("fizzbuzz").style.display = "inline-flex";
        } else {
            //ディスプレイがinline-flexの時
            document.getElementById("fizzbuzz").style.display = "none";
        };
    };
})();