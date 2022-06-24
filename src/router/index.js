import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      title: 'Buat Password Menjadi Kuat dan Sulit Ditebak! - Password Generator',
      metaTags: [
        {
          name: 'Buat Password Menjadi Kuat dan Sulit Ditebak!',
          content: 'Buat Password Menjadi Kuat dan Sulit Ditebak! - Password Generator'
        },
        {
          name: 'description',
          content: 'Buat Password Menjadi Kuat dan Sulit Ditebak! - Password Generator'
        },
        {
          property: 'og:description',
          content: 'Buat Password Menjadi Kuat dan Sulit Ditebak! - Password Generator'
        },
        {
          property: 'keyword',
          content: 'Buat Password Menjadi Kuat dan Sulit Ditebak dengan Password Generator'
        },
      ]
    }
  },
  {
    path: '/:catchAll(.*)',

    name: '404View',
    component: () => import('../views/404View.vue'),
    meta: {
      title: '404 Halaman Tidak Ditemukan - DuniaDev',
      metaTags: [
        {
          name: 'title',
          content: '404 Halaman Tidak Ditemukan - DuniaDev'
        },
        {
          name: 'description',
          content: '404 Halaman Tidak Ditemukan - DuniaDev'
        },
        {
          property: 'og:description',
          content: '404 Halaman Tidak Ditemukan - DuniaDev'
        },
      ]
    },
    
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

router.beforeEach((to, from, next) => {
  const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title);

  const nearestWithMeta = to.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);

  const previousNearestWithMeta = from.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);
  if(nearestWithTitle) {
    document.title = nearestWithTitle.meta.title;
  } else if(previousNearestWithMeta) {
    document.title = previousNearestWithMeta.meta.title;
  }
  Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(el => el.parentNode.removeChild(el));
  if(!nearestWithMeta) return next();
  nearestWithMeta.meta.metaTags.map(tagDef => {
    const tag = document.createElement('meta');

    Object.keys(tagDef).forEach(key => {
      tag.setAttribute(key, tagDef[key]);
    });

    return tag;
  })
  .forEach(tag => document.head.appendChild(tag));

  next();
});

export default router
