(function() {
    'use strict';

    let data = localStorage.tensuu;
    let rank = localStorage.nanido;

    const tweetDivided = document.getElementById('tweetarea');



    const anchor = document.createElement('a');
    const hrefValue = 'https://twitter.com/intent/tweet?button_hashtag=FizzBuzz&text=' + encodeURIComponent('難易度:' + rank + '　得点:' + data);


    anchor.setAttribute('href', hrefValue);
    anchor.className = 'twitter-hashtag-button';
    anchor.innerText = 'Tweet #Fizz-Buzz';
    tweetDivided.appendChild(anchor);


    twttr.widgets.load();

})();