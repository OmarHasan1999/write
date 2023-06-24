<template lang="html">
  
    <div class="main">
    <header>
        <h2 class="firstHeader">CNN-NEWS</h2>
        <nav class="navbar">
            <a href="#">Home</a>
            <a href="#">Services</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
            <button class="firstButton">Login</button>
        </nav>
    </header>
    <div class="project">
        <span class="close"><i class="fa-sharp fa-solid fa-xmark"></i></span>
        <div class="firstForm">
            <h2>Sign in</h2>


            <form action="#">
                <div class="input">
                    <span class="icon"><i class="fa-solid fa-envelope"></i></span>
                    <input type="text">
                    <label>Email</label>
                </div>
                <div class="input">
                    <span class="icon"><i class="fa-solid fa-lock"></i></span>
                    <input type="password">
                    <label>Password</label>
                </div>



                <div class="check">
                    <label><input type="checkbox">Remember me</label>
                    <a href="#">Forgot Password?</a>
                 </div>
                 <button class="secondButton" type="submit" value="submit">Login</button><br><br>
                 <span class="message">Please enter your data.</span>
                 <div class="submit">
                    <p>Don't have an account?<a href="#" class="link">Register</a></p>
                 </div>
            </form>
        </div>
    </div>
    </div>
    


</template>


<script>


import { onMounted } from 'vue';


export default {
    setup(){
      onMounted(() => {
        const firstButton = document.querySelector('.firstButton');
        const project = document.querySelector('.project');
        const close = document.querySelector('.close');

        firstButton.addEventListener('click',() => {
          project.classList.add('form');
        });
        close.addEventListener('click',() => {
          project.classList.remove('form');
        });
      });
      return{};
    },
    
    
    
}



</script>


<style lang="css">
@import '../css/form.css' 

</style>
