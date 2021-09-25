<template>
<div>
     <!--Inicio de Barra de Navegación--> 
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
            <li><a class="categorias-navegacion dropdown-item" href="#">Moda</a></li>
            <li><a class="categorias-navegacion dropdown-item" href="#">Artesanias</a></li>
            <li><a class="categorias-navegacion dropdown-item" href="#">Tecnología</a></li>
            <li><a class="categorias-navegacion dropdown-item" href="#">Comida</a></li>
            <li><a class="categorias-navegacion dropdown-item" href="#">Belleza</a></li>
            <li><a class="categorias-navegacion dropdown-item" href="#">Salud y Bienestar</a></li>
            <li><a class="categorias-navegacion dropdown-item" href="#">Niños y Bebes</a></li>
            <li><a class="categorias-navegacion dropdown-item" href="#">Deportes</a></li>
            <li><a class="categorias-navegacion dropdown-item" href="#">Hogar</a></li>
            <li><a class="categorias-navegacion dropdown-item" href="#">Servicios</a></li>
            <li><a class="categorias-navegacion dropdown-item" href="#">Otros...</a></li>
          </ul>
        </li>
        <div class="collapse position-absolute bottom-0 end-0" id="navbarToggleExternalContent">
          <div class="barra-oculta bg-dark">
            <span>
              <router-link class="d-inline-block nav-link active text-decoration-none" to="/acerca-de">Acerca de</router-link>
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
          <img class="banner-acerca " src="banner1.jpg" alt="...">
          <div class="caja-banner carousel-caption d-none d-md-block">
            <h5>¡Yo Apoyo Colombia Emprende!</h5>
            <p>¡Porque yo invierto en mi gente!</p>
          </div>
        </div>
        <div class="carousel-item">
          <img class="banner-acerca d-block" src="banner3.jpg" alt="...">
          <div class="caja-banner carousel-caption d-none d-md-block">
            <h5>100% Colombiano</h5>
            <p>Conoce los mejores emprendientos que se producen en Colombia</p>
          </div>
        </div>
        <div class="carousel-item">
          <img class="banner-acerca d-block" src="banner5.jpg" alt="...">
          <div class="caja-banner carousel-caption d-none d-md-block">
            <h5>Compra Colombiano</h5>
            <p>Buscando en esta página apoyaras a los emprendedores Colombianos</p>
          </div>
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
      <h1>Sobre Nosotros</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim  ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
          fugiat nulla pariatur. Excepteur sint occaecat.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. <span> <a href="mailto:info@somedomain.com">info@somedomain.com</a></span>
      </p>
  </div>
  <br>
</main>
</div> 
</template>