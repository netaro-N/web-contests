(function(){
    'use strict';
    const registNameInput = document.getElementById('regist-text'); //アイテム登録用テキストボックス
    const registNumberSelectInput = document.getElementById('regist-number-select'); //プルダウンメニュー（登録）
    const deleteNumberSelectInput = document.getElementById('delete-number-select'); //プルダウンメニュー（削除）
    const registItemButton = document.getElementById('regist-item-button'); //登録ボタン
    const deleteButton = document.getElementById('delete-button'); //削除ボタン

    //登録ボタン押下時の処理
    registItemButton.onclick = () => {
        //変数の初期化
        const registNumberSelect = registNumberSelectInput.value;
        const registName = registNameInput.value;

        //アイテム名がテキストボックスに入っていない場合はメッセージを出して終了
        if (!registName) {
            alert('アイテム名が入力されていません');
            return;
        }

        //確認用ダイアログの表示
        var confRegist = window.confirm('アイテム"' + registName + '"' + registNumberSelect + '登録します。よろしいですか？');
        
        //OKが押されたら
        if (confRegist) {
            //ローカルストレージにアイテムを登録（同時にそれに対応する場所データを初期化）
            switch(registNumberSelect){
                case 'を6番目に':
                    localStorage.setItem('item6', registName);
                    localStorage.removeItem('place6');
                    break;
                case 'を7番目に':
                    localStorage.setItem('item7', registName);
                    localStorage.removeItem('place7');
                    break;
                case 'を8番目に':
                    localStorage.setItem('item8', registName);
                    localStorage.removeItem('place8');
                    break;
                case 'を9番目に':
                    localStorage.setItem('item9', registName);
                    localStorage.removeItem('place9');
                    break;
                case 'を10番目に':
                    localStorage.setItem('item10', registName);
                    localStorage.removeItem('place10');
                    break;
            }
            alert('アイテム"' + registName + '"' + registNumberSelect + '登録しました。');
        }  
    }

    //削除ボタン押下時の処理
    deleteButton.onclick = () => {
        const deleteNumberSelect = deleteNumberSelectInput.value;
        
        var confDelete = null; //確認ダイアログ用の変数 
        var deleteItem = null; //削除するアイテム用の変数

        //ダイアログで確認後、アイテムを削除
        switch(deleteNumberSelect){
            case '6番目のリストを':
                deleteItem = localStorage.getItem('item6');
                break;
            case '7番目のリストを':
                deleteItem = localStorage.getItem('item7');
                break;
            case '8番目のリストを':
                deleteItem = localStorage.getItem('item8');
                break;
            case '9番目のリストを':
                deleteItem = localStorage.getItem('item9');
                break;
            case '10番目のリストを':
                deleteItem = localStorage.getItem('item10');
                break;
        }

        //アイテムが「未登録」の場合は処理を抜ける。それ以外はアイテム名とそれに対応する場所名を削除
        if (deleteItem === null || deleteItem === '未登録'){
            alert('アイテムが登録されていません。');
        } else {
            confDelete = window.confirm('アイテム"' + deleteItem + '"' + 'を削除します。よろしいですか？');
            if (confDelete) {
                switch(deleteNumberSelect){
                    case '6番目のリストを':
                        localStorage.removeItem('item6');
                        localStorage.removeItem('place6');
                        break;
                    case '7番目のリストを':
                        localStorage.removeItem('item7');
                        localStorage.removeItem('place7');
                        break;
                    case '8番目のリストを':
                        localStorage.removeItem('item8');
                        localStorage.removeItem('place8');
                        break;
                    case '9番目のリストを':
                        localStorage.removeItem('item9');
                        localStorage.removeItem('place9');
                        break;
                    case '10番目のリストを':
                        localStorage.removeItem('item10');
                        localStorage.removeItem('place10');
                        break;
                }
                alert('アイテムを削除しました。');
            }
        }
    }
}
)();