<template>
  <div class="my-form2">
    <form action="" @submit.prevent="addstudent">
      <div>
        <label for="firstName">first name</label>
        <input v-model="student.firstName" type="text" name="firsttName" />
      </div>
      <div>
        <label for="lastName">last name</label>
        <input v-model="student.lastName" type="text" name="lastName" />
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
        <h3>sports</h3>
        <label for="tennis">tennis</label>
        <input v-model="student.sports.tennis" type="checkbox" name="tennis" />
        <label for="football">football</label>
        <input
          v-model="student.sports.football"
          type="checkbox"
          name="football"
        />
        <label for="checkbox">basketball</label>
        <input
          v-model="student.sports.basketball"
          type="checkbox"
          name="basketball"
        />
      </div>
      <div>
        <label for="email">email</label>
        <input v-model="student.email" type="email" name="email" />
      </div>
      <div>
        <h3>grade</h3>
        <select v-model="student.grade" name="grade" id="grade">
          <option value="one">one</option>
          <option value="two">two</option>
          <option value="three">three</option>
        </select>
      </div>
      <div>
        <label for="bio">bio</label>
        <textarea v-model="student.bio" name="bio" id="bio"></textarea>
      </div>
      <div>
        <input type="submit" value="save" />
      </div>
    </form>
    <div>
      <ul>
        <li v-for="(student, i) in students" :key="i">
          <p>name: {{ student.firstName }} {{ student.lastName }}</p>
          <p>age: {{ student.age }}</p>
          <p>gender: {{ student.gender }}</p>
          <p>
            sports:
            <strong>
              <span v-for="(value, key, i) in student.sports" :key="i">
                <span v-if="value">{{ key }}</span>
              </span>
            </strong>
          </p>
          <p>grade: {{ student.grade }}</p>
          <p>email: {{ student.email }}</p>
          <p>bio: {{ student.bio }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      student: {
        firstName: "",
        lastName: "",
        email: "",
        sports: {
          tennis: "",
          football: "",
          basketball: "",
        },
        bio: "",
        grade: "",
        gender: "",
      },
      students: [],
    };
  },
  methods: {
    addstudent() {
      this.students.push(this.student);
      this.student = {
        firstName: "",
        lastName: "",
        email: "",
        sports: {
          tennis: "",
          football: "",
          basketball: "",
        },
        bio: "",
        grade: "",
        gender: "",
      };
    },
  },
};
</script>
