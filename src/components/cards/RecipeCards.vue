<template>
    <router-link to="/recipes/1" class="card1">
        <div class="card2">
            <img :src="recipe.strMealThumb" class="card3">
        </div>
        <div class="card4">
            <h4 class="card5">{{ recipe.strMeal }}</h4>
            <router-link :to="{ name:'detail',params:{id :`sss`}}" class="card6">
            See Recipe Details</router-link>
        </div>

    </router-link>
    
</template>

<script>
export default{
    props:['recipe'],
    
}

</script>

