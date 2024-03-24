document.addEventListener("DOMContentLoaded", function() {
    const header = document.getElementById("header");
    const footer = document.getElementById("footer");
    //header componente
    const headerComponent = document.createElement("div");
    headerComponent.innerHTML = `
    <header>
        <nav>
        <h1>BRITO RUNNING</h1>
            <ul>
                <li><a href="../../index.html">Início</a> </li>
                <li><a href="./pictures.html">Galeria</a> </li>
                <li><a href="./partners.html">Patrocinadores</a> </li>
                <li><a href="./about.html">Plataformas</a> </li>
            </ul>
        </nav>
    </header>
    `;
    //header componente em relação ao /PAGE
    
    //footer componente
    const footerComponent = document.createElement("div");
    footerComponent.innerHTML = `
    <footer>
        <h4 class="data_class" id="data_id">BRITO.RUNNING | </h4>
    </footer>
    `
    footer.appendChild(footerComponent);
    header.appendChild(headerComponent);
    ;
});
