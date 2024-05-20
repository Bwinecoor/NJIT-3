const vue_app = Vue.createApp({
    created() {
        fetch('movies.json').then(response => response.json()).then(json => {
            this.movies = json;
        });
    },
    data() {
        return {
            movies: [],
            title: "IMDB + Brandon’s Top 8 Movies",
            owner: "Brandon",
            github: "https://github.com/Bwinecoor/NJIT-3"
        }
    },
    methods: {
        getMonthText(dateArray) {
            const [year, month, day] = dateArray;
            let monthName;
            switch (month) {
                case 1:
                    monthName = "January";
                    break;
                case 2:
                    monthName = "February";
                    break;
                case 3:
                    monthName = "March";
                    break;
                case 4:
                    monthName = "April";
                    break;
                case 5:
                    monthName = "May";
                    break;
                case 6:
                    monthName = "June";
                    break;
                case 7:
                    monthName = "July";
                    break;
                case 8:
                    monthName = "August";
                    break;
                case 9:
                    monthName = "September";
                    break;
                case 10:
                    monthName = "October";
                    break;
                case 11:
                    monthName = "November";
                    break;
                case 12:
                    monthName = "December";
                    break;
                default:
                    monthName = "Invalid Month";
            }
            return `${monthName} ${day}, ${year}`;
        },
        posterClick(index) {
            const movie = this.movies[index];
            movie.posterindex = (movie.posterindex + 1) % movie.posters.length;
        },
        incrementLikes(index) {
            this.movies[index].likes++;
        },
        incrementDislikes(index) {
            this.movies[index].dislikes++;
        }
    }
});

vue_app.mount("#vue_app");
