import { reactive } from "vue";
import axios from 'axios';

export const state = reactive({
    list: [],
    listTv: [],

    Search(movieToSearch){
        let url = 'https://api.themoviedb.org/3/search/movie?api_key=977b0efcbc70299fc969c43b34156015&query='+ movieToSearch +'&page=1'
        let url_TvSeries = 'https://api.themoviedb.org/3/search/tv?api_key=977b0efcbc70299fc969c43b34156015&query='+ movieToSearch +'&page=1'
        let halfUrl = 'https://image.tmdb.org/t/p/w342'
        
        axios.get(url)
        .then(res =>{
            this.list = res.data.results;
            console.log(this.list);

            axios.get(url_TvSeries)
            .then(respo =>{
                this.listTv = respo.data.results;
                console.log(this.listTv);
            })
        })
    }
})