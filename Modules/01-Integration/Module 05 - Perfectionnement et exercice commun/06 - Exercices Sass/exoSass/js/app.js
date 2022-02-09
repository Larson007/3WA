window.addEventListener('DOMContentLoaded', () => {
    runScript();
});



/*variable */
const valider = document.getElementById('valider');
const refuser = document.getElementById('refuser');
const test = document.getElementById('test');
const info = document.getElementById('info');
const body = document.getElementById('relative');
const spinner = document.getElementById('spinner');
const colorDanger = 'text-danger';
const colorprimary = 'text-primary';

/* function */
const tanslateSexe = (sexe) => {
    if (sexe.toLowerCase() === 'male') {
        sexe = 'Homme';
    } else {
        sexe = 'Femme';
    }
    return sexe;
};
const request = () => {
    const spinner = document.getElementById('spinner');
    const card = document.getElementById('card');
    spinner.style.display = "block";
    spinner.style.position = "absolute";
    spinner.style.top = "50%";
    spinner.style.left = "50%";
    spinner.style.background = "none";
    card.style.display = "none";
    fetch('https://randomuser.me/api/?nat=FR')
        .then(res => {
            return res.json();

        })
        .then(data => {
            const pictureLarge = data.results[0].picture.large;
            const sexe = tanslateSexe(data.results[0].gender);
            const age = data.results[0].dob.age;
            const firstname = data.results[0].name.first;
            const lastname = data.results[0].name.last;
            const city = data.results[0].location.city;
            const pays = data.results[0].location.country;
            const pictureMd = data.results[0].picture.medium;
            const pictureSmall = data.results[0].picture.thumbnail;
            const email = data.results[0].email;
            const phone = data.results[0].cell;

            const domSexe = document.getElementById('sexe');
            const domAge = document.getElementById('age');
            const domFirstname = document.getElementById('firstname');
            const domLastname = document.getElementById('lastname');
            const domCity = document.getElementById('city');
            const domPays = document.getElementById('pays');
            const domPhoto = document.getElementById('photo');
            const domEmail = document.getElementById('email');
            const domPhone = document.getElementById('phone');

            domPhoto.src = pictureLarge;
            domSexe.innerHTML = `Genre: ${sexe}`;
            domAge.innerHTML = `Age: ${age}`;
            domFirstname.innerHTML = firstname;
            domLastname.innerHTML = lastname;
            domCity.innerHTML =  city;
            domPays.innerHTML = pays;
            domEmail.innerHTML = email;
            domPhone.innerHTML = phone;

            setTimeout(() => {
                spinner.style.display = "none";
                card.style.display = "block";
            }, 1000);
        });
};
const changeColor = (elem, text_color, new_color) => {
    if (elem.classList.contains(text_color)) {
        elem.classList.remove(text_color);
    }
    elem.classList.add(new_color);
};
const eventAction = () => {
    window.addEventListener('click', (e) => {
        const id = e.target.id;
        switch (id) {
            case 'valider':
                changeColor(spinner, colorDanger, colorprimary);
                request();
                info.innerHTML = "VAliDE";
                break;
            case 'refuser':
                changeColor(spinner, colorprimary, colorDanger);
                request();
                info.innerHTML = "REFUSE";
                break;
            default:
                return;
        }
    });
};
const runScript = () => {
    body.style.position = "relative";
    body.style.minHeight = "100vh";
    request();
    eventAction();
};