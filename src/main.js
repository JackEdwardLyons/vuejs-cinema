import Vue from "vue";
import "./style.scss";
import genres from "./util/genres";

new Vue({
	el: "#app",
  data: {
    genre: [],
    time: []
  },
  methods: {
    checkFilter(category, genre, checked) {
      // filter movies based on payload received from filter buttons
      if (checked) {
        // if checked, the movie genre is added to the genre data array
        this[category].push(genre);
      } else {
        let index = this[category].indexOf(genre);
        if (index > -1) {
          this[category].splice(index, 1);
        }
      }
    }
  },
	components: {
		"movie-list": { 
			template: `
      <div id="movie-list" >
        <div v-for="movie in movies" class="movie">
          {{ movie.title }}
        </div>
      </div>`,
			data() {
				return {
					movies: [
						{ title: "Pulp Fiction" },
						{ title: "Home Alone" },
						{ title: "Austin Powers" }
					]
				};
			}
		},
		"movie-filter": {
      data() {
        return {
          genres
        }
      },
      methods: {
        checkFilter(category, genre, checked) {
          // pass the args up the chain to the root instance
          this.$emit('check-filter', category, genre, checked);
        }
      },
			template: `
      <div id="movie-filter">
        <h3>Filter Results</h3>
        <div class="filter-group">
          <check-filter v-for="(genre, key) in genres" 
                        :genre="genre" 
                        @check-filter="checkFilter"
                        :key="key">
          </check-filter>
        </div>
      </div>
      `,
      // This component only exists within the movie-filter
			components: {
				"check-filter": {
          props: [ 'genre' ],
					data() {
						return {
							checked: false
						};
					},
          methods: {
            checkFilter() {
              this.checked = !this.checked;
              // $emit can take infinite number of args
              this.$emit('check-filter', 'genre', this.genre, this.checked);
            }
          },
					template: `
            <div class="check-filter" 
                 :class="{ active: checked }" 
                 @click="checkFilter">

              <span class="checkbox"></span>
              <span class="check-filter-title">{{ genre }}</span>

            </div>
          `
				}
			}
		}
	}
});
