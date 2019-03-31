<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Button>test</Button>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';
import Vue from 'vue';
import { Select, Button } from 'element-ui';
import { HelloWorld } from '@aaronchenwei/common';

Vue.component(HelloWorld.name, HelloWorld);
Vue.component(Select.name, Select);
Vue.component(Button.name, Button);

export default {
  name: 'home',
  // components: {
  //   HelloWorld,
  // },
};
</script>
