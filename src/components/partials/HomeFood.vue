<template>
    <div class="h25">
        <h3 class="h26">
      Recipe of The Moment <span>😉</span>
      <span>😟</span>
        </h3>
        <div class="h27">
            <div class="h28">
                <h4 class="h29">Recipe Name</h4>
                <div class="h30">
                <p class="h31"> Instructions:</p>
            
          <p class="h32">
            To be soft and to be like that is not the desire of the people, there is no
             desire to leave them for their own good ...
          </p>
        </div>
       
        <div class="h33">
            <router-link class="h34" :to="{ name:'category',params:{ name:'category-1'} }">Category 1</router-link>
        </div>
            <router-link class="h35" :to="{ name:'detail',params:{ id:`category-1`}}">More Recipe Detaile</router-link>
        </div>
        <div class="h36">
            <img src="../../assets/food/chicken-g754ef9688_640.jpg" class="h37">

        </div>
    </div>
</div>
</template>


<script setup>
</script>
