<template>
 <div class="row justify-content-center">
 <div class="col-md-6">
 <h3 class="text-center">Actualizar Emprendedor</h3>
 <form @submit.prevent="handleUpdateForm">
 <div class="form-group">
 <label>Nombre</label>
 <input
 type="text"
 class="form-control"
 v-model="emprendedor.name"
 required
 />
 </div>
 <div class="form-group">
 <label>E-mail</label>
 <input
 type="email"
 class="form-control"
 v-model="emprendedor.email"
 required
 />
 </div>
 <div class="form-group">
 <label>Contraseña</label>
 <input
 type="text"
 class="form-control"
 v-model="emprendedor.password"
 required
 />
 </div>
 <div class="form-group">
 <button class="btn btn-danger btn-block">Actualizar</button>
 </div>
 </form>
 </div>
 </div>
</template>
<script>
import axios from "axios";
export default {
 data() {
 return {
 emprendedor: {},
 };
 },
 created() {
 let apiURL = `http://localhost:4000/api/buscar-emprendedor/${this.$route.params.id}`;
 axios.get(apiURL).then((res) => {
 this.emprendedor = res.data;
 });
 },
 methods: {
 handleUpdateForm() {
 let apiURL = `http://localhost:4000/api/editar-emprendedor/${this.$route.params.id}`;
 axios
 .put(apiURL, this.emprendedor)
 .then((res) => {
 console.log(res);
 this.$router.push("/listar-emprendedor");
 })
 .catch((error) => {
 console.log(error);
 });
 },
 },
};
</script>