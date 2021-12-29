class Navbar extends HTMLElement{
    constructor(){
        super();
        this.innerHTML=`
        <nav class="navbar">
            <div class="content">
                <div class="logo">
                    IUT Lyon 4 — BUT Informatique
                </div>
                <ul class="menu-list">
                    <button class="icon cancel-btn" onclick="menuclose()">
                        <i class="fas fa-times"></i>
                    </button>
                    <li><a href="accueil.html">Accueil</a></li>
                    <li><a href="formation.html">Formation</a></li>
                    <li><a href="contenu.html">Contenu</a></li>
                    <li><a href="temoignages.html">Témoignages</a></li>
                </ul>
                <button class="icon menu-btn" onclick="menuopen()">
                    <i class="fas fa-bars"></i>
                </button>
            </div>
        </nav>
        
        `;
        
    }  
}
window.customElements.define('nav-bar',Navbar);
