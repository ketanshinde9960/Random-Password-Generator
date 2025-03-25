const imgs = document.getElementsByClassName('img-box');
const prev_btn = document.getElementsByClassName('control_prev');
const next_btn = document.getElementsByClassName('control_next');

let n = 1;

function changeSlide(){
    for (let i = 0; i < imgs.lengths; i++){
        imgs[i].style.display = 'none';
    }
    imgs[n].style.display = 'block';

    prev_btn.addEventListner('click',(e)=>{
        if(n > 0){
            n--;
        }else {
            n = imgs.length - 1;
        }
        changeSlide();
    })

    next_btn.addEventListener('click',(e)=>{
        if(n < imgs.length - 1 ){
           n++;
        }else{
            n = 0;
        }
        changeSlide();
    })
}
changeSlide();
console.log(changeSlide());


 

