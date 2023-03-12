let mainPhoto = document.querySelector(".mainPhoto");
let main = document.querySelector(".main");
function myFunction(x){
    mainPhoto.src = x;
    
}
function colors(y){
    main.style.background = y;
}
function myHeaderOne(){
  document.getElementById('header').innerHTML = "HUAWEI Mate 20 Pro";
  document.getElementById('paragraph').innerHTML = "Processor: 4x 2.8 GHz ARM Cortex-A76, 4x ?? GHz ARM Cortex-A55, Cores: 8 · RAM: 6 GB, 8 GB · Storage: 64 GB, 128 GB, 256 GB";
}

function myHeader(){
  document.getElementById('header').innerHTML = " HUAWEI Mate 10 Pro";
  document.getElementById('paragraph').innerHTML = "CPU, cta-core (4x2.4 GHz Cortex-A73 & 4x1.8 GHz Cortex-A53) ; GPU, Mali-G72 MP12 ; Memory, Card slot ; Internal, 64GB 4GB RAM, 128GB 6GB RAM";
}

function myHeader1(){
 document.getElementById('header').innerHTML = "HUAWEI Mate 50 pro" ;
 document.getElementById('paragraph').innerHTML = "SoC Snap dragon 8 Plus Gen 1 4G Display 6.74-inch 1212 x 2616 OLD RAM 8GB RAM Storage Up to 512GB Battery 4,700 mAh" ;
}