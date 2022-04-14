let html;
document.addEventListener('DOMContentLoaded', ()=>{
    const searchForm = document.getElementById('searchForm');
    const input = document.getElementById('contact')
    const result = document.getElementById('result')
    
    //ecouter formulaire
    searchForm.addEventListener('keyup', ()=>{
        html= '';
        //recuperation de la valeur de l'input
        let search = input.value
        
        fetch('./async/AsynchronusRequest.php?action=searchuser&name='+search)
        .then(res => res.json())
        .then(data => {
                html +=`
                <table>
                    <thead>
                        <tr>
                            <th>Nom</th>
                            <th>prenom</th>
                            <th>email</th>
                        </tr>
                    </thead>
                    <tbody>            
                `
                data.forEach(mal => {
                    html += `
                    <tr>
                        <td>${mal.lastname}</td>
                        <td>${mal.firstname}</td>
                        <td>${mal.email}</td>
                    </tr>
                    `
                });
                
                html +=`
                </tbody>
                </table>
                `
                result.innerHTML = html;            
        })
        .catch(error => {
            result.innerHTML = 'error';   
        })
    })
})


// fetch(url, {
//     method: 'POST',
//     body: formData
// })
// .then