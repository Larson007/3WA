# Exercice v-model : Data Binding

Quand on remplit les champs du formulaire, le texte de chaque champ doit s'afficher dans un span correspondant en dessous du formulaire
- Voici le code de départ

```html
<form action="" method="POST">
    <label for="email">Email</label> 
    <input type="email" id="email"> 
    <span class="email"></span> 
    <label for="pass">Password</label> 
    <input type="password" id="pass"> 
    <span class="password"></span> 
    <label for="phone">Phone</label> 
    <input type="tel" id="phone"> 
    <span class="phone"></span> 
    <button type="submit">Submit</button>
</form>
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script> 
    // <!-- Créer un objet data --> // 
    // <!-- Relier l'objet data avec le formulaire --> // 
    // <!-- Afficher le contenu des inputs dans les span correspondants --> 
    new Vue({ 
        el: '#app', 
    });
</script>
```

