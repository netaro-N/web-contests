(function(){
    'use strict';
    const makeButton = document.getElementById('makeMenu');
    const pushUp = document.getElementById('pushup');
    const sitUp = document.getElementById('situp');
    const pullUp = document.getElementById('pullup');  
    
    makeButton.onclick = function(){
       var pushUpNum = Math.floor(Math.random() * 100 + 1);　//腕立て回数乱数１００まで
       var sitUpNum = Math.floor(Math.random() * 200 + 1);　//腹筋回数乱数２００まで
       var pullUpNum= Math.floor(Math.random() * 15 + 1);　//懸垂回数乱数１５まで
       
       pushUp.innerHTML = pushUpNum;
       sitUp.innerHTML = sitUpNum;
       pullUp.innerHTML = pullUpNum; 
    //筋肉ビルダー動き
    var builder = document.getElementById('move');
    var amountOfMovement = 0;
    function moveBuilder(){
             if(amountOfMovement >= 0 && amountOfMovement <= 800){
                amountOfMovement += 5;
                builder.style.transform ='translate(' + amountOfMovement + 'px', '0px)';
             }
    }
    setInterval(moveBuilder, 20);
    }

    
})();