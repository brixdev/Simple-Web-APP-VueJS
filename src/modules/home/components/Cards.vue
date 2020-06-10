<template>
  <b-container>
    <div v-if="meals.length" style="padding-top: 30px">
      <b-row>
        <div v-bind:key="data.index" v-for="data in meals">
          <b-col l="4">
            <b-card
              v-bind:title="data.strCategory"
              v-bind:img-src="data.strCategoryThumb"
              img-alt="Image"
              img-top
              tag="article"
              style="max-width: 20rem; border:2px solid #17a2b8; height: 30rem; background:#3da4ab; "
              class="mb-2"
            >
              <div style="height:70px">
                <b-card-text>{{
                  `${data.strCategoryDescription.slice(0, 100)}...`
                }}</b-card-text>
              </div>
              <div style="padding-top:17px">
                <router-link
                  :to="{ name: 'food', params: { foodId: data.strCategory } }"
                  tag="b-button"
                  >View food</router-link
                >
              </div>
            </b-card>
          </b-col>
        </div>
      </b-row>
    </div>

    <div v-else>
      <b-spinner
        variant="success"
        label="Spinning"
        style="font-size: 300px; left: 50%; margin-left: 25rem;top: 50%;margin-top: 15rem;"
      ></b-spinner>
    </div>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      meals: [],
    };
  },
  mounted() {
    this.getCategories();
  },
  methods: {
    getCategories() {
      this.axios
        .get("https://www.themealdb.com/api/json/v1/1/categories.php")
        .then((response) => {
          this.meals = response.data.categories;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
