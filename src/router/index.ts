import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const app_name = 'My Portfolio'

const routes: Array<RouteRecordRaw> = [
  { path: '/', 
    redirect: '/about'
  },
  { 
    path: '/about', 
    name: 'about',
    component: () => import('../views/About.vue'),
    meta: { 
      pageTitle: `${app_name} - About Page`, 
      routeNavPos: 0
    }
  },
  { path: '/skills', 
    name: 'skills',
    component: () => import('../views/Skills.vue'),
    meta: { 
      pageTitle: `${app_name} - Skills Page`, 
      routeNavPos: 1
    }
  },
  { path: '/projects',
    name: 'projects',
    component: () => import('../views/project/ProjectList.vue'),
    meta: { 
      showProjectDetails: false, 
      pageTitle: `${app_name} - Projects Page`, 
      routeNavPos: 2
    }
  },
  { 
    path: '/projects/:id',
    name: 'projectDetails',
    component: () => import('../views/project/ProjectDetails.vue'),
    meta: { 
      showProjectDetails: true,
      pageTitle: `${app_name} - Project Details Page`,
      routeNavPos: 2
    },
  },
  { path: '/resume', 
    name: 'resume',
    component: () => import('../views/Resume.vue'),
    meta: { 
      pageTitle: `${app_name} - Resume Page`, 
      routeNavPos: 3
    }
  },
  { path: '/contact', 
    name: 'contact',
    component: () => import('../views/Contact.vue'),
    meta: { 
      layout: 'with-navbar', 
      pageTitle: `${app_name} - Contact Page`, 
      routeNavPos: 4
    }
  },
  { 
    path: '/:pathMatch(.*)*', 
    name: 'NotFound', 
    component: () => import('../views/PageNotFound.vue') 
  }
]; // short for `routes: routes`

  const router = createRouter({
    history: createWebHistory("/"),
    routes
  });

  router.beforeEach((to:any, from: any, next: any) => {
    document.title = to.meta.pageTitle
    next()
  })

  export default router

