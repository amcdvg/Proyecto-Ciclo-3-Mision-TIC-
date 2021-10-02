<template>
    <div>
    <div>
        <div class="collapse position-absolute" id="navbarToggleExternalContent1">
          <div class="barra-emprendedores w-75">
            <div class="row ml-2 pl-2">
              <span class="caja-barra-emprendedores">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                  <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                </svg>
                <a type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop" class="text-decoration-none">Iniciar Sesión</a>
              </span>
              <span class="caja-barra-emprendedores">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-lightbulb" viewBox="0 0 16 16">
                  <path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13a.5.5 0 0 1 0 1 .5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1-.46-.302l-.761-1.77a1.964 1.964 0 0 0-.453-.618A5.984 5.984 0 0 1 2 6zm6-5a5 5 0 0 0-3.479 8.592c.263.254.514.564.676.941L5.83 12h4.342l.632-1.467c.162-.377.413-.687.676-.941A5 5 0 0 0 8 1z"/>
                </svg>
                <a class="text-decoration-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Registra tu Emprendimiento</a>
              </span>
            </div>
          </div>
        </div>
      </div>
      <!--Boton-Modulo-Emprendedores-->
      <button class="emprendedores navbar-toggler position-absolute bottom-25 end-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent1" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
        <span>
          <svg xmlns="http://www.w3.org/2000/svg"  class="emprendedores-flecha bi bi-chevron-left" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
          </svg>
          <img class="modulo-emprendedores" src="img/modulo-emprendedores.png" alt="">
        </span>
      </button>
      <!-- Modulo de Iniciar Sesión-->
      <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="staticBackdropLabel">Iniciar Sesión</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <form class="col-12 p-2">
                <div class="form-group m-2" id="user-group">
                  <input type="text" class="form-control"  id="user-group" placeholder="Usuario">
                </div>
                <div class="form-group m-2" id="contraseña-group">
                  <input type="password" class="form-control" placeholder="contraseña">
                </div>
                <div class="col-12 forgot mt-2">
                  <a href="a"> Recordar contraseña</a>
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
              <button type="button" class="btn btn-primary">Acceder</button>
            </div>
          </div>
        </div>
      </div>
      <!--Modulo de Registro-->
      <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
        <div class="offcanvas-header">
          <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
          <!--Body del modulo Registro-->

 <div class="row justify-content-center">
 <div class="col m-3">
 <h3 class="text-center">Ingresa tu Datos</h3><br>
 <form @submit.prevent="handleSubmitForm">
 <div class="form-group">

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
		<button class="btn btn-danger btn-block">Create</button>
		</div>


 </div>
 </form>
 </div>
 </div>


        </div>
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
 last_name: "",
 cc:"",
 email: "",
 password: "",
 address:"",
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
 last_name: "",
 cc:"",
 email: "",
 password: "",
 address:"",
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