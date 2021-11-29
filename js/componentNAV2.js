class navbar extends HTMLElement{

    constructor(){
        super();
        this.innerHTML=`
        <nav class="navbar">
            <div class="content">
                <div class="logo">
                    IUT Lyon 4 — BUT Informatique
                </div>
                <ul class="menu-list">
                    <div class="icon cancel-btn">
                        <i class="fas fa-times"></i>
                    </div>
                    <li><a href="accueil.html">Accueil</a></li>
                    <li><a href="formation.html">Formation</a></li>
                    <li><a href="contenu.html">Contenu</a></li>
                    <li><a href="temoignages.html">Témoignages</a></li>
                </ul>
                <div class="icon menu-btn">
                    <i class="fas fa-bars"></i>
                </div>
            </div>
        </nav>
        `;
    }
}
window.customElements.define('nav-bar2',navbar);