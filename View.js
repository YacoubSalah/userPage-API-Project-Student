class Renderer {
    constructor(user){
        this.user= user

        this.userContainer = $(".user-container")
        this.quoteContainer = $(".quote-container")
        this.pokemonContainer = $(".pokemon-container")
        this.aboutContainer = $(".meat-container")
        this.friendsContainer = $(".friends-container")

        this.userTemplate = ""
        this.quoteTemplate = ""
        this.pokemonTemplate = ""
        this.aboutTemplate = ""
        this.firendsTemplate = ""
    }

    compileTemplates(){
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
    }

    renderAll(){
        this.#renderUser()
        this.#renderQuote()
        this.#renderPokemon()
        this.#renderAbout()
        this.#renderFriends()
    }

    #renderUser(){
        const user = this.user.data.userData
        const userOutput = this.userTemplate(user)
        this.userContainer.empty()
        this.userContainer.append(userOutput)
    }

    #renderQuote(){
        const newQuote = this.user.data.quote
        const quoteOutput = this.quoteTemplate(newQuote)
        this.quoteContainer.empty()
        this.quoteContainer.append(quoteOutput)
    }

    #renderPokemon(){
        const pokemon = this.user.data.pokemon
        const pokemonOutput = this.pokemonTemplate(pokemon)
        this.pokemonContainer.empty()
        this.pokemonContainer.append(pokemonOutput)
    }

    #renderAbout(){
        const newAbout = this.user.data.about
        const aboutOutput = this.aboutTemplate(newAbout)
        this.aboutContainer.empty()
        this.aboutContainer.append(aboutOutput)
    }

    #renderFriends(){
        const friends= this.user.data.userData.friends
        const friendsOutput = this.firendsTemplate({friend : friends})
        this.friendsContainer.empty()
        this.friendsContainer.append(friendsOutput)
    }

}