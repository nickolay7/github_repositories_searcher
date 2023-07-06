<template>
  <div class="repos" @click="onLinkToRepository">
    <div class="title">
      <a class="link title-text" @click.stop :href="repository.html_url" target="_blank">{{this.repository.name}}</a>
      <my-button class="deleteBtn" @click.stop @click="() => deleteCard(this.repository.id)">Удали меня</my-button>
    </div>
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
    <div class="comment" @click.stop>
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
import {mapGetters, mapMutations, mapState} from "vuex";

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
    ...mapState({

    }),
    ...mapGetters({

    }),
  },
  methods: {
    ...mapMutations({
      setRepository: 'repositories/setRepository',
      deleteCard: 'repositories/deleteCard',
    }),
    router() {
      return router
    },
    onRemove() {
      this.$emit('remove', this.post.id);
    },
    onLinkToRepository() {
      this.setRepository(this.repository);
      router.push(`/repos/${this.repository.id}`)
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

.deleteBtn {
  color: white;
  cursor: pointer;
}

.link {
  text-decoration: none;
  color: #1d1313;
  display: inline-block;
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

.title {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.author, .achievements {
  display: flex;
  align-items: center;
  gap: 25px;
}

.author-name, .title-text {
  width: 200px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  cursor: pointer;
  display: flex;
  text-decoration: none;
  color: #1d1313;
}

.title-text {
  font-size: 20px;
  font-weight: bold;
}

.author-name:hover, .title-text:hover {
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