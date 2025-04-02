/*document.getElementById("zero").addEventListener("click", () => handleNum(0));
document.getElementById("one").addEventListener("click", () => handleNum(1));
document.getElementById("two").addEventListener("click", () => handleNum(2));
document.getElementById("three").addEventListener("click", () => handleNum(3));
document.getElementById("four").addEventListener("click", () => handleNum(4));
document.getElementById("five").addEventListener("click", () => handleNum(5));
document.getElementById("six").addEventListener("click", () => handleNum(6));
document.getElementById("seven").addEventListener("click", () => handleNum(7));
document.getElementById("eight").addEventListener("click", () => handleNum(8));
document.getElementById("nine").addEventListener("click", () => handleNum(9));
document.getElementById("clc").addEventListener("click", () => clear());
document.getElementById("ce").addEventListener("click", () => clear());
document.getElementById("del").addEventListener("click", () => del());

document.getElementById("add").addEventListener("click", (e) => handleOp(e));
console.log(document.getElementsByClassName('key'));
var num1 = 0;
var num2 = 0;
var op = "+";

const updateScreen = () => {
  document.getElementById("calc-screen").innerHTML = num2;
  document.getElementById('oper').innerHTML=op;
  document.getElementById('last-val').innerHTML=num1;
};

const handleNum = (n) => {
  num2 = num2 * 10 + n;
  updateScreen();
};

const clear = () => {
  num2 = 0;
  updateScreen();
};

const del = () => {
  num2 = Math.floor(num2 / 10);
  updateScreen();
};

const handleOp = (e)=>{
    num1=res(num1,num2);
    num2=0;
    op=operator(e.target.id);
    updateScreen();
}

const res = (n1,n2)=>{
    if(op==='add'){
        return n1+n2;
    }else if(op==='diff'){
        return n1-n2;
    }else if(op==='mul'){
        return n1*n2;
    }else if(op==='div'){
        return n1/n2;
    }else{
        return;
    }
}

const operator = (oper)=>{
  switch(oper){
    case 'add':
      return '+';
    case 'diff':
      return '-';
    case 'mul':
      return '*';
    case 'div':
      return '/';
  }
}*/

let op1 = "0";
let op2 = "0";
let lastOp="+";

const updateScreen = ()=>{
  if(op1==='0'&&op2==='0'){
    document.getElementById('oper').innerHTML='';
    document.getElementById('calc-screen').innerHTML='0';
    document.getElementById('last-val').innerHTML='';
    return;
  }
  console.log(op1);
  console.log(op2);
  document.getElementById('calc-screen').innerHTML=op2;
  if(op1!=='0'){
  document.getElementById('oper').innerHTML=lastOp;
  document.getElementById('last-val').innerHTML=op1;}
}

const evaluate = ()=>{
  if(lastOp==='+'){
    op1=String(Number(op1)+Number(op2));
  }else if(lastOp==='-'){
    op1=String(Number(op1)-Number(op2));
  }else if(lastOp==='*'){
    op1=String(Number(op1)*Number(op2));
  }else if(lastOp==='/'){
    op1=String(Number(op1)/Number(op2));
  }
}

const handleClick = (e) => {
  let className = e.target.className;
  let val = e.target.innerHTML;
  if(!className.includes('key')){
    return;
  }else if(className.includes('nums')){
    if(val==='.' && op2.includes('.')){
      return;
    }
    if(op2==='0')op2=val;
    else op2+=val;
  }else if(className.includes('op')){
    if(lastOp==='='){
      lastOp=val;
      op2='0';
      updateScreen();
      return;
    }
    evaluate();
    lastOp=val;
    op2='0';
  }else if(className.includes('eq')){
    evaluate();
    op2=op1;
    lastOp='=';
  }else if(e.target.id==='c'){
    op1='0';
    op2='0';
    lastOp='+';
  }else if(e.target.id==='ce'){
    op2='0';
  }else if(e.target.id==='del'){
    if(op2.length===0){
      return;
    }
    op2=op2.substring(0,op2.length-1);
    if(op2.length===0){
      op2='0';
    }
  }
  updateScreen();
};

document.body.addEventListener("click", handleClick);
