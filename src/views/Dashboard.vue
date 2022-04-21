<template>
<div class="row">

  <nav role="navigation" class="nav">
  <div id="menuToggle">
    
    <input type="checkbox" />
    
    <!--
    Some spans to act as a hamburger.
    
    They are acting like a real hamburger,
    not that McDonalds stuff.
    -->
    <span></span>
    <span></span>
    <span></span>
    
    <ul id="menu">
      <a href="#"><li>Element</li></a>
      <a href="#"><li>Element</li></a>
      <a href="#"><li>Element</li></a>
      <a href="#"><li>Element</li></a>
    </ul>
  </div>
</nav>

    <side-panel class="column side"/>
    <div class="column middle ">
    <users></users>
    </div>

</div>
</template>

<script>
import SidePanel from '../components/SidePanel.vue'
import Users from './Users.vue'
export default {
  components: { SidePanel, Users },
  created () {
    //   this.$store.dispatch('getUsers')
  }
}
</script>

<style scoped>

  @import '../harmburger.css';

  .nav{
    display: none;
  }

  .row{
    max-width: 100vw;
    overflow: hidden;
  }
  

  @media only screen and (max-width: 884px) {
  .side {
    min-width: 30%;
  }
  .middle{
    min-width: 60%
  }
}

@media only screen and (max-width: 428px) {
  .nav {
    display: flex;
  }

  .side{
    display: none;
  }

   .middle{
    min-width: 100%;
    margin: 0;
    padding-top: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>