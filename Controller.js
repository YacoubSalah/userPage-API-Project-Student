class Controllers {

    constructor() {
        this.loadedUser = new APIManager()
        this.userStorage = new storageHandler(this.loadedUser)
        this.render = new Renderer(this.loadedUser, this.userStorage)
    }

    intializePage() {
        window.addEventListener('resize', this.#adaptNewWindowsSize)
        $(document).click(this.#aClickIsDetected)

        this.userStorage.intialize()
        this.render.compileTemplates()
    }

    #aClickIsDetected = (event) => {
        const clickedElementID = event.target.id
        if (clickedElementID == 'loadSavedUser') {
            this.userStorage.getStoredUsers()
            this.render.renderLoadUserMenu()
        } else {
            this.render.hideLoadUserMenu()
        }
        if (clickedElementID == 'loadUserData') {
            this.loadedUser.loadData()
        }
        if (clickedElementID == 'displayUser') {
            this.render.renderAll()
        }
        if (clickedElementID == 'saveUser') {
            this.userStorage.saveCurrentUser()
        }
        if (clickedElementID == 'loadUserMenuElement') {
            const username = event.target.innerHTML
            this.userStorage.fetchSavedToLoaded(username)
            this.render.renderAll()
        }
        if (clickedElementID == 'deleteSavedUser'){
            const username = event.target.nextElementSibling.innerHTML
            this.userStorage.deleteSavedUser(username)
        }
    }

    #adaptNewWindowsSize = () => {
        this.render.handleNewWindowsSize()
    }

}

let controller = new Controllers
controller.intializePage()