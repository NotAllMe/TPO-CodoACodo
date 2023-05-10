let headerCAD = `
<nav class="barra-nav" id="barra-nav">

<div class="container container-flex">


    <div class="boton-nav">

    <div class="main-header-container">
        <img src="./img/LOGO.png" alt="Logo" width="200" height="200">
        <h1 class="main-header-title">
        <span class="palabra1">Refugio</span><br>
        <span class="palabra2">Huellitas</span><br>
        <span class="palabra3">de Amor</span>
        </h1>
    </div>
            
    <a href="index.html">
    <img src="./img/1.ico" alt="">
    </a>
    <a href="comunidad.html">
    <img src="./img/2.ico" alt="">
    </a>
    <a href="apoyo.html">
    <img src="./img/3.ico" alt="">
    </a>
    <a href="contacto.html">
    <img src="./img/4.ico" alt="">
    </a>
        
        
    </div>

</div>



</nav>
`

document.querySelector(".main-header").innerHTML = headerCAD;