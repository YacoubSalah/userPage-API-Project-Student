class Controllers {

    constructor() {
        this.user = new APIManager()
        this.render = new Renderer(this.user)
    }

    intializePage() {
        $("#loadUserData").click(this.#loadUserData)
        $("#displayUser").click(this.#displayUser)
        this.render.compileTemplates()
    }

    #loadUserData = () => {
        this.user.loadData()
    }

    #displayUser = () => {
        this.render.renderAll()
    }

}

let controller = new Controllers
controller.intializePage()