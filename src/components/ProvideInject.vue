<template>
  <div class="prov-inj">
    <h1>provide inject component</h1>
    <h2>name is {{ name }} my age is {{ age }}</h2>
    <button @click="myFunction">click</button>
  </div>
</template>

<script>
export default {
  //props: {
  //name: {
  //type: String,
  //},
  //},
  inject: ["name", "age", "myFunction"],
};
</script>
