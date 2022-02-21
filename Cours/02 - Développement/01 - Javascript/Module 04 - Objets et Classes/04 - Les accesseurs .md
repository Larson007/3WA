# Module 04 - Objets et Classes

## 04 - Les accesseurs

Jusqu'ici, nous avons vu comment accéder a la propriété message de notre classe `CustomError`, heritée de la classe parente `Error`.

Il existe une autre méthode plus simple qu'on appelle les accesseurs. Ceux-ci permettent de simplifier considérablement la syntaxe.

Pour l'instant, on accède a la propriété message grâce a des méthodes que nous avons codé. `recordErrors(errors)` et `getErrors()`

````js
class CustomErrors extends Error {
    constructor() {
        super(); // Le constructeur de la classe parente.
    }

    recordErrors(errors) {
        this.message = errors;
    }

    getErrors() {
        return this.message;
    }
}
export default CustomErrors;
````

On appelle un méthode pour enregistrer l'erreur et une pour la récupérer. Grâce aux accesseurs, on peut avoir la syntaxe classique d'assignation de valeurs:
````js
import CustomErrors from './modules/CustomErrors.js';
// Une erreur s'est produite
const errorMessage = {
    error: 'unknown',
    message: 'Same player play again',
};

const customError = new CustomErrors();

// On enregistre le message en l'assignant directement de manière 'traditionnelle'
customError.message = errorMessage;

// On accede directement a la propriété message.
console.log(customError.message);
````

Pour pouvoir utiliser cette syntaxe `customError.message = errorMessage`; et `customError.message`, on doit modifier légèrement note code dans la classe:

````js
class CustomErrors extends Error {
    constructor() {
        super(); // Le constructeur de la classe parente.
    }

    // on récupère la propriété de la classe parente et on lui assigne une valeur
    set message(errors) {
        return super.message = errors;
    }

    // on récupère la propriété de la classe parente
    get message() {
        return super.message;
    }
}

export default CustomErrors;
````

Notez l'utilisation du mot-clé `super` pour accéder directement à la `class parente`, ainsi que les mots-clé `get` et `set`, et aussi le fait d'accéder à la `propriété message` sous forme de `méthode`.