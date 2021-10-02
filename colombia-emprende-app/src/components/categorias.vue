<template>
<div>
    <div v-for="emprendimiento in Emprendedores" :key="emprendimiento._id" class="tienda card mb-3 w-100 m-4 p-4 col">
        <div class="row">
                <div class="col">
                    <div class="card-body row">
                      <div class="row">
                        <div class="col-7">
                        <h1 class="card-title m-2"><b>{{emprendimiento.emprendimientoName}}</b></h1>
                            <span class="d-flex flex-row"><h3 class="m-2"><b>E-mail:</b></h3><h3 class="mt-2">{{emprendimiento.emprendimientoEmail}}</h3></span>
                            <span class="d-flex flex-row"><h3 class="m-2"><b>Celular: </b></h3><h3 class="mt-2">{{emprendimiento.emprendimientoPhone}}</h3></span>
                            <span class="d-flex flex-row"><h3 class="m-2"><b>Dirección: </b></h3><h3 class="mt-2">{{emprendimiento.emprendimientoDireccion}}</h3></span>
                            <span class="d-flex flex-row"><h3 class="m-2"><b>Ciudad: </b></h3><h3 class="mt-2">{{emprendimiento.emprendimientoCiudad}}</h3></span>
                            </div>
                            <div class="col-5">
                            <h5><b>Redes Sociales: </b></h5><h4>{{emprendimiento.emprendimientoRedesSocial}}</h4>
                            <h5><b>Categoria: </b></h5><h4>{{emprendimiento.emprendimientoCategoria}}</h4>
                            <h6><b>Descripción: </b></h6><p>{{emprendimiento.emprendimientoDescription}}</p>
                            <h6><b>Tags: </b></h6><h6>{{emprendimiento.emprendimientoTags}}</h6>
                            </div>
                       </div>     
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
 Emprendedores: [],
 emprendedor: {
                name: "",
                email: "",
                password: "",
                phone: "",
                },
 };
 },
 created() {
 let apiURL = `http://localhost:4000/api/buscar-categoria/Comida`;
 axios
 .get(apiURL)
 .then((res) => {
 this.Emprendedores = res.data;
 })
 .catch((error) => {
 console.log(error);
 });
 },
    };
</script>
<style>
.btn-success {
 margin-right: 10px;
}
</style>
