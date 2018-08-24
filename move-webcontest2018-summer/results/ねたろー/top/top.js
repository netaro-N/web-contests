(function () {
  'use strict';
  //タイトル横のボタンの開閉
  function navToggle() {
    var icon = document.getElementById('icon');
    // 開閉ボタンを取得
    var toggleBtn = document.getElementById('nav-toggle');

    // 開閉するナビゲーション本体を取得
    var navView = document.getElementById('nav-list');

    // 開閉ボタンの現在のクラスを取得
    var toggleBtnClass = toggleBtn.getAttribute('class');

    // 開閉ボタンのクラスで条件分岐
    // 1. 開閉ボタンのクラスが「close」だったら
    if (toggleBtnClass == 'nav-toggle-button close') {

      // 閉じている状態のクラスを削除
      toggleBtn.classList.remove('close');
      navView.classList.remove('close');

      // 開いている状態のクラスを付与
      toggleBtn.classList.add('open');
      navView.classList.add('open');
      //アイコンを変更
      icon.className = 'fas fa-times';
    }

    // 2. 開閉ボタンのクラスが「open」だったら
    else {

      // 開いている状態のクラスを削除
      toggleBtn.classList.remove('open');
      navView.classList.remove('open');

      // 閉じている状態のクラスを付与
      toggleBtn.classList.add('close');
      navView.classList.add('close');

      //アイコンを変更
      icon.className = 'fas fa-bars';
    }
  }
  // 指定IDをクリックした際に関数を実行
  document.getElementById('nav-toggle').onclick = navToggle;
//数字を花びらのように散らすアニメーション
  (function (d, b, w) {
    var q = d.createElement('div');
    q.id = "sakura";
    q.innerHTML = '<style>' +
      'html,body{overflow-x:hiden;}' +
      '.hana{' +
      'position:absolute;height:0;width:0;}' +

      '.hana::after{' +
      'content:"0";display:block;position:absolute;top:-7px;left:-7px;height:0;width:0;' +
      '}' +
      '.t1{transform: rotate(0deg);}' +
      '.t2{transform: rotate(60deg);}' +
      '.t3{transform: rotate(120deg);}' +
      '.t4{transform: rotate(180deg);}' +
      '.t5{transform: rotate(240deg);}' +
      '.t6{transform: rotate(300deg);}' +
      '.y1::after{content:"1";}' +
      '.y2::after{content:"2";}' +
      '.y3::after{content:"3";}' +
      '.y4::after{content:"4";}' +
      '.y5::after{content:"5";}' +
      '.y6::after{content:"6";}' +
      '.y7::after{content:"7";}' +
      '.y8::after{content:"8";}' +
      '.y9::after{content:"9";}' +
      '.y10::after{content:"0";}' +
      '</style>';
    b.appendChild(q);

    var h = w.innerHeight;
    window.onresize = function () {
      h = window.innerHeight;
      console.log(h);
    };
    var u = d.documentElement.scrollTop || b.scrollTop;
    var z = -9999;
    var t = new Array();
    var l = new Array();
    var y = new Array();
    var s = new Array();
    var g = new Array();
    var c = new Array();
    d.addEventListener('scroll', function () { u = d.documentElement.scrollTop || b.scrollTop; }, false);
    for (var i = 0; i < 30; i++) {
      var m = d.createElement('div');
      m.id = 'hanabira' + i;
      t[i] = Math.random() * -1000 + u;
      l[i] = Math.random() * w.innerWidth;
      m.setAttribute('style', 'z-index:' + (z + i) + ';top:' + t[i] + 'px;left:' + l[i] + 'px;');
      var clss = 'hana t' + (Math.floor(Math.random() * 6) + 1) + ' y' + (Math.floor(Math.random() * 10) + 1);
      m.setAttribute('class', clss);
      q.appendChild(m);
      y[i] = Math.random() * 40 + 5;
      s[i] = Math.random() * 5 + 2;
      g[i] = d.getElementById('hanabira' + i);
      c[i] = 0;
    }
    setInterval(function () {
      for (var i = 0; i < 30; i++) {
        if (t[i] < u + h - 40) {
          if (y[i] >= c[i]) {
            l[i] = l[i] + 0.5 + Math.random() * 0.5;
          } else {
            l[i] = l[i] - 0.5 - Math.random() * 0.5;
          }
          if ((y[i] * 2) <= c[i]) {
            c[i] = 0;
          }
        } else {
          t[i] = u - 40;
          l[i] = Math.random() * w.innerWidth;
        }
        t[i] = t[i] + s[i];
        g[i].style.top = t[i] + 'px';
        g[i].style.left = l[i] + 'px';
        c[i]++;
      }
    }, 45);
  })(window.document, window.document.body, window);
})();