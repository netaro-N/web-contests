(function() {
    'use strict'

    function tm() {

        var now = new Date(); //日付データ格納

        //nowに日付が入ったので、nowから.getで月と日を別々に抽出
        var h = now.getHours();
        //現在の時間
        var m = now.getMinutes();
        //現在の分を取得

        if (h < 10) { h = "0" + h; };
        if (m < 10) { m = "0" + m; };
        //字ぞろえ用の関数。数字が一桁の時、十の位に０を書き込む

        document.getElementById("timewaku").innerText = (h + " : " + m);
        //この関数ででた現在時間をtimewakuに表示

    };

    setInterval(tm, 1000);
    //１秒ごとに更新。

})();