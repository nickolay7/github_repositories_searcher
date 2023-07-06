<template>
  <div class="repositories">
    <search />
    <repositories-list />
  </div>
</template>

<script>
import SearchForm from "@/components/searchForm.vue";
import RepositoriesList from "@/components/repositoriesList.vue";
import Search from "@/components/searchForm.vue";

export default {
  name: "repositoriesPage",
  components: {
    Search,
    RepositoriesList, SearchForm,
  },
  methods: {
    // removeRepository(id) {
    //   this.repositories = this.repository.filter((post) => post.id !== id);
    // }
  }
}
</script>

<style scoped>

</style>