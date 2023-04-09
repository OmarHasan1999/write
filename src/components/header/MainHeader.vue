<template>
    
    <header class="main">

<nav class="navbar">
   <router-link to="/">
       <h1 class="hash">Food<span class="sp">Mood</span></h1>
   </router-link>

   <div class="list">
       <router-link to="/" class="link2">Home</router-link>
       <router-link to="/about" class="link2">About</router-link>
       <router-link to="/recipes" class="link2">Recipes</router-link>
       <router-link to="/download" class="link2">Download</router-link>
       <router-link to="/contact" class="link2">Contact</router-link>
   </div>
   

   <div class="sec">
       <label class="for">
       <span class="sear">search</span>
       <span class="box"><i class="fa-solid fa-magnifying-glass"></i></span>
       <input placeholder="Search for recipes.." class="form" name="search" type="text">
       </label>

   </div>
</nav>


</header>


<button onclick="myfun()">click</button>
<p id="my">hello</p>

</template>

<script>
 import myfun from './js/newFile'
</script>
<style lang="">

</style>
    
    






    




