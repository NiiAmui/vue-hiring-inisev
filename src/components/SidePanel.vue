<template>
  <div class="sidePanel">

    <div class="side__logo">
        <img src="/eagle.png" alt="Logo" class="logo">
    </div>

    <div class="sidePanel__elements">
        <a class="side_item">MENU ELEMENT</a>   
        <a class="side_item">MENU ELEMENT</a>   
        <a class="side_item">MENU ELEMENT</a>   
    </div>
    
    <div class="sidePanel__logout" @click="logout">
        <div class="icon">  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
</svg> </div> <div class="info">Admin</div> 
    </div>

  </div>
</template>

<script>
export default {
    methods: {
        logout () {
            localStorage.removeItem('token')
            this.$store.dispatch('route', 'Login')
        }
    },
    computed: {
    },
}
</script>

<style scoped>
*{
    color: rgb(37, 37, 37);
}
 .side__logo {
     max-height: 3rem;
     overflow: hidden;
    }

    .logo{
        max-height: 2rem;
    }

    .sidePanel{
        background-color: rgb(243, 243, 243) ;
        min-height: 100vh;
        position: fixed;
        font-size: 1.2rem;
        font-weight: 600;
  top: 0;

    }

    .sidePanel__elements{
        display: flex;
        flex-direction: column;
    }
    .side_item {
        margin-top: 1rem;
        margin-bottom: 1rem;
        padding: 12px 12px 12px 12px;
    }
    .side_item:hover {
        background-color: bisque;
        cursor: pointer;
    }
    .sidePanel__elements a{
        border-top: 0.3rem solid black;
        border-bottom: 0.3rem solid black;
    }

    .sidePanel__logout{ 
        position: absolute;
        bottom: 1rem;
        display: flex;
        cursor: pointer;
    }
    
</style>