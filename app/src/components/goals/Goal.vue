<template>
  
  <li>{{goal.title}},
      Start Date: {{goal.start_date}} 
      End Date: {{goal.end_date}} 
  </li>

</template>

<script>
export default {
  props: {
    goal: null
  }
};
</script>
