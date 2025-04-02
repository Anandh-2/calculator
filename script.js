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
  }else if(lastOp==='x'){
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
