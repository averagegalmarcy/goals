<template>
  <section>
    <p> 
      <RouterLink id="goals-link" to="/goals"> View Goals </RouterLink>
    </p> 
    <h2> Welcome to Goalsipration Board </h2>
  </section> 
</template>
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
