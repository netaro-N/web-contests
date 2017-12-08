(function() {
    'use strict';

    var deg = 0;
    //画像の角度数値を入れる変数
    var img = document.getElementById('swing');
    //cssの画像データをimg変数に代入
    var x = 100;
    //画像位置の初期値を50px
    var y = true;
    //右へ移動か左へ移動かの判断するための変数

    function swing() {
        deg = deg + 6;
        //画像の角度、６度プラス
        img.style.transform = 'rotateY(' + deg + 'deg)';
        //cssの画像変形命令をここから指示。Yを軸にdeg度回転。

        if (x < 100) {
            y = true;
            //右端100px以下の時trueに
        } else if (x > 350) {
            y = false;
            //右端350pxより左のときfalseに
        };

        if (y === true) {
            x = x + 1;
            //trueの時は画像を左へ１px移動
        } else if (y === false) {
            x = x - 1;
            //falseの時は画像を右へ１px移動
        };

        img.style.right = x + 'px';
        //関数で出たx数値をcssに書き込み

    };

    setInterval(swing, 50);
    //この関数を0.05間隔で実行

})();