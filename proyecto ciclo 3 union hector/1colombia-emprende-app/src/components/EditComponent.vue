<template>
	<div class="row justify-content-center">
		<div class="col-md-6">
			<h3 class="text-center">Update Emprendedor</h3>
			<form @submit.prevent="handleUpdateForm">

	<div class="form-group">
		<label>Name</label>
		<input
			type="text"
			class="form-control"
			v-model="emprendedor.name"
			required
		/>
		</div>
		

		<div class="form-group">
		<label>Last Name</label>
		<input
			type="text"
			class="form-control"
			v-model="emprendedor.last_name"
			required
		/>
		</div>

		<div class="form-group">
		<label>CC</label>
		<input
			type="text"
			class="form-control"
			v-model="emprendedor.cc"
			required
		/>
		</div>

		
		<div class="form-group">
		<label>Email</label>
		<input
			type="email"
			class="form-control"
			v-model="emprendedor.email"
			required
		/>
		</div>

		<div class="form-group">
		<label>Password</label>
		<input
			type="email"
			class="form-control"
			v-model="emprendedor.password"
			required
		/>
		</div>

		<div class="form-group">
		<label>Address</label>
		<input
			type="text"
			class="form-control"
			v-model="emprendedor.address"
			required
		/>
		</div>

		<div class="form-group">
		<label>Phone</label>
		<input
		type="text"
		class="form-control"
		v-model="emprendedor.phone"
		required
		/>
		</div>


					<div class="form-group">
						<button class="btn btn-danger btn-block">Update</button>
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
 Emprendedores: {},
 };
 },
 created() {
 let apiURL = `http://localhost:4000/api/search-Emprendedor/${this.$route.params.id}`;
 axios.get(apiURL).then((res) => {
 this.student = res.data;
 });
 },
 methods: {
 handleUpdateForm() {
 let apiURL = `http://localhost:4000/api/update-Emprendedor/${this.$route.params.id}`;
 axios
 .put(apiURL, this.Emprendedores)
 .then((res) => {
 console.log(res);
 this.$router.push("/view");
 })
 .catch((error) => {
 console.log(error);
 });
 },
 },
};
</script>