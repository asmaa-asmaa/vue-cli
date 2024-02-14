<template>
  <div class="my-form">
    <form action="" @submit.prevent>
      <div>
        <label for="">first name</label>
        <input v-model.lazy="student.firstName" type="text" />
        <p>result is {{ student.firstName }}</p>
      </div>
      <hr />
      <div>
        <label for="">last name</label>
        <input v-model="student.lastName" type="text" />
        <p>result is {{ student.lastName }}</p>
      </div>
      <hr />
      <div>
        <label for="">age</label>
        <input v-model="student.age" type="number" />
        <p>result is {{ student.age }}</p>
      </div>
      <hr />
      <div>
        <label for="">email</label>
        <input v-model="student.email" type="email" />
        <p>result is {{ student.email }}</p>
      </div>
      <div>
        <h3>favorite sports</h3>
        <label for="tennis">tennis</label>
        <input
          v-model="student.sports.tennis"
          type="checkbox"
          name="tennis"
          id="tennis"
        />
        <p>{{ student.sports.tennis }}</p>
        <label for="football">football</label>
        <input
          v-model="student.sports.football"
          type="checkbox"
          name="football"
          id="football"
        />
        <p>{{ student.sports.football }}</p>
      </div>
      <div>
        <h3>gender</h3>
        <label for="male">male</label>
        <input
          v-model="student.gender"
          value="male"
          type="radio"
          name="male"
          id="male"
        />
        <label for="female">female</label>
        <input
          v-model="student.gender"
          value="female"
          type="radio"
          name="female"
          id="female"
        />
        {{ student.gender }}
      </div>
      <div>
        <label for="bio">bio</label>
        <textarea name="bio" id="bio" v-model="student.bio"></textarea>
        {{ student.bio }}
      </div>
      <div>
        <label for="grade">grade</label>
        <select v-model="student.grade" name="grade" id="grade">
          <option value="one">one</option>
          <option value="two">two</option>
          <option value="three">three</option>
          <option value="four">four</option>
        </select>
        {{ student.grade }}
      </div>
      <hr />
      <div class="actions" style="width: 100%">
        <input type="submit" style="width: 50%" value="submit" />
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "MyForm",
  data() {
    return {
      student: {
        firstName: "",
        lastName: "",
        age: "",
        email: "",
        sports: {
          tennis: false,
          football: false,
        },
        gender: "",
        bio: "",
        grade: "",
      },
    };
  },
};
</script>
<style lang="scss" scoped>
.my-form {
  form {
    display: flex;
    flex-wrap: wrap;
    div {
      width: 40%;
    }
  }
}
</style>
