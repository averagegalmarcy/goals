<template>
  <section>
    <p> 
      <RouterLink id="goals-link" to="/goals"> View Goals </RouterLink>
    </p> 
    <h2> Welcome to Goalsipration Board </h2>
    <table v-if="stats">
      <thead>
        <tr>
          <th> Min </th>
          <th> Max </th>
          <th> Average </th>
          <th> Count </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="stat in stats"
          :key="stat.goalId">
          <td> {{stat.mindiff}} </td>
          <td> {{stat.maxdiff}} </td>
          <td> {{stat.average}} </td>
          <td> {{stat.count}} </td>
        </tr>
      </tbody>
    </table>
  </section> 
</template>

<script>
import api from '../../services/api'; 

export default {
  data() {
    return {
      stats: null
    };
  },
  created() {
    api.getGoalStats() 
      .then(stats => this.stats = stats);
  }
};
</script>

<style>
#goals-link {
  font-size: 20pt;
}
h2 {
  text-align: center;
  text-decoration: underline greenyellow;
}
nav {
  font-size: 20pt;
  display: flex;
  justify-content:space-between;
  padding: 20px;
}
span :hover {
  background: rgba(170, 170, 170, 0.452);
  padding: 5px;
  font-size: 1.10em;
}
</style>
