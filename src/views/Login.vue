<template>
  <div class="card">

      <div class="card__content">

          <div class="card__title">
          <p>SIGN IN TO YOUR ACCOUNT</p>
      </div>

      <form class="card__inputs" v-on:submit.prevent="login">

        <input type="text" class="card__mail borderLine" placeholder="Email" v-model="form.email" />
        <input type="password" class="password borderLine" placeholder="Password" v-model="form.password"/>
        <button  type="submit">SIGN IN</button>

      </form>

      </div>
      
      

  </div>
</template>

<script>
export default {
    name: "Dashboard",

    data () {
        return {
            form: {   
            email: '',
            password: ""
                }
        }
    }, 
    methods: {
        async login(){
           const response =  await this.$store.dispatch('login', this.form)
           if (response === 'success') {
               this.$store.dispatch('getUsers')
               this.$store.dispatch('route', 'Dashboard')               
           } else {
               this.$emit('login-fail')
           }
        }
    }

}
</script>

<style scoped>

    .card{
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        text-align: center;
        max-width: 100vw;
        padding: 0 1rem;
    }

    .card__content{
        min-width: 30%;
    }

    .card__title{
        font-size: 1.5rem;
        font-weight: 600;
        color: rgb(57, 57, 57);
    }

    .borderLine{
        border: none;
        border-radius: 2px;
    }
    button{
        margin-top: 3rem;
    }

</style>