<template>
  <div>
    <h1>
      test-backend-requests
    </h1>
    <h1>{{ $store.state.posts.counter }}</h1>
    <!-- <h2>{{ post.title }}</h2>
    <p>{{ post.body }}</p> -->
    <button @click="$store.dispatch('sayHello')">
      +
    </button>
    <div class="post-block">
      <div
        v-for="post in allPosts"
        :key="post.id"
        class="post"
      >
        <h2>{{ post.title }}</h2>
        <p>{{ post.body }}</p>
      </div>
    </div>
  </div>
</template>

<script>

import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'TestBackendRequests',
  computed: {
    ...mapGetters('posts', ['allPosts']),
  },
  methods: {
    ...mapActions('posts', ['requestPosts']),

  },
  async mounted() {
    await console.log('in mounted')
    // await this.fetchPosts()
    // this.$store.posts.dispatch('sayHello')
    // this.$store.posts.commit('increaseCount')
    // this.sayHello()
    console.log('Before requests')
    await this.requestPosts().then(console.log(this.allPosts))
    console.log(this.allPosts)
  },
}
</script>

<style scoped>
div {
  margin-bottom: 10px;
}
.post-block {
  width: 100%;
  display: flex;

}
.counter {
  font-size: 80px;
}
.buttons button {
  font-size: 40px;
  width: 100px;
  margin: 0 10px;
}
.post {
  width: 400px;
  border: 1px solid #ccc;
  border-radius: 15px;
  margin: 15px;
}
h2 {
  background: rgb(111, 226, 111);
  margin: 10px;
  padding: 10px;
  border-radius: 20px;
  
}
p {
  padding: 15px;
}
</style>
