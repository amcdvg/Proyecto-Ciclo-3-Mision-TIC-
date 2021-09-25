<template>
<div>
            <!--Inicio de Barra de Navegación--> 
    <nav class="barra-navegacion position-relative navbar navbar-dark">
      <ul class="nav nav-pills">
        <li class="nav-item">
          <router-link to="/" class="nav-link active" aria-current="page">Inicio</router-link>
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
              <router-link class="d-inline-block nav-link text-decoration-none" to="/mapa">Mapa del sitio</router-link>
            </span>
          </div>
        </div>
        <button class="boton-barra navbar-toggler position-absolute bottom-25 end-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      </ul>
    </nav>    
    <!--Inicio del Main--> 
    <main class="fondo-claro">
        <!--Inicio del Carrusel Principal--> 
        <div id="carouselIndex" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselIndex" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselIndex" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselIndex" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img class="banner-inicio" src="img/banner1.jpg" alt="...">
                </div>
                <div class="carousel-item">
                    <img class="banner-inicio" src="img/banner5.jpg" alt="...">
                </div>
                <div class="carousel-item">
                    <img class="banner-inicio" src="img/banner3.jpg" alt="...">
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselIndex" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Anterior</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselIndex" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Siguiente</span>
            </button>
        </div>
        <!--Inicio de Galeria de Categorias--> 
        <div class="gallery">
            <div class="gallery-container">
                <div class="gallery-item gallery-item-1">
                    <div class="row">
                        <div class="caja-imagen-categorias">
                            <img class="imagen-categorias card-img" src="img/moda.jpeg" data-index="1">
                            <div class="texto-categorias card-img-overlay">
                            <a href="">Moda</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="gallery-item gallery-item-2">
                    <div class="row">
                        <div class="caja-imagen-categorias">
                            <img class="imagen-categorias card-img"  src="img/artesanias.jpeg" data-index="2">
                            <div class="texto-categorias card-img-overlay">
                            <a href="">Artesanias</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="gallery-item gallery-item-3">
                    <div class="row">
                        <div class="caja-imagen-categorias">
                            <img class="imagen-categorias card-img" src="img/tecnologia.jpg" data-index="3">
                            <div class="texto-categorias card-img-overlay">
                            <a href="">Tecnologia</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="gallery-item gallery-item-4">
                    <div class="row">
                        <div class="caja-imagen-categorias">
                            <img class="imagen-categorias card-img"  src="img/comida.jpg" data-index="4">
                            <div class="texto-categorias card-img-overlay">
                                <a href="">Comida</a>
                            </div>
                        </div>
                    </div>
                </div>             
                <div class="gallery-item gallery-item-5">
                    <div class="row">
                        <div class="caja-imagen-categorias">
                            <img class="imagen-categorias card-img" src="img/belleza.jpeg" data-index="5">
                                <div class="texto-categorias card-img-overlay">
                                    <a href="">Belleza</a>
                                </div>
                        </div>
                    </div>
                </div> 
                <div class="gallery-item gallery-item-6">
                    <div class="row">
                        <div class="caja-imagen-categorias">
                            <img class="imagen-categorias card-img"  src="img/servicios.jpeg" data-index="6">
                            <div class="texto-categorias card-img-overlay">
                                <a href="">Servicios</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="gallery-item gallery-item-7">
                    <div class="row">
                        <div class="caja-imagen-categorias">
                            <img class="imagen-categorias card-img"  src="img/salud.jpg" data-index="7">
                            <div class="texto-categorias-largo card-img-overlay">
                                <a href="">Salud y Bienestar</a>
                            </div>
                        </div>
                    </div>
                </div>   
                <div class="gallery-item gallery-item-8">
                    <div class="row">
                        <div class="caja-imagen-categorias">
                            <img class="imagen-categorias card-img"  src="img/bebe.jfif" data-index="8">
                            <div class="texto-categorias-largo card-img-overlay">
                                <a href="">Niños y <br> Bebes</a>
                            </div>
                        </div>
                    </div>
                </div>   
                <div class="gallery-item gallery-item-9">
                    <div class="row">
                        <div class="caja-imagen-categoria">
                            <img class="imagen-categorias card-img"  src="img/deporte.jpg" data-index="9">
                            <div class="texto-categorias card-img-overlay">
                                <a href="">Deportes</a>
                            </div>
                        </div>
                    </div>
                </div>   
                <div class="gallery-item gallery-item-10">
                    <div class="row">
                        <div class="caja-imagen-categorias">
                            <img class="imagen-categorias card-img"  src="img/hogar.jpg" data-index="10">
                            <div class="texto-categorias card-img-overlay">
                                <a href="">Hogar</a>
                            </div>
                        </div>
                    </div>
                </div>   
                <div class="gallery-item gallery-item-11">
                    <div class="row">
                        <div class="caja-imagen-categorias col-sm-12">
                            <img class="imagen-categorias card-img"  src="img/otros.jpeg" data-index="11">
                            <div class="texto-categorias card-img-overlay">
                                <a href="">Otros...</a>
                            </div>
                        </div>
                    </div>
                </div>   
            </div>             
            <h1 class="categorias-titulo">CATEGORIAS</h1>
            <div class="gallery-controls"></div>
        </div>
        
        <br>
        <!--Inicio Publicidad y Noticias--> 
        <div class="row m-3 justify-content-center p-3">
            <div class="col-7">
                <div class="tarjeta-registro card col-12 ">
                    <img src="img/publicidad.jpeg" class="tarjeta-emprendedor-imagen card-img" alt="...">
                    <div class="tarjeta-emprendedor card-img-overlay">
                        ¿Eres un Emprendedor Colombiano?
                    </div>
                    <div class="tarjeta-emprendedor-oculta card-img-overlay">
                        Registrate en Colombia Emprende<br><p>te ofrecemos un espacio gratuito para crear el perfil de tu Emprendimiento. </p>
                    </div>
                </div>
                <div class="tarjeta-registro-footer card col-12">
                    <a type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Registrate Aqui</a>
                </div> 
            </div>    
            <div class="seccion-noticias card col-3 p-3">
                <img src="img/ley.png" class="imagen-seccion-noticias card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Noticias</h5>
                    <p class="card-text">Conoce la nueva <b>Ley de Emprendimiento 2020</b> creada para ayudar a los emprendedores colombianos.</p>
                </div>
                <div class="card-footer text-center">
                    <a href="https://dapre.presidencia.gov.co/normativa/normativa/LEY%202069%20DEL%2031%20DE%20DICIEMBRE%20DE%202020.pdf" target="_blank">
                    Ver Documento
                    </a>
                </div>
            </div>
        </div>
        <br>
        <!--Inicio Páginas Relacionadas--> 
        <div class="related-pages-fondo p-3">
            <div class="related-titulo"> Páginas Relacionadas</div>
            <div class="related-pages-cajas p-2">
                <div class="related-pages p-2">
                    <div class="row m-2 justify-content-center p-1">
                        <div class="col-2 m-2 text-center justify-content-center">
                            <a target="_blank" href="https://artesaniasdecolombia.com.co/PortalAC/General/template_index.jsf"><img src="img/artesanias-de-colombia.png" class="aliados card-img-top" alt="..."></a>
                        </div>
                        <div class="col-2 m-2 text-center justify-content-center">
                            <a target="_blank" href="https://compralonuestro.co/"><img src="img/compra-lo-nuestro.jpg" class="aliados card-img-top" alt="..."></a>
                        </div>
                        <div class="col-2 m-2 text-center justify-content-center">
                            <a target="_blank" href="https://innpulsacolombia.com/"><img src="img/impulsa.jpg" class="aliados card-img-top" alt="..."></a>
                        </div>
                        <div class="col-2 m-2 text-center justify-content-center">
                            <a target="_blank" href="https://www.colombiaproductiva.com/"><img src="img/colombia-productiva.png" class="aliados card-img-top" alt="..."></a>
                        </div>
                        <div class="col-2 m-2 text-center justify-content-center">
                            <a target="_blank" href="https://www.fondoemprender.com//SitePages/Home.aspx#"><img src="img/fondo-emprender.png" class="aliados card-img-top" alt="..."></a>
                        </div>
                    </div>
                </div>
            </div> 
        </div>          
    </main>
</div>    
</template>

