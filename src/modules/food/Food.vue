<template>
  <b-container>
    <b-row>
      <b-col lg="4" style="padding-top: 20px; padding-bottom: 20px">
        <b-button @click="$router.go(-1)">Back</b-button>
      </b-col>
      <b-col lg="4" style="padding-top: 20px; padding-bottom: 20px">
        <div style="font-size: 30px; font-weight: 500;">
          {{ categoryTitle }}
        </div></b-col
      >
    </b-row>
    <div v-if="foodCategories.length">
      <b-row>
        <div v-bind:key="data.index" v-for="data in foodCategories">
          <b-col lg="12">
            <b-card
              v-bind:title="data.strMeal"
              v-bind:img-src="data.strMealThumb"
              img-alt="Image"
              img-bottom
              tag="article"
              style="max-width: 20rem; border:2px solid #17a2b8; height: 28rem; background:#3da4ab; "
              class="mb-5"
            >
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
  name: "Food",
  data() {
    return {
      foodCategories: [],
      categoryTitle: "",
    };
  },
  mounted() {
    const path = window.location.pathname;
    const foodCategoryName = path.split("/").pop();
    this.categoryTitle = foodCategoryName;

    this.axios
      .get(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${this.categoryTitle}`
      )
      .then((response) => {
        this.foodCategories = response.data.meals;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>
