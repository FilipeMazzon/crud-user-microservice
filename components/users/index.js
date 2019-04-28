class User {
    constructor(builder) {
        this.name = builder.name;
        this.birthdayDate = builder.birthdayDate;
        this.registerDate = new Date();
        this.document = builder.document;
        this.contractServices = builder.contractServices || [];
    }

    toString() {
        return JSON.stringify(this);
    }
}

module.exports = User;