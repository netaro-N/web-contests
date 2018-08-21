(function () {
    'use strict';

    const decideButton = document.getElementById('decide');
    const resultDivided = document.getElementById('result-area');
    const dayonDivided = document.getElementById('dayon-area');

    /**
     * 指定した要素の子どもを全て削除する
     * @param {HTMLElement} element HTMLの要素
     */
    function removeAllChildren(element) {
        while (element.firstChild) {
            element.removeChild(element.firstChild)
        }
    }

    decideButton.onclick = () => {

        // メニュー表示エリアの作成
        removeAllChildren(resultDivided);
        const answer = document.createElement('h1');
        const result = decideMenu();
        answer.innerText = '【' + result + '】';
        resultDivided.appendChild(answer);

        removeAllChildren(dayonDivided);
        const dayon = document.createElement('h2');
        dayon.innerText = 'だよ～ん！';
        dayonDivided.appendChild(dayon);

        // イラストを回転させる
        const illustration = document.getElementById('illustration');
        let deg = 0;
        function rotateIllustration() {
            deg = deg + 6;
            illustration.style.transform = 'rotateZ(' + deg + 'deg)';
        }
        setInterval(rotateIllustration, 30);
    };

    const menus = [
        'カレーライス',
        '漬丼',
        '野菜炒め',
        'グラタン',
        '焼き魚',
        '麻婆豆腐',
        'ハンバーグ',
        '刺身',
        'クリームシチュー',
        '焼き肉',
        '餃子',
        'バラニラ豆腐',
        'ハヤシライス',
        'なめろう丼',
        'バンバンジー',
        'ビーフシチュー',
    ];

    // 今日の日付を取得して決定したメニューを返す関数
    function decideMenu() {
        const today = new Date().getDate();

        // 今日の日付をメニューの数で割って添字の数値を求める   
        const index = today % menus.length;
        const result = menus[index];
        return result;
    }
})();