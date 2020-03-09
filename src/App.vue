<template>
  <v-app>
    <v-content>
      <!-- <v-img class="background-img" src="https://cdn.pixabay.com/photo/2016/03/04/19/36/beach-1236581_1280.jpg"/> -->
      <v-app-bar dark collapse-on-scroll fixed >
        <a style="color:white;" @click="$router.push({name: 'Home'})">
          <v-icon style="color:white">mdi-home</v-icon>
        </a>
        <v-toolbar-title>
          <a style="color:white;" @click="$router.push({name: 'Home'})">
            <h3>TheVanHoys.com</h3>
          </a>
        </v-toolbar-title>
      </v-app-bar>
      <router-view class="main"/>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'App',

  data: () => ({
    //
  }),
});
</script>

<style lang="scss">
  body{
    margin:0;
  }
  .main{
    padding-top:55px;
  }
  .v-responsive.background-img{
    position: fixed;
    top:0px;
    height:100vh;
    width:100vw;
    opacity: 0.4;
    z-index: 0;
  }
  .v-application{
    min-height: 0px !important;
  }
</style>
