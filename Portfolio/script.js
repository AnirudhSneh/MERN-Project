var typed = new Typed(".multiple-text",{
    strings:["Frontend Developer", "Blogger" , "Youtuber" ],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true

})
const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');

toggle.addEventListener("click",function(){
    this.classList.toggle('bi-moon');
    if(this.classList.toggle('bi-brightness-high-fill')){
        body.style.background = 'white'
        body.style.color = 'black';
        body.style.transition='2s'
    }
    else{
        body.style.background ='black';
        body.style.color = 'white';
        body.style.transition ='2s';
    }
})