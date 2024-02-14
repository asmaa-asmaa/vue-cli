<template>
  <nav class="my-nav">
    <div class="logo">
      <img @click="emitEvent" src="@/assets/landing.png.jpg" alt="" />
    </div>
    <div class="links">
      <ul>
        <li v-for="(link, i) in links" :key="i">{{ link }}</li>
      </ul>
      <ul>
        <li>
          <router-link to="/about">hee</router-link>
        </li>
        <li>
          <router-link to="/profile">profile</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'my_main' }">home</router-link>
        </li>
      </ul>
      <ul>
        <li v-for="link in myRoutes" :key="link.name">
          <!--<router-link :to="link.path">{{ link.meta.title }}</router-link>-->
          <router-link
            v-if="link.name != 'my_profile'"
            :to="{
              name: link.name,
              params: { userid: 150, username: 'asmaa' },
              query: { age: 32, gender: 'female', grade: 'fourth-grade' },
            }"
            >{{ link.meta.title }}</router-link
          >
          <router-link v-else :to="{ name: link.name }">{{
            link.meta.title
          }}</router-link>
        </li>
      </ul>
    </div>
    <div class="btns">
      <button>log in</button>
      <button>sign up</button>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      logo: "my logo",
      links: ["link one", "link two", "link three"],
      myRoutes: [],
    };
  },
  mounted() {
    this.myRoutes = this.$router.options.routes;
  },
  inject: ["emitter"],
  methods: {
    emitEvent() {
      this.emitter.emit("globalEvent", this.logo);
    },
  },
};
</script>

<style scoped>
.my-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #ddd;
  box-shadow: 0px 0px 9px -3px black;
}
ul {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  list-style: none;
}
img {
  width: 100px;
}
button {
  background-color: rgb(79, 121, 79);
  color: white;
  padding: 5px 10px;
}
</style>
