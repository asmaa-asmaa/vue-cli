<template>
  <div class="my-main">
    <TheNav />
    <the-nav></the-nav>
    <MyHeading />
    <h2>this is my main page</h2>
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque iure earum
      possimus eos perferendis fugit. Magnam reprehenderit, quidem temporibus
      suscipit maxime, at repellat neque quibusdam laboriosam odit sit
      doloremque rem!
    </p>
    <div class="container" v-containerWidth="50">
      <p v-maxSize="20" v-changeColor="'blue'">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat totam
        ipsa, inventore minima accusamus eligendi exercitationem sed aliquam
        illum atque vitae, iure cupiditate adipisci nesciunt doloremque
        laudantium error eius laborum.
      </p>
      <!--<ul>
        <input type="search" v-model="search" />
        <li v-for="st in searchSt" :key="st.id">
          <li v-for="st in getOldst" :key="st.id">

          <li v-for="st in mixstudents" :key="st.id">

          <p>name: {{ st.name }}</p>
          <p>age: {{ st.age }}</p>
        </li>
      </ul>-->
    </div>
    <MyCont
      :students="students"
      @updateActive="changeActive($event)"
      :isActive="isActive"
    />
    <hr />
    <MyCont
      :students="students"
      @updateActive="changeActive($event)"
      :isActive="isActive"
    />

    <LifeCycle />
    <keep-alive>
      <my-slot :name="name" v-if="!MyComp2">
        <template #slotTitle>
          <h3>this is slot title one</h3>
          <input type="text" placeholder="enter your name" />
          <input type="password" placeholder="enter your password" />
        </template>
        <template #slotPara>
          <p>this is slot paragraph one</p>
        </template>

        <div>hello guys</div>
        <p>the best of the best</p>
      </my-slot>
    </keep-alive>
    <hr />
    <keep-alive>
      <my-comp-2 name="mohamed" v-if="MyComp2">
        <template #slotTitle>
          <h3>this is slot title two</h3>
          <input type="text" placeholder="enter your name" />
          <input type="password" placeholder="enter your password" />
        </template>
        <template #slotPara>
          <p>this is slot paragraph two</p>
        </template>

        <div>hello guys</div>
        <p>the best of the best</p>
      </my-comp-2>
    </keep-alive>
    <button @click="MyComp2 = !MyComp2">toggle data</button>
    <hr />

    <MyForm />
    <MyForm2 />
    <!--<MyForm3 />-->
    <h4>my name is {{ fullName }}</h4>
    <h5>total nums: {{ calcNums }}</h5>
    <!--<button @click="$router.push('/profile')">click me</button>-->
    <button @click="$router.push({ name: 'about_page' })">click me</button>
    <button @click="routerFunc">click two</button>

    <button @click="getSt">get students</button>

    <ul>
      <li v-for="st in routestudents" :key="st.id">
        <p>id: {{ st.id }}</p>
        <p>name: {{ st.name }}</p>
        <p>age: {{ st.age }}</p>
        <p>grade: {{ st.grade }}</p>
        <button
          @click="toProfile('my_profile', st.id, st.name, st.age, st.gender)"
        >
          view profile
        </button>
        <hr />
      </li>
    </ul>
    <!--<ProvideInj name="asmaa mohamed" />-->
    <ProvideInj />
    <h5>age from parent mymain.vue is {{ age }}</h5>
    <button @click="age++">inc age</button>

    <h6>logo is {{ logo }}</h6>
  </div>

  <!--<div class="products">
    <ul>
      <li v-for="product in roducts" :key="product.id">
        <p>title: {{ product.title }}</p>
        <p>brand: {{ product.brand }}</p>
        <p>category: {{ product.category }}</p>
        <p>description: {{ product.description }}</p>
        <p>price: {{ product.price }}</p>
        <p>rating: {{ product.rating }}</p>
        <p>stock: {{ product.stock }}</p>
        <img :src="product.thumbnail" width="100" alt="" />
        <hr />
      </li>
    </ul>
  </div>-->
</template>

