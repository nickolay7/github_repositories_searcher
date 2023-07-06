<template>
  <div class="repos" @click="$router.push(`/repos/${this.repository.id}`)">
    <a class="link" @click.stop :href="repository.html_url" target="_blank"><h2 class="title">{{this.repository.name}}</h2></a>
    <div class="author">
      <div class="avatar"><img :src="repository.owner.avatar_url" alt="avatar" /></div>
      <a class="link" @click.stop :href="repository.owner.html_url" target="_blank"><p class="author-name">{{this.repository.full_name}}</p></a>
    </div>
    <div class="achievements">
      <div class="stars">
        <img src="../assets/icons/star.svg" alt="avatar" />
        <span class="stars-count">{{this.repository.stargazers_count}}</span>
      </div>
      <div class="watches">
        <img src="../assets/icons/eye.svg" alt="avatar" />
        <span class="watches-count">{{this.repository.watchers_count}}</span>
      </div>
    </div>
    <div class="comment">
        <my-input
            class="input"
            placeholder="Комментарий к проекту"
        />
        <my-button class="btn"><img src="../assets/icons/edit.svg" alt="arrow_left" /></my-button>
    </div>
<!--    <div>-->
<!--      <my-button @click="onRemove">Remove</my-button>-->
<!--    </div>-->
  </div>
</template>

<script>
import MyButton from "@/components/ui/myButton.vue";
import router from "@/router/router";
import {mapGetters} from "vuex";

export default {
  name: "repositoryItem",
  components: {
    MyButton,
  },
  props: {
    repository: {
      type: Object,
      require: true,
    }
  },
  computed: {
    ...mapGetters({

    }),
  },
  methods: {
    router() {
      return router
    },
    onRemove() {
      this.$emit('remove', this.post.id);
    },
    onLinkToRepository() {

      $router.push(`/repos/${this.repository.id}`)
    }
  }
}
</script>

<style scoped>
.repos {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 18px;
  padding: 15px;
  border: 2px solid #A2A3A4;
  margin-top: 15px;
  width: 350px;
}

.link {
  text-decoration: none;
  color: #1d1313;
}

.input {
  flex-grow: 1;
}

.btn {
  background: #00A3FF;
  width: 64px;
  height: 54px;
  border: none !important;
}

.author, .achievements {
  display: flex;
  align-items: center;
  gap: 25px;
}

.author-name, .title {
  width: 250px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  cursor: pointer;
}

.author-name:hover, .title:hover {
  color: #00A3FF;
}

p.author-name:hover, .title:hover {
  overflow: inherit;
  text-overflow: inherit;
  white-space: inherit;
  height: auto;
}

.stars, .watches {
  display: flex;
  align-items: center;
  gap: 15px;
}

.avatar img {
  width: 50px;
  height: 50px;
}

.comment {
  display: flex;
}
</style>