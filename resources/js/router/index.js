import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Index from '../components/web/Index.vue';
import About from '../components/web/About.vue';
import Contact from '../components/web/Contact.vue';

export default new VueRouter({
    mode: 'history',
    routers:[
        { path: '/', component: Index },
        { path: '/about', component: About },
        { path: '/contact', component: Contact },
        ]
})