<script>
//import TheNav from "@/components/MyNav.vue";
import MyHeading from "@/components/MyHeading.vue";
import MyCont from "@/components/MyContent.vue";
import LifeCycle from "@/components/lifeCycle.vue";
import MySlot from "@/components/MyComponent.vue";
import MyComp2 from "@/components/MyComponent.vue";
import MyForm from "@/components/MyForm.vue";
import MyForm2 from "@/components/ModelV.vue";
//import MyForm3 from "@/components/FoRequest.vue";
//import stMixin from "@/mixins/stMixin.js";
import ProvideInj from "@/components/ProvideInject.vue";
export default {
  //name: "MyMain",
  // mixins: [stMixin],
  // mounted() {
  // console.log(this.$router);
  //console.log(this.$router.hasRoute("about_page"));
  //if (this.$router.hasRoute("about_page")) {
  // console.log("this route is exist");
  //}
  //console.log(this.$route);
  //if (this.$router.hasRoute(this.$route.name)) {
  //console.log("route exists");
  //}
  //},

  directives: {
    containerWidth(el, order) {
      el.style.maxWidth = order.value + "%";
      el.style.marginRight = "auto";
      el.style.marginLeft = "auto";
    },
  },
  components: {
    //   TheNav,
    MyHeading,
    MyCont,
    LifeCycle,
    MySlot,
    MyComp2,
    MyForm,
    MyForm2,
    //MyForm3,
    ProvideInj,
  },
  data() {
    return {
      students: ["ahmed", "asmaa", "samy", "mahmoud", "mohamed"],
      isActive: true,
      name: "asmaa",
      MyComp2: false,
      roducts: [],
      //mixstudents: [],
      firstName: "asmaa",
      lastName: "mohamed",
      myArray: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      search: "",
      routestudents: [],
      age: 32,
      logo: "",
    };
  },
  //computed: {
  //fullName() {
  // return `${this.firstName} ${this.lastName}`;
  //},
  //calcNums() {
  // return this.myArray.reduce((acc, cur) => acc + cur);
  // },
  // getOldst() {
  // return this.mixstudents.filter((st) => st.age >= 14);
  //},
  //searchSt() {
  // return this.mixstudents.filter((st) => st.name.match(this.search));
  // },
  //},
  methods: {
    changeActive(data) {
      this.isActive = data;
    },
    routerFunc() {
      //this.$router.go(1);
      this.$router.go(-1);
      //this.$router.replace({ name: "about_page" });
    },
    //async getStudents() {
    //await fetch("https://course-backend.onrender.com/")
    // .then((res) => res.json())
    // .then((data) => (this.mixstudents = data));
    // },

    //  async getProducts() {
    //  await fetch("https://dummyjson.com/products")
    //   .then((res) => res.json())
    //   .then((data) => (this.roducts = data.products));
    //},

    async getSt() {
      await fetch("https://course-backend.onrender.com/")
        .then((res) => res.json())
        .then((data) => console.log((this.routestudents = data)));
    },
    toProfile(view, id, userName, age, gender) {
      this.$router.push({
        name: view,
        params: { userid: id, username: userName },
        query: { age: age, gender: gender },
      });
    },
    sayHi() {
      console.log("hi");
    },
  },
  // async mounted() {
  //   await this.getProducts();
  // },

  //async mounted() {
  // await this.getStudents();
  //},

  //provide: {
  //name: "asmaa mohamed",
  //},
  provide() {
    return {
      name: this.name,
      age: this.age,
      myFunction: this.sayHi,
    };
  },
  inject: ["emitter"],
  //mounted() {
  //this.emitter.on("globalEvent", () => {
  //console.log("global event fired");
  //});

  //mounted() {
  //this.emitter.on("globalEvent", (data) => {
  //console.log(data);
  //});
  //},
  mounted() {
    this.emitter.on("globalEvent", (data) => {
      this.logo = data;
    });
  },
};
</script>
<style scoped lang="scss">
.my-main {
  h2 {
    color: red;
  }
  p {
    color: green;
  }
}
</style>
