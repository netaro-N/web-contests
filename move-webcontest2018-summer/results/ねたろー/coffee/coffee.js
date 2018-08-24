(function () {
    'use strict';
    const resultDivided = document.getElementById('result-area');
    const cup = document.getElementById('cup');

    console.log(cup.value);
    function removeAllChildren(element) {
        while (element.firstChild) { // 子どもの要素があるかぎり削除
            element.removeChild(element.firstChild);
        }
    }
    cup.onchange = () => {
        removeAllChildren(resultDivided);
        const cups = cup.value;
        var powBol = 10 * cups;
        console.log(cups);
        const header = document.createElement('h3');
        header.innerHTML = 'ステップ１';
        resultDivided.appendChild(header);
        const paragraph = document.createElement('p');
        paragraph.innerHTML = cups + '杯のコーヒーを淹れるには' + powBol + 'gのコーヒー豆を用意してください。';
        resultDivided.appendChild(paragraph);
        var firstWater = 20 * cups;
        const header2 = document.createElement('h3');
        header2.innerHTML = 'ステップ２';
        resultDivided.appendChild(header2);
        const paragraph2 = document.createElement('p');
        paragraph2.innerHTML = firstWater + 'mlの沸騰したお湯を注いで２０秒蒸らします。';
        resultDivided.appendChild(paragraph2);

        var secondWater = 80 * cups;
        var thridWater = 40 * cups;
        var finalWater = 20 * cups;
        const header3 = document.createElement('h3');
        header3.innerHTML = 'ステップ３';
        resultDivided.appendChild(header3);
        const paragraph3 = document.createElement('p');
        paragraph3.innerHTML = '「' + secondWater + 'ml」→「' + thridWater + 'ml」→「' + finalWater + 'ml」の順にお湯を注いで完成です。';
        resultDivided.appendChild(paragraph3);
    }
})();