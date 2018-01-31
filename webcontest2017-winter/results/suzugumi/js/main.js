(function() {
    'use strict';

    const text_input = document.getElementById('text_input');
    const right_textAria = document.getElementById('right_textAria');
    const left_textAria = document.getElementById('left_textAria');
    const left_Main_textAria = document.getElementById('left_Main_textAria');
    const reset_Button = document.getElementById('reset_Button');
    const decision_Button = document.getElementById('decision_Button');
    const Initializatio_Button = document.getElementById('Initializatio_Button');
    const left_section = document.getElementById('left_section');
    const right_section = document.getElementById('right_section');

    const mask = document.getElementById('mask');
    const Confirmation_aria_name = document.getElementById('Confirmation_aria_name');
    const Confirmati_NO_button = document.getElementById('Confirmati_NO_button');
    const label_num = document.getElementById('label_num');
    const NOKORIMOJI = document.getElementById('NOKORIMOJI');
    const right_background_base0 = document.getElementById('right_background_base0');
    const CPG = document.getElementById('card_packageBacground');
    var deg = 0;
    var isStarted;
    var Name_result;
    var RESET = null;
    var HIDDEN = 'hidden';
    var NONE = 'Unalterabl';
    var WARNING = 'warning';
    var EMPTY = '';
    var LIMiT = 8;
    var meigen = [
        '「 進まざる者は必ず退き、退かざる者は必ず進む」',
        '「 やってみなければ結局は失敗と同じ。」',
        '「 ほんとうの競争相手？それは自分自身。」',
        '「 お前の道を進め、人には勝手なことを言わせておけ。」',
        '「 人を信じよ、しかし、その百倍も自らを信じよ。」',
        '「 ただひとり私を倒せるのは、私だ。」',
        '「 人はしょせん、自分で自分の背中を押すしかないのだ。」',
        '「 振り向くな、振り向くな、後ろには夢がない。」',
        '「 うまく使えば、時間はいつも十分にある。」',
        '「 何でスーパーマンみたいなことを期待するかなあ。」',
        '「 青春は永遠にはじめからのやり直しだ。」',
        '「 人間は、できない理由をみつける天才。 」',
    ]

    var legend_name = [
        '福沢諭吉',
        'リチャード・ブランソン',
        'ウィルマ・ルドルフ',
        'ダンテ',
        '手塚治虫',
        'マイケル・ジョンソン',
        'カーク・ダグラス',
        '寺山修司',
        'ゲーテ',
        '落合博満',
        '岡本太郎',
        '林修先生',
    ]

    var CC = [
        'url(images/CC_1.png)',
        'url(images/CC_2.png)',
        'url(images/CC_3.png)',
        'url(images/CC_4.png)',
        'url(images/CC_5.png)',
        'url(images/CC_6.png)',
        'url(images/CC_7.png)',
        'url(images/CC_8.png)',
        'url(images/CC_9.png)',
        'url(images/CC_10.png)',
        'url(images/CC_11.png)',
        'url(images/CC_12.png)',
    ]
    var animal_KAGU = [
        'url(images/animal1.png)',
        'url(images/animal2.png)',
        'url(images/animal3.png)',
        'url(images/animal4.png)',
        'url(images/animal5.png)',
        'url(images/animal6.png)',
        'url(images/animal7.png)',
        'url(images/animal8.png)',
        'url(images/animal9.png)',
        'url(images/animal10.png)',
        'url(images/animal11.png)',
        'url(images/animal12.png)',
        'url(images/animal13.png)',
        'url(images/animal14.png)',
        'url(images/animal15.png)',
        'url(images/animal16.png)',
    ];
    var meigen_ransu = Math.floor(Math.random() * meigen.length);
    var elements = document.getElementsByClassName("drag-and-drop");

    //座標用の変数
    var x;
    var y;

    //マウスが要素内で押されたとき、又はタッチされたとき発動
    for (var i = 0; i < elements.length; i++) {
        elements[i].addEventListener("mousedown", mdown, false);
        elements[i].addEventListener("touchstart", mdown, false);
    }

    //ドラック&ドロップ マウスが押された際の関数
    function mdown(e) {

        this.classList.add("drag");

        if (e.type === "mousedown") {
            var event = e;
        } else {
            var event = e.changedTouches[0];
        }

        //要素内の相対座標を取得
        x = event.pageX - this.offsetLeft;
        y = event.pageY - this.offsetTop;

        //ムーブイベントにコールバック
        document.body.addEventListener("mousemove", mmove, false);
        document.body.addEventListener("touchmove", mmove, false);
    }

    //マウスカーソルが動いたときに発火
    function mmove(e) {

        //ドラッグしている要素を取得
        var drag = document.getElementsByClassName("drag")[0];

        //同様にマウスとタッチの差異を吸収
        if (e.type === "mousemove") {
            var event = e;
        } else {
            var event = e.changedTouches[0];
        }

        //フリックしたときに画面を動かさないようにデフォルト動作を抑制
        e.preventDefault();

        //マウスが動いた場所に要素を動かす
        drag.style.top = event.pageY - y + "px";
        drag.style.left = event.pageX - x + "px";

        //マウスボタンが離されたとき、またはカーソルが外れたとき発火
        drag.addEventListener("mouseup", mup, false);
        document.body.addEventListener("mouseleave", mup, false);
        drag.addEventListener("touchend", mup, false);
        document.body.addEventListener("touchleave", mup, false);

    }

    //マウスボタンが上がったら発火
    function mup(e) {
        var drag = document.getElementsByClassName("drag")[0];

        //ムーブベントハンドラの消去
        document.body.removeEventListener("mousemove", mmove, false);
        drag.removeEventListener("mouseup", mup, false);
        document.body.removeEventListener("touchmove", mmove, false);
        drag.removeEventListener("touchend", mup, false);

        //クラス名 .drag も消す
        drag.classList.remove("drag");
    }

    // テキストエリアにフォーカスをあてる
    text_input.focus();

    // 残り文字数8を表示
    label_num.innerText = LIMiT


    // 残り文字数を表示させる関数
    text_input.addEventListener('keyup', function() {
        var lavel_here;
        Name_result = this.value;

        // 残り文字数を表示させる
        lavel_here = label_num.innerText = LIMiT - Name_result.length;
        if (lavel_here < 5) {
            label_num.className = WARNING;
        } else {
            label_num.className = EMPTY;
        }

        // 文字数が０だとnullを返す
        if (Name_result.length === 0) {
            Name_result = RESET;
        }
    });


    // ニックネームの名前決定する時のボタン
    decision_Button.addEventListener('click', function() {
        var Confirmation_Yes_button = document.getElementById('Confirmation_Yes_button');
        var Confirmation_NO_button = document.getElementById('Confirmation_NO_button');

        // 入力値はnullの場合無効
        if (Name_result == RESET) {
            return;
        }

        // 空白だけの入力を無効
        if (Name_result.match(/^[ 　\r\n\t]*$/)) {
            return;
        }

        // 8文字超えると決定ボタンを押せない
        if (Name_result.length > LIMiT) {
            return;
        }

        // ニックネーム確認画面を表示
        mask.className = EMPTY;
        Confirmation_aria_name.innerText = 'ニックネーム：「' + Name_result + '」';

        // はい ボタン
        Confirmation_Yes_button.addEventListener('click', function() {
            text_input.className = NONE;
            mask.className = HIDDEN;
            left_Main_textAria.classList.remove(HIDDEN);


            // 空白だけの入力を無効
            if (Name_result.match(/^[ 　\r\n\t]*$/)) {
                return;
            }

            // はいを押された時、初期化ボタン意外すべてを無効
            if (text_input.className == NONE) {
                decision_Button.className = NONE;
                reset_Button.className = NONE;
                Initializatio_Button.className = EMPTY;
                NOKORIMOJI.className = HIDDEN;
            }
        });

        // いいえ ボタン
        Confirmati_NO_button.addEventListener('click', function() {
            mask.classList.add(HIDDEN);
        });
    });


    //ニックネームの入力をリセットするボタン//
    reset_Button.addEventListener('click', function() {
        Name_result = RESET;
        text_input.value = RESET;
        right_textAria.innerText = RESET;
        Confirmation_aria_name.innerText = RESET;

        // 残り文字数をリセット
        label_num.innerText = LIMiT;
        label_num.className = EMPTY;
    });


    // // 初期化ボタン
    // Initializatio_Button.addEventListener('click', function() {
    //     Name_result = RESET;
    //     text_input.value = RESET;
    //     right_textAria.innerText = RESET;
    //     Confirmation_aria_name.innerText = RESET;
    //     decision_Button.className = EMPTY;
    //     reset_Button.className = EMPTY;
    //     text_input.className = EMPTY;
    //     NOKORIMOJI.className = 'right';
    //     label_num.innerText = LIMiT;
    //     label_num.className = EMPTY;
    // });


    // 音楽再生
    const on_Music = document.getElementById('on_Music');
    const off_Mute = document.getElementById('off_Mute');
    var audio = new Audio();
    audio.src = "music/bgm_maoudamashii_8bit29.mp3";
    audio.src = "music/bgm_maoudamashii_8bit29.m4a";

    // 音楽の大きさ
    audio.volume = 0.2;

    //    ミュートボタン
    off_Mute.addEventListener('click', function() {
        audio.play();
        audio.loop = true;

        off_Mute.className = HIDDEN;
        on_Music.className = EMPTY;
    });
    // 再生ボタン
    on_Music.addEventListener('click', function() {
        audio.pause();
        audio.currentTime = 0;
        on_Music.className = HIDDEN;
        off_Mute.className = EMPTY;
    });


    // セパレート画面設定
    const left_Open = document.getElementById('left_Open');
    const left_Colose = document.getElementById('left_Colose');
    // 右画面を閉じて5：5の画面にする。
    left_Colose.addEventListener('click', function() {
        left_section.style.transform = EMPTY;
        left_section.style.width = '50%';
        right_section.style.width = '50%';
        left_Colose.className = HIDDEN;
        left_Open.className = EMPTY;
        slid_text_A.textContent = '「' + today_Input_Num1.value + '」' + 'やるの忘れてませんか？';
        slid_text_B.textContent = '「' + today_Input_Num2.value + '」' + 'の前に運動してる？';
        slid_text_C.textContent = '「' + today_Input_Num3.value + '」' + '越えろ５分の壁！';
        slid_text_D.textContent = 'ジョブズになったつもりで' + '「' + today_Input_Num4.value + '」' + 'やってみよう';
        slid_text_E.textContent = '「' + today_Input_Num5.value + '」' + '違うパターンでやってみる？';
        slid_text_F.textContent = '不安を書きだして見たら？' + '「' + today_Input_Num6.value + '」' + '良くなるかも';
        slid_text_G.textContent = '不安を書きだして見たら？' + '「' + today_Input_Num7.value + '」' + '良くなるかも';
    });

    // 右画面を大画面にする。
    left_Open.addEventListener('click', function() {
        left_section.style.transform = 'translate(' + -600 + 'px' + ',' + 0 + ')';
        left_section.style.width = '0';
        right_section.style.width = '99%';
        left_Colose.className = EMPTY;
        left_Open.className = HIDDEN;
        slid_text_A.textContent = '「' + today_Input_Num1.value + '」' + 'やるの忘れてませんか？';
        slid_text_B.textContent = '「' + today_Input_Num2.value + '」' + 'の前に運動してる？';
        slid_text_C.textContent = '「' + today_Input_Num3.value + '」' + '越えろ５分の壁！';
        slid_text_D.textContent = 'ジョブズになったつもりで' + '「' + today_Input_Num4.value + '」' + 'やってみよう';
        slid_text_E.textContent = '「' + today_Input_Num5.value + '」' + '違うパターンでやってみる？';
        slid_text_F.textContent = '不安を書きだして見たら？' + '「' + today_Input_Num6.value + '」' + '良くなるかも';
        slid_text_G.textContent = '不安を書きだして見たら？' + '「' + today_Input_Num7.value + '」' + '良くなるかも';
    });

    // 明日やるべき事リストを生成する
    const today_here = document.getElementById('today_here');
    const today_Button = document.getElementById('today_Button');

    var CC_moveNUM = 1;
    var diving_CC_moveNUM = 100;
    var input_Number = 0;
    var todayValue1;
    var todayValue2;
    var todayValue3;
    var todayValue4;
    var todayValue5;
    var todayValue6;
    var todayValue7;

    // 明日やるべき事リストを生成する
    function create_todaylist() {
        var i = 0;
        var li;
        var input;
        // ループで７個テキストエリアを生成
        for (i = 1; i < 8; i++) {
            li = document.createElement('li');
            input = document.createElement('input');
            input.type = 'text';
            input.id = 'today_Input_Num' + i;
            input.className = 'test_Num';
            input.maxLength = 20;
            li.textContent = i + ' ';
            li.classList.add('color', 'mb');
            li.appendChild(input);
            today_here.appendChild(li);
        }
    }
    create_todaylist()



    // キャラクターパッケージの画像を動かす
    function CC_move2() {
        if (CC_moveNUM < -8) {
            return CC_move();
        }
        CC_moveNUM--
        card_package3_CC.style.transform = 'rotatez(' + CC_moveNUM + 'deg)';
        setTimeout(function() {
            CC_move2();
        }, 80);
    }

    function CC_move() {
        if (CC_moveNUM > 8) {
            return CC_move2();
        }

        CC_moveNUM++
        card_package3_CC.style.transform = 'rotatez(' + CC_moveNUM + 'deg)';
        setTimeout(function() {
            CC_move();
        }, 80);
    }
    CC_move();


    // 今日やるべき事の決定ボタンを押された時に発動する関数
    today_Decision_buttoon.addEventListener('click', function() {
        // インプットテキストエリアに記入されていない場合、無効
        if (today_Input_Num1.value.length == 0) {
            return;
        }

        // 決定を押すと明日やるべきことの入力エリアを無効にする
        today_Decision_buttoon.className = NONE;
        today_reset_Button.className = HIDDEN;
        today_Input_Num1.className = NONE;
        today_Input_Num2.className = NONE;
        today_Input_Num3.className = NONE;
        today_Input_Num4.className = NONE;
        today_Input_Num5.className = NONE;
        today_Input_Num6.className = NONE;
        today_Input_Num7.className = NONE;

        // ７個ある中のインプットテキストに入力された個数を調べる
        if (today_Input_Num1.value.length > 0) {
            input_Number += 1;
        }

        if (today_Input_Num2.value.length > 0) {
            input_Number += 1;
        }

        if (today_Input_Num3.value.length > 0) {
            input_Number += 1;
        }

        if (today_Input_Num4.value.length > 0) {
            input_Number += 1;
        }

        if (today_Input_Num5.value.length > 0) {
            input_Number += 1;
        }

        if (today_Input_Num6.value.length > 0) {
            input_Number += 1;
        }

        if (today_Input_Num7.value.length > 0) {
            input_Number += 1;
        }
        // ◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆
        // 今日やるべき事７個入力されたら隠しカード追加
        if (input_Number > 6) {
            CC.push(
                'url(images/CC_10.png)',
                'url(images/CC_11.png)',
                'url(images/CC_12.png)',
                'url(images/CC_13.png)',
                'url(images/CC_14.png)',
                'url(images/CC_15.png)',
            )
        }
        // ７個ある中のインプットテキストに入力された値を代入
        todayValue1 = today_Input_Num1.value;
        todayValue2 = today_Input_Num2.value;
        todayValue3 = today_Input_Num3.value;
        todayValue4 = today_Input_Num4.value;
        todayValue5 = today_Input_Num5.value;
        todayValue6 = today_Input_Num6.value;
        todayValue7 = today_Input_Num7.value;

        console.log(input_Number);
        console.log(Name_result);
        console.log(todayValue1);
        // キリンを動かす
        kirin.classList.remove('transform');
        right_mask.classList.remove(HIDDEN);

        // カードにユーザーのニックネームを表示させる
        card_CC_name_JS.textContent = Name_result + 'さん';

        // キャラクター画像をランダムで出す
        var ransu = Math.floor(Math.random() * CC.length);
        console.log(ransu);

        // キリンのふきだしにユーザーのニックネームを表示させる
        USER_NAME.textContent = Name_result + 'さん';

        // カードのキャラクターの画像をランダムに変える
        card_package3_CC.style.background = CC[ransu];

        // カード 偉人の格言をカードのテキスト欄にのせる
        legend_packageBG2.textContent = legend_name[meigen_ransu];
        card_text_packageBG2_Main.textContent = meigen[meigen_ransu];

        // カード りんごのアイコンにやるべき数を表示
        ringo_icon_text.textContent = input_Number;


        const dekpon_icon = document.getElementById('dekpon_icon');
        // デコポンのアイコンボタン押したときに発動

        // リンゴのアイコンボタンを押したときに発動
        ringo_Button.addEventListener('click', function() {
            // ２回目のクリックは無効にするために、無効用のクラスを追加
            ringo_Button.classList.add('ringo_reset');


            diving_CC.style.background = CC[ransu] + 'no-repeat';
            diving_CC.style.width = '180px';
            diving_CC.style.height = '180px';
            diving_CC.classList.remove('Y_transform');
            ringo_Button.classList.remove('inhover');

            // 上から落ちてくるキャラクターを動かす
            function diving_CC_move() {
                if (diving_CC_moveNUM > 300) {
                    return diving_CC_move2()
                }
                diving_CC_moveNUM++
                // 右へ移動
                diving_CC.style.transform = ' translate(' + diving_CC_moveNUM + 'px' + ', 0)';

                setTimeout(function() {
                    diving_CC_move();
                }, 20);
            }
            // 左へ移動させる
            function diving_CC_move2() {
                if (diving_CC_moveNUM < -130) {
                    return diving_CC_move()
                }
                diving_CC_moveNUM--

                diving_CC.style.transform = ' translate(' + diving_CC_moveNUM + 'px' + ', 0)';

                setTimeout(function() {
                    diving_CC_move2();
                }, 20);
            }
            diving_CC_move2();
        });
    });


    // 今日やるべき事キリンさん自己紹介ページのSTARTを押したときに発動
    TODAY_INFO_START.addEventListener('click', function() {


        right_mask.classList.add(HIDDEN);
        right_background_base0.classList.remove('hidden');
        kirin.classList.add('transform');
        var interval;
        // カードを回転させる

        function rotation() {
            if (deg == 360) {
                return stopRotation;
            }
            deg += 6;
            right_background_base0.style.transform = 'rotateX(' + deg + 'deg)';
        }

        function startRotation() {
            interval = setInterval(rotation, 50);
        }
        startRotation();
        // カードをストップさせる
        function stopRotation() {
            clearInterval(startrRotation);
        }
    });

    // 今日やるべき事のインプットテキストの当値全てをnullにする
    today_reset_Button.addEventListener('click', function() {
        today_Input_Num1.value = RESET;
        today_Input_Num2.value = RESET;
        today_Input_Num3.value = RESET;
        today_Input_Num4.value = RESET;
        today_Input_Num5.value = RESET;
        today_Input_Num6.value = RESET;
        today_Input_Num7.value = RESET;
    });


    // ◆◆◆◆◆◆◆◆今日やるべきことエリアおわり



    // デコポンの画像をクリックするとやるきスイッチ（スライドショー）エリア出現
    dekpon_icon.addEventListener('click', function() {
        slidshow_Aria.classList.remove('Y_transform');
        left_section.style.transform = 'translate(' + -600 + 'px' + ',' + 0 + ')';
        left_section.style.width = '0';
        right_section.style.width = '99%';
        left_Colose.className = EMPTY;
        left_Open.className = HIDDEN;
        slid_text_A.textContent = '';
        slid_text_B.textContent = '';
        slid_text_C.textContent = '';
        slid_text_D.textContent = '';
        slid_text_E.textContent = '';
        slid_text_F.textContent = '';
    });


    // スライドショー系の変数
    const slidshow_Start = document.getElementById('slidshow_Start');
    const slmv = document.getElementById('slmv');
    var slidCount = 0;
    var slid_Move = ['slid_move0', 'slid_move1', 'slid_move2', 'slid_move3', 'slid_move4', 'slid_move5', 'slid_move6', 'slid_move7'];
    var tesbtn = document.getElementById('tesbtn');
    var slid_transform = document.getElementById('slid_transform');
    var slid_timer;
    // スライドショーを動かす
    function slid_show() {
        slid_transform.className = slid_Move[slidCount];
        if (slidCount >= slid_Move.length) {
            slidCount = 0;
        }
        slidCount++
        slid_timer = setTimeout(function() {
            slid_show();
        }, 2500);
    }

    // スライドショーのスタートボタン
    slidshow_Start.addEventListener('click', function() {
        // エリアのサイズを変え。不要な文字を消す
        slidshow_Aria.style.width = '40%';
        slidshow_Aria.style.height = '400px';
        slidshow_Start.classList.add('hidden');
        slidshow_Aria_list.classList.add('hidden');
        slidshow_Aria_list2.classList.add('hidden');
        slidshow_base.classList.add('slidshow_base');
        slid_A.classList.add('slid_card');
        slid_B.classList.add('slid_card');
        slid_C.classList.add('slid_card');
        slid_D.classList.add('slid_card');
        slid_E.classList.add('slid_card');
        slid_F.classList.add('slid_card');
        slid_show();

        // スライドショーに文字を表示させる
        slid_text_A.textContent = '「' + today_Input_Num1.value + '」' + 'やるの忘れてませんか？';
        slid_text_B.textContent = '「' + today_Input_Num2.value + '」' + 'の前に運動してる？';
        slid_text_C.textContent = '「' + today_Input_Num3.value + '」' + '越えろ５分の壁！';
        slid_text_D.textContent = 'ジョブズになったつもりで' + '「' + today_Input_Num4.value + '」' + 'やってみよう';
        slid_text_E.textContent = '「' + today_Input_Num5.value + '」' + '違うパターンでやってみる？';
        slid_text_F.textContent = '不安を書きだして見たら？' + '「' + today_Input_Num6.value + '」' + '良くなるかも';
        slid_text_G.textContent = '不安を書きだして見たら？' + '「' + today_Input_Num7.value + '」' + '良くなるかも';
    });

    // スライドショーを閉じるボタン
    var slid_decoration = document.getElementById('slid_decoration');
    slidshow_close.addEventListener('click', function() {
        slidCount = 0;
        clearTimeout(slid_timer);
        slidshow_Aria.style.width = '50%';
        slidshow_Aria.style.height = '300px';
        // スライドショー画面削除
        slidshow_base.classList.remove('slidshow_base');
        slidshow_Aria_list.classList.remove('hidden');
        slidshow_Aria_list2.classList.remove('hidden');
        slidshow_Aria.classList.add('Y_transform');
        // 画面を半分にする
        left_section.style.transform = EMPTY;
        left_section.style.width = '50%';
        right_section.style.width = '50%';
        left_Colose.className = HIDDEN;
        left_Open.className = EMPTY;
        // スライドショーのカードを消す
        slidshow_Start.classList.remove('hidden');
        slid_A.classList.remove('slid_card');
        slid_B.classList.remove('slid_card');
        slid_C.classList.remove('slid_card');
        slid_D.classList.remove('slid_card');
        slid_E.classList.remove('slid_card');
        slid_F.classList.remove('slid_card');
        slid_D.classList.remove('slid_card');
        slid_transform.className = 'trans0';
    });



    // ◆◆◆◆◆◆◆◆明日やるべきことエリア始まり
    const tomorrow_here = document.getElementById('tomorrow_here');
    const tomorrow = document.getElementById('tomorrow_Button');
    // キャラクターを揺らす
    var tomorrow_input_Number = 0;
    var tomorrowValue1;
    var tomorrowValue2;
    var tomorrowValue3;
    var tomorrowValue4;
    var tomorrowValue5;
    var tomorrowValue6;
    var tomorrowValue7;


    function create_tomorrowlist() {
        var i = 0;
        var li;
        var input;

        for (i = 1; i < 8; i++) {

            li = document.createElement('li');
            input = document.createElement('input');

            input.type = 'text';
            input.id = 'tomorrow_Input_Num' + i;
            input.maxLength = 20;
            li.textContent = i + ' ';
            li.classList.add('color', 'mb');
            li.appendChild(input);
            tomorrow_here.appendChild(li);
        }

    }
    create_tomorrowlist()


    // 決定ボタンを押された時に発動する関数
    tomorrow_Decision_butoon.addEventListener('click', () => {
        // インプットテキストエリアに記入されていない場合、無効
        if (tomorrow_Input_Num1.value.length == 0) {
            return;
        }

        // ７個ある中のインプットテキストに入力された個数を調べる
        if (tomorrow_Input_Num1.value.length > 0) {
            tomorrow_input_Number += 1;
        }

        if (tomorrow_Input_Num2.value.length > 0) {
            tomorrow_input_Number += 1;
        }

        if (tomorrow_Input_Num3.value.length > 0) {
            tomorrow_input_Number += 1;
        }

        if (tomorrow_Input_Num4.value.length > 0) {
            tomorrow_input_Number += 1;
        }

        if (tomorrow_Input_Num5.value.length > 0) {
            tomorrow_input_Number += 1;
        }

        if (tomorrow_Input_Num6.value.length > 0) {
            tomorrow_input_Number += 1;
        }

        if (tomorrow_Input_Num7.value.length > 0) {
            tomorrow_input_Number += 1;
        }
        // ◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆


        // ７個ある中のインプットテキストに入力された個数を代入
        tomorrowValue1 = tomorrow_Input_Num1.value;
        tomorrowValue2 = tomorrow_Input_Num2.value;
        tomorrowValue3 = tomorrow_Input_Num3.value;
        tomorrowValue4 = tomorrow_Input_Num4.value;
        tomorrowValue5 = tomorrow_Input_Num5.value;
        tomorrowValue6 = tomorrow_Input_Num6.value;
        tomorrowValue7 = tomorrow_Input_Num7.value;

        console.log(tomorrow_input_Number);


        // キリンを動かす
        kirin.classList.remove('transform');
        tomorrow_mask.classList.remove(HIDDEN);


        // 決定を押すと明日やるべきことの入力エリアを無効にする
        tomorrow_Decision_butoon.className = NONE;
        tomorrow_reset_Button.className = HIDDEN;
        tomorrow_Input_Num1.className = NONE;
        tomorrow_Input_Num2.className = NONE;
        tomorrow_Input_Num3.className = NONE;
        tomorrow_Input_Num4.className = NONE;
        tomorrow_Input_Num5.className = NONE;
        tomorrow_Input_Num6.className = NONE;
        tomorrow_Input_Num7.className = NONE;
    });



    tomorrow_reset_Button.addEventListener('click', function() {
        tomorrow_Input_Num1.value = RESET;
        tomorrow_Input_Num2.value = RESET;
        tomorrow_Input_Num3.value = RESET;
        tomorrow_Input_Num4.value = RESET;
        tomorrow_Input_Num5.value = RESET;
        tomorrow_Input_Num6.value = RESET;
        tomorrow_Input_Num7.value = RESET;
    });

    // 明日やるべき事キリンさん自己紹介ページのSTARTを押したときに発動
    TOMORROW_INFO_START.addEventListener('click', function() {
        tomorrow_mask.classList.add(HIDDEN);
        kirin.classList.add('transform');

        var kaguRansu = Math.floor(Math.random() * animal_KAGU.length);
        animal_kagu1.classList.remove(HIDDEN);
        animal_kagu2.classList.remove(HIDDEN);
        animal_kagu3.classList.remove(HIDDEN);

        // 乱数でアバターの画像がランダムで決まる
        animal_kagu1.style.background = animal_KAGU[tomorrow_input_Number];
        animal_kagu2.style.background = animal_KAGU[kaguRansu];
        animal_kagu3.style.background = animal_KAGU[Name_result.length];
    });
})();