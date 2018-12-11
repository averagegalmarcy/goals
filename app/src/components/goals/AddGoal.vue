<template>
  <form @submit.prevent="handleSubmit">
    <label>Goal </label>
    <input v-focus v-model="goal.title" required >
    <label>Start Date</label>
    <input v-focus v-model="goal.startDate" required >
    <label>End Date</label>
    <input v-focus v-model="goal.endDate" required >
    <button>Add</button>
  </form>
</template>

<script>
function initGoal() {
  return {
    title: '',
    startDate: '',
    endDate:''
  };
}
export default {
  props: {
    onAdd: Function
  },
  data() {
    return {
      goal: initGoal()
    };
  },
  methods: {
    handleSubmit() {
      this.onAdd(this.goal)
        .then(() => {
          this.goal = initGoal();
        });
    }
  }
};
</script>
