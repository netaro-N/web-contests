(function () {
    'use strict';
    const calculateButton = document.getElementById('calculate');
    const resultDivided = document.getElementById('result-area');

    /**
    * 指定した要素の子どもを全て削除する
    * @param {HTMLElement} element HTMLの要素
    */
    function removeAllChildren(element) {
        while (element.firstChild) { // 子どもの要素があるかぎり削除
            element.removeChild(element.firstChild);
        }
    }

    calculateButton.onclick = () => {
        const hereLongitude = document.getElementById('from-city');
        const thereLongitude = document.getElementById('to-city');
        //コンピュータのローカルタイム（ミリ秒）
        const localTime = (new Date()).getTime();
        const gmt = localTime + (new Date()).getTimezoneOffset() * 60 * 1000;

        //A地点の時間（ミリ秒）
        const hereTime = gmt + ((hereLongitude.value) / 15) * 60 * 60 * 1000;
        //A地点の時刻
        const fromTime = new Date(hereTime);
        //表記の修正
        var hereYear = fromTime.getFullYear();
        var hereMonth = fromTime.getMonth() + 1;
        var hereDay = fromTime.getDate();
        var hereHour = fromTime.getHours();
        var hereMinu = fromTime.getMinutes();
        var hereSec = fromTime.getSeconds();
        //時間表示の修正（10未満は前に0を付ける）
        if (hereHour < 10) hereHour = "0" + hereHour;
        if (hereMinu < 10) hereMinu = "0" + hereMinu;
        if (hereSec < 10) hereSec = "0" + hereSec;


        //B地点の時間（ミリ秒）
        const thereTime = gmt + ((thereLongitude.value) / 15) * 60 * 60 * 1000;
        //B地点の時刻
        const toTime = new Date(thereTime);
        //表記の修正
        var thereYear = toTime.getFullYear();
        var thereMonth = toTime.getMonth() + 1;
        var thereDay = toTime.getDate();
        var thereHour = toTime.getHours();
        var thereMinu = toTime.getMinutes();
        var thereSec = toTime.getSeconds();
        //時間表示の修正（10未満は前に0を付ける）
        if (thereHour < 10) thereHour = "0" + thereHour;
        if (thereMinu < 10) thereMinu = "0" + thereMinu;
        if (thereSec < 10) thereSec = "0" + thereSec;

        //時差
        const jisa = (hereTime - thereTime) / (60 * 60 * 1000);
        //都市名の取得
        const idx1 = hereLongitude.selectedIndex;
        const idx2 = thereLongitude.selectedIndex;
        console.log(idx1);
        const hereName = hereLongitude.options[idx1].text;
        const thereName = thereLongitude.options[idx2].text;
        //日付と時刻の表記方法
        const firstDate = hereYear + "年" + hereMonth + "月" + hereDay + "日";
        const firstTime = hereHour + ":" + hereMinu + ":" + hereSec;
        const secondDate = thereYear + "年" + thereMonth + "月" + thereDay + "日";
        const secondTime = thereHour + ":" + thereMinu + ":" + thereSec;

        //診断結果表示エリアの作成
        removeAllChildren(resultDivided);
        const header = document.createElement('h3');
        header.innerHTML = '結果';
        resultDivided.appendChild(header);

        const paragraph = document.createElement('p');
        let result = null;
        if (jisa === 0) {
            result = thereName + secondDate + secondTime + 'と<br>' + hereName + firstDate + firstTime + 'の時差は<br>ありません';

        } else if (jisa < 0) {
            result = thereName + secondDate + secondTime + 'は<br>' + hereName + firstDate + firstTime + 'よりも<br>' + (-jisa) + '時間進んでいます。';

        } else {
            result = thereName + secondDate + secondTime + 'は<br>' + hereName + firstDate + firstTime + 'よりも<br>' + jisa + '時間遅れています。';

        }
        paragraph.innerHTML = result;
        resultDivided.appendChild(paragraph);



    }



})();