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
                <li><a onclick="home()">Início</a> </li>
                <li><a onclick="pictures()">Galeria</a> </li>
                <li><a onclick="partnes()">Patrocinadores</a> </li>
                <li><a onclick="about()">Sobre mim</a> </li>
            </ul>
        </nav>
    </header>
    `;
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
