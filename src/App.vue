<script setup lang="ts">
import { env } from './types/helper';
import userApis from './apis/user';

const rs = await userApis.login()
console.log(rs.data.token);

  
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
