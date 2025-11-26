<script setup lang="ts">
  import { ref } from 'vue'
  import HelloWorld from './components/HelloWorld.vue'
  import { SignedIn, SignedOut, SignInButton, UserButton, useAuth } from '@clerk/vue'

  const { getToken } = useAuth()
  const apiData = ref(null)

  const callApi = async () => {
    const token = await getToken.value()
    const response = await fetch('http://localhost:5010/api/health', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    apiData.value = await response.json()
  }
</script>

<template>
  <header>
    <SignedOut>
      <SignInButton />
    </SignedOut>
    <SignedIn>
      <UserButton />
      <button @click="callApi">Call API</button>
      <div v-if="apiData">
        {{ apiData }}
      </div>
    </SignedIn>
  </header>
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
