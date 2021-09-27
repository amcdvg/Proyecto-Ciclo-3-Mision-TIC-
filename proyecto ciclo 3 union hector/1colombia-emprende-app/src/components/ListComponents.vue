<template>
 <div class="row">
 <div class="col-md-12">
 <table class="table table-striped">
 <thead class="thead-dark">
 <tr>
 <th>Name</th>
 <th>Last Name</th>
 <th>CC</th>
 <th>Email</th>
 <th>Password</th>
 <th>Address</th>
 <th>Phone</th>
 <th>Actions</th>
 </tr>
 </thead>
 <tbody>
 <tr v-for="emprendedor in Emprendedores" :key="emprendedor._id">
 <td>{{ emprendedor.name }}</td>
 <td>{{ emprendedor.last_name }}</td>
 <td>{{emprendedor.cc}}</td>
 <td>{{ emprendedor.email }}</td>
 <td>{{emprendedor.password}}</td>
 <td>{{emprendedor.address}}</td>
 <td>{{ emprendedor.phone }}</td>
 <td>
 <router-link
 :to="{ name: 'edit', params: { id: emprendedor._id } }"
 class="btn btn-success"
 >Edit
 </router-link>
 <button
 @click.prevent="deleteStudent(emprendedor._id)"
 class="btn btn-danger"
 >
 Delete
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
 deleteStudent(id) {
 let apiURL = `http://localhost:4000/api/delete-emprendedor/${id}`;
 let indexOfArrayItem = this.Emprendedores.findIndex((i) => i._id === id);
 if (window.confirm("Do you really want to delete?")) {
 axios
 .delete(apiURL)
 .then(() => {
 this.emprendedor.splice(indexOfArrayItem, 1);
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
