let para1, para2, para3;
window.onload = ()=>{
    para1 = document.getElementById('one');
    para2 = document.getElementById('two');
    para3 = document.getElementById('three');

}
const showHide = (value)=>{
    if(value === 'one'){
       para1.classList.toggle('show');
    }else if(value === 'two'){
        para2.classList.toggle('show');
    }else if(value === 'three'){
        para3.classList.toggle('show');
    }
}
