(function() {
    'use strict';

    var img = document.getElementById('cloud');
    //雲の画像idを取得
    let x = 351;
    //画像の位置の初期値　px
    let y = true;
    //左行きtrue,右行きをfalse。初期値は画像を右へ動かす。

    function move() {

        if (x > 350 && x < 450) {
            y = true;
            // 350pxから、450pxの間を移動
        } else {
            y = false;
            // 450pxより左に画像が移動したらfalseに
        };

        if (y === true) {
            x = x + 0.1;
            //trueの時、現在位置から左へ0.1px移動。

        } else if (y === false) {
            x = 351;
            //falseの時、661px位置に戻る。
        };

        img.style.right = x + 'px';
        //雲画像のcss値をｘの値に書き換え。
    };
    setInterval(move, 100);
})();