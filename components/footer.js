import Component from "./Component.js"

class Footer extends Component
{
    constructor()
    {
        super()
    }

    async connectedCallback()
    {
        this.innerHTML = await this.view('footer')
    }

    disconnectedCallback()
    {
        console.log('Dismounted', this)
    }
}

if ('customElements' in window)
{
    customElements.define('main-footer', Footer)
}