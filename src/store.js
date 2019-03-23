import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    username: "admin",
    password: "admin",
    loggedIn: false,
    notification: {
      msg: "",
      type: String,
    }
  },
  getters: {
    getNotification: state => {
      return state.notification;
    },
    isLoggedIn: state => {
      return state.loggedIn;
    },
    getUsername: state => {
      return state.username;
    },
    getPassword: state => {
      return state.password;
    }
  },
  mutations: {
    CLEAR_NOTIFICATION: (state) => {
      Vue.set(state.notification, 'msg', "");
    },
    LOGIN: (state, data) => {
      if(state.username !== data.username)
        Vue.set(state.notification, 'msg', `Wrong username entered`);
      else if(state.password !== data.password)
        state.notification.msg = `Wrong password entered`;
      else {
        state.loggedIn = true;
      }
    }
  },
  actions: {
    login(context, data) {
      context.commit("LOGIN", data);
    },
    clearNotification(context) {
      context.commit("CLEAR_NOTIFICATION");
    }
  }
});