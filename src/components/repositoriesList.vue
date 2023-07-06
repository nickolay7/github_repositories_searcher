<template>
  <div class="list" v-if="repositories.length && !loading">
    <div class="repos">
      <repository-item
          class="repos-item"
          :repository="repository"
          v-for="repository in repositories"
          :key="repository.id"
      />
    </div>
    <Pagination />
  </div>
  <h2 class="empty-list" v-if="!repositories.length && !loading">Список проектов пуст:(</h2>
  <h2 class="loading" v-if="loading">Поиск проектов...</h2>
</template>

<script>
  import MyButton from "@/components/ui/myButton.vue";
  import {mapActions, mapState} from "vuex";
  import MySelect from "@/components/ui/mySelect.vue";
  import Pagination from "@/components/ui/pagination.vue";
  import RepositoryItem from "@/components/repositoryItem.vue";

  export default {
    components: {RepositoryItem, Pagination, MySelect, MyButton},
    computed: {
      ...mapState({
        repositories: state => state.repositories.repositories,
        loading: state => state.repositories.loading,
      }),
    },
    methods: {
      ...mapActions({
        fetchRepositories: 'repositories/fetchRepositories',
      }),
    },
    name: "repositoriesList",
  }
</script>

<style scoped>
  .repos {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }

  .empty-list, .loading {
    text-align: center;
    margin-top: 200px;
  }
</style>
