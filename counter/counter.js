let number = 0;
let num;
window.onload = ()=>{
    num = document.querySelector('.value');
    num.innerHTML = number;
}
const logic = (op)=>{
    if(op === 'increase'){
        number+=1;
    }else if(op === 'decrease'){
        if(number <= 0)  number = 0;
        else    number-=1;
    }else{number = 0}
    update()
}
const update = ()=>{
    num.innerHTML = number;
}