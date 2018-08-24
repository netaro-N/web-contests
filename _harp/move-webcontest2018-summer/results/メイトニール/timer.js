(function(){
  'use strict';

  const rightTimeLimit = document.getElementById('right-time');
  const leftTimeLimit = document.getElementById('left-time');
  const rightButton = document.getElementById('right-button');
  const leftButton = document.getElementById('left-button');

  //持ち時間の取得
  let timeLimit;
  do {
    timeLimit = prompt("1 ~ 99 の整数で持ち時間(分)を半角で入力してください", 10);
  } while ((!(1 <= timeLimit && timeLimit <= 99)) && timeLimit !== null || (timeLimit % 1) !== 0);
  const timeLimitMilliSeconds = timeLimit * 60 * 1000;
  let rightRemainingTime = timeLimitMilliSeconds;
  let leftRemainingTime = timeLimitMilliSeconds;

  //取得した持ち時間をHTMLに反映
  if (timeLimit !== null) {
    rightTimeLimit.innerText =('00' + timeLimit).slice(-2) + " : 00 : 00";
    leftTimeLimit.innerText = ('00' + timeLimit).slice(-2) + " : 00 : 00";
  }


  //左側の持ち時間を0.01秒ごとに0.01秒減らして行く関数
  function leftTime(){
    let leftLessSeconds = ('00' + (leftRemainingTime % 1000) / 10).slice(-2);
    let leftSconds = ('00' + ((leftRemainingTime - leftLessSeconds * 10) / 1000) % 60).slice(-2);
    let leftMinutes = ('00' + (leftRemainingTime - leftLessSeconds * 10 - leftSconds * 1000) / (60 * 1000)).slice(-2);
    if (leftRemainingTime < 0) {
      alert("持ち時間がなくなりました");
      clearInterval(leftIntervalId);
    } else {
      leftRemainingTime -= 10;
      leftTimeLimit.innerText= leftMinutes + " : " + leftSconds + " : " + leftLessSeconds;
    }
  }

  //右側の持ち時間を0.01秒ごとに0.01秒減らして行く関数
  function rightTime(){
    let rightLessSeconds = ('00' + (rightRemainingTime % 1000) / 10).slice(-2);
    let rightSconds =('00' +  ((rightRemainingTime - rightLessSeconds * 10) / 1000) % 60).slice(-2);
    let rightMinutes =('00' + (rightRemainingTime - rightLessSeconds * 10 - rightSconds * 1000) / (60 * 1000)).slice(-2);
    if (rightRemainingTime < 0) {
      alert("持ち時間がなくなりました");
      clearInterval(rightIntervalId);
    } else {
      rightRemainingTime -= 10;
      rightTimeLimit.innerText = rightMinutes + " : " + rightSconds + " : " + rightLessSeconds;
    }
  }


  let rightIntervalId; //interval IDを保存する変数
  let leftIntervalId;


  //左側のボタンが押された時の処理
  leftButton.onclick = () => {
    if (leftRemainingTime > 0 && rightRemainingTime > 0) {
      clearInterval(rightIntervalId);
      clearInterval(leftIntervalId);
      rightIntervalId = setInterval(rightTime, 10);
      leftButton.className = 'not-my-turn';
      rightButton.className = 'my-turn';
    }
  };

  //右側のボタンが押された時の処理
  rightButton.onclick = () => {
    if (leftRemainingTime > 0 && rightRemainingTime > 0) {
      clearInterval(leftIntervalId);
      clearInterval(rightIntervalId);
      leftIntervalId = setInterval(leftTime, 10);
      leftButton.className = 'my-turn';
      rightButton.className = 'not-my-turn';
    }
  };

  //キーを押した時にボタンを押した処理を実行させる
  document.body.onkeydown = (event) => {

    //左手のセットポジションにある"b"以外のキーを押した時に"leftButton"を実行する
    if (event.key ==='q' || event.key ==='w' || event.key ==='e'|| event.key ==='r'|| event.key ==='t'|| event.key ==='a'|| event.key ==='s'|| event.key ==='d'|| event.key ==='f'|| event.key ==='g'|| event.key ==='z'|| event.key ==='x'|| event.key ==='c'|| event.key ==='v') {
      leftButton.onclick();

   //右手のセットポジションのアルファベットと記号(";"と","と".")を押した時に"rightButton"を実行する
    } else if (event.key ==='y'|| event.key ==='u'|| event.key ==='i'|| event.key ==='o'|| event.key ==='p'|| event.key ==='h'|| event.key ==='j'|| event.key ==='k'|| event.key ==='l'|| event.key ===';'|| event.key ==='n'|| event.key ==='m'|| event.key ===','|| event.key ==='.') {
      rightButton.onclick();
    }
  }

})();
