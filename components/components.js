import Footer from "./Footer.js"
import Header from "./Header.js"
import MiddleCard from "./MiddleCard.js"
import PopularReview from './PopularReview.js'
import IndexCategoryPost from './IndexCategoryPost.js'

if ('customElements' in window)
{
    customElements.define('main-footer', Footer)
    customElements.define('index-category-post', IndexCategoryPost)
    customElements.define('main-header', Header)
    customElements.define('middle-card', MiddleCard)
    customElements.define('popular-review', PopularReview)
}