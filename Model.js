class APIManager {

    constructor() {
        this.data = {}
    }

    loadData () {
        this.#userGenerator()
        this.#quoteGenerator()
        this.#pokemonGenerator()
        this.#aboutMeGenerator()
    }

    #userGenerator(){
        $.ajax({
            method: "GET",
            url: "https://randomuser.me/api/?results=7",
            success: this.#userDataSuccess,
            error: this.#userDataError
        })
    }

    #userDataSuccess = userData => {
        const firstName = userData.results[0].name.first
        const lastName = userData.results[0].name.last
        const city = userData.results[0].location.city
        const state = userData.results[0].location.state
        const imageURL = userData.results[0].picture.thumbnail
        const friends = []
        for (let i = 1; i < 7; i++) {
            const friendName = userData.results[i].name.first + " " + userData.results[i].name.last
            friends[i] = { "friend" : friendName}
        }
        const user = { "firstname": firstName, "lastname": lastName, "city": city, "state": state, "imageURL": imageURL, "friends": friends }
        this.data.userData = user
    }

    #userDataError() {
        alert("Couldn't Get User Data")
    }

    #quoteGenerator () {
        $.ajax({
            method: "GET",
            url: "https://api.kanye.rest/",
            success: this.#quoteSuccess,
            error: this.#quoteError
        })
    }

    #quoteSuccess = quote => {
        this.data.quote = quote
    }

    #quoteError() {
        alert("Internet connection - Quote Get")
    }

    #pokemonGenerator(){
        const randomNumber = Math.floor(Math.random() * 1126)
        const newURL = "https://pokeapi.co/api/v2/pokemon/" + randomNumber
        $.ajax({
            method: "GET",
            url: newURL,
            success: this.#pokemonSuccess,
            error: this.#pokemonError // how to tell that this function has parameters without invoking it ?
        })
    }

    #pokemonSuccess = (pokeData) => {
        const pokemonName = pokeData.name
        const imageURL = pokeData.sprites.front_default
        const pokemon = { "pokemonName": pokemonName, "imageURL": imageURL }
        this.data.pokemon = pokemon
    }

    #pokemonError(randomNumber, newURL) {
        alert("Internet connection - Poki Get" + randomNumber)
        console.log(newURL)
    }

    #aboutMeGenerator () {
        $.ajax({
            method: "GET",
            url: "https://baconipsum.com/api/?type=meat-and-filler&paras=1",
            success: this.#aboutSuccess,
            error: this.#aboutError
        })
    }

    #aboutSuccess = data => {
        this.data.about = { "about" : data[0] }
    }

    #aboutError() {
        alert("Internet connection - about get")
    }

}