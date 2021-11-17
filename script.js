const nav = document.querySelector('.navbar');
const navTop = nav.offsetTop;

function fixednav(){
    if(window.scrollY >= navTop){
        document.body.style.paddingTop = nav.offsetHeight + 'px';
        document.body.classList.add('fixed-nav');
    }else{
        document.body.style.paddingTop = 0;
        document.body.classList.remove('fixed-nav');
    }
}

window.addEventListener('scroll',fixednav);