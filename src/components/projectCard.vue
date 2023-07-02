<template lang="html">
    <div class="main-container2">
      
        <div class="project-card"
              v-for="(items, index) in projectData.myArray" v-bind:key="items">
          <h2>{{ projectData.myArray[index].title }}</h2>
          <img :src="projectData.myArray[index].image ">
          <p>{{ projectData.myArray[index].about }}</p>
          
          <div class="links2">
             <a :href="projectData.myArray[index].link1" target="_blank">
                <img class="github" src="../assets/github-icon-38970.png" ></a>
             <a :href="projectData.myArray[index].link2" target="_blank">
                <img class="linked" src="../assets/linkedin-logo-png-2025.png"></a>
          </div>
        </div>

    </div>
</template>


<script>
import jsonData from '../../json/project.json'

export default {
    data(){
        return{
            projectData : jsonData
        }
    }
}
</script>


<style lang="css">
@import "../css/projectCard.css"
</style>