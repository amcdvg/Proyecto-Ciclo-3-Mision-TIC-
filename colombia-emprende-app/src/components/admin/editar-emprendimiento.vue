<template>
    <div>
        <div class="header-admin">
        <div class="logo-admin">
          <img src="../../assets/img/logo-colombia.png" alt="Logo Colombia Emprende">
        </div>
        
        <div class="header-admin-contenedor w-100">
          <div class="nombre-emprendimiento">
          {{emprendedor.emprendimientoName}}
        </div>
          <div class="modulo-usuario text-end">
            <h3>{{emprendedor.name}}</h3>
            <h5>{{emprendedor.email}}</h5>
          </div>
        </div>
      </div> 
      <!--Inicio de Barra de Navegación--> 
      <nav class="barra-navegacion barra-admin position-relative navbar navbar-dark">
        <ul class="nav nav-pills">
          <li class="nav-item">
            <div class="nav-link" aria-current="page"></div>
          </li>
          <div class="collapse position-absolute bottom-0 end-0" id="navbarToggleExternalContent">
            <div class="barra-oculta-admin bg-dark">
              <span>
                <a class="d-inline-block nav-link text-decoration-none" to="/acerca-de">Salir e Ir a Inicio</a>
                <a class="d-inline-block nav-link text-decoration-none" to="/acerca-de">Salir e Ir a Emprendimientos</a>
              </span>
            </div>
          </div>
          <button class="boton-barra-admin navbar-toggler position-absolute bottom-0 end-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-box-arrow-in-left" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M10 3.5a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 1 1 0v2A1.5 1.5 0 0 1 9.5 14h-8A1.5 1.5 0 0 1 0 12.5v-9A1.5 1.5 0 0 1 1.5 2h8A1.5 1.5 0 0 1 11 3.5v2a.5.5 0 0 1-1 0v-2z"/>
              <path fill-rule="evenodd" d="M4.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H14.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z"/>
            </svg>
          </button>
        </ul>
      </nav>
      <!--Inicio del Main--> 
      <div>
        <div class="d-flex">
            <div class="crud-admin text-start bg-dark col">
                <nav class="nav-bar navegacion-crud">
                    <div class="">
                        <button class="boton-crud navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mi-perfil" aria-controls="mi-perfil" aria-expanded="false" aria-label="Toggle navigation">
                        Mi Perfil
                        </button>
                    </div>
                    <div class="collapse" id="mi-perfil">
                        <div class="sub-navegacion-crud">
                            <ul class="nav flex-column">
                                <li class="nav-item">
                                    <router-link :to="{ name: 'ver-perfil', params: { id: emprendedor._id } }" class="perfil nav-link" aria-current="page" href="#">Ver Perfil</router-link>
                                </li>
                                <li class="nav-item">
                                    <router-link :to="{ name: 'editar-perfil', params: { id: emprendedor._id } }" class="perfil nav-link active" href="#">Editar Perfil</router-link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="">
                        <button class="boton-crud navbar-toggler p-2" type="button" data-bs-toggle="collapse" data-bs-target="#mi-emprendimiento" aria-controls="mi-emprendimiento" aria-expanded="false" aria-label="Toggle navigation">
                          Mi Emprendimiento
                        </button>
                    </div>
                    <div class="collapse" id="mi-emprendimiento">
                        <div class="sub-navegacion-crud">
                            <ul class="nav flex-column">
                                <li class="nav-item">
                                    <router-link :to="{ name: 'ver-emprendimiento', params: { id: emprendedor._id } }" class="perfil nav-link" aria-current="page" href="#">Ver Mi Emprendimiento</router-link>
                                </li>
                                <li class="nav-item active">
                                    <router-link :to="{ name: 'editar-emprendimiento', params: { id: emprendedor._id } }" class="perfil nav-link" href="#">Editar Mi Emprendimiento</router-link>
                                </li>  
                            </ul>
                        </div>
                    </div>
                    <div class="">
                      <button class="boton-crud boton-crud-eliminar p-2" type="button">
                        Eliminar Mi Cuenta
                      </button>
                  </div>
                  <span class="cerrar-sesion" type="button">
                    <svg xmlns="http://www.w3.org/2000/svg" class="m-1 boton-cerrar-sesion bi bi-x-circle-fill" viewBox="0 0 16 16">
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
                    </svg>
                    <a class="m-1 cerrar">Cerrar Sesión</a>
                  </span>
                </nav>
            </div>
            <div class="fondo-claro col-8 d-flex">
                
        <div class="col w-100">
 <h3 class="text-center">Editar mi Emprendimiento</h3>
<form @submit.prevent="handleUpdateForm">
 <div class="form-group">
 <label>Nombre del Emprendimiento</label>
 <input
 type="text"
 class="form-control"
 v-model="emprendedor.emprendimientoName"
 required
 />
 </div>
 <div class="form-group">
 <label>E-mail del Emprendimiento</label>
 <input
 type="email"
 class="form-control"
 v-model="emprendedor.emprendimientoEmail"
 required
 />
 </div>
 <div class="form-group">
 <label>Ciudad</label>
 <input
 type="text"
 class="form-control"
 v-model="emprendedor.emprendimientoCiudad"
 required
 />
 </div>
 <div class="form-group">
 <label>Telefono del Emprendimiento</label>
 <input
 type="text"
 class="form-control"
 v-model="emprendedor.emprendimientoPhone"
 required
 />
 </div>
 <div class="form-group d-flex justify-content-end">
 <button class="btn btn-primary btn-block m-2">Guardar Cambios</button>
 </div>
 </form>
 </div>
                
            </div>
        </div>
    </div>
    
      <footer>
        <div class="baseDerechos-admin">
          <div>Copyright copy 2021 | Todos los derechos reservados <a href="html/halma.html">HALMA TEAM</a> | | 
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
                            <br>Los textos y elementos gráficos que constituyen la página Web, así como su presentación y montaje, o son titularidad exclusiva de MINTIC o ésta ostenta los derechos de explotación necesarios. Sin perjuicio de lo anterior, los nombres comerciales, marcas o signos distintivos que aparecen o a los que se hace alusión en el Sitio Web, pertenecen a sus respectivos propietarios y se encuentran protegidos por la legislación vigente al respecto. <br>                          
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
                        </div>
                      </div>
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
emprendedor: {
 },
 };
 },
 created() {
 let apiURL = `http://localhost:4000/api/buscar-emprendedor/${this.$route.params.id}`;
 axios.get(apiURL).then((res) => {
 this.emprendedor = res.data;
 });
 },
 methods: {
handleUpdateForm() {
 let apiURL = `http://localhost:4000/api/editar-emprendedor/${this.$route.params.id}`;
 axios
 .put(apiURL, this.emprendedor)
 .then((res) => {
 console.log(res);
 this.$router.push(`/admin/${this.$route.params.id}`);
 })
 .catch((error) => {
 console.log(error);
 });
 },
 },
};
</script>

