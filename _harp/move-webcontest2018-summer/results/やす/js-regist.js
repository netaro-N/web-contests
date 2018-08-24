(function(){
    'use strict';
    const registButton = document.getElementById('regist-button');  //登録ボタン
    const deleteButton = document.getElementById('delete-button');  //削除ボタン
    const placeNameInput = document.getElementById('place-text');  //場所登録用のテキストボックス
    const selectDivided1 = document.getElementById('select-area1'); //アイテム表示用ダイアログ
    
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

    //プルダウンリストの作成（「最後に仕舞った場所を登録しよう」の箇所）
    var select1 = document.createElement('select');
    while (selectDivided1.firstChild) { // 子どもの要素があるかぎり削除
        selectDivided1.removeChild(selectDivided1.firstChild);
    }
    
    // プルダウンリストのテキストを作成
    document.body.appendChild(select1);
    for (var i = 0, len = selectText.length; i < len; ++i) {
        select1.add( (new Option(selectText[i])) );
    }
    selectDivided1.appendChild(select1);

    //登録ボタン押下時の処理
    registButton.onclick = () => {
        const placeName = placeNameInput.value;
        const itemName = select1.value;

        //プルダウンを「未登録」にしている場合、メッセージを出して終わる
        if (itemName === '未登録'){
            alert('アイテム「未登録」には場所を登録できません。先にアイテム名を登録してください。');
            return;
        }

        //テキストボックス未入力の場合、メッセージを出して終わる
        if (!placeName) {
            alert("場所が入力されていません。");
            return;
        }

        //削除前にメッセージで確認する。キャンセルが押された時は処理を抜ける
        var confRegist = window.confirm('アイテム"' + itemName + '"を仕舞った場所を「' + placeName + '」で登録します。よろしいですか？');
        if (!confRegist) {
            return;
        }

        //アイテムごとに場所データをローカルストレージに登録する
        switch(itemName){
            case 'スマホ（携帯）':
                localStorage.setItem('smartPhone', placeName);
                break;
            case '財布':
                localStorage.setItem('wallet', placeName);
                break;
            case '家のカギ':
                localStorage.setItem('keyOfHouse', placeName);
                break;
            case '自転車のカギ':
                localStorage.setItem('keyOfBycycle', placeName);
                break;
            case 'メガネ':
                localStorage.setItem('glass', placeName);
                break; 
            case itemName6:
                localStorage.setItem('place6', placeName);
                break;    
            case itemName7:
                localStorage.setItem('place7', placeName);
                break;  
            case itemName8:
                localStorage.setItem('place8', placeName);
                break;   
            case itemName9:
                localStorage.setItem('place9', placeName);
                break;  
            case itemName10:
                localStorage.setItem('place10', placeName);
                break;             
        }  
        alert("場所の登録が完了しました。");
    }

    //削除ボタン押下時の処理
    deleteButton.onclick = () => {
        const placeName = placeNameInput.value;
        const itemName = select1.value;

        //プルダウンを「未登録」にしている場合、メッセージを出して終わる
        if (itemName === '未登録'){
            alert('アイテム「未登録」の場所は削除できません。');
            return;
        }

        //削除前にメッセージで確認する。キャンセルが押された場合は処理を抜ける
        var confDelete = window.confirm('アイテム"' + itemName + '"を仕舞った場所を削除します。よろしいですか？');
        if (!confDelete) {
            return;
        }

        //アイテムごとに保管されている場所データ（ローカルストレージ）の削除
        switch(itemName){
            case 'スマホ（携帯）':
                localStorage.removeItem('smartPhone');
                break;
            case '財布':
                localStorage.removeItem('wallet');
                break;
            case '家のカギ':
                localStorage.removeItem('keyOfHouse');
                break;
            case '自転車のカギ':
                localStorage.removeItem('keyOfBycycle');
                break;
            case 'メガネ':
                localStorage.removeItem('glass');
                break; 
            case itemName6:
                localStorage.removeItem('place6');
                break;    
            case itemName7:
                localStorage.removeItem('place7');
                break;  
            case itemName8:
                localStorage.removeItem('place8');
                break;   
            case itemName9:
                localStorage.removeItem('place9');
                break;  
            case itemName10:
                localStorage.removeItem('place10');
                break;             
        }  
        alert("場所の削除が完了しました。");
    }
}
)();