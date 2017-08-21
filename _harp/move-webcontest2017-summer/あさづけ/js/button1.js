(function() {
    'use strict'

    var linkbutton = document.getElementById("button1");
    //リンクボタンの要素を取得

    linkbutton.onclick = function() {
        //リンクボタンを押された時のアクション
        var disp = document.getElementById("all").style.display;
        //ツイッターエリア全体の箱のid=allのディスプレイ情報をdispに詰め込む
        if (disp === "none") {
            //ディスプレイがnoneの時
            document.getElementById("all").style.display = "inline-block";
        } else {
            //ディスプレイがinline-blockの時
            document.getElementById("all").style.display = "none";
        };
    };


})();