class FOOTER extends HTMLElement{
    constructor(){
        super();

        this.innerHTML=`<script src="https://kit.fontawesome.com/c133ee1e05.js" crossorigin="anonymous"></script>
        <footer>
        <img src="images/logoiut.png" class="logof" alt="Logo de l'IUT">
        <section class="info">
            <section class="foo-1">
                <h4>Newsletter</h4>
                <p>Nous vous tiendrons au courant des les informations concernant le B.U.T et de la vie sur le campus
                </p>
                <form action="/envoieform.php" method="POST">
                    <input type="email" required placeholder="Email"><button type="submit" aria-label="Confirmer l'inscription"><i class="fas fa-plus"></i></button>
                </form>
            </section>
            <section class="foo-2">
                <a>Copyright 2021 - 2022</a>
                <a href="">Mentions légales</a>
                <a href="">Politique de confidentialité</a>
            </section>
        </section>
        <section class="reseau">
            <a href="https://instagram.com" target="_blank"><i class="fa-brands fa-instagram"></i></a>
            <a href="https://linkedin.com" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
            <a href="https://twitter.com" target="_blank"><i class="fa-brands fa-twitter"></i></a>
            <a href="https://facebook.com" target="_blank"><i class="fa-brands fa-facebook-square"></i></a>
        </section>
        </footer>`;
    }
}
window.customElements.define('footer-info',FOOTER);