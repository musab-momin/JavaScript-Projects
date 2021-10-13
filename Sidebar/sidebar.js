const pages = ['Home', 'About', 'Projects', 'Contact'];

let btn, article, bars, list;
window.onload = ()=>{
    btn = document.querySelector('.btn');
    article = document.getElementById('article');
    bars = document.querySelector('.bars');
    list = document.querySelector('.pages');

    createPages();
}

const toggle = ()=>{
    // if(article.style.width !== 0){
    //     article.style.width = "0px";
    //     article.style.zIndex = "-2";

    article.classList.toggle('show-pages')
        setTimeout(()=>{
            bars.style.zIndex = "1"
        }, 300)
}


const doToggle = ()=>{
    article.classList.toggle('show-pages')
}

const createPages = ()=>{
    let content = `<ul>`;
    pages.map((item)=>{
        content+=`<li><a href='#'>${item}</a></li>`;
    })
    content+='</ul>'
    console.log(content)
    list.innerHTML = content;
}