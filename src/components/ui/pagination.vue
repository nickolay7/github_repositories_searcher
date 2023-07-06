<template>
  <div class="pagination">
    <my-select
        :value="limit"
        @change="onSetLimit"
        :options="options"
    />
    <my-button @click="prevPagPart"><img src="../../assets/icons/arrowLeft.svg" alt="arrow_left" /></my-button>
    <my-button
        :key="page"
        class="page-number"
        :class="{
            'current-page': currentPage === page
          }"
        v-for="page in paginationArrayPart"
        @click="() => choosePage(page)"
    >{{page}}</my-button>
    <my-button @click="nextPagPart"><img src="../../assets/icons/arrowRight.svg" alt="arrow_right" /></my-button>
    <p class="curPagePointer">Текущая страница: {{this.currentPage}}</p>
  </div>
</template>

<script>
import {mapActions, mapGetters, mapMutations, mapState} from "vuex";

export default {
  name: "pagination",
  data() {
    return {
      options: [
        {
          value: 10,
          name: 10
        },
        {
          value: 25,
          name: 25
        },
        {
          value: 50,
          name: 50
        },
      ],
    }
  },
  computed: {
    ...mapState({
      currentPage: state => state.repositories.currentPage,
      limit: state => state.repositories.limit,
      total_pages: state => state.repositories.total_pages,
    }),
    ...mapGetters({
      paginationArrayPart: "repositories/paginationArrayPart",
    }),
  },
  methods: {
    ...mapMutations({
      nextPagPart: 'repositories/nextPagPart',
      prevPagPart: 'repositories/prevPagPart',
      setPage: 'repositories/setPage',
      setLimit: 'repositories/setLimit',
    }),
    ...mapActions({
      fetchRepositories: 'repositories/fetchRepositories',
    }),
    choosePage(page) {
      this.setPage(page);
      this.fetchRepositories();
    },
    onSetLimit(e) {
      this.setLimit(e.target.value);
      this.fetchRepositories();
    }
  },
}
</script>

<style scoped>
.pagination {
  margin-top: 40px;
  display: flex;
  justify-content: center;
  align-content: stretch;
  align-items: stretch;
  position: relative;
}

.pagination img {
  width: 30px;
  cursor: pointer;
}

.page-number {
  border: 1px solid #A2A3A4;
  padding-left: 20px;
  padding-right: 20px;
}

.current-page {
  background: #00A3FF;
}

.curPagePointer {
  align-self: flex-end;
  margin-left: 15px;
}
</style>