let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountain3 = document.getElementById('mountain3');
let mountain4 = document.getElementById('mountain4');
let river = document.getElementById('river');
let boat = document.getElementById('boat');
let mountain7 = document.getElementById('mountain7');
let lenovo = document.querySelector('.lenovo');

window.onscroll = function(){
   let x = scrollY;
    stars.style.left = x + 'px';
    moon.style.top = x*4 + 'px';
    mountain3.style.top = x*2 + 'px';
    mountain4.style.top = x*1.5 + 'px';
    river.style.top = x + 'px';
    boat.style.top = x + 'px';
    boat.style.left = x*3 + 'px';
    mountain7.style.top = x + 'px';
    lenovo.style.fontSize = x + 'px';
    if(scrollY >= 50){
        lenovo.style.fontSize = 50 + 'px';
        lenovo.style.position = "fixed";
        if(scrollY >= 404){
            lenovo.style.display = "none";
        }else{
            lenovo.style.display = "block";
        }
        if(scrollY >= 175){
            document.querySelector('.main').style.background = "linear-gradient(#376281,#10001f)";
        }else{   document.querySelector('.main').style.background = "linear-gradient(#200016,#200016)";
      }
    }
} 