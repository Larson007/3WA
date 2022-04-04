document.addEventListener('DOMContentLoaded', ()=>{
    
    const form = document.getElementById('form')
    const info = document.getElementById('formInfo')
    form.addEventListener('submit', (e)=>{
        e.preventDefault();
        info.textContent= ``
        
        // je peux exécuter un controlle des champs du formulaire
        
        const xhr = new XMLHttpRequest();
        // console.log(form)
        const formData = new FormData(form)
        // console.log(formData)
        
        // formData.forEach((value, key)=>{
        //     console.log(key+' '+value)
        // })
        
        //ouverture de la connexion vers le fichier en charge de traiter les donner du formulaire
        xhr.open('POST', './async/AsynchronusRequest.php?action=adduser');
        
        //spécifier le format de retour attendu
        xhr.responseType = 'json';
        
        //envoyer le formulaire seulement si mon traitement JS est ok
        xhr.send(formData)

        xhr.onload = function(){

            if(xhr.readyState === 4 && xhr.status === 200) {
                console.log(this.response)
                
                const response = this.response
                //https://developer.mozilla.org/fr/docs/Web/API/XMLHttpRequest/readyState
        
                //dans le php j'ai prévue un message en cas d'erreur ou de reussite sous la clef message je le recupere 
                
                if(response.status !== 1){
                    info.textContent = response.message
                    info.classList.remove('great')
                    info.classList.add('error')
                } else {
                    info.textContent = response.message
                    info.classList.remove('error')
                    info.classList.add('great')
    
                    //reinitialistation du formulaire
                    form.reset()
                }
            }
        }
     })
})