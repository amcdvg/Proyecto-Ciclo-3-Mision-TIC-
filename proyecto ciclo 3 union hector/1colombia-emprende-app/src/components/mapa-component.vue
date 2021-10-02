<template>
    <div>
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
              <router-link class="d-inline-block nav-link text-decoration-none" to="/acerca-de">Acerca de</router-link>
              <router-link class="d-inline-block nav-link active text-decoration-none" to="/mapa">Mapa del sitio</router-link>
            </span>
          </div>
        </div>
        <button class="boton-barra navbar-toggler position-absolute bottom-25 end-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      </ul>
    </nav>
         <main class="fondo-claro">
      <br>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item" aria-current="page">Inicio</li>
        </ol>
      </nav>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item" aria-current="page">Tienda</li>
        </ol>
      </nav>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item" aria-current="page">Acerca de</li>
        </ol>
      </nav>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item" aria-current="page">Iniciar Sesión</li>
        </ol>
      </nav>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item" aria-current="page">Registrarse</li>
        </ol>
      </nav>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item" aria-current="page">Politica de tratamiento de datos</li>
        </ol>
      </nav>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="#">Home</a></li>
          <li class="breadcrumb-item"><a href="#">Library</a></li>
          <li class="breadcrumb-item active" aria-current="page">Data</li>
        </ol>
      </nav>

      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="#">Categorias</a></li>
          <li class="breadcrumb-item active" aria-current="page">Tienda</li>
        </ol>
      </nav>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="#">Home</a></li>
          <li class="breadcrumb-item"><a href="#">Library</a></li>
          <li class="breadcrumb-item active" aria-current="page">Data</li>
        </ol>
      </nav>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="#">Home</a></li>
          <li class="breadcrumb-item"><a href="#">Library</a></li>
          <li class="breadcrumb-item active" aria-current="page">Data</li>
        </ol>
      </nav><br>
    </main>
    </div>
</template>