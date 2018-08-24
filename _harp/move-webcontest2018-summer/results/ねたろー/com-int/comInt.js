(function () {
    'use strict';
    const calculateButton = document.getElementById('calculate');
    const rate = document.getElementById('rate');
    const principal = document.getElementById('principal');
    const reserve = document.getElementById('reserve');
    const years = document.getElementById('years');
    const resultDivided = document.getElementById('result-area');

    function removeAllChildren(element) {
        while (element.firstChild) { // 子どもの要素があるかぎり削除
            element.removeChild(element.firstChild);
        }
    }
    calculateButton.onclick = () => {
        let rateValue = rate.value;
        let interestRate = Number(rateValue) / 100;
        console.log(interestRate);
        let principalValue = Number(principal.value) * 10000;
        console.log(principalValue);
        let reservedFund = Number(reserve.value) * 10000;
        console.log(reservedFund);
        let period = Number(years.value);
        console.log(period);

        //計算する
        const m = period * 12;
        const z = (12 * reservedFund) / interestRate;
        const x = (Math.pow(((1 + interestRate / 12)), m));
        const y = (Math.pow(((1 + interestRate / 12)), m + 1));
        const xx = (principalValue * x);
        const yy = y;
        let sum = xx - z - reservedFund + z * yy;
        let result = Math.round(sum / 1000) / 10;
        let tenThousand = Math.floor(result);
        let thousand = (10 * result) - (10 * tenThousand);

        removeAllChildren(resultDivided);
        const paragraph = document.createElement('p');
        paragraph.innerHTML = 'あなたは<span id="number">' + period + '</span>年で<br>およそ<span id="number">' + tenThousand + '</span>万<span id="number">' + thousand + '</span>千円<br>の資産を築いているでしょう。';
        resultDivided.appendChild(paragraph);
    }
})();

/** 最初の失敗作（年数増やすと誤差多い）
 * const z = 1 + (compoundInterest/12 ) ;
   let sum = ( principal * (Math.pow(z,m)).toFixed(3) ) + (( ReservedFund * z ) * ((1- (Math.pow(z,m))).toFixed(6)/(1-z).toFixed(4)).toFixed(4) ) ;
 */