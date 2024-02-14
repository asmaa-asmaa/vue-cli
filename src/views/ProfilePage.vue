<template>
  <div class="profile">
    <!--<h1>this is profile page</h1>
    <h2>{{ $route.params.userid }}</h2>
    <h3>{{ $route.params.username }}</h3>
    <h4>{{ $route.query.age }}</h4>
    <h5>{{ $route.query.gender }}</h5>-->

    <h1>this is profile page</h1>
    <h2>{{ $route.params.username }}</h2>
    <hr />
    <ul
      style="
        list-style: none;
        display: flex;
        justify-content: center;
        gap: 20px;
      "
    >
      <li>
        <router-link :to="{ name: 'MyLearning' }">my learning</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'MyWishlist' }">my wishlist</router-link>
      </li>
    </ul>
    <hr />
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  // mounted() {
  // console.log(this.$route);
  //console.log(this.$route.query.grade);
  //},
};
</script>
