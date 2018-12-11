<template>
  <form @submit.prevent="handleSubmit">
    <label>Goal </label>
    <input v-focus v-model="goal.name" require>
    <label>Start Date</label>
    <input v-focus v-model="goal.type" require>
    <label>End Date</label>
    <input v-focus v-model="goal.type" require>
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
