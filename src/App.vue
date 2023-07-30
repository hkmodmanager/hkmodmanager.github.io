<template>
  <!--Navbar-->
  <nav class="navbar navbar-expand-lg bg-body-tertiary" v-if="shouldShowNavbar">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">
        <img src="@/assets/logo.svg" class="d-inline-block align-text-top logo-svg" style="width: 1.5em; height: 2.5em">
      </router-link>
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav w-100" 
          style="font-size: 1.5em;justify-content:space-between">
          <li class="nav-item">
            <a class="nav-link"></a>
          </li>
          <li class="nav-item" v-if="supportOS">
            <a class="nav-link"
            href="https://github.com/hkmodmanager/HKModManager/releases/latest">{{ $t('nav.download') }}</a>
          </li>
          <li class="nav-item">
            <a class="nav-link"
              href="https://discord.gg/hkmodding">
              <i class="bi bi-discord" /> <small>Discord</small>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" 
              href="https://github.com/hkmodmanager/HKModManager">
              <i class="bi bi-github"/> <small>Repository</small></a>
          </li>
        </ul>

      </div>
    </div>
  </nav>
  <div class="app">
    <router-view />
  </div>
  
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
import { supportOS } from './main';
const shouldShowNavbar = (window as any).isEmbedded != true;

</script>
