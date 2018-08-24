(function () {
  'use strict';
  var trainingMin = document.getElementById('id_trainingMin');
  var trainingSec = document.getElementById('id_trainingSec');
  var restMin = document.getElementById('id_restMin');
  var restSec = document.getElementById('id_restSec');
  var setTimes = document.getElementById('id_setTimes');
  var startTimer = document.getElementById('startTimer');
  var stopTimer = document.getElementById('stopTimer');
  var resetTimer = document.getElementById('resetTimer');
  var goSettings = document.getElementById('goSettings');
  var goSettings2 = document.getElementById('goSettings2');

  var startTime = null; //スタートボタン押下時の時刻を取得
  var startRestTime = null; //インターバル時間の開始時刻を取得
  var remainTrainingTime = 0;　//トレーニングの残り時間表示用
  var remainRestTime = 0; //インターバルの残り時間表示用
  var timerId = null; //clearTimeoutの引数として（トレーニング）
  var timerId2 = null; //clearTimeoutの引数として（インターバル）

  var trainingTime; //入力したトレーニング時間（分、秒）の計算用
  var restTime; //入力したインターバル時間分、秒）の計算用

  var trainingText = document.getElementById('trainingText');
  var restText = document.getElementById('restText');


  var trainingRemainTimeArea = document.getElementById('trainingRemainTimeArea');
  var restRemainTimeArea = document.getElementById('restRemainTimeArea');
  var RemainSetTimesArea = document.getElementById('RemainSetTimesArea');

  var remainSetNum;

  var settingArea = document.getElementById('settingArea');
  var displayArea = document.getElementById('displayArea');
  var messageArea = document.getElementById('messageArea');

// スタートボタンを押したときの処理
  startTimer.addEventListener('click', function () {
      startTime = Date.now();
      remainSetNum = setTimes.value;
      RemainSetTimesArea.textContent = remainSetNum;
      //セット数が0のときは起動させない
      if (remainSetNum <= 0) {
        return;
      }
      //トレーニング・インターバル時間がマイナスの場合は起動させない
      if (trainingSec.value < 0 || trainingMin.value < 0 || restSec.value < 0 || restMin.value < 0) {
        return;
      }
      //時間の入力がなく、セット数のみ入力した場合は起動させない
      if ((trainingSec.value <= 0 && trainingMin.value <= 0 && restSec.value <= 0 && restMin.value <= 0) && remainSetNum > 0) {
        return;
      }
      settingArea.classList.add('disabled');
      displayArea.classList.remove('disabled');

      timerInput();
      trainingCountDown();
  });

//入力した時間、セット回数を受け取って表示欄に表示する
  function timerInput() {
    trainingTime = trainingSec.value * 1000 + trainingMin.value * 60 * 1000;
    var trainingS = Math.floor(trainingTime / 1000);
    var trainingM = Math.floor(trainingS / 60);
    trainingM %= 60;
    trainingS %= 60;
    trainingM = (trainingM < 10) ? "0" + trainingM : trainingM;
    trainingS = (trainingS < 10) ? "0" + trainingS : trainingS;
    trainingRemainTimeArea.textContent = trainingM + ':' + trainingS;

    var restTime = restSec.value * 1000 + restMin.value * 60 * 1000;
    var restS = Math.floor(restTime / 1000);
    var restM = Math.floor(restS / 60);
    restM %= 60;
    restS %= 60;
    restM = (restM < 10) ? "0" + restM : restM;
    restS = (restS < 10) ? "0" + restS : restS;
    restRemainTimeArea.textContent = restM + ':' + restS;
  }

//トレーニングタイマー用フォーマット
  function trainingTimerFormat(t) {
  var d = new Date(t);
  var m = d.getMinutes();
  var s = d.getSeconds();
  m = ('0' + m).slice(-2);
  s = ('0' + s).slice(-2);
  trainingRemainTimeArea.textContent = m + ':' + s;
}


//トレーニング　カウントダウン処理
  function trainingCountDown () {
    trainingText.classList.add('addFontColor');
    restText.classList.remove('addFontColor2');
    trainingRemainTimeArea.classList.add('addBackgroundColor');
    restRemainTimeArea.classList.remove('addBackgroundColor2');
    if (remainSetNum < 1) {
        countStop();
        countReset();
        // settingArea.classList.remove('disabled');
        displayArea.classList.add('disabled');
        messageArea.classList.remove('disabled');
        return;
      }

    timerId = setTimeout(function () {
      trainingTime = trainingSec.value * 1000 + trainingMin.value * 60 * 1000;
      remainTrainingTime = trainingTime - (Date.now() - startTime);

      if (remainTrainingTime <= 0) {
        clearTimeout(timerId);
        restCountDown();
        startRestTime = Date.now();
        return;
      }
      trainingTimerFormat(remainTrainingTime);
      trainingCountDown ();
    }, 10);
  }

//インターバルタイマー用フォーマット
  function restTimerFormat(r) {
    var rd = new Date(r);
    var rm = rd.getMinutes();
    var rs = rd.getSeconds();
    rm = ('0' + rm).slice(-2);
    rs = ('0' + rs).slice(-2);
    restRemainTimeArea.textContent = rm + ':' + rs;
  }

//インターバル　カウントダウン処理
  function restCountDown () {
    trainingText.classList.remove('addFontColor');
    restText.classList.add('addFontColor2');
    trainingRemainTimeArea.classList.remove('addBackgroundColor');
    restRemainTimeArea.classList.add('addBackgroundColor2');
    timerId2 = setTimeout(function () {
      restTime = restSec.value * 1000 + restMin.value * 60 * 1000;
      remainRestTime = restTime - (Date.now() - startRestTime);

      if (remainRestTime <= 0) {
        clearTimeout(timerId2);
        remainSetNum --;
        RemainSetTimesArea.textContent = remainSetNum;
        timerInput();
        trainingCountDown();
        startTime = Date.now();
        return;
      } else if (remainSetNum < 0) {
        countStop();
        countReset();
        // settingArea.classList.remove('disabled');
        displayArea.classList.add('disabled');
        messageArea.classList.remove('disabled');
        return;
      }
        restTimerFormat(remainRestTime);
        restCountDown ();
      }, 10);
    }


// タイマーのリセットボタンを押した時の処理
  resetTimer.addEventListener('click', function () {
    messageArea.classList.add('disabled');

    countReset();
  });

//ストップボタン押下時の処理
  // stopTimer.addEventListener('click', function () {
  //   countStop();
  // })

//displayArea の retryボタン押下時の処理
  goSettings.addEventListener('click', function() {
    countStop();
    settingArea.classList.remove('disabled');
    displayArea.classList.add('disabled');
    messageArea.classList.add('disabled');

  });

//messageArea の retryボタン押下時の処理
  goSettings2.addEventListener('click', function() {
    settingArea.classList.remove('disabled');
    messageArea.classList.add('disabled');
  });

//カウント停止処理
  function countStop() {
    // startTimer.disabled = false; //スタートボタンを非表示⇨表示に
    clearTimeout(timerId);
    clearTimeout(timerId2);
  }

//リセットボタン押下時の処理（カウントリセット）
  function countReset() {
    messageArea.classList.add('disabled');

    trainingMin.value = 0;
    trainingSec.value = 0;
    restMin.value = 0;
    restSec.value = 0;
    setTimes.value = 0;
    trainingRemainTimeArea.textContent = '00:00';
    restRemainTimeArea.textContent = '00:00';
    RemainSetTimesArea.textContent = '0';
  }


})();
