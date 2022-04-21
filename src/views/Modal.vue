<template>
  <div class="modal" v-show="!close" @click.self="closeModal">

      <div class="modal__content">

        <div class="content__img">
            <img :src="user.image" class="userImage"/>
        </div>

        <div class="content__details ">

          <div class="modal__content__close " @click="closeModal">
              <svg xmlns="http://www.w3.org/2000/svg" class="closeIcon" fill="none" viewBox="0 0 24 24" stroke="red" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
          </div>

          <div class="modal__content__userDetails ">
              <div class="userDetails name">
                  <div class="icon"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd" />
</svg></div> <div class="info"> {{user.name}} </div>
              </div>
              <div class=" email"> <a class="userDetails" :href="`mailto:${user.email}?subject='We are hiring!',&body=Hello${user.name}. We’d like to propose you an offer.`">
                  <div class="icon"> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
</svg> </div> <div class="info"> {{user.email}} </div>
              </a>
                  
              </div>
              <div class="userDetails phone">
                  <div class="icon"> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
</svg> </div>  <div class="info"> {{user.phone}} </div>
              </div>
              <div class="userDetails location">
                  <div class="icon"> <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
</svg> </div>  <div class="info"> {{user.address.street}} </div>
              </div>
              <div class="userDetails website">
                  <div class="icon"> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
</svg> </div>  <div class="info"> {{user.website}} </div>
              </div>
          </div>
        </div> 

      </div>
  </div>
</template>

<script>
export default {
    name: 'Modal',
    props: ['user','close'],

    data() {
        return {
            userData: {},
        }
    },

    methods: {
        closeModal () {
            this.$emit('closeModal')
        }
    },
mounted () {
    this.$on('passSelectUser', (data) => {
console.log(data);
    })
}
}
</script>

<style scoped>

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.email{
    cursor: pointer;
    color: rgb(8, 8, 232);
}

.modal {
    background-color: rgba(0, 0, 0, 0.704);
    min-width: 100%;
    min-height: 100vh;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
}

.modal__content{
    max-width: 35rem;
    max-height: 21rem;
    background-color: white;
    display: flex;
    border-radius: 8px;
    overflow: hidden;
}

.modal__content__close{
    float: right;
    min-width: 100%;
    max-height: 2rem;
    overflow: hidden;
}

.closeIcon{
    max-width: 2rem;
    float: right;
}

.content__img{
    max-width: 40%;
    overflow: hidden;
    
}

.userImage{
    max-width: 100%;
    min-height: 100%;
}
.content__details{
    display: flex;
    flex-direction: column;
    padding: 1rem;
    min-width: 60%;
}

.icon{
    width: 2rem;
}

.userDetails{
    box-sizing: border-box;
    display: flex;
    margin-top: 1rem;
    align-items: center;
}
.info{
    margin-left: 1rem;
}

@media only screen and (max-width: 600px) {
    *{
        font-size: 0.8rem;
    }
  .modal__content {
    max-width: 95%;
  }
 }
</style>