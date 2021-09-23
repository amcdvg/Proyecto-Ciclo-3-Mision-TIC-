import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
const routes = [
    {
        path: "/registro-emprendedor",
        name: "registro-emprendedor",
        component: () => import("../components/componente-registro-emprendedor"),
    },
    {
        path: "/login-emprendedor",
        name: "login-emprendedor",
        component: () => import("../components/componente-login-emprendedor"),
    },
    {
        path: "/editar-emprendedor/:id",
        name: "editar-emprendedor",
        component: () => import("../components/componente-editar-emprendedor"),
    },
    {
        path: "/componente-listar-emprendedor",
        name: "listar-emprendedor",
        component: () => import("../components/componente-listar-emprendedor"),
    },
    {
        path: "/eliminar-emprendedor",
        name: "eliminar-emprendedor",
        component: () => import("../components/componente-eliminar-emprendedor"),
    },   
    ];
const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});
export default router;