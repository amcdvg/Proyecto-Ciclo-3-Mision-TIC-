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
        path: "/registro-emprendimiento/:id",
        name: "registro-emprendimiento",
        component: () => import("../components/registro-emprendimiento"),
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
        path: "/admin/:id",
        name: "admin",
        component: () => import("../components/admin/admin-component.vue"),
    },
    {
        path: "/admin/ver-perfil/:id",
        name: "ver-perfil",
        component: () => import("../components/admin/ver-perfil.vue"),
    },
    {
        path: "/admin/editar-perfil/:id",
        name: "editar-perfil",
        component: () => import("../components/admin/editar-perfil.vue"),
    },
    {
        path: "/admin/ver-emprendimiento/:id",
        name: "ver-emprendimiento",
        component: () => import("../components/admin/ver-emprendimiento.vue"),
    },
    {
        path: "/admin/editar-emprendimiento/:id",
        name: "editar-emprendimiento",
        component: () => import("../components/admin/editar-emprendimiento.vue"),
    },
    ];
const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});
export default router;