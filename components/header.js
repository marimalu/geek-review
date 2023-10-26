import Component from "./Component.js"

class Header extends Component
{
    constructor()
    {
        super()
    }

    async connectedCallback()
    {
        this.innerHTML = await this.view('header')
    }

    disconnectedCallback()
    {
        console.log('Dismounted', this)
    }
}

if ('customElements' in window)
{
    customElements.define('main-header', Header)
}