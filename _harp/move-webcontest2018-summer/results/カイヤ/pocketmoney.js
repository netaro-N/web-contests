(function(){
    'use strict';
    const sengetu = document.getElementById('sengetu');
    const kongetu = document.getElementById('kongetu');
    const Button = document.getElementById('button');
    const resultDivided = document.getElementById('result-area');

    /**
     * 指定した要素の子どもをすべて削除する
     * @param {HTMLElement} element HTMLの要素
     */
    function removeAllChildren(element){
        while (element.firstChild) { // 子どもの要素があるかぎり削除
            element.removeChild(element.firstChild);
            
    }
}

    Button.onclick = () => {
        const kongetui = kongetu.value;
        if (kongetui.length === 0) { // 空のときは処理を終了する
            return;
           
        }

        //  診断結果表示エリアの作成
        removeAllChildren(resultDivided);
        const header = document.createElement('h3');
        header.innerText = '計算結果';
        resultDivided.appendChild(header);

        const paragraph = document.createElement('p');
        const result = '前月比は' + kongetu.value / sengetu.value * 100 + '%です。';
        paragraph.innerText = result;
        resultDivided.appendChild(paragraph);
    
        
};



kongetu.onkeydown = (event) => {
            if (event.keyCode === 13) { //13 番 enter キー
                Button.onclick();
            }
        }; 


})();