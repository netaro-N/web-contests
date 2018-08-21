(function(){
    'use strict';
    var weeks  = new Array("日", "月", "火", "水", "木", "金", "土");
    var today  = new Date();
    var year   = today.getFullYear();
    var month  = today.getMonth()+1;
    var day    = today.getDate();
    var wNames = weeks[today.getDay()];

    //現在の日付と曜日を表示する
    document.write(year + "年" + month +"月" + day + "日" + wNames + "曜日");
})();