import { ref } from 'vue'
import { defineStore } from 'pinia'
import router from '@/router'

export const useUserStore = defineStore('user',
  () => {
    const isLoggedIn = ref(true)

    function login() {
      isLoggedIn.value = true
      router.push('/')
    }

    function logout() {
      isLoggedIn.value = false
      router.push('/login')
    }

    return { isLoggedIn, login, logout }
  },
  { persist: true }
)
