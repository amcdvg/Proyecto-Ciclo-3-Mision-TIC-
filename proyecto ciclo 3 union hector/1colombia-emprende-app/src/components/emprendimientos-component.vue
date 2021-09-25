<template>
<div>
 <!--Inicio de Barra de Navegación--> 
    <nav class="barra-navegacion position-relative navbar navbar-dark">
      <ul class="nav nav-pills">
        <li class="nav-item">
          <router-link to="/" class="nav-link" aria-current="page">Inicio</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link active" to="/emprendimientos">Emprendimientos</router-link>
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
              <router-link class="d-inline-block nav-link text-decoration-none" to="/mapa">Mapa del sitio</router-link>
            </span>
          </div>
        </div>
        <button class="boton-barra navbar-toggler position-absolute bottom-25 end-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      </ul>
    </nav>
    <main>
        <div class="d-flex">
            <div class="barra-tienda">
                <nav class="navbar navbar-light">
                    <div class="container-fluid m-2 p-1">
                        <button class="boton-tienda navbar-toggler p-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent4" aria-controls="navbarToggleExternalContent4" aria-expanded="false" aria-label="Toggle navigation">
                        Categorias
                        </button>
                    </div>
                    <div class="collapse" id="navbarToggleExternalContent4">
                        <div>
                            <ul class="nav flex-column">
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="#">Active</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Link</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Link</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link disabled">Disabled</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="container-fluid m-2 p-1">
                        <button class="boton-tienda navbar-toggler p-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent2" aria-controls="navbarToggleExternalContent2" aria-expanded="false" aria-label="Toggle navigation">
                            Ciudad
                        </button>
                    </div>
                    <div class="collapse" id="navbarToggleExternalContent2">
                        <div class="">
                            <ul class="nav flex-column">
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="#">Active</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Link</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Link</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link disabled">Disabled</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="container-fluid m-2 p-1">
                        <button class="boton-tienda navbar-toggler p-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent3" aria-controls="navbarToggleExternalContent3" aria-expanded="false" aria-label="Toggle navigation">
                            Ofertas
                        </button>
                    </div>
                    <div class="collapse" id="navbarToggleExternalContent3">
                        <div class="">
                            <ul class="nav flex-column">
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="#">Active</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Link</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Link</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link disabled">Disabled</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
            <div class="fondo-claro w-100 p-2">
                <div class="tienda card mb-3 w-100 m-2 p-2 col">
                    <div class="row g-0">
                        <div class="col-3">
                            <img src="banner.jpg" class="img-fluid rounded-start" alt="...">
                        </div>  
                        <div class="col-9">
                            <div class="card-body">
                                <h5 class="card-title">Nombre Tienda</h5>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p class="card-text">
                                    <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#tienda-modulos1" aria-expanded="false" aria-controls="tienda-modulos1">
                                        Ver más...
                                    </button>
                                </p>
                            </div>
                        </div>
                    </div>  
                    <div class="collapse" id="tienda-modulos">
                        <div class="card card-body">
                            Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                        </div>
                    </div>
                </div>
                <div class="tienda card mb-3 w-100 m-2 p-2 col">
                    <div class="row g-0">
                        <div class="col-3">
                            <img src="banner1.png" class="img-fluid rounded-start" alt="...">
                        </div>
                        <div class="col-9">
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p class="card-text">
                                    <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#tienda-modulos1" aria-expanded="false" aria-controls="tienda-modulos1">
                                        Ver más...
                                    </button>
                                </p>
                            </div>
                        </div>
                    </div>  
                    <div class="collapse" id="tienda-modulos1">
                        <div class="card card-body">
                            Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                        </div>
                    </div>
                </div>
                <div class="tienda card mb-3 w-100 m-2 p-2 col">
                    <div class="row g-0">
                        <div class="col-3">
                            <img src="banner2.jpg" class="img-fluid rounded-start" alt="...">
                        </div>
                        <div class="col-9">
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p class="card-text">
                                    <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#tienda-modulos2" aria-expanded="false" aria-controls="tienda-modulos2">
                                        Ver más...
                                    </button>
                                </p>
                            </div>
                        </div>
                    </div>  
                    <div class="collapse" id="tienda-modulos2">
                        <div class="card card-body">
                            Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                        </div>
                    </div>
                </div>
                <nav aria-label="Page navigation example">
                    <ul class="pagination justify-content-end">
                        <li class="page-item disabled">
                            <a class="page-link">Previous</a>
                        </li>
                        <li class="page-item"><a class="page-link" href="#">1</a></li>
                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                        <li class="page-item">
                            <a class="page-link" href="#">Next</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </main>
</div>    
</template>