class storageHandler {
    constructor(loadedUser) {
        this.loadedUser = loadedUser
        this.storedUsers = {}
        this.nameList = []
    }

    intialize() {
        this.getStoredUsers()
        this.updateNameList()
    }

    getStoredUsers() {
        this.storedUsers = JSON.parse(localStorage.getItem("savedUsers") || "[]")
    }

    updateNameList = () => {
        this.nameList = []
        this.storedUsers.forEach(savedUser => {
            const savedUserName = savedUser.data.userData.firstname + " " + savedUser.data.userData.lastname
            const newObj = { "userName": savedUserName }
            this.nameList.push(newObj)
        })
    }

    saveCurrentUser = () => {
        if (!this.isUserSaved()) {
            this.storedUsers.push(this.loadedUser)
            localStorage.savedUsers = JSON.stringify(this.storedUsers)
            this.updateNameList()
            alert("User Saved")
        }
    }

    isUserSaved() {
        const userName = this.loadedUser.data.userData.firstname + " " + this.loadedUser.data.userData.lastname
        const i = this.nameList.findIndex((elements) => elements.userName == userName)
        if (i != '-1') {
            alert(userName + " is already saved!")
            return true
        } else {
            return false
        }
    }

    fetchSavedToLoaded = (userName) => {
        const i = this.nameList.findIndex((elements) => elements.userName == userName)
        this.loadedUser.data = this.storedUsers[i].data
    }

    deleteSavedUser(username){
        const i = this.nameList.findIndex((elements) => elements.userName == username)
        this.storedUsers.splice(i  ,1)
        localStorage.savedUsers = JSON.stringify(this.storedUsers)
        this.updateNameList()
    }
    
}