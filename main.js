
var elUl = document.querySelector('.ul');
var elQoot = document.querySelector('.qoot');
var elBtn = document.querySelector('.port-btn');


var hide = function(){
    elUl.classList.add('hidemenu'); 
    elBtn.classList.remove('port-btn2');
    elBtn.querySelector('i').className = 'fa-solid fa-bars';
    elUl.addEventListener('animationend', remove);
};


var show = function(){ 
    elUl.classList.add('showmenu'); 
    elBtn.classList.add('port-btn2');
    elBtn.querySelector('i').className = 'fa-solid fa-times';
    elUl.removeEventListener('animationend', remove);
};

var remove = function(){
    elUl.classList.remove('showmenu', 'hidemenu');
};


elBtn.addEventListener('click', function(){
    if(elUl.classList.contains('showmenu')){ 
        hide();
    } else {
       show();
    }
});



window.addEventListener('scroll', function(){
    if(window.scrollY > 600){
        elQoot.classList.add('qoot2');
    } else {
        elQoot.classList.remove('qoot2');
    }
    console.log(window.scrollY)
}); 