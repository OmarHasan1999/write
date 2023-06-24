<template>
  
  <div class="main" ref="main">
    <header>
      <a href="#"><img class="logo" src="../assets/images/logo.png"></a>
      <ul>
        <li>
          <a href="#">services</a>
        </li>

        <li>
          <a href="#">about</a>
        </li>

        <li>
          <a href="#">contact</a>
        </li>
      </ul>

    </header>
    <div class="section">
      <div class="text">
        <h1>{{ header }}</h1>
        <p>{{ paragraph }}</p>
        <a href="#" class="site">more info</a>
      </div>

      

     <div class="box">
           <h2>For more info ..</h2>
           <p>Please click on one of the pictures 👇👇</p>
           <button class="but1">ok</button>

     </div>

      <div class="photo">
        <img src="../assets/images/0.png" class="img0">
        <img src="../assets/images/0.png" class="img1">
        <img src="../assets/images/1.png" class="img2">
        <img src="../assets/images/2.png" class="img3">
        <img src="../assets/images/3.png" class="img4"> 
      </div>
    

    </div>
    <div class="footer">

      <img @click="myFun('black', 'iPhone 14 Pro Max', 'Processor: 4x 2.8 GHz ARM Cortex-A76, 4x ?? GHz ARM Cortex-A55, Cores: 8 · RAM: 6 GB, 8 GB · Storage: 64 GB, 128 GB, 256 GB')"
        src="../assets/images/0.png" class="myImg1">

      <img @click="myFun('#777D71', 'iPhone 13 mini', 'CPU, cta-core (4x2.4 GHz Cortex-A73 & 4x1.8 GHz Cortex-A53) ; GPU, Mali-G72 MP12 ; Memory, Card slot ; Internal, 64GB 4GB RAM, 128GB 6GB RAM')"
        src="../assets/images/1.png" class="myImg2">

      <img @click="myFun('#002C3E', 'Apple iPhone 14 Plus', 'SoC Snap dragon 8 Plus Gen 1 4G Display 6.74-inch 1212 x 2616 OLD RAM 8GB RAM Storage Up to 512GB Battery 4,700 mAh')"
         src="../assets/images/2.png" class="myImg3">

      <img @click="myFun('#788CC4', 'Apple iPhone 11', 'CPU, Octa-core (1x3.13 GHz Cortex-A77 & 3x2.54 GHz Cortex-A77 & 4x2.05 GHz Cortex-A55) ; GPU, Mali-G78 MP24 ; Internal, 128GB 8GB RAM, 256GB')"
         src="../assets/images/3.png" class="myImg4">
    </div>
  </div>
  



</template>





<script>
import {onMounted} from 'vue';



export default {
  data() {
    return {
      header: "iPhone 14 Pro Max",
      paragraph: "Processor: 4x 2.8 GHz ARM Cortex-A76, 4x ?? GHz ARM Cortex-A55, Cores: 8 · RAM: 6 GB, 8 GB · Storage: 64 GB, 128 GB, 256 GB",
      
    };
  },
  methods: {
    myFun(backColor, header, paragraph) {
      this.$refs.main.style.background = backColor;
      this.header = header;
      this.paragraph = paragraph;
      
      
    },
    
  
},
setup() {
    onMounted(() => {
      const img0 = document.querySelector('.img0');
      const myImg1 = document.querySelector('.myImg1');
      const img1 = document.querySelector('.img1');
      const myImg2 = document.querySelector('.myImg2');
      const img2 = document.querySelector('.img2');
      const myImg3 = document.querySelector('.myImg3');
      const img3 = document.querySelector('.img3');
      const myImg4 = document.querySelector('.myImg4');
      const img4 = document.querySelector('.img4');
      const site = document.querySelector('.site');
      const box = document.querySelector('.box');
      const but1 = document.querySelector('.but1');
      const footer = document.querySelector('.footer');
      
      
      
      
      myImg1.addEventListener('click', () => {
        img0.classList.add('new0');
      });
      myImg1.addEventListener('click', () => {
        img1.classList.add('new1');
      });
      myImg1.addEventListener('click', () => {
        img2.classList.remove('new2');
      });
      myImg1.addEventListener('click', () => {
        img3.classList.remove('new3');
      });
      myImg1.addEventListener('click', () => {
        img4.classList.remove('new4');
      });
      myImg2.addEventListener('click', () => {
        img1.classList.remove('new1');
      
      });
      myImg2.addEventListener('click', () => {
        img0.classList.add('new0');
      
      });
      myImg2.addEventListener('click', () => {
        img3.classList.remove('new3');
      
      });
      myImg2.addEventListener('click', () => {
        img4.classList.remove('new4');
      
      });
      myImg2.addEventListener('click', () => {
        img2.classList.add('new2');
      
      });
      myImg3.addEventListener('click', () => {
        img2.classList.remove('new2');
      
      });
      myImg3.addEventListener('click', () => {
        img0.classList.add('new0');
      
      });
      myImg3.addEventListener('click', () => {
        img1.classList.remove('new1');
      
      });
      myImg3.addEventListener('click', () => {
        img4.classList.remove('new4');
      
      });
      myImg3.addEventListener('click', () => {
        img3.classList.add('new3');
      
      });
      myImg4.addEventListener('click', () => {
        img3.classList.remove('new3');
      
      });
      myImg4.addEventListener('click', () => {
        img0.classList.add('new0');
      
      });
      myImg4.addEventListener('click', () => {
        img2.classList.remove('new2');
      
      });
      myImg4.addEventListener('click', () => {
        img1.classList.remove('new1');
      
      });
      myImg4.addEventListener('click', () => {
        img4.classList.add('new4');
      
      });
      site.addEventListener('click', () => {
        box.classList.add('new6');
      
      });
      but1.addEventListener('click', () => {
        box.classList.remove('new6');
      
      });
      site.addEventListener('click', () => {
        footer.classList.add('new8');
      
      });
      but1.addEventListener('click', () => {
        footer.classList.remove('new8');
      
      });
      services.addEventListener('mouseover', () => {
        hash.classList.add('new12');
      
      });
      services.addEventListener('mouseout', () => {
        hash.classList.remove('new12');
      
      });
      
      
      
     
     
    });

    return {};
  }

}

</script>



<style lang="css">
@import '../css/style.css'
</style>
