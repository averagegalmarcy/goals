<template>
  
  <li>{{goal.title}},
      Start Date: {{goal.start_date}} 
      End Date: {{goal.end_date}} 
  <button @click="handleUpdate"> Update </button>
  </li>
</template>

<script>

export default {
  props: {
    goal: null,
    onEdit: Function

  },
  methods: {
    handleUpdate() {
      this.goal.endDate = new Date();
      this.onEdit(this.goal);
    }
  }
};
</script>
