<script setup lang="ts">
import { env } from './types/helper';

  const response = await fetch('http://localhost:5173/api/info').then(r=>r.json())
  console.log(response,"@@");
  
</script>

<template>
  <div>
    <ul class="bg-red-50">
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<style scoped>
  ul{
  }
</style>
