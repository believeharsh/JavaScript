class User {
    constructor(username) {
        this.username = username ; 

    }

    logMe() {
        console.log(`username is ${this.username}`);
    }
    static createId() { // this will not be available for the istance of this class ; 
        return `123`
    }
}

const harsh = new User("harsh") ; 
// harsh.createId() ; 

class Teacher extends User {
    constructor ( username, email) {
        super(username) ; 
        this.email = email ; 
    }
}

const iPhone = new Teacher('iphone', "iphone@gmail.com") ; 
// iPhone.logMe() 
// console.log(iPhone.createId()) ; // this will give an error that this createId function is not defined 