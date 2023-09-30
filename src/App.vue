<script>
import { state } from './state'

export default {
  data() {
    return {
      movie: '',
      state,
    }
  },
  methods:{
    onClick(){
      state.Search(this.movie)
    }
  }
}

</script>

<template>

  <header>

    <div class="nav">

      <div class="imgNav">
        <img src="./assets/1280px-Netflix_logo_(2).svg.png" alt="">
      </div>
      
      <div class="searchContainer">
        <input v-model="movie" type="text" placeholder="type film name" class="searchBar">
        <button @click="onClick" class="btn">Search</button>
      </div>

    </div>

  </header>
  <!-- /header -->

  <main>

    <div class="container">

      <div class="film">

        <div class="titolo">
          <h1>FILM</h1>
        </div>
        <div v-for="li in state.list" class="card">
          <h5><i>Titolo:</i> {{ li.title }}</h5>
          <h5><i>Titolo Originale:</i> {{ li.original_title }}</h5>
          <h5><i>Lingua Originale:</i> {{ li.original_language }}</h5>
           <h5><i>Voto:</i></h5>
           <div class="star">
            <div v-for="i in [1,2,3,4,5]">
              <i  v-show="i <= Math.floor(li.vote_average/2)" class="fa-solid fa-star"></i>
              <i  v-show="i > Math.floor(li.vote_average/2)" class="fa-regular fa-star"></i>
            </div>
           </div>
          <img :src="'https://purecatamphetamine.github.io/country-flag-icons/3x2/'+li?.original_language?.toUpperCase()+'.svg'" alt="">
        </div>
        
      </div>
      <!-- /film -->

      <div class="tv">
        <div class="titolo">
        <h1>TV</h1>
      </div>
        <div v-for="li in state.listTv" class="card">
           <h5><i>Nome:</i> {{ li.name }}</h5>
           <h5><i>Nome originale:</i> {{ li.original_name }}</h5>
           <h5><i>Lingua originale:</i> {{ li.original_language }}</h5>
           <h5><i>Voto:</i></h5>
           <div class="star">
            <div v-for="i in [1,2,3,4,5]">
              <i  v-show="i <= Math.floor(li.vote_average/2)" class="fa-solid fa-star"></i>
              <i  v-show="i > Math.floor(li.vote_average/2)" class="fa-regular fa-star"></i>
            </div>
           </div>
           <img :src="'https://purecatamphetamine.github.io/country-flag-icons/3x2/'+li?.origin_country[0]+'.svg'" alt="">
        </div>

      </div>
      <!-- /tv -->

    </div>
    <!-- /container -->

  </main>


<!--     stella piena-->
<!-- <i class="fa-regular fa-star"></i>  stella vuota -->

</template>

<style>
</style>
