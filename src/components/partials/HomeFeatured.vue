<template>
    
 
  <div class="feat1">
        <h3 class="feat2">Featured Recipes</h3>
        <div class="feat3">
         <recipe-cards v-for="(item,index) in recipes" :key="index" :recipe="item"/>
        </div>
        <div class="feat4">
           <router-link to="/recipes" class="feat5">See More Recipes</router-link>
        </div>
    </div>
</template>
<script setup>
import RecipeCards from '../cards/RecipeCards.vue';

import recipesData from '../../data/recipes.json'
let recipes = recipesData.meals;
</script>
