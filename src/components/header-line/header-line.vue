
<template>
  <header class="o-header-wrapper o-header">
    <div class="a-header-logo">
      <a
        href="/dashboard"
        class=""
      />
    </div>
    <div class="top-line">
      <div class="top-line__inner">
        <div class="a-header__center">
          <div class="pipeline-header">
            <div class="a-header__items-group">
              <div>
                <button>
                  <router-link :to="{name: 'TestDashboard'}">
                    TestDashboard
                  </router-link>
                </button>
              </div>
              <div>
                <button>
                  <router-link :to="{name: 'UserDashboard'}">
                    UserDashboard
                  </router-link>
                </button>
              </div>
              <button>
                <router-link :to="{name: 'TestBackendRequests'}">
                  get posts requests
                </router-link>
              </button>
              <button>
                <router-link :to="{name: 'DateTest'}">
                  date-test
                </router-link>
              </button>
              <button>
                <router-link :to="{name: '404NotFound'}">
                  404 not found
                </router-link>
              </button>
              <button>
                <router-link :to="{name: 'SignUp'}">
                  Sign up
                </router-link>
              </button>
              <button>
                <router-link :to="{name: 'SignIn'}">
                  Sign in
                </router-link>
              </button>
            </div>
            <div />
          </div>
        </div>
        <div class="a-header-part-right">
          <div class="a-header__items-group" />
          <div class="a-header__items-group">
            <button
              style="margin-right: 20px"
              @click="handleLogout"
            >
              Log out
            </button>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import useAuth from '../../store/use/useAuth'

export default {
  name: 'HeaderLine',
  setup() {
    const { LOGOUT } = useAuth()

    function handleLogout() {
      console.log('Logout')
      LOGOUT()
    }

    return {
      handleLogout,
    }
  },
}

</script>

<style scoped>
  @import 'header-line';
</style>
