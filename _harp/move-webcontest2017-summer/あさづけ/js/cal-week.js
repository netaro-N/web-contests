(function() {

    now = new Date(); // 今現在の日付データ取得して↓
    now.setDate(1); // 今月の１日のデータを抽出↓
    Week = now.getDay();　 //一日のデータになったnowから曜日を取得。

    if (Week === 0) {
        //一日が日曜の時、w1=左端から日月火水木金土
        document.getElementById("w1").innerText = ("日");
        document.getElementById("w2").innerText = ("月");
        document.getElementById("w3").innerText = ("火");
        document.getElementById("w4").innerText = ("水");
        document.getElementById("w5").innerText = ("木");
        document.getElementById("w6").innerText = ("金");
        document.getElementById("w7").innerText = ("土");
    } else if (Week === 1) {
        //一日が月曜の時、月曜を左端に
        document.getElementById("w1").innerText = ("月");
        document.getElementById("w2").innerText = ("火");
        document.getElementById("w3").innerText = ("水");
        document.getElementById("w4").innerText = ("木");
        document.getElementById("w5").innerText = ("金");
        document.getElementById("w6").innerText = ("土");
        document.getElementById("w7").innerText = ("日");
    } else if (Week === 2) {
        //一日が火曜の時、～～
        document.getElementById("w1").innerText = ("火");
        document.getElementById("w2").innerText = ("水");
        document.getElementById("w3").innerText = ("木");
        document.getElementById("w4").innerText = ("金");
        document.getElementById("w5").innerText = ("土");
        document.getElementById("w6").innerText = ("日");
        document.getElementById("w7").innerText = ("月");
    } else if (Week === 3) {
        //一日が水曜の時、～～
        document.getElementById("w1").innerText = ("水");
        document.getElementById("w2").innerText = ("木");
        document.getElementById("w3").innerText = ("金");
        document.getElementById("w4").innerText = ("土");
        document.getElementById("w5").innerText = ("日");
        document.getElementById("w6").innerText = ("月");
        document.getElementById("w7").innerText = ("火");
    } else if (Week === 4) {
        //一日が木曜の時、～～
        document.getElementById("w1").innerText = ("木");
        document.getElementById("w2").innerText = ("金");
        document.getElementById("w3").innerText = ("土");
        document.getElementById("w4").innerText = ("日");
        document.getElementById("w5").innerText = ("月");
        document.getElementById("w6").innerText = ("火");
        document.getElementById("w7").innerText = ("水");
    } else if (Week === 5) {
        //一日が金曜の時、～～
        document.getElementById("w1").innerText = ("金");
        document.getElementById("w2").innerText = ("土");
        document.getElementById("w3").innerText = ("日");
        document.getElementById("w4").innerText = ("月");
        document.getElementById("w5").innerText = ("火");
        document.getElementById("w6").innerText = ("水");
        document.getElementById("w7").innerText = ("木");
    } else if (Week === 6) {
        //一日が土曜の時、～～
        document.getElementById("w1").innerText = ("土");
        document.getElementById("w2").innerText = ("日");
        document.getElementById("w3").innerText = ("月");
        document.getElementById("w4").innerText = ("火");
        document.getElementById("w5").innerText = ("水");
        document.getElementById("w6").innerText = ("木");
        document.getElementById("w7").innerText = ("金");
    };


})();