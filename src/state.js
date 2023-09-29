import { reactive } from "vue";
import axios from 'axios';

export const state = reactive({
    list: [],

    Search(movieToSearch){
        let url = 'https://api.themoviedb.org/3/search/movie?query='+ movieToSearch +'&page=1'
        const config = {
            headers: { Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NzdiMGVmY2JjNzAyOTlmYzk2OWM0M2IzNDE1NjAxNSIsInN1YiI6IjY1MTU0NjhmMWRiNjVkMDBlMzFjMjY4NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8byVfYmSzCR-vJ2Gg_ejr8ZcDLe3KKYRoHXcZaRwsvs` }
        };
        
        axios.get(url, config)
        .then(res =>{
            this.list = res.data.results;
            console.log(this.list);
        })
    }
})