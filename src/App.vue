<template>
  <div id="app">
    <component @login-pass="route('Dashboard')" :is="view" />
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
    Login: () => import("./views/Login.vue"),
    Dashboard: () => import("./views/Dashboard.vue"),
  },
  data () {
    return {
      viexw: "Login"
    }
  },
  methods: {
    route (routeName) {
      if (this.isLoggedIn) {
        this.view = routeName
      } else {
        this.view = "Login"
      }
    }
},
  computed: {
    view () {
      return this.$store.state.component
    },
    isLoggedIn () {
     return JSON.parse(localStorage.getItem('token')) !== null
    }
  }
}
</script>
