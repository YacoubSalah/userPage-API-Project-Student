class Renderer {
    constructor(currentUser, userStorage) {
        this.currentUser = currentUser
        this.userStorage = userStorage

        this.userContainer = $(".user-container")
        this.quoteContainer = $(".quote-container")
        this.pokemonContainer = $(".pokemon-container")
        this.aboutContainer = $(".meat-container")
        this.friendsContainer = $(".friends-container")
        this.loadUserMenuContain = $(".loadUserMenu-container")

        this.userTemplate = ""
        this.quoteTemplate = ""
        this.pokemonTemplate = ""
        this.aboutTemplate = ""
        this.firendsTemplate = ""
        this.loadUserMenuTemplate = ""
    }

    compileTemplates() {
        const userHTML = $("#userTemplate").html()
        this.userTemplate = Handlebars.compile(userHTML)

        const quoteHTML = $("#quoteTemplate").html()
        this.quoteTemplate = Handlebars.compile(quoteHTML)

        const pokemonHTML = $("#pokemonTemplate").html()
        this.pokemonTemplate = Handlebars.compile(pokemonHTML)

        const aboutHTML = $("#aboutTemplate").html()
        this.aboutTemplate = Handlebars.compile(aboutHTML)

        const friendsHTML = $("#friendsTemplate").html()
        this.firendsTemplate = Handlebars.compile(friendsHTML)

        const loadUserMenuHTML = $("#loadUserMenuTemplate").html()
        this.loadUserMenuTemplate = Handlebars.compile(loadUserMenuHTML)
    }

    renderAll() {
        this.#renderUser()
        this.#renderQuote()
        this.#renderPokemon()
        this.#renderAbout()
        this.#renderFriends()
    }

    #renderUser() {
        const user = this.currentUser.data.userData
        const userOutput = this.userTemplate(user)
        this.userContainer.empty()
        this.userContainer.append(userOutput)
    }

    #renderQuote() {
        const newQuote = this.currentUser.data.quote
        const quoteOutput = this.quoteTemplate(newQuote)
        this.quoteContainer.empty()
        this.quoteContainer.append(quoteOutput)
    }

    #renderPokemon() {
        const pokemon = this.currentUser.data.pokemon
        const pokemonOutput = this.pokemonTemplate(pokemon)
        this.pokemonContainer.empty()
        this.pokemonContainer.append(pokemonOutput)
    }

    #renderAbout() {
        const newAbout = this.currentUser.data.about
        const aboutOutput = this.aboutTemplate(newAbout)
        this.aboutContainer.empty()
        this.aboutContainer.append(aboutOutput)
    }

    #renderFriends() {
        const friends = this.currentUser.data.userData.friends
        const friendsOutput = this.firendsTemplate({ friend: friends })
        this.friendsContainer.empty()
        this.friendsContainer.append(friendsOutput)
    }

    renderLoadUserMenu() {
        if (this.loadUserMenuContain.css("visibility") == "hidden") {
            this.#renderloadUserMenuCSS()
            const savedUsersOutput = this.loadUserMenuTemplate({ savedUser: this.userStorage.nameList })
            this.loadUserMenuContain.append(savedUsersOutput)
        }else{
            this.hideLoadUserMenu()
        }
    }

    #renderloadUserMenuCSS() {
        this.loadUserMenuContain.empty()
        const viewportHeight = $(window).height()
        const buttonPosition = $("#loadSavedUser").offset()
        this.loadUserMenuContain.css("bottom", (viewportHeight - buttonPosition.top + 5) + "px")
        this.loadUserMenuContain.css("left", buttonPosition.left + "px")
        this.loadUserMenuContain.css("visibility", "visible")
    }

    hideLoadUserMenu() {
        if (this.loadUserMenuContain.css("visibility") == "visible") {
            this.loadUserMenuContain.css("visibility", "hidden")
        }
    }

    handleNewWindowsSize() {
        //We can add other functions which are responsible of rendering element positions
        this.renderLoadUserMenu() // see why we can't just include the renderLoadUserMenu() instead
    }


}