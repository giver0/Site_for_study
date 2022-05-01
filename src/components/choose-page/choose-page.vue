<template>
  <div class="layout">
    <h1>
      Choose start page
    </h1>
    <div class="chooseBox">
      <div>
        <router-link :to="{name: 'SignUp'}">
          Sign up
        </router-link>
      </div>
      <div>
        <router-link :to="{name: 'SignIn'}">
          Sign in
        </router-link>
      </div>
      <div>
        <router-link :to="{name: 'UserDashboard'}">
          UserDashboard
        </router-link>
      </div>
      <div>
        <router-link :to="{name: 'TestDashboard'}">
          TestDashboard
        </router-link>
      </div>
      <div>
        <router-link :to="{name: 'TestBackendRequests'}">
          get posts requests
        </router-link>
      </div>
      <div>
        <router-link :to="{name: '404NotFound'}">
          404 not found
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>

export default {
    
}
</script>

<style scoped>

.layout {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.chooseBox{
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.chooseBox div {
  text-align: center;
  width: 150px;
  background: rgb(255, 255, 255);
  margin: 10px;
  padding: 15px;
  border-radius: 20px;
  white-space: nowrap;
  border-color: rgb(0, 0, 0);
  border-style: solid;
  border-top-width: 5px;
}

</style>
