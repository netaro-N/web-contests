(function () {
  'use strict';
  // HTML の要素
  const titleDivided = document.getElementById('title-area');
  const practiceTopRadio = document.getElementById('practice-top');
  const practiceMiddleRadio = document.getElementById('practice-middle');
  const practiceBottomRadio = document.getElementById('practice-bottom');
  const displayKeyboardCheckbox = document.getElementById('display-keyboard');
  const practiceButton = document.getElementById('practice');
  const startButton = document.getElementById('start');
  const displaySentenceDivided = document.getElementById('display-sentence-area');
  const keyboardDivided = document.getElementById('keyboard-area');
  const fingerDivided = document.getElementById('finger-area');
  const flashDivided = document.getElementById('flash-area');
  const resultDivided = document.getElementById('result-area');
  const resultSentenceDivided = document.getElementById('result-sentence-area');
  const tweetDivided = document.getElementById('tweet-area');
  const reloadButton = document.getElementById('reload');

  let isPractice = null; // 練習か
  let isDisplayKeyboard = null; // キーボードを表示するか
  let isDisplayedGameScreen = false; // ゲーム画面を表示したか
  let counter = 3; // カウンター
  let countDown = null; // カウントダウンの繰り返し処理
  let isCounted = false; // カウントダウンしたか
  let isStarted = false; // ゲームをスタートしたか
  let isEnded = false; // ゲームを終了したか

  let startTime = null; // ゲームをスタートした時間

  let kanji = ''; // 漢字
  let roman = ''; // ローマ字
  let typedRoman = ''; // タイプしたローマ字
  let typeChar = ''; // タイプする文字
  let resultSentence = ''; // 結果に表示する文

  let noDuplicationRandomNumbers = []; // 重複なしの乱数
  const practiceLength = 10; // 練習する文字数
  let inputedLength = 0; // 入力した文字数
  let passedLength = 0; // 正解した文字数
  let totalProblemNumber = null; // 合計の問題数
  let currentProblemNumber = 0; // 現在の問題数

  let typeCharId = null; // タイプする文字の id
  let fingerUseToType = null; // タイプに使う指

  let isMissTyped = false; // ミスタイプしたか
  let missTypeNumber = 0; // ミスタイプ数
  let flashOpacity = 0; // フラッシュの不透明度
  let flash = null; // フラッシュの処理

  const topKeys = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p']; // 上段のキー
  const middleKeys = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l']; // 中段のキー
  const bottomKeys = ['z', 'x', 'c', 'v', 'b', 'n', 'm']; // 下段のキー
  let practiceKeys = []; // 練習に使うキー

  // タイピングに使用する文
  const sentences = [
    {
      kanji: '猿も木から落ちる',
      roman: 'sarumokikaraotiru'
    },
    {
      kanji: 'かわいい子には旅をさせよ',
      roman: 'kawaiikonihatabiwosaseyo'
    },
    {
      kanji: '三日坊主',
      roman: 'mikkabouzu'
    },
    {
      kanji: '塵も積もれば山となる',
      roman: 'tirimotumorebayamatonaru'
    },
    {
      kanji: '切磋琢磨',
      roman: 'sessatakuma'
    },
    {
      kanji: '猫に小判',
      roman: 'nekonikobann'
    },
    {
      kanji: '覆水盆に返らず',
      roman: 'hukusuibonnnikaerazu'
    },
    {
      kanji: '能ある鷹は爪を隠す',
      roman: 'nouarutakahatumewokakusu'
    },
    {
      kanji: '類は友を呼ぶ',
      roman: 'ruihatomowoyobu'
    },
    {
      kanji: '知らぬが仏',
      roman: 'siranugahotoke'
    },
    {
      kanji: '棚から牡丹餅',
      roman: 'tanakarabotamoti'
    },
    {
      kanji: '笑う門には福来る',
      roman: 'waraukadonihahukukitaru'
    },
    {
      kanji: '蒔かぬ種は生えぬ',
      roman: 'makanutanehahaenu'
    },
    {
      kanji: '災い転じて福となす',
      roman: 'wazawaitennzitehukutonasu'
    },
    {
      kanji: 'どんぐりの背比べ',
      roman: 'donngurinoseikurabe'
    },
    {
      kanji: '聞くは一時の恥、聞かぬは一生の恥',
      roman: 'kikuhaitizinohazi,kikanuhaissyounohazi'
    },
    {
      kanji: '楽は苦の種 苦は楽の種',
      roman: 'rakuhakunotanekuharakunotane'
    },
    {
      kanji: '横槍を入れる',
      roman: 'yokoyariwoireru'
    },
    {
      kanji: '焼け石に水',
      roman: 'yakeisinimizu'
    },
    {
      kanji: '薮から棒',
      roman: 'yabukarabou'
    },
    {
      kanji: '急がばまわれ',
      roman: 'isogabamaware'
    },
    {
      kanji: '初心忘るべからず',
      roman: 'syosinnwasurubekarazu'
    },
    {
      kanji: '井の中の蛙大海を知らず',
      roman: 'inonakanokawazutaikaiwosirazu'
    },
    {
      kanji: '馬の耳に念仏',
      roman: 'umanomimininennbutu'
    },
    {
      kanji: '千里の道も一歩から',
      roman: 'sennrinomitimoippokara'
    },
    {
      kanji: '犬も歩けは棒にあたる',
      roman: 'inumoarukebabouniataru'
    },
    {
      kanji: '好きこそ物の上手なれ',
      roman: 'sukikosomononozyouzunare'
    },
    {
      kanji: '親しき仲にも礼儀あり',
      roman: 'sitasikinakanimoreigiari'
    },
    {
      kanji: '一銭を笑う者は一銭に泣く',
      roman: 'issennwowaraumonohaissennninaku'
    },
    {
      kanji: 'とらぬたぬきの皮算用',
      roman: 'toranutanukinokawazannyou'
    },
    {
      kanji: '三つ子の魂百まで',
      roman: 'mitugonotamasiihyakumade'
    },
    {
      kanji: '二兎を追う者は一兎をも得ず',
      roman: 'nitowooumonohaittowomoezu'
    },
    {
      kanji: '出る杭は打たれる',
      roman: 'derukuihautareru'
    },
    {
      kanji: '悪銭身につかず',
      roman: 'akusennminitukazu'
    },
    {
      kanji: 'かっぱの川流れ',
      roman: 'kappanokawanagare'
    },
    {
      kanji: '石橋をたたいて渡る',
      roman: 'isibasiwotataitewataru'
    },
    {
      kanji: '善は急げ',
      roman: 'zennhaisoge'
    },
    {
      kanji: '急いては事をしそんじる',
      roman: 'seitehakotowosisonnziru'
    },
    {
      kanji: '三人寄れはもんじゅの知恵',
      roman: 'sannninnyorebamonnzyunotie'
    },
    {
      kanji: '大は小をかねる',
      roman: 'daihasyouwokaneru'
    },
    {
      kanji: '馬子にも衣装',
      roman: 'magonimoisyou'
    },
    {
      kanji: 'たで食う虫も好き好き',
      roman: 'tadekuumusimosukizuki'
    },
    {
      kanji: '腹が減っては戦ができぬ',
      roman: 'haragahettehaikusagadekinu'
    },
    {
      kanji: '鉄は熱いうちに打て',
      roman: 'tetuhaatuiutiniute'
    },
    {
      kanji: '朱に交われば赤くなる',
      roman: 'syunimaziwarebaakakunaru'
    },
    {
      kanji: '縁の下の力持ち',
      roman: 'ennnositanotikaramoti'
    },
    {
      kanji: '身から出たさび',
      roman: 'mikaradetasabi'
    },
    {
      kanji: '水と油',
      roman: 'mizutoabura'
    },
    {
      kanji: '嘘つきは泥棒の始まり',
      roman: 'usotukihadorobounohazimari'
    },
    {
      kanji: '案ずるより産むがやすし',
      roman: 'annzuruyoriumugayasusi'
    },
    {
      kanji: '後は野となれ山となれ',
      roman: 'atohanotonareyamatonare'
    },
    {
      kanji: 'ふんだりけったり',
      roman: 'hunndarikettari'
    },
    {
      kanji: '思い立ったが吉日',
      roman: 'omoitattagakitizitu'
    },
    {
      kanji: '虫のいどころが悪い',
      roman: 'musinoidokorogawarui'
    },
    {
      kanji: '石の上にも三年',
      roman: 'isinouenimosannnenn'
    },
    {
      kanji: '早起きは三文の徳',
      roman: 'hayaokihasannmonnnotoku'
    },
    {
      kanji: '背に腹はかえられぬ',
      roman: 'seniharahakaerarenu'
    },
    {
      kanji: '雨ふって地固まる',
      roman: 'amehuttezikatamaru'
    },
    {
      kanji: '医者の不養生',
      roman: 'isyanohuyouzyou'
    },
    {
      kanji: 'きじも鳴かずばうたれまい',
      roman: 'kizimonakazubautaremai'
    },
    {
      kanji: '海老で鯛を釣る',
      roman: 'ebidetaiwoturu'
    },
    {
      kanji: '親の七光り',
      roman: 'oyanonanahikari'
    },
    {
      kanji: '光陰矢のごとし',
      roman: 'kouinnyanogotosi'
    },
    {
      kanji: '一寸先は闇',
      roman: 'issunnsakihayami'
    },
    {
      kanji: '一寸の虫にも五分の魂',
      roman: 'issunnnomusinimogobunotamasii'
    },
    {
      kanji: 'うわさをすれば影',
      roman: 'uwasawosurebakage'
    },
    {
      kanji: '鬼に金棒',
      roman: 'oninikanabou'
    },
    {
      kanji: 'かえるの子はかえる',
      roman: 'kaerunokohakaeru'
    },
    {
      kanji: '弘法にも筆の誤り',
      roman: 'koubounimohudenoayamari'
    },
    {
      kanji: '枯れ木も山のにぎわい',
      roman: 'karekimoyamanonigiwai'
    },
    {
      kanji: '触らぬ神にたたりなし',
      roman: 'sawaranukaminitatarinasi'
    },
    {
      kanji: '鬼の目にも涙',
      roman: 'oninomenimonamida'
    },
    {
      kanji: '親の心子知らず',
      roman: 'oyanokokorokosirazu'
    },
    {
      kanji: '木を見て森を見ず',
      roman: 'kiwomitemoriwomizu'
    },
    {
      kanji: '住めば都',
      roman: 'sumebamiyako'
    },
    {
      kanji: '転ばぬ先の杖',
      roman: 'korobanusakinotue'
    },
    {
      kanji: '臭い物にふたをする',
      roman: 'kusaimononihutawosuru'
    },
    {
      kanji: '口はわざわいの元',
      roman: 'kutihawazawainomoto'
    },
    {
      kanji: '亀の甲より年の功',
      roman: 'kamenokouyoritosinokou'
    },
    {
      kanji: 'おぼれる者はわらをもつかむ',
      roman: 'oborerumonohawarawomotukamu'
    },
    {
      kanji: '帯に短したすきに長し',
      roman: 'obinimizikasitasukininagasi'
    },
    {
      kanji: 'とらの威を借るきつね',
      roman: 'toranoiwokarukitune'
    },
    {
      kanji: '長い物には巻かれよ',
      roman: 'nagaimononihamakareyo'
    },
    {
      kanji: '年寄りの冷や水',
      roman: 'tosiyorinohiyamizu'
    },
    {
      kanji: '立つ鳥あとをにごさず',
      roman: 'tatutoriatowonigosazu'
    },
    {
      kanji: 'ぬかにくぎ',
      roman: 'nukanikugi'
    },
    {
      kanji: 'とうふにかすがい',
      roman: 'touhunikasugai'
    },
    {
      kanji: '飛んで火にいる夏の虫',
      roman: 'tonndehiniirunatunomusi'
    },
    {
      kanji: '泣きっ面にはち',
      roman: 'nakitturanihati'
    },
    {
      kanji: '備えあればうれいなし',
      roman: 'sonaearebaureinasi'
    },
    {
      kanji: '時は金なり',
      roman: 'tokihakanenari'
    },
    {
      kanji: 'とびがたかを生む',
      roman: 'tobigatakawoumu'
    },
    {
      kanji: '憎まれっ子世にはばかる',
      roman: 'nikumarekkoyonihabakaru'
    },
    {
      kanji: '七転び八起き',
      roman: 'nanakorobiyaoki'
    },
    {
      kanji: 'ぶたに真珠',
      roman: 'butanisinnzyu'
    },
    {
      kanji: 'のれんに腕押し',
      roman: 'norennniudeosi'
    },
    {
      kanji: '情けは人のためならず',
      roman: 'nasakehahitonotamenarazu'
    },
    {
      kanji: 'のどもと過ぎれば熱さを忘れる',
      roman: 'nodomotosugirebaatusawowasureru'
    },
    {
      kanji: 'ない袖は振れぬ',
      roman: 'naisodehahurenu'
    },
    {
      kanji: 'ぬれ手に粟',
      roman: 'nureteniawa'
    },
    {
      kanji: '人のうわさも七十五日',
      roman: 'hitonouwasamositizyuugoniti'
    },
    {
      kanji: '念には念を入れよ',
      roman: 'nennnihanennwoireyo'
    },
    {
      kanji: '火のない所に煙は立たぬ',
      roman: 'hinonaitokoronikemurihatatanu'
    },
    {
      kanji: 'ひょうたんから駒が出る',
      roman: 'hyoutannkarakomagaderu'
    },
    {
      kanji: '百聞は一見にしかず',
      roman: 'hyakubunnhaikkennnisikazu'
    },
    {
      kanji: '花より団子',
      roman: 'hanayoridanngo'
    },
    {
      kanji: '人のふり見て我がふり直せ',
      roman: 'hitonohurimitewagahurinaose'
    },
    {
      kanji: '骨折り損のくたびれもうけ',
      roman: 'honeorizonnnokutabiremouke'
    },
    {
      kanji: '桃栗三年柿八年',
      roman: 'momokurisannnennkakihatinenn'
    },
    {
      kanji: '柳の下のどじょう',
      roman: 'yanaginositanodozyou'
    },
    {
      kanji: '仏の顔も三度まで',
      roman: 'hotokenokaomosanndomade'
    },
    {
      kanji: '安物買いの銭失い',
      roman: 'yasumonogainozeniusinai'
    },
    {
      kanji: '弱り目にたたり目',
      roman: 'yowarimenitatarime'
    },
    {
      kanji: '楽あれば苦あり',
      roman: 'rakuarebakuari'
    },
    {
      kanji: '論より証拠',
      roman: 'ronnyorisyouko'
    },
    {
      kanji: '待てば海路の日和あり',
      roman: 'matebakaironohiyoriari'
    },
    {
      kanji: '渡る世間に鬼はなし',
      roman: 'watarusekennnionihanasi'
    },
    {
      kanji: '渡りに船',
      roman: 'watarinihune'
    },
    {
      kanji: '良薬は口に苦し',
      roman: 'ryouyakuhakutininigasi'
    }
  ];

  /**
   * 指定された最小値と最大値の間の整数値の乱数を取得する関数
   * @param {number} min - 最小値
   * @param {number} max - 最大値 + 1
   * @return {number} 最小値と最大値の間の整数値の乱数
   */
  function getRandom(min, max) {
    let random = Math.floor(Math.random() * (max - min)) + min; // 乱数を取得する

    return random; // 取得した乱数を返す
  }

  /**
   * 指定された最小値と最大値の間の整数値の乱数を、指定された回数重複なしで取得する関数
   * @param {number} times - 乱数を取得する回数
   * @param {number} min - 最小値
   * @param {number} max - 最大値 + 1
   * @return {Array.<number>} 重複なしの乱数の配列
   */
  function getRandomNumberWithoutDuplication(times, min, max) {
    let randoms = []; // 乱数

    // 指定された回数乱数を取得する
    for (let i = 0; i < times; i++) {
      randoms[i] = getRandom(min, max);
    }

    for (let i = 1; i < randoms.length; i++) {
      for (let j = 0; j < i; j++) {
        while (randoms[i] === randoms[j]) {
          // 乱数が重複していたら新たに乱数を取得する
          randoms[i] = getRandom(min, max);
          j = 0;
        }
      }
    }

    return randoms; // 取得した乱数の配列を返す
  }

  // ゲーム画面を表示する関数
  function displayGameScreen() {
    isDisplayedGameScreen = true; // ゲーム画面を表示した変数を true にする
    isDisplayKeyboard = displayKeyboardCheckbox.checked; // チェックボックスの状態に応じてキーボードを表示するか決める

    // タイトル画面を非表示にする
    titleDivided.className = 'hidden';
    // ゲームの要素を表示する
    displaySentenceDivided.className = 'display-sentence-area';
    flashDivided.className = 'flash-area';
    if (isDisplayKeyboard) {
      // キーボードの表示がオンの時の処理
      keyboardDivided.className = 'keyboard-area';
      fingerDivided.className = 'finger-area';
    }

    displaySentenceDivided.innerHTML = '<span class="big">Space キーを押してね！</span>'; // Space キーを押すように促す
  }

  // キーボードの表示を更新する関数
  function updateKeyboard() {
    let typeCharIdString = typeChar; // タイプする文字の id 用の文字列
    // タイプする文字が特定の文字の場合、id 用の文字列を変更する
    switch (typeChar) {
      case '-':
        typeCharIdString = 'hyphen';
        break;
      case '@':
        typeCharIdString = 'at-sign';
        break;
      case ';':
        typeCharIdString = 'semicolon';
        break;
      case ':':
        typeCharIdString = 'colon';
        break;
      case ',':
        typeCharIdString = 'comma';
        break;
      case '.':
        typeCharIdString = 'period';
        break;
      case '/':
        typeCharIdString = 'slash';
        break;
    }
    // キーボードのタイプする文字の色を変える
    typeCharId = document.getElementById(`key-${typeCharIdString}`);
    typeCharId.style.backgroundColor = '#dc493a';
    typeCharId.style.color = '#e0ffff';

    // タイプする文字に応じて使う指を決める
    switch (typeChar) {
      case '1':
      case 'q':
      case 'a':
      case 'z':
        fingerUseToType = document.getElementById('left-little-finger');
        break;
      case '2':
      case 'w':
      case 's':
      case 'x':
        fingerUseToType = document.getElementById('left-ring-finger');
        break;
      case '3':
      case 'e':
      case 'd':
      case 'c':
        fingerUseToType = document.getElementById('left-middle-finger');
        break;
      case '4':
      case '5':
      case 'r':
      case 't':
      case 'f':
      case 'g':
      case 'v':
      case 'b':
        fingerUseToType = document.getElementById('left-index-finger');
        break;
      case '6':
      case '7':
      case 'y':
      case 'u':
      case 'h':
      case 'j':
      case 'n':
      case 'm':
        fingerUseToType = document.getElementById('right-index-finger');
        break;
      case '8':
      case 'i':
      case 'k':
      case ',':
        fingerUseToType = document.getElementById('right-middle-finger');
        break;
      case '9':
      case 'o':
      case 'l':
      case '.':
        fingerUseToType = document.getElementById('right-ring-finger');
        break;
      case '0':
      case '-':
      case 'p':
      case '@':
      case ';':
      case ':':
      case '/':
        fingerUseToType = document.getElementById('right-little-finger');
        break;
    }
    fingerUseToType.style.backgroundColor = '#dc493a'; // 使う指の色を変える
  }

  // タイプする文を表示する関数
  function displaySentence() {
    displaySentenceDivided.innerHTML = `<h1>${kanji}</h1>
    <br><span class="typed-roman">${typedRoman}</span><span class="roman">${roman}</span>`;

    typeChar = roman.charAt(0); // ローマ字の最初の文字をタイプする文字にする

    // キーボードの表示がオンの時はキーボードの表示を更新する
    if (isDisplayKeyboard) {
      updateKeyboard();
    }
  }

  // 結果を表示する関数
  function displayResult() {
    const endTime = new Date().getTime(); // 終了した時間

    // ゲームの要素を非表示にする
    displaySentenceDivided.className = 'hidden';
    keyboardDivided.className = 'hidden';
    fingerDivided.className = 'hidden';
    flashDivided.className = 'hidden';
    // 結果の領域を表示する
    resultDivided.className = 'result-area';

    const oneSecond = 1000; // 1秒
    const oneMinute = 60; // 1分
    const secondDecimalPlace = 100; // 小数第二位

    const duration = (endTime - startTime) / oneSecond; // 入力にかかった秒数
    let wordsPerMinute = inputedLength * oneMinute / duration; // 1 分あたりのタイプ数
    let correctTypeRate = passedLength / inputedLength; // 正答率
    const correctTypeRateExponent = 3; // 正答率の冪指数
    const score = Math.round(wordsPerMinute * (correctTypeRate ** correctTypeRateExponent)); // スコア

    // 1 分あたりのタイプ数を小数第二位で四捨五入
    wordsPerMinute = Math.round(wordsPerMinute * secondDecimalPlace) / secondDecimalPlace;
    // 正答率を 100 倍して、小数第二位で四捨五入
    correctTypeRate = Math.round(correctTypeRate * secondDecimalPlace * secondDecimalPlace) / secondDecimalPlace;

    // 結果の表示エリアの作成
    const resultParagraph = document.createElement('p'); // p タグを作る
    // 結果を変数に定義する
    const result = `<h1>結果</h1>
    スコア:${score}点
    <br>所要時間:${duration}秒
    <br>入力文字数:${inputedLength}文字
    <br>ミスタイプ数:${missTypeNumber}回
    <br>ＷＰＭ:${wordsPerMinute}文字
    <br>正答率:${correctTypeRate}％`
    resultParagraph.innerHTML = result; // 結果を p タグに挿入する
    resultDivided.appendChild(resultParagraph); // 結果を表示する
    resultSentenceDivided.innerHTML = resultSentence; // タイプした文を表示する

    // ツイートエリアの作成
    const tweetAnchor = document.createElement('a'); // a タグを作る
    const hrefValue = 'https://twitter.com/intent/tweet?button_hashtag=miifriendsTyping&ref_src=twsrc%5Etfw'; // href 属性の値
    tweetAnchor.setAttribute('href', hrefValue); // href 属性を追加
    tweetAnchor.className = 'twitter-hashtag-button'; // クラスを追加
    const tweetContent = `今回のスコアは ${score} 点でした。`; // ツイートする内容
    tweetAnchor.setAttribute('data-text', tweetContent); // data-text 属性を追加
    tweetAnchor.setAttribute('data-show-count', false); // data-show-count 属性を追加
    tweetAnchor.innerText = 'Tweet #miifriendsTyping'; // ツイートボタンに表示するテキスト
    tweetDivided.appendChild(tweetAnchor); // ツイートボタンを表示する

    twttr.widgets.load(); // widgets.js スクリプトを実行
  }

  // タイプする文を上書きする関数
  function updateSentence() {
    currentProblemNumber++; // 現在の問題数をインクリメントする
    // 現在の問題数が合計問題数より大きい時は結果を表示する
    if (totalProblemNumber < currentProblemNumber) {
      isEnded = true; // 終了した変数を true にする

      displayResult(); // 結果を表示する
      return;
    }

    if (isPractice) {
      // 練習の時の処理
      // 乱数を取得してローマ字変数にローマ字を追加する処理を繰り返す
      for (let i = 0; i < practiceLength; i++) {
        let randomKey = getRandom(0, practiceKeys.length);
        roman += practiceKeys[randomKey];
      }
    } else {
      let randomSentence = noDuplicationRandomNumbers[currentProblemNumber - 1]; // 重複なしの乱数を代入する

      // タイプする文の漢字とローマ字をそれぞれ変数に代入する
      kanji = sentences[randomSentence].kanji;
      roman = sentences[randomSentence].roman;

      resultSentence += `<p>${kanji}<br>${roman}</p>`; // 結果に表示する文に今回の文を足す
    }
    typedRoman = ''; // タイプしたローマ字を空にする

    displaySentence(); // タイプする文を表示する
  }

  // カウントダウンする関数
  function count() {
    if (counter <= 0) {
      // カウンターが 0 以下の時の処理
      isStarted = true; // ゲームをスタートした変数を true にする
      startTime = new Date().getTime(); // ゲームをスタートした時間を代入する

      clearInterval(countDown); // カウントダウンの関数の繰り返しを終了する
      updateSentence(); // ゲームをスタートする
      return;
    }

    // カウンターを表示してから、デクリメントする
    displaySentenceDivided.innerHTML = `<span class="big">${counter}</span>`;
    counter--
  }

  // フラッシュの不透明度を変える関数
  function updateFlashOpacity() {
    // フラッシュの不透明度が 0 以下になったら終了する
    if (flashOpacity <= 0) {
      clearInterval(flash);
      flash = null;
      return;
    }

    // フラッシュの不透明度を変える
    flashDivided.style.opacity = flashOpacity;
    flashOpacity -= 0.1;
  }

  // 練習ボタンをクリックした時に実行する関数
  practiceButton.onclick = () => {
    isPractice = true; // 練習かどうかの変数を true にする
    totalProblemNumber = 5; // 合計の問題数を 5 にする

    // チェックを付けた場所に応じて練習に使うキーを変える
    if (practiceTopRadio.checked) {
      practiceKeys = topKeys;
    } else if (practiceMiddleRadio.checked) {
      practiceKeys = middleKeys;
    } else if (practiceBottomRadio.checked) {
      practiceKeys = bottomKeys;
    }
    displayGameScreen(); // ゲーム画面を表示する
  };

  // 本番ボタンをクリックした時に実行する関数
  startButton.onclick = () => {
    isPractice = false; // 練習かどうかの変数を false にする
    totalProblemNumber = 15; // 合計の問題数を 15 にする
    noDuplicationRandomNumbers = getRandomNumberWithoutDuplication(totalProblemNumber, 0, sentences.length); // 重複なしの乱数を取得する

    displayGameScreen(); // ゲーム画面を表示する
  };

  // 再読み込みボタンをクリックした時に実行する関数
  reloadButton.onclick = () => {
    location.reload(); // ページを再読み込みする
  };

  /**
   * 何かキーが押された時に実行する関数
   * @param {KeyboardEvent} event - 押されたキー
   */
  document.body.onkeydown = (event) => {
    // ゲーム画面を表示する前と終了した後は何もしない
    if (!isDisplayedGameScreen || isEnded) {
      return;
    }

    if (event.key === ' ') {
      // Space キーが押された時の処理
      event.preventDefault(); // Space キーでの画面スクロールをキャンセルする
      if (!isCounted) {
        // カウントダウンしてない時の処理
        isCounted = true; // カウントダウンした変数を true にする

        // カウントダウンの関数を繰り返し実行する
        count();
        countDown = setInterval(count, 1000);
      }
    }

    // スタートする前はこれ以降の処理を実行しない
    if (!isStarted) {
      return;
    }

    if (event.key === typeChar) {
      // 正解した時の処理
      inputedLength++; // 入力した文字数をインクリメントする
      if (!isMissTyped) {
        // 間違えていなければ正解した文字数をインクリメントする
        passedLength++;
      }
      isMissTyped = false; // 間違えた変数を false にする

      // タイプした文字をタイプしたローマ字変数に移す
      typedRoman += typeChar;
      roman = roman.slice(1);

      // キーボードの表示がオンの時は色をリセットする
      if (isDisplayKeyboard) {
        typeCharId.style.backgroundColor = '#e0ffff';
        typeCharId.style.color = '#0d1321';
        fingerUseToType.style.backgroundColor = '#cbd0b9';
      }

      // ローマ字の長さが 0 になったらタイプする文を上書きする
      if (roman.length === 0) {
        updateSentence();
        return;
      }

      displaySentence(); // タイプする文を表示する
    } else {
      // 間違えた時の処理
      missTypeNumber++; // ミスタイプ数をインクリメントする
      isMissTyped = true; // 間違えた変数を true にする

      flashOpacity = 0.5; // フラッシュの不透明度を 0.5 にする
      // フラッシュの処理が実行中の時はそれを終了させる
      if (flash !== null) {
        clearInterval(flash);
      }
      // フラッシュさせる
      updateFlashOpacity();
      flash = setInterval(updateFlashOpacity, 50);
    }
  };
})();
