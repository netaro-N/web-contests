(function() {
    'use strict'

    var now = new Date(); //日付データ格納

    const M = now.getMonth() + 1; //月のデータ格納。関数データが0～11なので+1


    if (M == 4 || M == 6 || M == 9 || M == 11) {
        //３０日までの月
        document.getElementById("d31").innerText = ("-");
    } else if (M == 2) {
        //28日しかない２月
        document.getElementById("d29").innerText = ("-");
        document.getElementById("d30").innerText = ("-");
        document.getElementById("d31").innerText = ("-");
    };

    document.getElementById("month").innerText = ("　" + M + "月");
    //結果をid=monthに表示

})();