export default Vue.component('TaskList.js', {
   
    // Le template HTML
        template: `
            <ul class="mt-1em">
                <li>Faire de courses</li>
                <li>Reviser les tableaux</li>
                <li>Reviser les objets JS</li>
                <li>Faire quelque requetes SQL</li>
                <li>{{ message }}</li>
            </ul>`, // Attention à la virgule.. facile de l'oublier..
    
        // Dans un composant le data object ***DOIT*** être une fonction qui retourne un objet
        data() {
            return {
                message:
                    'Dans un composant le data object ***DOIT*** être une fonction qui retourne un objet',
            };
        },
    });