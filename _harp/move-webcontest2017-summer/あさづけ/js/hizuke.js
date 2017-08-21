(function() {
    'use strict'
    var now = new Date();
    //日付データ格納
    var m = now.getMonth() + 1;
    //今月のデータ取得
    var d = now.getDate();
    //日データ取得
    document.getElementById("days").innerText = (m + "月" + d + "日");
    //何月何日をid=daysに表示

})();