var gender = ["男","女"] ;


var personality = ["積極的","消極的","神経質","無神経","外向的","内向的","目立ちたがり",
"冷静沈着","謙虚","勇敢","臆病","高飛車","正直","嘘つき","勤勉","頑固","楽観的",
"悲観的","気長","短気","慈悲深い","利己的","慎重","無鉄砲","多弁","無口","お人好し","用心深い",
"単純","気分屋","好奇心旺盛","気が弱い","気が強い","浮気性","一途","責任感が強い",
"無責任","好戦的","平和主義","照れ屋","内気","ロマンチスト","リアリスト","自分勝手",
"繊細","お調子者","誠実"] ;


var race = ["人間","エルフ","ドワーフ","獣人","竜人","ホムンクルス","アンドロイド","ハーフエルフ","小人族","魚人族","精霊","天使","悪魔","吸血鬼","妖精"];


var job = ["剣士","傭兵","戦士","騎士","拳闘士","ソードマスター","侍","兵士","ダークナイト",
"竜騎士","ペガサスナイト","聖騎士","バーサーカー","重騎士","魔法剣士","魔法戦士","槍使い",
"弓使い","銃士","スナイパー","狩人","アサシン","盗賊","海賊","山賊","怪盗","スパイ","忍者",
"プリースト","回復術士","僧侶","呪術士","精霊使い","魔法使い","魔術師","ネクロマンサー",
"エクソシスト","召喚士","占い師","星占術師","貴族","王","将軍","商人","踊り子","吟遊詩人",
"錬金術師","薬師","村人","ビーストテイマー","ドラゴンテイマー","レンジャー","勇者"];


var haircolor = ["赤","青","黄","緑","オレンジ","水","黒","茶","白","紫","ピンク"];


var eyecolor = ["赤","青","黄","緑","オレンジ","水","黒","茶","白","紫","ピンク"];


var individuality = ["特定の種族を嫌っている","紅茶が好き","コーヒーが好き",
"天涯孤独の身","隻眼","オッドアイ","猫が好き","猫が嫌い","犬が好き","犬が嫌い",
"読書家","昔は髪の色が違った","昔は目の色が違った","傷が体にたくさんある","お金持ち",
"水泳が得意","料理ができない","料理が上手い","服装がおしゃれ","裕福な家庭で育った","あまり家庭に恵まれなかった",
"友達が多い","人付き合いは好きじゃない","絵を描くのが上手い","両親を亡くしている","兄がいる","弟がいる",
"妹がいる","姉がいる","治癒能力が高い","武器が好き","人間不信","怠け癖","一人の方が気楽","魔法がかなり得意",
"何故か今の職業になってしまった","なりたい職業は今のではない","雨男/雨女","過去に死にかけた事がある",
"触れてほしくない過去がある","前世の記憶がある","記憶喪失","英雄になった経験がある","竜に好かれる",
"動物に好かれやすい","子供に好かれやすい","趣味はお菓子作り","義手","初歩的な錬金術が出来る",
"不眠症","両親との関係が複雑","貴族の出","幼馴染がいる","文字が綺麗","物づくりが好き","夢を見たことがない",
"王家の血筋","猫舌","食にこだわりがある","少食","かなりの大食い","スタイルがいい","野菜が苦手",
"星を見るのが好き","頭が良い","フルーツが好き","冷え性","暑がり","泳げない","高身長","低身長","童顔","実年齢より大人びて見える"];


var btn = document.getElementById("btn");
var output = document.getElementById("output");
var countUpValue = 1;


btn.onclick = function(){

    btnclick_count = countUpValue++;
    random_gender = gender[ Math.floor( Math.random() * gender.length ) ];
    random_personality = personality[ Math.floor( Math.random() * personality.length ) ];
    random_age = Math.floor( Math.random() * (100-1)+1);
    random_race = race[ Math.floor( Math.random() * race.length ) ];
    random_job = job[ Math.floor( Math.random() * job.length ) ];
    random_haircolor = haircolor[ Math.floor( Math.random() * haircolor.length ) ];
    random_eyecolor = eyecolor[ Math.floor( Math.random() * eyecolor.length ) ];
    random_individuality = individuality[ Math.floor( Math.random() * individuality.length ) ];

    message = "<p>作成した回数[" + btnclick_count + "]</p>";
    message += "<p>性別　：" + random_gender + "</p>";
    message += "<p>性格　：" + random_personality + "</p>";
    message += "<p>年齢　：" + random_age + "</p>";
    message += "<p>種族　：" + random_race + "</p>";
    message += "<p>職業　：" + random_job + "</p>";
    message += "<p>髪の色：" + random_haircolor + "</p>";
    message += "<p>瞳の色：" + random_eyecolor + "</p>";
    message += "<p>特性　：" + random_individuality + "</p>";
    output.innerHTML = message;
}
