<template>
  <div class="container">
      <div class="container__page">  <h1 class="title">USERS</h1> </div>
      <div> 
          <div class="users"> 
              <User v-for="(user, u) in usersList" :key="u+'_user'"
              v-on:openModal="openModals(user)"
              :user="user"
              ></User>
            
          </div>

          <div class="modal" v-if="!close">
          <Modal :user="selectedUser" v-on:closeModal="closeModals"/>
          </div>
      </div>
  </div>
</template>

<script>
import User from '../components/User.vue'
export default {
    components: { User, Modal: () => import("./Modal.vue")},
    data() {
        return {
            close : true,
            selectedUser : {}
        }
    },
    computed: {
        usersList () {
                return this.$store.state.users
        }
    },
    methods:{
        getUser (user) {
  console.log(user);

  },
        closeModals () {
            this.close = true
        },
        openModals (value) {
            this.close = false
            this.selectedUser = value
            console.log(value);
        }
    }
}
</script>

<style scoped>

    .container{
        display: flex;
        flex-direction: column;
    }
    .users{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
    .container__page{
        padding-bottom: 2rem;
    }
    .title{
        border-bottom: 0.3rem solid black;
        float: right;
        margin-right: 2.3rem;
        margin-top: 2.3rem;
    }
    .modal{
        min-width: 70%;
        min-height: 100vh;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 12;
    }

    @media only screen and (max-width: 884px) {
  .title {
    margin-right: 2.5rem;
  }
 }
</style>