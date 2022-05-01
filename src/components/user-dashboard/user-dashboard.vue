<template>
  <div>
    <h1>
      Users dashboard
    </h1>
    <!-- <h1>{{$store.state.posts.counter}}</h1>     -->
    <!-- <button @click="$store.dispatch('sayHello')">+</button> -->
    <div class="post-block">
      <div
        v-for="user in allUsers"
        :key="user.id"
        class="post"
      >
        <h2>{{ user.name }}</h2>
        <p>Email:{{ user.email }}</p>
        <p>Phone:{{ user.phone }}</p>
        <p>Website:{{ user.website }}</p>
        <p>Address:<br>{{ user.address.city }}, {{ user.address.street }}</p>
      </div>
    </div>
  </div>
</template>

<script>

import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'TestBackendRequests',
  computed: {
    ...mapGetters('users', ['allUsers']),
  },
  methods: {
    ...mapActions('users', ['requestUsers']),

  },
  async mounted() {
    await console.log('in mounted')
    // await this.fetchPosts()
    // this.$store.posts.dispatch('sayHello')
    // this.$store.posts.commit('increaseCount')
    // this.sayHello()
    console.log('Before requests')
    await this.requestUsers()
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
  justify-content: center;
  flex-wrap: wrap;

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
  width: 310px;
  border: 1px solid #ccc;
  border-radius: 15px;
  margin: 10px;
}

h1 {
  text-align: center;
}

h2 {
  /* height: 50px; */
  background: rgb(111, 180, 226);
  margin: 10px;
  padding: 15px;
  border-radius: 15px;
  
}

p {
  padding: 8px;
  margin-top: 0px;
  margin: 10px;
  background: rgb(189, 189, 189);
  border-radius: 10px;

}

</style>
