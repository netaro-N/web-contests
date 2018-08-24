'use strict';
const b1=document.getElementById('button1');
const b2=document.getElementById('button2');
const b3=document.getElementById('button3');
const b4=document.getElementById('button4');
const b5=document.getElementById('button5');
const b6=document.getElementById('button6');
const b7=document.getElementById('button7');
const b8=document.getElementById('button8');
const b9=document.getElementById('button9');
const b0=document.getElementById('button0');
const bp=document.getElementById('button+');
const bm=document.getElementById('button-');
const be=document.getElementById('button=');
const bt=document.getElementById('button*');
const bd=document.getElementById('button/');
const back=document.getElementById('back');
const rs=document.getElementById('result');
const r2=document.getElementById('result2');

var add=0,sum=0,sum2=0,count=0,count2=0,dialresult=0;
var selecter="";
function dial(a){
    var dialnum=1;
    if(a==0){
        dialnum=0;
    }else{
        dialnum=10;
    }
    return dialnum;
}

function rmchild(name){
    while(name.firstChild){
        name.removeChild(name.firstChild)
    }
}

function viewnum(add){
    rmchild(rs);
    const re=document.createElement("h1");
    re.innerText=add;
    re.classList.add('into');
    rs.appendChild(re);
}
//要素転換用の関数(div1→div2
function exviewnum(add){
    rmchild(r2);
    const re=document.createElement('h1');
    re.innerText=add;
    re.classList.add('into');
    r2.appendChild(re);
}

function getnum(num){
    dialresult=dial(count);
    var dr=dialresult;
    if(num==0){
        add=add*10;
    }else{
    add=add * dr + num;
    }
    count++;
// 随時入力した数字を表示させる関数 viewnum
    viewnum(add);
}
//小数点以下切り捨てを使い一文字削除を実装
function backnum(num){
    num=num*0.1;
    return Math.floor(num);
}

//todo 計算用の関数
function calculation(decision,sum1,sum2){
    if(decision=='+'){
        return sum1+sum2;
    }else if(decision=='-'){
        return sum1-sum2;
    }else if(decision=='*'){
        return sum1*sum2;
    }else if(decision=='/'){
        return sum1/sum2;
    }else if(decision==''){
        return sum1;
    }
}
b1.onclick=()=>{
    getnum(1);
}
b2.onclick=()=>{
    getnum(2);
}
b3.onclick=()=>{
    getnum(3);
}
b4.onclick=()=>{
    getnum(4);
}
b5.onclick=()=>{
    getnum(5);
}
b6.onclick=()=>{
    getnum(6);
}
b7.onclick=()=>{
    getnum(7);
}
b8.onclick=()=>{
    getnum(8);
}
b9.onclick=()=>{
    getnum(9);
}
b0.onclick=()=>{
    getnum(0);
}
bp.onclick=()=>{
    count2++;
    if(count2>1){
        add=calculation(selecter,sum,add);
    }
    selecter='+';
    sum=add;
    exviewnum(sum);
    rmchild(rs);
    add=0;
}
bm.onclick=()=>{
    count2++;
    if(count2>1){
        add=calculation(selecter,sum,add);
    }
    selecter='-';
    sum=add;
    exviewnum(sum);
    rmchild(rs);
    add=0;
}
bt.onclick=()=>{
    count2++;
    if(count2>1){
        add=calculation(selecter,sum,add);
    }
    selecter='*';
    sum=add;
    exviewnum(sum);
    rmchild(rs);
    add=0;
}
bd.onclick=()=>{
    count2++;
    if(count2>1){
        add=calculation(selecter,sum,add);
    }
    selecter='/';
    sum=add;
    exviewnum(sum);
    rmchild(rs);
    add=0;
}
back.onclick=()=>{
    add=backnum(add);
    viewnum(add);
}
be.onclick=()=>{
    sum=calculation(selecter,sum,add);
    selecter='';
    exviewnum(sum)
    rmchild(rs);
    add=0;
}
