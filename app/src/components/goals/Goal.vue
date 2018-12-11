<template>
  
  <li> {{goal.title}} 
      {{goal.startDate}} 
      {{goal.endDate}} 
  </li>

</template>

<script>
export default {
  props: {
    goal: null
  }
};
</script>
