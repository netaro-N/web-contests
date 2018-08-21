(function() {
    'use strict';

    const gradationDiv = document.getElementById('gradation');
    const gachaButton = document.getElementById('gacha');
    const saveButton = document.getElementsByClassName('save');
    const saveGradation = document.getElementsByClassName('gra');
    const saveRightColor = document.getElementsByClassName('rightColor');
    const saveLeftColor = document.getElementsByClassName('leftColor');

    var deg = 0;
    var goOutGradation = null;
    var comeOutGradation = null;
    var canUseGacha = true;
    var rightColorCode = [];
    var leftColorCode = [];

    // 「ガチャる」ボタンが押された時の処理
    gachaButton.onclick = () => {
        // 一連の動作が実行中の時は処理を終了する
        if (canUseGacha === false) {
            return;
        }
        canUseGacha = false;

        // 一連の動作を開始する
        goOutGradation = setInterval(changeGradation1, 20);
    }

    function changeGradation1() {
        // 見えなくなるまで回転する
        deg = deg + 2;
        gradationDiv.style.transform = 'rotateY(' + deg + 'deg)';

        // 見えなくなったら、グラデーションの色を変更し、出現する回転に切り替える
        if (deg === 90) {
            getColorCode();
            clearInterval(goOutGradation);
            comeOutGradation = setInterval(changeGradation2, 20);
        }
    }

    function getColorCode() {
        // 色配列の初期化
        rightColorCode = [];
        leftColorCode = [];

        // グラデーションの色をランダムに取得し、変更する
        while (rightColorCode.length < 6) {
            rightColorCode.push((Math.floor(Math.random() * 16)).toString(16));
        }
        while (leftColorCode.length < 6) {
            leftColorCode.push((Math.floor(Math.random() * 16)).toString(16));
        }
        gradationDiv.style.background = 'linear-gradient(to right,  #' + rightColorCode.join('') + ',  #' + leftColorCode.join('') + ')';
    }

    function changeGradation2() {
        // 完全に出現するまで回転する
        deg = deg - 2;
        gradationDiv.style.transform = 'rotateY(' + deg + 'deg)';

        // 完全に出現したら、「ガチャる」ボタンを使用可能にし、回転を終了する
        if (deg === 0) {
            canUseGacha = true;
            clearInterval(comeOutGradation);
        }
    }

    for (let i = 0; i < saveButton.length; i++) {
        // 「保存する」ボタンが押された時の処理
        saveButton[i].onclick = () => {
            // カラーコードの配列が空の場合は、処理を終了する
            if (rightColorCode.length === 0) {
                return;
            }

            // 「保存する」ボタンの押された行に、グラデーション、右のカラーコード、左のカラーコードを出力する
            saveGradation[i].style.background = 'linear-gradient(to right,  #' + rightColorCode.join('') + ',  #' + leftColorCode.join('') + ')';
            saveRightColor[i].innerText = '#' + rightColorCode.join('');
            saveLeftColor[i].innerText = '#' + leftColorCode.join('');
        }
    }
})();