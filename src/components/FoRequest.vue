<template>
  <div class="my-form3">
    <form action="" @submit.prevent="addStudent">
      <div>
        <label for="firstName">first name</label>
        <input v-model="student.name" type="text" name="firsttName" />
      </div>

      <div>
        <label for="age">age</label>
        <input v-model="student.age" type="number" name="age" />
      </div>
      <div>
        <label for="male">male</label>
        <input type="radio" v-model="student.gender" value="male" name="male" />
        <label for="female">female</label>
        <input
          type="radio"
          v-model="student.gender"
          value="female"
          name="female"
        />
      </div>
      <div>
        <label for="">favorite sports</label>
        <input type="text" v-model="sport" />
        <button @click="addSport" type="button">add sport</button>
        <div style="margin-left: 50px; margin-top: 10px">
          <span
            style="margin-right: 10px"
            v-for="(sport, i) in student.sports"
            :key="i"
            >{{ sport }}</span
          >
        </div>
      </div>

      <div>
        <h3>grade</h3>
        <select v-model="student.grade" name="grade" id="grade">
          <option value="one">one</option>
          <option value="two">two</option>
          <option value="three">three</option>
        </select>
      </div>
      <input type="submit" value="add" />
      <div>
        <h3>update student</h3>
        <label for="">age</label>
        <input type="number" v-model="changeAge" />
        <label for="">id</label>
        <input type="number" v-model="changeId" />
        <button type="button" @click="updateStudent">update</button>
      </div>
    </form>
    <ul>
      <li v-for="st in students" :key="st.id">
        <p>id: {{ st.id }}</p>
        <p>name: {{ st.name }}</p>
        <p>age: {{ st.age }}</p>
        <p>gender: {{ st.gender }}</p>
        <p>grade: {{ st.grade }}</p>
        <p>
          favorite sports:
          <strong v-for="(sport, i) in st.sports" :key="i">{{ sport }}</strong>
        </p>
        <span @click="deleteSt(st.id)" style="cursor: pointer; font-size: 25px"
          >x</span
        >
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      sport: "",
      student: {
        name: "",
        sports: [],
        grade: "",
        gender: "",
      },
      students: [],
      changeAge: "",
      changeId: "",
    };
  },
  methods: {
    addSport() {
      this.student.sports.push(this.sport);
      this.sport = "";
    },
    async getStudents() {
      await fetch("https://course-backend.onrender.com/")
        .then((res) => res.json())
        .then((data) => (this.students = data));
    },
    async addStudent() {
      const requestData = {
        headers: { "Content-Type": "application/json" },
        method: "POST",
        body: JSON.stringify(this.student),
      };
      await fetch(
        "https://course-backend.onrender.com/add-student",
        requestData
      )
        .then((res) => res.json())
        .then((data) => (this.students = data));
    },
    async updateStudent() {
      if (!this.changeAge || !this.changeId) {
        return;
      }
      const requestData = {
        headers: { "Content-Type": "application/json" },
        method: "POST",
        body: JSON.stringify({
          age: this.changeAge,
        }),
      };
      await fetch(
        `https://course-backend.onrender.com/update-student/${this.changeId}`,
        requestData
      )
        .then((res) => res.json())
        .then((data) => (this.students = data));
    },
    async deleteSt(id) {
      const requestData = {
        headers: { "Content-Type": "application/json" },
        method: "DELETE",
      };
      await fetch(
        `https://course-backend.onrender.com/delete-student/${id}`,
        requestData
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          this.students = data;
        });
    },
  },
  async mounted() {
    await this.getStudents();
  },
};
</script>
