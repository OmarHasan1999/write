<template lang="html">
  <div>
     <PageNotFound/>
     
  </div>
   
</template>
  
<script>
import PageNotFound from './views/PageNotFound.vue';


 
 
  export default {
    name: 'App',
    components : {
      PageNotFound
    },
    


}  
    
</script>
  
  <style lang="css">
  
  body{
    margin: 0px;
    margin-bottom: 0px;
    margin-top: 20px;
  }

      #app{
        text-align: center;
        font-family: Arial, Helvetica, sans-serif,Arial;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing:grayscale;
        color: #2c3e50;
        background-color: #d6edff;
        
      }
      html{
        background-color: #d6edff;
      }
  
  </style>
  