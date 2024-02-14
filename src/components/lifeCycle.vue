<template>
  <div class="life" style="margin-top: 50px">
    <h2>life cycle hooks</h2>
    <p>{{ age }}</p>
    <button @click="age++">inc age</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "asmaa",
      age: 32,
    };
  },

  beforeCreate() {
    alert("before create");
  },
  created() {
    alert("created");
  },
  beforeMount() {
    alert("before mount");
  },
  mounted() {
    alert("mounted");
  },
  beforeUpdate() {
    alert("before update");
  },
  updated() {
    alert("updated");
  },
  beforeUnmount() {
    alert("before unmount");
  },
  unmounted() {
    alert("unmounted");
  },
};
</script>
