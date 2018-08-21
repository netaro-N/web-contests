(function(){
    'use strict';

//印が変わるセルを配列の要素にする
    const arg = ['td01', 'td02', 'td03', 'td04', 'td05', 'td06', 'td07', 'td08', 'td09', 'td10', 'td11', 'td12', 'td13', 'td14', 'td15', 'td16'];
        for (let key in arg) {
            (function(key_) {
                let a = document.getElementById(arg[key_]);  //セルの要素を取得して変数aに代入
                function clickEvent() {
                    switch (a.firstChild.nodeValue) {  //セルの現在の値によって条件分岐し、書き換える値が変わる
                        case '-':
                            document.getElementById(arg[key_]).innerHTML = '○';
                            break;
                        case '○':
                            document.getElementById(arg[key_]).innerHTML = '△';
                            break;
                        case '△':
                            document.getElementById(arg[key_]).innerHTML = '☓';
                            break;
                        case '☓':
                            document.getElementById(arg[key_]).innerHTML = '-';
                            break;
                    }
                }
                a.addEventListener("click", clickEvent, false);  //すべてのセルにclickEvent関数を適用する
            }(key));
        }   
})();