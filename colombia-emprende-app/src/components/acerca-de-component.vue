<template>
<div class="modulo-emprendedores-responsive">
    <header>
      <!--Logo Colombia Emprende-->
      <div class="logo">
        <img src="img/logo-colombia.png" alt="Logo Colombia Emprende">
      </div>
      <!--Barra de Busqueda-->
      
      <!--Módulo Registro-IniciarSesion-->
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
          <img class="modulo-emprendedores" src="../assets/img/modulo-emprendedores.png" alt="">
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
              <form v-on:submit.prevent="onSubmit">
   <br>
 <div class="form-group">
 <label>Confirma tu Correo</label>
 <input
 type="text"
 class="form-control"
 v-model="emprendedor.email"
 required
 />
 </div><br>
<div class="form-group">
 <label>Confirma tu Contraseña</label>
 <input
 type="password"
 placeholder="Ingrese tu contraseña"
 class="form-control"
 v-model="emprendedor.password"
  required
 />
 </div><br>
 <div class="modal-footer form-group d-flex justify-content-end">
 <button type="submit" class="btn btn-primary m-2" data-bs-dismiss="modal">Confirmar</button>
 <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
 </div>
 </form>
            
            
            
              
              
            </div>
          </div>
        </div>
      </div>
      <!--Modulo de Registro-->
      <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
        <div class="offcanvas-header">
          <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body p-0">
          <!--Body del modulo Registro-->
          <div class="row justify-content-center">
            <div class="col-10 m-3">
              <h4 class="titulo-formulario-registro">Ingresa tu Datos</h4>
              <form v-on:submit.prevent="registrarse" class="p-3">
                <div class="form-group formulario-registro">
                  <label>Nombre</label>
                  <input
                  type="text"
                  class="form-control"
                  v-model="emprendedor.name"
                  required
                  />
                </div>
                <div class="form-group formulario-registro">
                  <label>Apellido</label>
                  <input
                  type="text"
                  class="form-control"
                  v-model="emprendedor.apellido"
                  required
                  />
                </div>
                <div class="form-group formulario-registro">
                  <label>E-mail</label>
                  <input
                  type="email"
                  class="form-control"
                  v-model="emprendedor.email"
                  required
                  />
                </div>
                <div class="form-group formulario-registro">
                  <label>Contraseña</label>
                  <input
                  type="password"
                  
                  class="form-control"
                  
                  v-model="emprendedor.password"
                  required
                  />    
                </div>
              
                <div class="form-group formulario-registro">
                  <label>Ciudad de Residencia</label>
                  <input
                  type="text"
                  class="form-control"
                  v-model="emprendedor.ciudad"
                  required
                  />
                </div>
                <div class="form-group formulario-registro">
                  <label>Celular</label>
                  <input
                  type="text"
                  class="form-control"
                  v-model="emprendedor.phone"
                  required
                  />
                </div>
                <div class="form-check aceptar-politicas">
    <input type="checkbox" class="form-check-input mt-2" id="exampleCheck1">
    <label class="form-check-label aceptar" for="exampleCheck1"><a type="button" data-bs-toggle="modal" data-bs-target="#modal-politicas"  id="politica">
      <span class="acepto-las">Acepto las </span>Políticas de Privacidad y Tratamiento de Datos</a></label>
  </div>
                <div class="form-group d-flex justify-content-end">
                  <button class="btn boton-formulario-registro btn-block">Registrarse</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </header> 
 <nav class="barra-navegacion position-relative navbar navbar-dark">
      <ul class="nav nav-pills">
        <li class="nav-item">
          <router-link to="/" class="nav-link" aria-current="page">Inicio</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/emprendimientos">Emprendimientos</router-link>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Categorias</a>
          <ul class="desplegable dropdown-menu">
            <li><router-link :to="{ name: 'emprendimientos/categorias', params: { categoria:categorias.moda } }" class="categorias-navegacion dropdown-item">Moda</router-link></li>
            <li><router-link :to="{ name: 'emprendimientos/categorias', params: { categoria:categorias.artesanias } }" class="categorias-navegacion dropdown-item">Artesanias</router-link></li>
            <li><router-link :to="{ name: 'emprendimientos/categorias', params: { categoria:categorias.tecnologia } }" class="categorias-navegacion dropdown-item" >Tecnología</router-link></li>
            <li><router-link :to="{ name: 'emprendimientos/categorias', params: { categoria:categorias.comida } }" class="categorias-navegacion dropdown-item" >Comida</router-link></li>
            <li><router-link :to="{ name: 'emprendimientos/categorias', params: { categoria:categorias.belleza} }" class="categorias-navegacion dropdown-item" >Belleza</router-link></li>
            <li><router-link :to="{ name: 'emprendimientos/categorias', params: { categoria:categorias.salud } }" class="categorias-navegacion dropdown-item" >Salud y Bienestar</router-link></li>
            <li><router-link :to="{ name: 'emprendimientos/categorias', params: { categoria:categorias.niños } }" class="categorias-navegacion dropdown-item" >Niños y Bebes</router-link></li>
            <li><router-link :to="{ name: 'emprendimientos/categorias', params: { categoria:categorias.deportes } }" class="categorias-navegacion dropdown-item" >Deportes</router-link></li>
            <li><router-link :to="{ name: 'emprendimientos/categorias', params: { categoria:categorias.hogar } }" class="categorias-navegacion dropdown-item" >Hogar</router-link></li>
            <li><router-link :to="{ name: 'emprendimientos/categorias', params: { categoria:categorias.servicios } }" class="categorias-navegacion dropdown-item" >Servicios</router-link></li>
            <li><router-link :to="{ name: 'emprendimientos/categorias', params: { categoria:categorias.otros } }" class="categorias-navegacion dropdown-item" >Otros...</router-link></li>
          </ul>
        </li>
        <div class="collapse position-absolute bottom-0 end-0" id="navbarToggleExternalContent">
          <div class="barra-oculta bg-dark">
            <span>
              <router-link class="d-inline-block nav-link text-decoration-none active" to="/acerca-de">Acerca de</router-link>
              <router-link class="d-inline-block nav-link text-decoration-none" to="/mapa">Mapa del sitio</router-link>
            </span>
          </div>
        </div>
        <button class="boton-barra navbar-toggler position-absolute bottom-25 end-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      </ul>
    </nav> 
 <main class="fondo-claro">
    <div id="carouselCaptions" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img class="banner-acerca " src="../assets/img/banner-acerca1.jpg" alt="...">
          
        </div>
        <div class="carousel-item">
          <img class="banner-acerca d-block" src="../assets/img/banner-acerca2.jpg" alt="...">
          
        </div>
        <div class="carousel-item">
          <img class="banner-acerca d-block" src="../assets/img/banner-acerca3.jpg" alt="...">
          
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselCaptions" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselCaptions" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
    <div class="acerca-de">
      <h1>Acerca de Colombia Emprende</h1>
      <p>Colombia emprede se dedica a promover el comercio entre emprendedores y clientes. Colombia emprende ayudará 
        a fortalecer su emprendimiento, ofreciendo acceso a clientes de Colombia y el mundo. Bienvenido y conoce nuestra página.
      </p>
      <p>Puedes contactarnos en: <span> <a href="colombia0emprende@gmail.com">colombia0emprende@gmail.com</a></span>
      </p>
    </div>
    <div class="acerca-de">
      <h1>Quienes Somos</h1>
      <p>Somos un grupo de desarrolladores aprendices que estamos siendo formados en el programa Mision TIC 2022.
        Colombia Emprende es un proyecto academico propuesto para el desarrollo del tercer ciclo del programa.
        Los desarrolladores pertenecemos al grupo 20 y llamamos al grupo HALMA TEAM, para identificarnos como equipo.
      </p>
      <span><p>Puedes visitarnos aqui para conocer mas sobre:  <a target="_blank" href="https://halmateam.000webhostapp.com">HALMA TEAM</a></p></span>
      
    </div>
    <br>
  </main>
 <footer>
      <div class="cajas-footer d-flex flex-row">
        <div class="col-4 m-2 p-3">
          <h5>En colaboración con:</h5>
          <span>
            <a href="https://mintic.gov.co/portal/inicio/" target="_blank"><img class="logos-footer" src="img/logo-mintic.png" alt=""></a>
            <a href="https://www.misiontic2022.gov.co/portal/" target="_blank"><img class="logos-footer" src="img/logo-mision.png" alt=""></a>
            <a href="https://www.utp.edu.co/" target="_blank"><img class="logos-footer" src="img/logo-utp.png" alt=""></a>
          </span> 
        </div>
        <div class="col-3 m-2 p-3">
          <h5>Siguenos en:</h5>
          <div class="d-flex flex-row">
            <a href="https://www.facebook.com/Colombia-Emprende-109565371475068" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg"  class="iconos-footer bi bi-facebook" viewBox="0 0 16 16">
                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
              </svg>
            </a>
            <a href="https://www.instagram.com/colombiaemprende5/" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg"  class="iconos-footer bi bi-instagram" viewBox="0 0 16 16">
                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
              </svg>
            </a>  
            <a href="https://twitter.com/ColombiaEmpren5" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg"  class="iconos-footer bi bi-twitter" viewBox="0 0 16 16">
                <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
              </svg>
            </a>
            <a href="https://www.youtube.com/channel/UCjNR0g-WdYRHMZZBRtl5JUA" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg"  class="iconos-footer bi bi-youtube" viewBox="0 0 16 16">
                <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"/>
              </svg>
            </a>
          </div> 
        </div>
        <div class="col-3 m-2 p-3">
          <h5>Acerca de:</h5>
          <span>
            <a href="/acerca-de" target="_blank"><img class="logo-footer-acerca" src="img/logo-colombia-emprende.png" alt=""></a>
            <a target="_blank" href="https://halmateam.000webhostapp.com"><img class="logo-footer-acerca" src="img/logo-halma.png" alt=""></a>
          </span> 
        </div>   
      </div>
      <div class=baseDerechos>
        <div>Copyright copy 2021 | Todos los derechos reservados <a href="https://halmateam.000webhostapp.com/">HALMA TEAM</a> | | 
          <a type="button" data-bs-toggle="modal" data-bs-target="#modal-politicas"   id="politica"> Política de Tratamiento de Datos Personales</a>
        </div>
      </div>
      <div class="modal fade" id="modal-politicas" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-politicas modal-dialog modal-dialog-scrollable ">
          <div class="modal-content">
            <div class="modal-header">
              <h3 class="modal-title" id="staticBackdropLabel">Politicas de Privacidad y Tratamiento de Datos</h3>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <div class="p-3">
                <div class="accordion accordion-flush" id="#acordionPoliticas">
                  <div class="politicas-header accordion-item">
                    <h2 class="politicas-header accordion-header" id="politicas-titulo-1">
                      <button class="politicas-titulos accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse1" aria-expanded="false" aria-controls="flush-collapse1">
                        1. Definiciones
                      </button>
                    </h2>
                    <div id="flush-collapse1" class="accordion-collapse collapse" aria-labelledby="politicas-titulo-1" data-bs-parent="#acordionPoliticas">
                      <div class="accordion-body">    <p>Para facilitar la comprensión de estas Condiciones de Uso del Sitio Web, se hace necesario aclarar el significado de las siguientes palabras: <br>
                  
                        a. Contenidos. Implican todas las formas de información o datos que se divulgan en la página web, entre los que se encuentran: textos, imágenes, fotos, logos, diseños, animaciones. <br>
                        
                        b. Derechos de Propiedad Intelectual. incluye lo relativo a marcas, nombres comerciales, logos, enseñas, lemas, nombres de dominio, secretos empresariales, saber-hacer, diseños industriales, patentes, modelos de utilidad y derecho de autor. <br>
                        
                        c. Foro. Servicio automatizado de mensajes, a menudo moderado por un propietario, a través del cual los suscriptores reciben mensajes dejados por otros suscriptores por un tema dado. Los mensajes se envían por correo electrónico. <br>
                        
                        d. Internet. Herramienta de comunicación con decenas de miles de redes de computadoras unidas por el protocolo TCP/IP. Sobre esta red se pueden utilizar múltiples servicios como por ejemplo correos electrónicos, www, etc. <br>
                        
                        e. Página web. Resultado en hipertexto o hipermedia que proporciona un navegador del www después de obtener la información solicitada. Su contenido puede ir desde un texto corto a un voluminoso conjunto de textos, gráficos estáticos o en movimiento, sonido, etc. <br>
                        
                        f. Publicar. Hacer que un documento sea visible desde el Sitio Web. <br>
                        
                        g. Servicios. Son las ayudas en línea que la MINTIC provee actualmente o que piensa proveer en el futuro a los usuarios, por medio de esta página web, como publicación de noticias o actividades propias de la gestión institucional; trámites en línea; consultas; foros y buzón de quejas y reclamos, entre otros. <br>
                        
                        h. Usuario. Es toda persona que ingresa al Sitio Web. Puede registrarse en caso de que requiera realizar un trámite o recibir un servicio de la entidad; o para poner una queja mediante el uso del buzón de Quejas y Reclamos, creado para este efecto. <br>
                        
                        i. Vínculo (link en inglés). Apuntadores hipertexto que sirven para saltar de una información a otra, o de un servidor web a otro, cuando se navega por Internet. <br></p>
                 </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="politicas-titulo-2">
                      <button class="politicas-titulos accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse2" aria-expanded="false" aria-controls="flush-collapse2">
                        2. Aceptación de Términos
                      </button>
                    </h2>
                    <div id="flush-collapse2" class="accordion-collapse collapse" aria-labelledby="politicas-titulo-2" data-bs-parent="#acordionPoliticas">
                      <div class="accordion-body"><p>Se presume que cuando un usuario accede al sitio Web lo hace bajo su total responsabilidad y que, por tanto, acepta plenamente y sin reservas el contenido de los términos y condiciones de uso del sitio Web. MINTIC se reserva, en todos los sentidos, el derecho de actualizar y modificar en cualquier momento y de cualquier forma, de manera unilateral y sin previo aviso, las presentes condiciones de uso, políticas de privacidad y los contenidos de la página. <br></p></div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="politicas-titulo-3">
                      <button class="politicas-titulos accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse3" aria-expanded="false" aria-controls="flush-collapse3">
                        3. Contenidos del Sitio Web
                      </button>
                    </h2>
                    <div id="flush-collapse3" class="accordion-collapse collapse" aria-labelledby="politicas-titulo-3" data-bs-parent="#acordionPoliticas">
                      <div class="accordion-body">
                        <p>El sitio Web tiene por finalidad brindar al usuario todo tipo de información relacionada con la gestión de la entidad en todos los planes, programas y consejerías, por medio de boletines, cifras, noticias. En ningún caso esta información deberá considerarse como exhaustiva, completa o que de cualquier forma satisfaga todas las necesidades del Usuario. <br>
                  
                          El Sitio Web puede tener enlaces a otros sitios de interés o a documentos localizados en otras páginas web de propiedad de otras entidades, personas u organizaciones diferentes a MINTIC. Solamente por el hecho de que el usuario acceda a otro sitio web o a un documento individual localizado en otra página, a través de un link o un vínculo establecido en el Sitio Web, el usuario deberá someterse a las condiciones de uso y a la política de privacidad de la página web a la que envía el link. <br>
                          
                          El establecimiento de un vínculo (link) con el sitio web de otra empresa, entidad o programa no implica necesariamente la existencia de relaciones entre MINTIC y el propietario del sitio o página Web vinculada, ni la aceptación o aprobación por parte de MINTIC de sus contenidos o servicios. Aquellas personas que se propongan establecer un vinculo (link) se asegurarán de que el mismo únicamente permita el acceso a la página de inicio Web. <br>
                          
                          Así mismo, MINTIC no se hace responsable respecto a la información que se halle fuera de este Sitio Web y no sea gestionada directamente por el administrador del Sitio Web. Los vínculos (links) que aparecen en el Sitio Web tienen como propósito informar al Usuario sobre la existencia de otras fuentes susceptibles de ampliar los contenidos que ofrece el Sitio Web, o que guardan relación con aquéllos. MINTIC no garantiza ni se responsabiliza del funcionamiento o accesibilidad de las páginas web enlazadas; ni sugiere, invita o recomienda la visita a las mismas, por lo que tampoco será responsable del resultado obtenido. Por lo tanto, el acceso a las mismas a través del Sitio Web tampoco implica que MINTIC recomiende o apruebe sus contenidos. <br>
                          
                          Por otra parte, la prestación del servicio del Sitio Web es de carácter libre y gratuito para los usuarios. <br>
                          
                          El Sitio Web contiene artículos u obras de carácter literario y científico (en adelante, Información) elaborados por MINTIC o por terceros, con fines informativos, y divulgativos. MINTIC puede modificar o retirar la Información en cualquier momento y sin aviso previo. Las opiniones vertidas en los comentarios realizados por los Usuarios no reflejan necesariamente los puntos de vista de MINTIC. <br>
                          
                          Queda expresamente prohibido el uso del Sitio Web que de cualquier forma sobrecarguen, dañen o inutilicen las redes, servidores y demás equipos informáticos o productos y aplicaciones informáticas de MINTIC o de terceros. <br>
                          
                          MINTIC no se hace responsable del servicio ininterrumpido o libre de error de la página. MINTIC hace sus mejores esfuerzos para que el contenido suministrado sea de óptima calidad, y en tal sentido el Usuario acepta utilizar el servicio. <br>
                          
                          El Usuario no puede emplear los contenidos y, en particular, la información de cualquier otra clase obtenida a través de MINTIC o de los servicios, para emitir publicidad. <br>
                          
                          El Usuario del Sitio Web no alterará, bloqueará o realizará cualquier otro acto que impida mostrar o acceder a cualquier contenido, información o servicios del Sitio Web o que estén incorporados en las páginas web vinculadas. <br></p>
                          
                            <h5>3.1. Responsabilidad por la información contenida</h5>
                            <p>Debido a que en la actualidad los medios técnicos no permiten garantizar la absoluta falta de injerencia de la acción de terceras personas en el Sitio Web, MINTIC de ninguna manera asegura la exactitud y/o veracidad de todo o parte de la información contenida en su página, ni su actualización, ni que dicha información haya sido alterada o modificada en todo o en parte, luego de haber sido publicada en la página, ni cualquier otro aspecto o característica de lo publicado en el sitio o en los enlaces, respectivamente. <br>
                          
                              MINTIC no controla ni garantiza la ausencia de virus ni de otros elementos en los contenidos que puedan producir alteraciones en su sistema informático (software y hardware) o en los documentos electrónicos y ficheros almacenados en su sistema informático. <br>
                              
                              En consecuencia con lo anterior, MINTIC no se hará responsable de ningún daño ocasionado en virtud de cualquier alteración que se haya efectuado a los materiales o archivos de descarga suministrados directamente por la entidad. <br>
                              
                              El Usuario no enviará o transmitirá en el Sitio Web o hacia el mismo, a otros usuarios usuarios o a cualquier persona, cualquier información de contenido obsceno, difamatorio, injuriante, calumniante o discriminatorio contra cualquier persona, o contra MINTIC, sus filiales o entidades adscritas, sus funcionarios o contra los responsables de la administración del Sitio Web. <br>
                              
                              En ningún caso se aceptarán contenidos que pueden ser considerados como ofensivos, sexistas, racistas, discriminatorios, obscenos, en la medida que contenidos ofensivos atentan contra derechos fundamentales de los particulares. <br></p>
                              
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="politicas-titulo-4">
                      <button class="politicas-titulos accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse4" aria-expanded="false" aria-controls="flush-collapse4">
                    4. Propiedad intelectual
                      </button>
                    </h2>
                    <div id="flush-collapse4" class="accordion-collapse collapse" aria-labelledby="politicas-titulo-4" data-bs-parent="#acordionPoliticas">
                      <div class="accordion-body">
                        <p>La propiedad intelectual sobre los contenidos del Sitio Web o bien hacen parte del patrimonio de MINTIC o, en su caso, su titularidad es de terceros que autorizaron el uso de los mismos en el Sitio Web o es información pública que se rige por las leyes de acceso a la información pública colombianas.
                          <br>
                          Los textos y elementos gráficos que constituyen la página Web, así como su presentación y montaje, o son titularidad exclusiva de MINTIC o ésta ostenta los derechos de explotación necesarios. Sin perjuicio de lo anterior, los nombres comerciales, marcas o signos distintivos que aparecen o a los que se hace alusión en el Sitio Web, pertenecen a sus respectivos propietarios y se encuentran protegidos por la legislación vigente al respecto. <br>
                          
                          Se prohíbe cualquier uso, transformación o explotación de los contenidos incluidos en el Sitio Web con finalidades comerciales o promocionales salvo autorización previa de MINTIC; en cualquier caso se prohíbe cualquier uso contrario a la ley y del Sitio Web para uso personal y no comercial, siempre y cuando se haga expresa mención de la propiedad en cabeza del autor del contenido. <br>
                          
                          Todos los logotipos y marcas de la página Web son de propiedad de MINTIC o su uso ha sido autorizado por sus titulares a MINTIC, siendo, en todo caso, los titulares los responsables de cualquier posible controversia que pudiera darse respecto de ellos. Los titulares de dichas marcas y logotipos se reservan el derecho de entablar las acciones legales que consideren convenientes para hacer valer sus derechos tanto en Colombia como en el exterior. <br>
                          
                          El Usuario acepta que los contenidos generados y subidos por él serán de propiedad de MINTIC, conservando el Usuario los derechos morales sobre dichos contenidos. <br>
                          
                          En caso de reclamaciones que pudieran interponerse por los usuarios o por terceros en relación con posibles incumplimientos de los derechos de propiedad intelectual sobre cualquiera de los contenidos del Sitio Web deberán dirigirse a la siguiente dirección de correo electrónico: usoweb@mintic.gov.co Una vez notificado a este correo, dicho contenido será automáticamente eliminado del Sitio Web hasta que quien haya publicado el contenido en disputa haya resuelto el conflicto con quien envía la reclamación. <br></p>
                          
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="politicas-titulo-5">
                      <button class="politicas-titulos accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse5" aria-expanded="false" aria-controls="flush-collapse5">
                        5. Privacidad
                      </button>
                    </h2>
                    <div id="flush-collapse5" class="accordion-collapse collapse" aria-labelledby="politicas-titulo-5" data-bs-parent="#acordionPoliticas">
                      <div class="accordion-body">
                        <p>
                          Se entiende por información personal aquella suministrada por el Usuario para el registro, la cual incluye datos como nombre, identificación, edad, género, dirección, correo electrónico y teléfono. <br>
                          
                          El almacenamiento, y uso de la información personal se rige por las Políticas de Privacidad del Sitio Web. <br></p>
                          
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="politicas-titulo-6">
                      <button class="politicas-titulos  accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse6" aria-expanded="false" aria-controls="flush-collapse6">
                        6. Ley aplicable y jurisdicción
                      </button>
                    </h2>
                    <div id="flush-collapse6" class="accordion-collapse collapse" aria-labelledby="politicas-titulo-6" data-bs-parent="#acordionPoliticas">
                      <div class="accordion-body">
                        <p>a. Estas condiciones de uso del Sitio Web serán rigen por las leyes de la República de Colombia. <br>
                    
                          b. Si cualquier disposición de estas condiciones pierde validez o fuerza obligatoria, por cualquier razón, todas las demás disposiciones, conservan su fuerza obligatoria, carácter vinculante y generarán todos sus efectos. <br>
                          
                          c. Para cualquier efecto legal o judicial, el lugar de las presentes condiciones es la ciudad de Bogotá, República de Colombia, y cualquier controversia que surja de su interpretación o aplicación se someterá a los jueces de la República de Colombia. <br></p>
                         
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="politicas-titulo-7">
                      <button class="politicas-titulos  accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse7" aria-expanded="false" aria-controls="flush-collapse7">
                        7. Participación dentro del Sitio Web
                      </button>
                    </h2>
                    <div id="flush-collapse7" class="accordion-collapse collapse" aria-labelledby="politicas-titulo-7" data-bs-parent="#acordionPoliticas">
                      <div class="accordion-body"><h6>Por el hecho de ingresar al Sitio Web y para garantizar el buen y adecuado uso del mismo, el usuario reconoce que MINTIC se reserva el derecho de:</h6>
                  
                        <p>- Negar el registro a cualquier persona, en cualquier momento y por cualquier razón. <br>
                        
                        - Incluir o no en el Sitio Web el material recibido de los usuarios a su criterio. En el caso de incluirlo, podrá mantener en el Sitio Web dicho material por el lapso que considere pertinente o modificarlo. <br>
                        
                        - Remover, sin que sea obligatorio, contenidos que a juicio de MINTIC sean ilegales, ofensivos, difamatorios o que de cualquier otra forma violen éstos Condiciones de Uso. Así mismo, podrán ser retirados los contenidos que violen derechos de propiedad intelectua, a solicitud de éste. <br>
                        
                        - Utilizar la información personal y/o contenidos suministrados por los Usuarios de acuerdo con las Condiciones de Uso del Sitio Web y la Política de Privacidad . <br> </p>
                      </div></div>
                    </div>
                  </div>
                </div>
              
              </div>
            </div>
          </div>
        </div>
    
    </footer>
 </div>
</template>
<script>
    import axios from "axios";
    

    export default {
        data() {
            return {
              categorias:{
              moda : "Moda",
              artesanias : "Artesanias",
              tecnologia : "Tecnologia",
              comida : "Comida",
              belleza : "Belleza",
              salud : "Salud y Bienestar",
              niños : "Niños y Bebes",
              deportes : "Deportes",
              hogar : "Hogar",
              servicios : "Servicios",
              otros : "Otros...",
              },
                emprendedor: {},
                user: {},
            };
            
        },
             
        methods: {
          onSubmit() {  
            axios
            .post(`http://localhost:4000/api/login`, this.emprendedor)
            .then((res) => {
              localStorage.setItem("jwtToken", res.data.token);
              this.$router.push(`/admin/${res.data.id}`);
              })
            .catch(e => {
              this.errors.push(e);
            });
        },
            registrarse() {
                let apiURL = "http://localhost:4000/api/registro-emprendedor";
                axios
                .post(apiURL, this.emprendedor)
                .then( 
                      this.$router.push("/validar")
                )
                .catch((error) => {
                    console.log(error);
                });
            }
            
        },
        
        
    };
    
</script>