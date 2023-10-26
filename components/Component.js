export default class Component extends HTMLElement
{
    constructor()
    {
        super()

        this.varRegex = /{%%\s*(.*?)\s*%%}/
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

    getCustomAttributes(view)
    {
        return view.match(this.varRegex);
    }

    replaceTemplate(view, list)
    {
        return view.replace(/{%\s*(.*?)\s*%}/g, (match, p1) =>
        {
            const [obj, attr] = p1.split('.')

            const foundedObj = list.find(item => item.type === obj)

            if (foundedObj && foundedObj[attr])
              return foundedObj[attr]

            return match
        })
    }
}