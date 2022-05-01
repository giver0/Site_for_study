<template>
  <div>
    <auth-header />
    <div class="not-found-centre-block">
      <h2>404</h2>
      <h3>Page not found</h3>
      <button @click="goBack">
        Previous page
      </button>
    </div>
  </div>
</template>

<script>
import AuthHeader from '../auth/auth-header'

const notFound = {
  name: 'NotFound',
  components: {
    AuthHeader,
  },
  data() {
    return {
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1)
    },
  },
}

export default notFound

</script>

<style>
@import "not-found";
</style>
