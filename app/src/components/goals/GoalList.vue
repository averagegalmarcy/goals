<template>
  <ul v-if="goals">
    <Goal v-for="goal in goals" 
      :key="goal.id"
      :goal="goal"
      :onEdit="onEdit"/>
  </ul>

</template>

<script>
import Goal from './Goal'; 

export default {
  props: {
    goals: Array,
    onEdit: Function
  },
  components: {
    Goal
  }
};
</script>