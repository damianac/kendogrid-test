<template>
  <div>
    <v-form class="login-form">
      <v-container>
        <v-layout>
          <v-flex xs12>
            <v-text-field
              v-model="username"
              :counter="10"
              label="Username"
              required
            ></v-text-field>
          </v-flex>
        </v-layout>
        <v-layout>
          <v-flex xs12>
            <v-text-field
              v-model="password"
              :counter="50"
              type="password"
              label="Password"
              required
            ></v-text-field>
          </v-flex>
        </v-layout>
        <v-btn @click="login">login</v-btn>
      </v-container>
    </v-form>
    <v-dialog persistent v-model="showDialog" data-app width=400>
      <v-card>
        <v-card-text>
          {{$store.getters.getNotification.msg}}
        </v-card-text>
        <v-btn
          @click="closeDialog"
        >
        Close
        </v-btn>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: "LoginComponent",
  data() {
    return {
      username: "",
      password: "",
    }
  },
  computed: {
    showDialog: {
      get() {
      if(this.$store.getters.getNotification.msg === "")
        return false;
      return true;
      },
      set(value) {
        
      }
    }
  },
  methods: {
    login() {
      this.$store.dispatch('login', {
        username: this.username,
        password: this.password,
      });
    },
    closeDialog() {
      this.$store.dispatch('clearNotification');
    }
  }
}
</script>

<style lang="stylus">
.login-form 
  margin auto
  width 40%
</style>


