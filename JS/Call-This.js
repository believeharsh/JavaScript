function setUserName(username) {
    this.username = username ; 
    console.log("called");
}

function createUser(username, email, password) {
    setUserName.call(this, username) ; 
    this.email = email 
    this.password = password ; 
}
const harsh = new createUser("harsh", "harsh@dahiya.com", "123") ; 
console.log(harsh) ; 

// here we have used the .call method in order to pass the context of the function thorugh shareing the this object, so that outsorced function call use this, this to set the value

