class User {
    constructor(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
    }
    validate() {
        const errors = {};
        if (/^([a-zA-Z]+)$/.test(this.name) === false) {
            errors.name = "Nom invalide";
        }
        if (/\S+@\S+\.\S+/.test(this.email) === false) {
            errors.email = "email invalide";
        }
        if (this.age === "" || isNaN(this.age) || this.age < 0 ||this.age > 150 ) {
            errors.age = "age invalide";
        }

        return errors;
    }
}

export default User;

console.log("Class User chargé");