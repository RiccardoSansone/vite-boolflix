<script>
import { state } from './state'

export default {
  data() {
    return {
      movie: '',
      state
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
    <li v-for="li in state.list">
      {{ li.title }}
      {{ li.original_title }}
      {{ li.original_language }}
      {{ li.vote_average }}
    </li>
  </ul>

</template>

<style>
</style>
