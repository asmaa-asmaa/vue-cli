<template>
  <div class="about">
    <h2>this is about page</h2>
    <MyCont :students="students" />
    <!--<ul>
      <li v-for="st in mixstudents" :key="st.id">
        <p>name: {{ st.name }}</p>
        <p>age: {{ st.age }}</p>
      </li>
    </ul>-->
    <input type="text" name="" v-model="userName" />
    <input type="text" name="" v-model="userData.name" />

    <button @click="isActive = !isActive">change active</button>
    <h3>username is {{ userName }}</h3>
    <h4>user status is {{ isActive }}</h4>
    <button @click="MyArr.push('new data')">add to arr</button>
  </div>
</template>

<script>
import MyCont from "@/components/MyContent.vue";

//import stMixin from "@/mixins/stMixin.js";

export default {
  components: {
    MyCont,
  },
  //mixins: [stMixin],

  data() {
    return {
      userName: "",
      isActive: false,
      userData: {
        name: "asmaa",
        age: 29,
      },
      MyArr: [],

      students: ["asmaa", "mahmoud", "iman", "yasmine"],
    };
  },
  watch: {
    userName(newVal, oldVal) {
      console.log("newvalue:", newVal);
      console.log("oldvalue:", oldVal);
    },
    isActive(newVal, oldVal) {
      console.log("newvalue:", newVal);
      console.log("oldvalue:", oldVal);
    },
    "userData.name"(newVal, oldVal) {
      console.log("newvalue:", newVal);
      console.log("oldvalue:", oldVal);
    },
    MyArr: {
      handler(newVal) {
        console.log("new:", newVal);
      },
      deep: true,
    },
    userData: {
      handler(newVal) {
        console.log("new:", newVal);
      },
      deep: true,
    },
  },
};
</script>

