<template>
 <div class="row">
 <div class="col-md-12">
 <table class="table table-striped">
 <thead class="thead-dark">
 <tr>
 <th>Nombre</th>
 <th>E-mail</th>
 <th>Contraseña</th>
 <th>Telefono</th>
 <th></th>
 </tr>
 </thead>
 <tbody>
 <tr v-for="emprendedor in emprendedores" :key="emprendedor._id">
 <td>{{ emprendedor.name }}</td>
 <td>{{ emprendedor.email }}</td>
 <td>{{ emprendedor.password }}</td>
 <td>{{ emprendedor.phone }}</td>
 <td>
 <button
 @click.prevent="deleteEmprendedor(emprendedor._id)"
 class="btn btn-danger"
 >
 Borrar
 </button>
 </td>
 </tr>
 </tbody>
 </table>
 </div>
 </div>
</template>
<script>
import axios from "axios";
export default {
 data() {
 return {
 Emprendedores: [],
 };
 },
 created() {
 let apiURL = "http://localhost:4000/api";
 axios
 .get(apiURL)
 .then((res) => {
 this.Emprendedores = res.data;
 })
 .catch((error) => {
 console.log(error);
 });
 },
 methods: {
 deleteEmprendedor(id) {
 let apiURL = `http://localhost:4000/api/eliminar-emprendedor/${id}`;
 let indexOfArrayItem = this.Emprendedores.findIndex((i) => i._id === id);
 if (window.confirm("De verdad quiere eliminar le registro?")) {
 axios
 .delete(apiURL)
 .then(() => {
 this.Emprendedores.splice(indexOfArrayItem, 1);
 })
 .catch((error) => {
 console.log(error);
 });
 }
 },
 },
};
</script>
<style>
.btn-success {
 margin-right: 10px;
}
</style>
