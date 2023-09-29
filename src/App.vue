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

  <input v-model="movie" type="text" placeholder="type film name" class="searchBar">
  <button @click="onClick" class="btn">Search</button>
  <ul>
    FILM
    <li v-for="li in state.list">
      {{ li.title }}
      {{ li.original_title }}
      {{ li.original_language }}
      {{ li.vote_average }}
      <img :src="'https://purecatamphetamine.github.io/country-flag-icons/3x2/'+li?.original_language?.toUpperCase()+'.svg'" alt="">
    </li>

  </ul>

  <ul>
    TV
    <li v-for="li in state.listTv">
      {{ li.name }}
      {{ li.original_name }}
      {{ li.original_language }}
      {{ li.vote_average }}
      <img :src="'https://purecatamphetamine.github.io/country-flag-icons/3x2/'+li?.origin_country[0]+'.svg'" alt="">
    </li>
  </ul>


<!-- <i class="fa-solid fa-star"></i>    stella piena-->
<!-- <i class="fa-regular fa-star"></i>  stella vuota -->

</template>

<style>
</style>
