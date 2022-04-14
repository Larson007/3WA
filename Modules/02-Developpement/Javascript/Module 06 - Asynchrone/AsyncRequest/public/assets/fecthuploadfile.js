document.addEventListener('DOMContentLoaded', ()=>{
    //selection du formulaire
    const form = document.getElementById('pictureForm');

    //selection de l'input files
    const picture = document.getElementById('pictureInput')

    //ecoute du formulaire
    form.addEventListener('submit', (e)=>{
        //bloquer le comportement par defaut
        e.preventDefault()

        //creation d'un objet formdata, on lui passe le formulaire
        const formData = new FormData(form)

        //dans le cas d'un input file qui aurait l'attribut multiple
        if(picture.files.length > 1){
            //si c'est le cas je boucle a partire du second élément (position 1 dans le tableau files)
            for(let i = 1; i < picture.files.length; i++){
                // a chaque tour de boucle insérer le fichier manquant append(filename, fileposition)
                formData.append(picture.files[i].name, picture.files[i])
            }
        }

        //je peux maintenant envoyer les information de manière asyncrhone
        fetch('./async/AsynchronusRequest.php?action=addfile',{
            method: 'POST',
            body: formData
        })
        //.then()
        //.catch()
    })
})
