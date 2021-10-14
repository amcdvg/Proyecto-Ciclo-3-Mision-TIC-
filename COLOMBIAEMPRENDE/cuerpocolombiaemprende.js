<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <link rel="stylesheet" href="bootstrap.css">
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="clases.css">
    
    <title>Colombia Emprende</title>
</head>
<body>
    <header>
        <div class="Logo">
        <img src="logo-colombia-emprende.jpg" alt="Logo Colombia Emprende">
    </div>
    <div class="navegacion">
      <div class="propia3 collapse position-fixed top-0 end-0" id="navbarToggleExternalContent1">
        <div class=" bg-light p-2">
          <div class="d-flex ">
            <a class="m-3 text-decoration-none" href="iniciar_sesion.html">iniciar Sesión</a>
            <a class="m-3 text-decoration-none" href="registrarse.html">Registra tu Emprendimiento</a>
          </div>
        </div>
      </div>
      
        <button class="propia2 navbar-toggler position-absolute bottom-25 end-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent1" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
          <img class="moduloEmprendedores" src="emprende.jpg" alt="">
        </button>
        <div class=""></div>
    </header>   
    <nav class="position-relative navbar navbar-dark bg-dark">
      <ul class="nav nav-pills">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="index.html">Inicio</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Categorias</a>
          <ul class="nav-dark bg-dark dropdown-menu">
            <li><a class="categorias dropdown-item" href="#">Ropa</a></li>
            <li><a class="categorias dropdown-item" href="#">Calzado</a></li>
            <li><a class="categorias dropdown-item" href="#">Artesanias</a></li>
            <li><a class="categorias dropdown-item" href="#">Tecnología</a></li>
            <li><a class="categorias dropdown-item" href="#">Comida</a></li>
            <li><a class="categorias dropdown-item" href="#">Misc.</a></li>
          </ul>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="tienda.html">Tienda</a>
        </li>
        
        <div class="propia1 collapse position-absolute bottom-0 end-0" id="navbarToggleExternalContent">
            <div class=" bg-dark p-2">
              <span class="text-muted">
                <a class="d-inline-block nav-link disabled " href="">Modo Noche</a>
                <a class="m-3 text-decoration-none" href="acerca.html">Acerca de</a>
                <a class="m-3 text-decoration-none" href="mapa.html">Mapa del sitio</a>
              </span>
            </div>
          </div>
          
            <button class="propia navbar-toggler position-absolute bottom-25 end-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class=""></div>
      </ul>
    </nav>
   
    <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img class="bannerPropio d-block w-100" src="banner1.png" alt="...">
          <div class="carousel-caption d-none d-md-block bg-black bg-opacity-75">
            <h5>¡Yo Apoyo Colombia Emprende!</h5>
            <p>¡Porque yo invierto en mi gente!</p>
          </div>
        </div>
        <div class="carousel-item">
          <img class="bannerPropio d-block w-100" src="banner2.jpg" alt="...">
          <div class="carousel-caption d-none d-md-block bg-black bg-opacity-75">
            <h5>100% Colombiano</h5>
            <p>Conoce los mejores emprendientos que se producen en Colombia</p>
          </div>
        </div>
        <div class="carousel-item">
          <img class="bannerPropio d-block w-100" src="banner3.jpeg" alt="...">
          <div class="carousel-caption d-none d-md-block bg-black bg-opacity-75">
            <h5>Compra Colombiano</h5>
            <p>Buscando en esta página apoyaras a los emprendedores Colombianos</p>
          </div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
    <div class="row row-cols-1 row-cols-md-3 g-4 m-3">
      <div class="card">
        <img src="..." class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Ropa</h5>
          <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        </div>
        <div class="card-footer">
          <small class="text-muted">Last updated 3 mins ago</small>
        </div>
      </div>
      <div class="card">
        <img src="..." class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Calzado</h5>
          <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
        </div>
        <div class="card-footer">
          <small class="text-muted">Last updated 3 mins ago</small>
        </div>
      </div>
      <div class="card">
        <img src="..." class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Artesanias</h5>
          <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
        </div>
        <div class="card-footer">
          <small class="text-muted">Last updated 3 mins ago</small>
        </div>
      </div>
      <div class="card">
        <img src="..." class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Tecnología</h5>
          <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
        </div>
        <div class="card-footer">
          <small class="text-muted">Last updated 3 mins ago</small>
        </div>
      </div>
      <div class="card">
        <img src="..." class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Comida</h5>
          <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
        </div>
        <div class="card-footer">
          <small class="text-muted">Last updated 3 mins ago</small>
        </div>
      </div>
      <div class="card">
        <img src="..." class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Miscellanius</h5>
          <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
        </div>
        <div class="card-footer">
          <small class="text-muted">Last updated 3 mins ago</small>
        </div>
      </div>
    </div>
    <footer>
      <div class="contactos">
          <div><br><p>Telefono: 3333333 <br>Celular: 3155555555 <br>E-mail: aaaaaa@gmail.com</p></div>
          <div>
              <address><br>
              Calle 1 # 1-1<br>
              Box 564, Disneyland<br>
              Colombia
              </address>
          </div>
          <div><br>
              <span>Facebook: Facebook.com</span> <br>E-mail: aaaaaa@gmail.com<br>Twitter: twqitter.com</p>
          </div>
      </div>
      
      <div class="politicas">
          <p>Todos los derechos reservados</p>
          <a href="politicas.html">Politicas de Privacidad y Tratamiento de Datos</a>    
              
      </div>
      <br>
  </footer>
<script src="bootstrap.js"></script>
<script src="main.js"></script>
</body>
</html>




<div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="..." class="d-block w-100" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>