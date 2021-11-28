const template1 = document.createElement('template');
template1.innerHTML=`
<link rel="stylesheet" href="css/footer.css">
<script src="https://kit.fontawesome.com/c133ee1e05.js" crossorigin="anonymous"></script>
<footer>
<img src="images/logoiut.png" class="logof">
<section class="info">
    <section class="foo-1">
        <h4>Newsletter</h4>
        <p>Nous vous tiendrons au courant des les informations concernant le B.U.T et de la vie sur le campus
        </p>
        <input type="email" placeholder="Email"><button><i class="fas fa-plus"></i></button>
    </section>
    <section class="foo-2">
        <a>Copyright</a>
        <a href="">Mentions légales</a>
        <a href="">Politique de confidentialité</a>
    </section>
</section>
<section class="reseau">
    <i class="fa-brands fa-instagram"></i>
    <i class="fa-brands fa-linkedin"></i>
    <i class="fa-brands fa-twitter"></i>
    <i class="fa-brands fa-facebook-square"></i>
</section>
</footer>
`;

class FOOTER extends HTMLElement{
    constructor(){
        super();

        this.attachShadow({mode : 'open'});
        this.shadowRoot.appendChild(template1.content.cloneNode(true));
    }
}
window.customElements.define('footer-info',FOOTER);