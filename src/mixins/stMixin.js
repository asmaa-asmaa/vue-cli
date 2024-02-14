const stMixin = {
  data() {
    return {
      mixstudents: [],
    };
  },
  methods: {
    async getStudents() {
      await fetch("https://course-backend.onrender.com/")
        .then((res) => res.json())
        .then((data) => (this.mixstudents = data));
    },
  },
  async mounted() {
    await this.getStudents();
  },
};

export default stMixin;
