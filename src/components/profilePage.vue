<template>
    <div class="main-container">

    <!--header design-->

    <header class="header">
        <a href="" class="logo">Portfolio.</a>
        <nav class="navbar">
            <a href="#home" class="active">Home</a>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#contact">Contact</a>
        </nav>

        <div class='bx bx-moon' id="darkMode"></div>

        <div class='bx bx-menu' id="menu-icon"></div>
    </header>

    <!--########################################################-->
    <!--########################################################-->
    <!--########################################################-->
    <!--home section design-->

    <section class="home" id="home">
        <div class="home-content">
            <h3>Hello, I am</h3>
            <h1>Mark Franklin</h1>
            <p>I have a very much experience in HTML/CSS,Javascript,jQuery and Joomla. I am Joomla developer in pune able to make any website.
                I am expert in HTML/CSS and applying Javascript-jQuery and modification also ..</p>

            <div class="sosial-links">
                <a href="#"><i class='bx bxl-facebook'></i></a>
                <a href="#"><i class='bx bxl-instagram-alt'></i></a>
                <a href="#"><i class='bx bxl-twitter' ></i></a>
                <a href="#"><i class='bx bxl-linkedin' ></i></a>
            </div>

             <!---<router-link class="cv" to="/services">Download CV</router-link>-->
             <a href="#" class="cv">Download CV</a>
        </div>

        <div class="profesyonel-container">
            <div class="profesyonel-box" style="--i:0;">
                <div class="profesyonel">
                    <i class='bx bx-code-alt'></i>
                    <h3>Developer</h3>
                </div>

                <div class="profesyonel" style="--i:1;">
                    <i class='bx bx-camera'></i>
                    <h3>Photograph</h3>
                </div>

                <div class="profesyonel" style="--i:2;">
                    <i class='bx bx-palette'></i>
                    <h3>Designer</h3>
                </div>

                <div class="profesyonel" style="--i:3;">
                    <i class='bx bx-video-recording'></i>
                    <h3>Graphic</h3>
                </div>

                <div class="circle"></div>
            </div>

          <div class="overlay"></div>
            
            
        </div>

        <div class="first-img">
        <img src="../assets/148154-standing-photos-smiling-business-man.png">
        </div>
    </section>

    <!--&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
    &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
    &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
    &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&-->
    <!--about section design-->

    <section class="about" id="about">

        <div class="about-img">
            <img src="../assets/kisspng-photography-clip-art-looking-up-5b475739b57950.9729867115314020417433.png">
        </div>

        <div class="about-section">
            <h2 class="heading">About<span>Me</span></h2>
            <h3>Hi, I Am Here To Help Your Next Project!</h3>
            <p>I’ve been a web developer for three years, and 
                it’s always been my dream to work in
                this field. I am passionate about creating beautiful
                websites that are easy to use and understand
            </p>
            <a href="#" class="cv">Read More</a>
        </div>

    </section>

    <!--$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$-->
<!--$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$-->
<!--$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$-->
<!--services section design-->

<section id="services" class="services">
   <h2 class="heading">My<span>Services</span></h2>

   <div class="services-container">

       <div class="services-box">
            <i class='bx bx-code-alt'></i>
            <h3>Web Development</h3>
            <p> 250+ businesses use the websites we’ve created for corporate presentation and brand building. 
                 We make sure our websites have an easy-to-use page editor</p>
            <a href="#" class="cv">Read More</a>
       </div>

       <div class="services-box">
            <i class='bx bxs-paint'></i>
            <h3>Graphic Designer</h3>
            <p> Get original designs for your social media channels.
                 energize your marketing with a fully-stacked team of 
                 designers producing the best social media creative</p>
            <a href="#" class="cv">Read More</a>
       </div>

       <div class="services-box">
            <i class='bx bx-bar-chart-alt'></i>
            <h3>Digital Marketing</h3>
            <p> Ready to expand and market to your audiences on social media? 
                We build social media campaigns to help your business grow and
                engage your followers</p>
            <a href="#" class="cv">Read More</a>
       </div>
   </div>  
