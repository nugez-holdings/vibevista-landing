import { createRouter, createWebHistory } from 'vue-router'
import PolicyLayout from '@/layouts/PolicyLayout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior: () => ({ top: 0 }),
  routes: [
    {
        path: '/',
        name: 'home',
        component: () => import('@/pages/Home.vue'),
        meta: { requiresAuth: false },
    },

    {
      path: '/',
      component: PolicyLayout,
      children: [
          {
              path: 'about',
              name: 'about',
              component: () => import('@/pages/AboutUs.vue'),
          },
          {
              path: 'privacy-policy',
              name: 'privacy-policy',
              component: () => import('@/pages/PrivacyPolicy.vue'),
          },
          {
              path: 'terms',
              name: 'terms',
              component: () => import('@/pages/TermsAndConditions.vue'),
          },
          {
              path: 'cookies',
              name: 'cookies',
              component: () => import('@/pages/CookiePolicy.vue'),
          },
          {
              path: 'privacy-center',
              name: 'privacy-center',
              component: () => import('@/pages/PrivacyCenter.vue'),
          },
          {
              path: 'help',
              name: 'help',
              component: () => import('@/pages/HelpFAQ.vue'),
          },

          {
              path: '/:pathMatch(.*)*',
              name: 'not-found',
              component: () => import('@/pages/NotFound.vue'),
          },
      ],
  },
  ],
})

export default router
