<template>
  <!--Navbar-->
  <nav class="navbar navbar-expand-lg bg-body-tertiary" v-if="shouldShowNavbar">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">
        <img src="@/assets/logo.svg" class="d-inline-block align-text-top logo-svg" style="width: 2.5em; height: 2.5em">
      </router-link>
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" to="/about">About</router-link>
          </li>
        </ul>

      </div>
    </div>
  </nav>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>

<script setup lang="ts">

const shouldShowNavbar = (window as any).isEmbedded != true;

</script>
