'use strict';
var cardFront = document.getElementById('card-front');
var cardBack = document.getElementById('card-back');
var cardFrontText = document.getElementById('front-text');
var cardBackText = document.getElementById('back-text');
var listButton = document.getElementById('list');
var infoButton = document.getElementById('info');
var wordList = document.getElementById('word-list');
var howToUse = document.getElementById('howtouse');
var cardStatus = true;
var frontWord = 0;
var backWord = 0;
var list = false;
var info = false;
cardFront.onclick = floatCard;
cardBack.onclick = floatCard;
listButton.onclick = switchList;
function switchList() {
  if (list == true) {
    listButton.style.opacity = '0.38';
    wordList.style.visibility = 'hidden';
    list = false;
  } else {
    listButton.style.opacity = '0.87';
    wordList.style.visibility = 'visible';
    list = true;
  }
}
infoButton.onclick = function () {
  if (info == true) {
    infoButton.style.opacity = '0.38';
    howToUse.style.display = 'none';
    info = false;
  } else {
    infoButton.style.opacity = '0.87';
    howToUse.style.display = 'block';
    info = true;
  }
}
document.addEventListener("keydown", keyCheck);

(function initial() {
  cardBack.style.visibility = 'hidden';
  cardFrontText.innerText = Words[frontWord]['Front'];
  cardBackText.innerText = Words[backWord]['Back'];
  var counter = 0;
  var listString = "";
  for (var counter = 0; counter < Words.length; counter++) {
    listString = listString + '<a onclick="jump(' + counter + ');"><span>' + Words[counter]['Front'] + '</span></a>'
  }
  wordList.innerHTML = listString;
}());

function keyCheck(event) {
  if (event.keyCode == 32 || event.keyCode == 13) {
    floatCard();
  }
}

function floatCard() {
  var shadowLength = 0;
  var timerID = setInterval(
    function onShadow() {
      if (shadowLength < 16) {
        shadowLength = shadowLength + 2;
        cardFront.style.boxShadow = (shadowLength / 4) + 'px ' + (shadowLength / 4) + 'px ' + shadowLength + 'px rgba(0, 0, 0, 0.2)';
        cardBack.style.boxShadow = (shadowLength / 4) + 'px ' + (shadowLength / 4) + 'px ' + shadowLength + 'px rgba(0, 0, 0, 0.2)';
      } else {
        clearInterval(timerID);
        if (cardStatus == true) {
          rotateCardFront();
          cardStatus = false;
        } else if (cardStatus == false) {
          rotateCardBack();
          cardStatus = true;
        }
      }
    }, 20);
}

function rotateCardFront() {
  var angle = 0;
  var timerID = setInterval(function rotate() {
    angle = angle + 5;
    if (angle < 90) {
      cardFront.style.transform = 'rotateX(' + angle + 'deg)';
    } else if (angle == 90) {
      cardFront.style.transform = 'rotateX(90deg)';
      frontWord = frontWord + 1;
      if (frontWord >= Words.length) {
        frontWord = 0;
      }
      cardFrontText.innerText = Words[frontWord]['Front'];
    } else if (angle <= 180) {
      cardBack.style.visibility = 'visible';
      cardFront.style.visibility = 'hidden';
      cardFront.style.transform = 'rotateX(' + angle + 'deg)';
      cardBack.style.transform = 'rotateX(' + (angle + 180) + 'deg)';
    } else {
      clearInterval(timerID);
      returnCard();
    }
  }, 20);
}

function rotateCardBack() {
  var angle = 0;
  var timerID = setInterval(function rotate() {
    angle = angle + 5;
    if (angle < 90) {
      cardBack.style.transform = 'rotateX(' + angle + 'deg)';
    } else if (angle == 90) {
      cardBack.style.transform = 'rotateX(90deg)';
      backWord = backWord + 1;
      if (backWord >= Words.length) {
        backWord = 0;
      }
      cardBackText.innerText = Words[backWord]['Back'];
    } else if (angle <= 180) {
      cardFront.style.visibility = 'visible';
      cardBack.style.visibility = 'hidden';
      cardBack.style.transform = 'rotateX(' + angle + 'deg)';
      cardFront.style.transform = 'rotateX(' + (angle + 180) + 'deg)';
    } else {
      clearInterval(timerID);
      returnCard();
    }
  }, 20);
}

function returnCard() {
  var shadowLength = 16;
  var timerID = setInterval(
    function onShadow() {
      if (shadowLength > 0) {
        shadowLength = shadowLength - 2;
        cardFront.style.boxShadow = (shadowLength / 4) + 'px ' + (shadowLength / 4) + 'px ' + shadowLength + 'px rgba(0, 0, 0, 0.2)';
        cardBack.style.boxShadow = (shadowLength / 4) + 'px ' + (shadowLength / 4) + 'px ' + shadowLength + 'px rgba(0, 0, 0, 0.2)';;
      } else {
        clearInterval(timerID);
      }
    }, 20);
}

function jump(number) {
  frontWord = number;
  backWord = number;
  cardFrontText.innerText = Words[frontWord]['Front'];
  cardBackText.innerText = Words[backWord]['Back'];
  cardFront.style.transform = 'rotateX(360deg)';
  cardBack.style.transform = 'rotateX(180deg)';
  cardFront.style.visibility = 'visible';
  cardBack.style.visibility = 'hidden';
  cardStatus = true;
  switchList();
}
