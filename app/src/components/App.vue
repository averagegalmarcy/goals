<template>
  <div class="app">
    <header>
      <span v-if="user">
        Hello {{user.username}}!
      </span>
      <nav v-if="user">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/goals">Goals</RouterLink>
         <!-- <a href="#" @click="handleLogout">Logout</a> -->
      </nav>
    </header>
     <main>
      <RouterView v-if="user" :user="user"/>
      <Auth v-else
        :onSignUp="handleSignUp"
        :onSignIn="handleSignIn"
      />
    </main>
  </div>
</template>
<script>
import api from '../services/api';
import Auth from './auth/Auth'; 

export default {
  data() {
    return {
      user:null
    };
  },
  components: {
    Auth
  },
  methods: {
    handleSignUp(profile) {
      return api.signUp(profile)
        .then(user => {
          this.setUser(user);
        });
    },
    handleSignIn(credentials) {
      return api.signIn(credentials)
        .then(user => {
          this.setUser(user);
        });
    },
  }
};
</script>

<style>

</style>
