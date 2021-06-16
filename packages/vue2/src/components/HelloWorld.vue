<template>
  <div class="hello">
    <h1>Vue 2</h1>
    <h1>{{ msg }}</h1>
    <div id="vue3"></div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import hello from "core/Hello";

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;

  async mounted() {
    const comp =  hello("#vue3",{msg:'test'});
    console.log(comp.$el);
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
