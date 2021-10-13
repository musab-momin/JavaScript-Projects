
window.onload = ()=>{
    let slider = document.querySelector('.slider');
    let btn = document.querySelector('.btn')
    let video = document.querySelector('.video-container')
    btn.addEventListener('click', ()=>{
        if(!slider.classList.contains('slide')){
            slider.classList.add('slide')
            video.pause()
        }else{
            slider.classList.remove('slide')
            video.play()
        }
    })
}