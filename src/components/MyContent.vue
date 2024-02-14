<template>
  <div class="my-content">
    <ul>
      <!--<li v-for="(student, i) in students" :key="i">{{ student }}</li>-->

      <li v-for="(student, i) in myStudents" :key="i">{{ student }}</li>
    </ul>
    <button @click="deleteSt">change ref</button>
    <p>active is: {{ myActive }}</p>
    <p>active is: {{ isActive }}</p>
    <button @click="myActive = !myActive">change premitive</button>
    <button @click="$emit('updateActive', 'ali')">change Active</button>
  </div>
</template>

<script>
export default {
  // props: ["students", "isActive"],
  props: {
    students: {
      type: Array,
      required: true,
    },
    isActive: {
      type: Boolean,
      required: true,
    },
  },
  emits: ["updateActive"],
  data() {
    return {
      myStudents: this.students,
      myActive: this.isActive,
    };
  },
  methods: {
    deleteSt() {
      this.myStudents.shift();
    },
  },
};
</script>
<style scoped>
ul {
  list-style: none;
  display: flex;
  justify-content: center;
  gap: 20px;
}
</style>
