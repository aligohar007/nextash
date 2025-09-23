import { createRouter, createWebHistory } from 'vue-router'

// Pages import
import Home from '../src/Pages/Home.vue'
import About from '../src/Aboutpage/About.vue'
import Services from '../src/Servicespage/Services.vue'
import OurTeam from '../src/Teampage/OurTeam.vue'
import OurProjects from '../src/Projectspage/OurProjects.vue'
import Contact from '../src/Contactpage/Contact.vue'
import Careerspage from '../src/careers/Careerspage.vue'
import Latestblog from '../src/Blogpage/Latestblog.vue'
import TermCondition from '../src/Policespage/Term&Condition.vue'
import Privacy from '../src/Policespage/Privacy.vue'
import Cookies from '../src/Policespage/cookies.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  { path: '/services', name: 'Services', component: Services },
  { path: '/ourteam', name: 'OurTeam', component: OurTeam },
  { path: '/ourprojects', name: 'OurProjects', component: OurProjects },
  { path: '/contact', name: 'Contact', component: Contact, 
       meta: { hideCTA: true }       
  },
  {
      path : '/careers' , name : 'careers' , component : Careerspage,
       meta: { hideCTA: true }
  },
   {
      path : '/blog' , name : 'blog' , component : Latestblog,
       meta: { hideCTA: true }
  },
  {
     path : '/termcondition' , name : 'termcondition' , component : TermCondition,
      meta : {hideCTA:true}
  },
    {
     path : '/privacy' , name : 'privacy' , component : Privacy,
      meta : {hideCTA:true}
  },
  {
     path : '/cookies' , name : 'cookies' , component : Cookies,
      meta : {hideCTA:true}
  }
]


const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  }
})

export default router;
