const User = require("./Index");

class UserBuilder {
    constructor(name) {
        this.name = name;
    }
    makeBirthdayDate(birthdayDate) {
        this.birthdayDate = birthdayDate;
        return this;
    }
    makeDocument(document) {
        this.document = document;
        return this;
    }
    makeContractServices(contractServices){
        this.contractServices = contractServices;
        return this;
    }
    build(){
        return new User(this);
    }
}

module.exports = UserBuilder;