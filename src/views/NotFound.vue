<template>
  <div class="not-found">
    <h2>page not found</h2>
    <button>
      <router-link :to="{ name: 'my_main' }">back to home page</router-link>
    </button>
  </div>
</template>
