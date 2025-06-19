class user {
    constructor(username, password) {
        this.username  = username ; 
        this.pasword = password ; 
    }

    get password () {
        return this._password.toUpperCase() ;
    }

    set password(value) {
        this._password = value.toUpperCase()
    }

    get email () {
        return this._email.toUpperCase() 
    }

    set email(value) {
        this._email = value.toUpperCase() 
    }


}

const harsh = new user("harsh", "123harsh") ; 
console.log(harsh) ; 

harsh.email = "newharsh@gmail.com" ; 
console.log(harsh._email) ; 
console.log(harsh) ; 