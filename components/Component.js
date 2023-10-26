export default class Component extends HTMLElement
{
    constructor()
    {
        super()
    }

    async view(view)
    {
        try {
            const response = await fetch(`/components/${view}.html`)
            return await response.text()
        } catch (error) {
            console.error('Ocorreu um erro: ', error)
        }
    }
}