</section>

<!--$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$*/
/*$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$-->
<!--portfolio section design-->

<section class="portfolio" id="portfolio">
    <h2 class="heading">Latest <span>Project</span></h2>

    <div class="portfolio-container">

        <div class="portfolio-box">
            <img src="../assets/christopher-gower-vjMgqUkS8q8-unsplash.jpg">
            <div class="layer">
                  <h4>Web Design</h4>
                  <p>energize your marketing with a fully-stacked team of 
                     designers producing the best social media creative</p>
                  <a href="#"><i class='bx bx-link-external'></i></a>
            </div>
        </div>

        <div class="portfolio-box">
            <img src="../assets/igor-son-Nod1nQ0i5a0-unsplash.jpg">
            <div class="layer">
                  <h4>Web Design</h4>
                  <p>energize your marketing with a fully-stacked team of 
                     designers producing the best social media creative</p>
                  <a href="#"><i class='bx bx-link-external'></i></a>
            </div>
        </div>

        <div class="portfolio-box">
            <img src="../assets/laptop-2559792_1280.jpg">
            <div class="layer">
                  <h4>Web Design</h4>
                  <p>energize your marketing with a fully-stacked team of 
                     designers producing the best social media creative</p>
                  <a href="#"><i class='bx bx-link-external'></i></a>
            </div>
        </div>

        <div class="portfolio-box">
            <img src="../assets/5375224-tech-setup-desk-iphone-minimal-phone-laptop-headphone-minimalist-technology-work-desk-work-space-desk-top-home-office-equipment-cell-phone-white-space-mi.jpg">
            <div class="layer">
                  <h4>Web Design</h4>
                  <p>energize your marketing with a fully-stacked team of 
                     designers producing the best social media creative</p>
                  <a href="#"><i class='bx bx-link-external'></i></a>
            </div>
        </div>

        <div class="portfolio-box">
            <img src="../assets/5407295-laptop-work-apple-watch-woman-caucasian-business-woman-businesswoman-working-typing-hand-ring-desk-apple-watch-pink-female-hands-tech-technology-deks-des.jpg">
            <div class="layer">
                  <h4>Web Design</h4>
                  <p>energize your marketing with a fully-stacked team of 
                     designers producing the best social media creative</p>
                  <a href="#"><i class='bx bx-link-external'></i></a>
            </div>
        </div>

        <div class="portfolio-box">
            <img class="end-img" src="../assets/5410280-office-office-space-office-desk-white-white-speaker-speaker-mug-lifestyle-desk-workspace-apple-woofer-mac-computer-imac-music-mp3-technology-sound-audio-.jpg">
            <div class="layer">
                  <h4>Web Design</h4>
                  <p>energize your marketing with a fully-stacked team of 
                     designers producing the best social media creative</p>
                  <a href="#"><i class='bx bx-link-external'></i></a>
            </div>
        </div>

    </div>

</section>
<!--$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$*/
/*$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
/*$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$-->
<!--testimonial design-->

<div class="testimonial-container">
    <h2 class="heading">Valuable <span>Testimonial</span></h2>

    <div class="Testimonial-wrapper">
        <div class="Testimonial-box">
            <div class="Testimonial-content">

                <swiper
                :slidesPerView="1"
                :centeredSlides="false"
                :slidesPerGroupSkip="1"
                :grabCursor="true"
                :spaceBetween="50"
                :keyboard="{
                  enabled: true,
                }"
                :breakpoints="{
                  '769': {
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                  },
                }"
                :scrollbar="true"
                :navigation="true"
                :pagination="{
                  clickable: true,
                }"
                :modules="modules"
                class="mySwiper">
                
            <swiper-slide class="swiper-slide">
            <div class="Testimonial-slide">
                    
                    <img src="../assets/smile-profile-face-male-preview.jpg">
                    <h3>Louis Lamela</h3>
                    <p>
                         I am dedicated to staying up-to-date with the latest technologies and industry trends. Every day,
                          I actively seek new information and invest time in learning the technologies that are essential 
                          to the web industry.
                         My focus is on providing creative solutions that enhance user experiences. I believe in the power of 
                         effective design and seamless functionality to deliver impactful digital experiences. By closely following
                          industry innovations and analyzing trends, I ensure that I integrate the latest advancements into my projects</p>
                        
                </div>
                </swiper-slide>
              
              <swiper-slide class="swiper-slide">
              <div class="Testimonial-slide">
                
                 <img src="../assets/eD2VQkJj_400x400.jpg">
                 <h3>Lionel Andres</h3>
                 <p>I am a self-taught web developer with a passion for building
                     beautiful and functional websites. I am currently in the process
                      of acquiring the skills and knowledge necessary to become a proficient 
                      web developer, and I am constantly seeking out new opportunities to grow
                       and improve.

                     In the Projects section, you will find a collection of my projects and 
                     experiments as I navigate through
                     the world of web development.

                      I am excited to see where my journey in web development takes me, 
                      and I am always open to connecting
                      with others in the industry to learn and grow together</p>
                    
               </div>
               </swiper-slide>
               
               <swiper-slide class="swiper-slide">
               <div class="Testimonial-slide">
                  
                   <img src="../assets/photo-1591084728795-1149f32d9866.jpg">
                   <h3>Jolyan Grayson</h3>
                   <p>Hi! My name is Burak, and I am a highly disciplined and experienced web developer. 
                    With over 16 years in the field, I have a deep understanding of the web development
                     process and a passion for delivering exceptional results. I am committed to staying
                      organized and focused, and I believe that discipline is key to delivering high-quality work. 
                      I approach each project with a systematic and methodical approach, ensuring that every
                       aspect of the project is thoroughly thought out and executed with precision. 
                       If you're looking for a reliable and dedicated web developer, I would be
                        honored to work with you and bring your vision to life</p>
                      
               </div>
               
               </swiper-slide>
               
               
            </swiper>

            </div>

        </div>
    </div>


</div>
<!--$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$*/
$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$*/
/*$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$-->

<!--contact section design-->

<section class="contact" id="contact">
    <h2 class="heading">Contact <span>Me</span></h2>

    <form action="#" @submit.prevent="submitForm">
        <div class="input-box">
            <input type="text" placeholder="First Name" v-model="firstName">
            <input type="text" placeholder="Last Name" v-model="lastName">
        </div>
        <div class="input-box">
            <input type="text" placeholder="Mobile Number" v-model="mobileNumber">
            <p style="color:white">TF</p>
            
            <input type="password" placeholder="Password" ref="passwordInput" v-model="passwordNumber">
            <span  class="eye" @click="display"><i :class='eyeIcon'></i>
            </span>
            
            

        </div>
        <textarea type="text" cols="30" rows="10" placeholder="Your Message" v-model="message"></textarea>
        <input type="submit" value="Send Message" class="cv" id="submitButton">
    </form>
<!--====================================================================
=====================================================================-->

    <div class="successMsg">
    <ul class="notification">
        <li class="toast success">
            <div class="column">
                <i class='bx bxs-check-circle' id="check"></i>
                <span class="write">SENT SUCCESSFULLY</span>
            </div>
                <i class='bx bx-x' id="close"></i>
        </li>
    </ul>
    </div>

</section>

<!--***********************************************************
****************************************************************
************************************************************-->
<!--footer design-->

<footer class="footer">
    <div class="footer-text">
         <p>Copyright &copy; 2023 By w3school | All Rights Recerved</p>
    </div>

    <div class="footer-icon">
         <a href="#home"><i class='bx bx-up-arrow-alt' ></i></a>
    </div>

</footer>



     

     </div>
</template>



<script>
 import { Swiper, SwiperSlide } from 'swiper/vue';
 import 'swiper/css';
 import 'swiper/css/scrollbar';
 import 'swiper/css/navigation';
 import 'swiper/css/pagination';
 import ScrollReveal from 'scrollreveal';
 import { Keyboard, Scrollbar, Navigation, Pagination } from 'swiper/modules';


export default { 
  mounted() {
    let header = document.querySelector('.header');
    let navLinks = document.querySelectorAll('header nav a');
    let sections = document.querySelectorAll('section');
    let menuIcon = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');
    let darkMode = document.querySelector('#darkMode');
 
    

    
   /***menu icon navbar****/
    menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('navbar2');
  }
  
  /***dark light mode****/
  darkMode.onclick = () => {
    darkMode.classList.toggle('bx-sun');
    document.body.classList.toggle('darkModeColor');
    
  }

    window.onscroll = () => {

        header.classList.toggle('sticky',window.scrollY > 100);
                      /***sticky navbar****/
    

      sections.forEach(sec => { /*scroll section active link*/
      
      let top = window.scrollY;
      let offset = sec.offsetTop - 150;
      let height = sec.offsetHeight;
      let id = sec.getAttribute('id');

      if( top >= offset && top < offset + height ){
        navLinks.forEach(links => {
          links.classList.remove('active');
          document.querySelector('header nav a[href *= ' + id + ']').classList.add('active');
        })

      }
    });
     
    /****remove menu icon navbar when click navbar link(scroll)***/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('navbar2');
     
    
    
    },
     
    /****scroll reveal*****/   
    ScrollReveal({ 
   //reset: true,
    distance: '80px',
    duration:2000,
    delay:200
   });

   ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
   ScrollReveal().reveal(
    '.first-img img, .services-container, .portfolio-box, .Testimonial-wrapper, .contact form',
    { origin: 'bottom' });
    ScrollReveal().reveal('.home-content h1, .about-img img', { origin: 'left' });
    ScrollReveal().reveal('.home-content h3, .home-content p, .about-section', { origin: 'right' });
     
  },

  
  components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      return {
       modules: [Keyboard, Scrollbar, Navigation, Pagination],
      };
      
      
    },
    
    data() {
        return {
            firstName: '',
            lastName: '',
            mobileNumber:'',
            passwordNumber:'',
            message: '',
            showPassword: false
            
        }
    },
    methods: {
        submitForm(){
            if( this.firstName.trim() === '' ||
                this.lastName.trim() === ''  ||
                this.mobileNumber.trim() === '' ||
                this.passwordNumber.trim() === '' || 
                this.message.trim() === ''   )
            {
                alert("Please Fill in The Empty Fields");
                return;
            }
            if ( !/^\d{5}$/.test(this.mobileNumber.trim()) ) {
                alert('The Phone Number Must Consist Of Five Numbers');
                return;
            }
            if ( !/^[a-zA-Z]{5}$/.test(this.passwordNumber.trim()) ){
                 alert('Please The Password is Consist Five Letters');
                 return;
            }

           //**show notification box***/   
             let notification = document.querySelector(".notification");
             let closeIcon = document.querySelector("#close");

             notification.classList.add('new');
             setTimeout(() => {    
                 notification.classList.remove('new')},
                 4000);
                 closeIcon.addEventListener('click',()=>{ 
                 notification.classList.remove('new');
                })

            this.firstName = '',
            this.lastName = '',
            this.mobileNumber = '',
            this.passwordNumber = '',
            this.message = ''     
        },


        /**show Hide password***/
        
           display() {
           this.showPassword = !this.showPassword;
           const Input = this.$refs.passwordInput;
           Input.type = this.showPassword ? 'text' : 'password';
    },

  },

  computed: {
    eyeIcon() {
      return this.showPassword ? 'bx bx-show' : 'bx bxs-low-vision';
    }
  },

  
  
};

</script>

<style lang="css">
    
</style>