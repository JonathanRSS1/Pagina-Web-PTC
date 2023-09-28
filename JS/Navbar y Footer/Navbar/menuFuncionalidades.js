function generarMenuFuncionalidades()
{
    const menuFuncionalidades = `<nav class="navbar navbar-expand-lg bg-light fixed-top"> <!-- Agregamos la clase "fixed-top" para fijar la barra de navegación en la parte superior -->
    <div class="container-fluid">
      
      <a class="navbar-brand" href="#"><a class="navbar-brand" href="#">
        <img src="../IMG/LOGOIX.svg" alt="Bootstrap" width="30" height="34">
      </a>
  </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 center"> <!-- Utilizamos la clase "center" para centrar los elementos -->
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="../index.html"><button type="button" class="btn ">INICIO</button></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="../Pages/Funcionalidades.html"><button type="button" class="btn ">FUNCIONALIDADES</button></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="../Pages/Acerca De Nosotros.html"><button type="button" class="btn ">ACERCA DE NOSOTROS</button></a>
          </li>
          
          <li class="nav-item">
            <a class="nav-link" href="../Pages/Contactanos.html"><button type="button" class="btn ">CONTACTANOS</button></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="../Pages/Preguntas Frecuente.html"><button type="button" class="btn ">PREGUNTAS FRECUENTES</button></a>
          </li>
        </ul>
        <ul class="navbar-nav ml-auto"> <!-- Utilizamos la clase "ml-auto" para mover "LICENCIA" a la derecha -->
          <li class="nav-item">
            <a class="nav-link" href="../Pages/Licencia.html"><button type="button" class="btn btn-dark"><i class="bi bi-handbag-fill"></i><br>LICENCIA</button></a>
          </li>
        </ul>
      </div>
    </div>
  </nav>`;

  return menuFuncionalidades;
}