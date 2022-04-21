<template>

  <div class="user__card user" :style="{'background-image': `url(${user.image})`, 'background-size' : '100%'}" @click="$emit('openModal')">


    <div class="card__details">
      <div class="card__details__msgIcon__container ">
        <svg xmlns="http://www.w3.org/2000/svg" class="card__details__msgIcon" fill="none" viewBox="0 0 24 24" stroke="white" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
</svg>
      </div>
      <div class="card__details__text">
        <!-- <a :href="`mailto:${user.email}?subject='Hiring'`">Email</a> -->
        <p class="userName">{{user.name}}</p>
        <p>{{user.address.city}}</p>

      </div>
      
    </div>

  </div>

</template>

<script>
export default {
  props: ['user'],

  methods: {
  
}
}

</script>

<style scoped>
.user__card {
  width: 17rem;
  height: 24rem;
  display: inline-flex;
  flex-direction: column;
  margin: 3rem;
  border-radius: 10px;
  /* height: 40rem; */

}
.card__details{
  box-sizing: border-box;
  padding: 1rem;
  min-width: 100%;
  display: none;
  min-height: 100%;
  background-color: rgba(0, 0, 0, 0.441);
  border-radius: 10px;
}

.user__card:hover .card__details {
  display: flex;
  flex-direction: column;
}

.card__details__msgIcon__container{
  display: block;
  min-width: 100%;
}
.card__details__msgIcon{
  max-width: 2rem;
  float: right;
}

.card__details__text{
  color: white;
  text-align: center;
  margin-top: 4rem;
  padding: 0;
}
.card__details__text p{
  margin-bottom: 1rem;
}

.userName{
  font-size: 1.5rem;
  font-weight: 700;
}

@media only screen and (max-width: 428px) {
  .user__card{
    min-width: 80%;
  }
}
</style>