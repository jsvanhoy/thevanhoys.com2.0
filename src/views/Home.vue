<template>
  <div class="home">
    <v-card class="center" elevation="24">
      <v-parallax height="700" src="@/assets/img/main_pic.jpg"/>
      
      <h1>Jordan</h1>
      <p>
        I currently work for Business Information Systems (BIS) in Piny Flats doing web development.
         My hobbies include power sports, video games, and outdoor activities.
         My current skill-set includes VueJS, Webpack, php, JS, Java, SQL, sass, babel, and Node.js.
         The site you are now seeing was made with VueJS + TypeScript with Vuetify as its front end framework.
      </p>
      <v-parallax height="400" src="https://cdn.pixabay.com/photo/2016/10/18/21/22/california-1751455_1280.jpg"/>
      <h1>Megan</h1>
      <p>
        I currently work at Sullivan East Middle School as a 7th grade Social Studies and Criminal Justice teacher.  
        I also coach softball and volleyball.
        My hobbies include traveling, reading, and outdoor activities.
      </p>
      <v-parallax height="400" src="https://cdn.pixabay.com/photo/2017/03/27/16/50/beach-2179624_1280.jpg"/>
      <h1>Gibson</h1>
      <p>Gibson is a mixed jack russel terrior.
        He enjoys cuddling with his blanket, playing with toys, and eating treats. 
      </p>
      <v-img height="500" contain src="@/assets/img/gibson.jpg"/>
    </v-card>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
}
</script>

<style lang="scss" scoped>
  .v-card{
    margin:50px;
    padding:15px;
    max-width: 1200px;
    margin-left:auto;
    margin-right:auto;
  }
  .center{
    text-align: center;
  }
</style>
