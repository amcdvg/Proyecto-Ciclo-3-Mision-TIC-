<template>
 <div class="row justify-content-center">
 <div class="col m-3">
 <h3 class="text-center">Ingresa tu Datos</h3><br>
 <form @submit.prevent="handleSubmitForm">
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
 <label>Celular</label>
 <input
 type="text"
 class="form-control"
 v-model="emprendedor.phone"
 required
 />
 </div>
 <div class="form-group d-flex justify-content-end">
 <button class="btn btn-primary btn-block m-2">Registrarse</button>
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
emprendedor: {
 name: "",
 email: "",
 password: "",
 phone: "",
 },
 };
 },
 methods: {
 handleSubmitForm() {
 let apiURL = "http://localhost:4000/api/registro-emprendedor";
 axios
 .post(apiURL, this.emprendedor)
 .then(() => {
 this.$router.push("/listar-emprendedor");
 this.emprendedor = {
 name: "",
 email: "",
 password: "",
 phone: "",
 };
 })
 .catch((error) => {
 console.log(error);
 });
 },
 },
};
</script>