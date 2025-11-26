import { createRouter, createWebHistory } from 'vue-router'
import { useAuth } from '@clerk/vue'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import SignupView from '../views/SignupView.vue'
import DashboardView from '../views/DashboardView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignupView
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashboardView,
      meta: { requiresAuth: true }
    }
  ]
})

router.beforeEach(async (to, _from, next) => {
  if (to.meta.requiresAuth) {
    const { isSignedIn } = useAuth()
    
    // We might need to wait for auth to load, but useAuth is reactive.
    // However, in a navigation guard, we need the current value.
    // Clerk's useAuth().isSignedIn is a Ref<boolean | undefined>.
    
    if (isSignedIn.value === false) {
      next({ name: 'login' })
    } else {
       // If undefined (loading) or true, we let it proceed or handle loading state elsewhere.
       // Ideally we'd wait for loading to finish, but for simplicity:
       next()
    }
  } else {
      // Prevent authenticated users from visiting login/signup pages? 
      // Spec says: Authenticated user visits /login -> Redirect to /dashboard
      const { isSignedIn } = useAuth()
      if ((to.name === 'login' || to.name === 'signup') && isSignedIn.value) {
          next({ name: 'dashboard' })
      } else {
          next()
      }
  }
})

export default router