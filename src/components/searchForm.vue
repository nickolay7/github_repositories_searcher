<template>
  <form class="form" @submit.prevent>
    <my-input
        v-model="query"
        class="input"
        placeholder="Начните вводить текст для поиска (не менее трех символов)"
    />
    <my-button class="btn" @click="search"><img src="../assets/icons/search.svg" alt="arrow_left" /></my-button>
  </form>
</template>

<script>
import {mapActions, mapState, mapMutations} from "vuex";

export default {
  name: "search",
  computed: {
    ...mapState({
      searchQuery: state => state.repositories.searchQuery
    }),
    query: {
      get() {
        return this.searchQuery;
      },
      set(val) {
        return this.setSearchQuery(val);
      }
    },
  },
  methods: {
    ...mapMutations({
      setSearchQuery: 'repositories/setSearchQuery'
    }),
    ...mapActions({
      fetchRepositories: 'repositories/fetchRepositories',
    }),
    search: function () {
      if (this.searchQuery) {
        this.fetchRepositories();
      }
    },
  },
}
</script>

<style scoped>
  .form {
    display: flex;
    margin-bottom: 20px;
  }

  .input {
    flex-grow: 1;
  }

  .btn {
    background: #00A3FF;
    width: 74px;
    height: 68px;
    border: none !important;
  }
</style>
