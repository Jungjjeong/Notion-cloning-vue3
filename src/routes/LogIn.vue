<template>
  <h1>Log In</h1>
  <form @submit.prevent>
    <input v-model="userID" type="text" placeholder="ID" />
    <input v-model="userPW" type="password" placeholder="PW" />
    <button @click="logIn">LogIn</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      userID: "",
      userPW: "",
    };
  },
  methods: {
    logIn() {
      this.$store.dispatch("user/logIn", {
        id: this.userID,
        pw: this.userPW,
      });
    },
  },
};
</script>