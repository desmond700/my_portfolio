import { createRouter, createWebHistory, RouteMeta, RouteRecordRaw } from 'vue-router'

const app_name = 'My Portfolio'

const routes: Array<RouteRecordRaw> = [
  { 
    path: '/', 
    redirect: '/about'
  },
  { 
    path: '/about', 
    name: 'about',
    component: () => import('../views/About.vue'),
    meta: { 
      pageTitle: `${app_name} - About Page`, 
      pageName: "About Page",
      routeNavPos: 0
    }
  },
  { 
    path: '/skills', 
    name: 'skills',
    component: () => import('../views/Skills.vue'),
    meta: { 
      pageTitle: `${app_name} - Skills Page`, 
      pageName: "Skills Page",
      routeNavPos: 1
    }
  },
  { 
    path: '/projects',
    name: 'projects',
    component: () => import('../views/project/ProjectList.vue'),
    meta: { 
      showProjectDetails: false, 
      pageTitle: `${app_name} - Projects Page`, 
      pageName: "Projects Page",
      routeNavPos: 2
    }
  },
  { 
    path: '/projects/:id',
    name: 'projectDetails',
    component: () => import('../views/project/ProjectDetails.vue'),
    meta:{
      requiresAuth: false,
      showProjectDetails: true,
      pageTitle: `${app_name} - Project Details Page`,
      pageName: "Project details Page",
      routeNavPos: 2
    },
  },
  { 
    path: '/:pathMatch(.*)*', 
    name: 'NotFound', 
    meta: { 
      pageTitle: `${app_name} - Page not found`,
      pageName: "Page not found",
      routeNavPos: -1
    },
    component: () => import('../views/PageNotFound.vue') 
  }
]; // short for `routes: routes`

  const router = createRouter({
    history: createWebHistory("/"),
    routes
  });

  router.beforeEach((to: any, from: any, next: any) => {
    document.title = to.meta.pageTitle
    next()
  })

  export default router

