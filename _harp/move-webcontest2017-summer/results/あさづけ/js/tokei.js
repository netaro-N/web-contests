(function() {
    'use strict';

    var star = document.getElementById('hari');
    //秒針代わりの星画像のｃｓｓデータを取得
    var time = new Date();
    //現在時間をjikanに代入
    var second = time.getSeconds();
    //変数timeから秒を変数secondへ代入
    var deg = second * 6;
    //秒数値を６倍にして角度数値を算出

    function kaiten() {
        //画像を回転させる関数
        deg = deg + 6;
        //角度、＋６
        star.style.transform = 'rotateZ(' + deg + 'deg)';
        //角度degnoの数値をcssに書き込み
    }
    setInterval(kaiten, 1000);
    //この関数を１秒ごとに実行
})();