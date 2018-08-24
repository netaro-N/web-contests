(function(){
    'use strict';
    const requestNoInput01 = document.getElementById('request-No01');
    const requestButton01 = document.getElementById('botan01');
    const resultDivided = document.getElementById('result-area');

    /**
    * 指定した要素の子どもを全て削除する
    * @param {HTMLElement} element HTMLの要素
    */
    function removeAllChildren(element) {
        while (element.firstChild) {   // 子どもの要素があるかぎり削除
            element.removeChild(element.firstChild);
        }
    }

    requestButton01.onclick = () => {
        const Request = requestNoInput01.value;
        if (Request.length === 0) {
            return;
        }

        // 動画エリアの作成
        removeAllChildren(resultDivided);

        const paragraph = document.createElement('p'); 
        const result = request01(Request);              
        paragraph.innerText = result;  //とりあえず表示
        // paragraph.innerHTML = result;  //これで無理でした
        resultDivided.appendChild(paragraph);

        const setumei1 = document.createElement('h3');
        setumei1.innerText = '↑これを HTML ソースにコピペすれば動画再生できます。';
        resultDivided.appendChild(setumei1);

        const setumei2 = document.createElement('h4');
        setumei2.innerText = '　　本当はココで指定した動画を再生したかったのですが無理でした。何かいい方法を知っている方、教えてください。';
        resultDivided.appendChild(setumei2);
    };
    
    function request01(Request) {

        let result = '<script type="application/javascript" src="https://embed.nicovideo.jp/watch/{Request}/script?w=640&h=360"></script><noscript><a href="http://www.nicovideo.jp/watch/{Request}">りくえすと</a></noscript>';
        result = result.replace(/\{Request\}/g, Request);
        //result = result.replace(/\{Request\}/g, userName);
        // TODO{Request} の動画番号を置き換える
        return result;

    };
    
    requestNoInput01.onkeydown = (event) => {
        if (event.keyCode === 13) {    // 13はＥＮＴＥＲキーが押された時
            requestButton01.onclick();// ボタンのonclick() 処理を呼び出す
        }
    };

})();