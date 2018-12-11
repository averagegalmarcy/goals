<template>
  <div class="app">
    <div class="container">
    <div class="jumbotron">
    <header>
      <span id="user" v-if="user">
        Hello {{user.username}}!
      </span>
      <nav v-if="user">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/goals">Goals</RouterLink>
         <a href="#" @click="handleLogout">Logout</a>
      </nav>
    </header>
     <main>
      <RouterView v-if="user" :user="user"/>
      <Auth v-else
        :onSignUp="handleSignUp"
        :onSignIn="handleSignIn"
      />
      <img src="https://sloanreview.mit.edu/content/uploads/2018/05/S2E-Sull-Goals-1200-1200x627.jpg" alt="Third slide">
    </main>
  </div>
  </div>
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
  created() {
    const json = window.localStorage.getItem('profile');
    if(json) {
      this.setUser(JSON.parse(json));
    }
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
          console.log(user);
          this.setUser(user);
        });
    },
    setUser(user) {
      this.user = user;
      console.log(user);
      if(user) {
        api.setToken(user.id);
        window.localStorage.setItem('profile', JSON.stringify(user));                                     
      }
      else {
        api.setToken();
        window.localStorage.removeItem('profile');
      }
    },
    handleLogout() {
      this.setUser(null);
      this.$router.push('/');
    }
  }
};
</script>

<style>
img {
  height: 100%;
  width: 100%;
}
#user {
  text-align: center;
  text-decoration: underline greenyellow;
  font-size: 20pt;
  object-position: center;
} 
</style>
