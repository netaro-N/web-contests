(function(){
    'use strict';
    const placeButton = document.getElementById('place-button');    //場所表示用のボタン
    const resultDivided = document.getElementById('result-area'); //結果表示エリア
    const placeDivided = document.getElementById('place-area'); //可能性のある場所表示エリア
    const selectDivided2 = document.getElementById('select-area2'); //アイテム選択プルダウンメニュー
    
    //プルダウンリスト表示用の大事なもの（アイテム）の名称取得
    var itemName6 = localStorage.getItem('item6');
    var itemName7 = localStorage.getItem('item7');
    var itemName8 = localStorage.getItem('item8');
    var itemName9 = localStorage.getItem('item9');
    var itemName10 = localStorage.getItem('item10');  
 
    //アイテム名がnullの時は（未登録）と設定
    if (itemName6 === null || '') {
        itemName6 = '未登録';
    }
    if (itemName7 === null || '') {
        itemName7 = '未登録';
    }
    if (itemName8 === null || '') {
        itemName8 = '未登録';
    }
    if (itemName9 === null || '') {
        itemName9 = '未登録';
    }
    if (itemName10 === null || '') {
        itemName10 = '未登録';
    }

    //プルダウンリストに設定するテキスト
    const selectText = ['スマホ（携帯）','財布','家のカギ','自転車のカギ','メガネ',itemName6,itemName7,itemName8,itemName9,itemName10];
    
    //よくありがちな場所を表示するための設定
    const walletPlace = "カバンの中、机の引き出し、トイレ、洗面所、学校や職場、友人の家、電車やバスの中に忘れているかもしれません。必要なら問い合わせてみましょう。必要ならクレジット会社等への連絡も忘れずに！";
    const smartphonePlace = "カバンの中、机の引き出し、トイレ、洗面所、学校や職場、友人の家、電車やバスの中に忘れているかもしれません。まず誰かの携帯で鳴らしてみましょう。必要なら問い合わせてみましょう。";
    const place = "カバンの中、机の引き出し、トイレ、洗面所、学校や職場、友人の家、電車やバスの中に忘れているかもしれません。必要なら問い合わせてみましょう。";
    const keyOfBycyclePlace = "自転車についたままではないですか。確認してみましょう。";
    const glassPlace = "自分の頭の上に忘れているかもしれません。鏡を見ましょう。";

    //プルダウンリストの初期化
    var select2 = document.createElement('select');
    while (selectDivided2.firstChild) { // 子どもの要素があるかぎり削除
        selectDivided2.removeChild(selectDivided2.firstChild);
    }

    //プルダウンリストのテキストを作成
    document.body.appendChild(select2);
    for (var i = 0, len = selectText.length; i < len; ++i) {
        select2.add( (new Option(selectText[i])) );
    }
    selectDivided2.appendChild(select2);

    //場所表示ボタン押下時の処理
    placeButton.onclick = () => {
        // 情報の表示エリアの初期化
        while (resultDivided.firstChild) { // 子どもの要素があるかぎり削除
            resultDivided.removeChild(resultDivided.firstChild);
        }

        //「未登録」の場合はメッセージを出して終了
        if (select2.value === "未登録") {
            alert("「未登録」は選択できません。");
            return;
        }

        //情報の表示エリアの作成
        const header = document.createElement('h3');
        header.innerText = select2.value + 'を仕舞ってある場所は・・・';
        header.style.cssText = "text-align: center;" + "margin-top: 50px;";
        resultDivided.appendChild(header);

        const paragraph = document.createElement('h2');
        paragraph.style.cssText = "color: #ff0000;" + "text-align: center;";

        //変数の初期化
        var result = null;
        var placeInfo = null;
        
        //プルダウンで選択された内容によって表示する情報を変える
        switch(select2.value){
            case 'スマホ（携帯）':
                result = localStorage.getItem('smartPhone');
                placeInfo = smartphonePlace;
                break;
            case '財布':
                result = localStorage.getItem('wallet');
                placeInfo = walletPlace;
                break;
            case '家のカギ':
                result = localStorage.getItem('keyOfHouse');
                placeInfo = place;
                break;
            case '自転車のカギ':
                result = localStorage.getItem('keyOfBycycle');
                placeInfo = keyOfBycyclePlace;
                break;
            case 'メガネ':
                result = localStorage.getItem('glass');
                placeInfo = glassPlace;
                break;
            case itemName6:
                result = localStorage.getItem('place6');
                placeInfo = place;
                break;
            case itemName7:
                result = localStorage.getItem('place7');
                placeInfo = place;
                break;
            case itemName8:
                result = localStorage.getItem('place8');
                placeInfo = place;
                break;
            case itemName9:
                result = localStorage.getItem('place9');
                placeInfo = place;
                break;
            case itemName10:
                result = localStorage.getItem('place10');
                placeInfo = place;
                break;
        }  

        //情報がない場合は「登録されていません」と表示
        if (result === null || '') {
            paragraph.innerText = '登録されていません。';
        } else {
            paragraph.innerText = result + ' ではないでしょうか？';
        }
        resultDivided.appendChild(paragraph);

        //ありがちな場所を表示する
        while (placeDivided.firstChild) { // 子どもの要素があるかぎり削除
            placeDivided.removeChild(placeDivided.firstChild);
        }
        const headerPlace = document.createElement('p');
        headerPlace.innerText = placeInfo;
        headerPlace.style.cssText = "text-align: center;" + "margin-top: 80px;"  + "margin-left: 150px;" + "margin-right: 150px;";
        placeDivided.appendChild(headerPlace);        
    }
}
)();