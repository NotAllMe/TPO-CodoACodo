let headerCAD = `
<nav class="main-nav" id="main-nav">

<div class="container container-flex">

    <div class="main-header-container">
        <img src="./img/LOGO.png" alt="Logo" width="200" height="200">
        <h1 class="main-header-title">
        <span class="word1">Refugio</span><br>
        <span class="word2">Huellitas</span><br>
        <span class="word3">de Amor</span>
        </h1>
    </div>

    <tbody>
        <tr>
            <td>
                <a href="index.html">
                    <img src="./img/1.ico" alt="">
                </a>
                <a href="nosotros.html">
                   <img src="./img/2.ico" alt="">
                </a>
                <a href="apoyo.html">
                    <img src="./img/3.ico" alt="">
                </a>
                <a href="contacto.html">
                    <img src="./img/4.ico" alt="">
                </a>
            </td>
        </tr>
    </tbody>

</div>



</nav>
`

document.querySelector(".main-header").innerHTML = headerCAD;