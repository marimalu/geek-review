import Footer from "./Footer.js"
import Header from "./Header.js"
import MiddleCard from "./MiddleCard.js"

if ('customElements' in window)
{
    customElements.define('main-footer', Footer)
    customElements.define('main-header', Header)
    customElements.define('middle-card', MiddleCard)
}