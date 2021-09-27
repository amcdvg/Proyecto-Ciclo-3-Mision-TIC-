import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
const routes = [
    
    {
        path: "/",
        name: "index",
        component: () => import("../components/index-component"),
    },

    {
        path: "/view",
        name: "view",
        component: () => import("../components/ListComponents"),
     },
    
    {
        path: "/emprendimientos",
        name: "emprendimientos",
        component: () => import("../components/emprendimientos-component"),
    },  
    {
        path: "/acerca-de",
        name: "acerca-de",
        component: () => import("../components/acerca-de-component"),
    }, 
    {
        path: "/mapa",
        name: "mapa",
        component: () => import("../components/mapa-component"),
    },

    {
        path: "/edit/:id",
        name: "edit",
        component: () => import("../components/EditComponent"),
     },

    ];
const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});
export default router;