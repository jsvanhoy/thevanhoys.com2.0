<template>
  <v-app>
    <v-content>
      <v-app-bar
        dark
        fixed
        >
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

<style scoped lang="scss">
  .main{
    padding-top:55px;
  }
</style>
