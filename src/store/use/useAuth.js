import { useStore } from 'vuex'

const MODULE_NAME = 'auth'

const useAuth = () => {
  const store = useStore()

  const signIn = (payload) => store.dispatch(`${MODULE_NAME}/signIn`, payload)
  const LOGOUT = () => store.commit(`${MODULE_NAME}/LOGOUT`)

  return {
    signIn,
    LOGOUT,
  }
}

export default useAuth
