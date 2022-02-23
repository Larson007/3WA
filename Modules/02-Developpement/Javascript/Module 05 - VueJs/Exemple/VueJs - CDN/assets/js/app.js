const app = Vue.createApp({
    data() {
        return {
            message: 'Hello World!'
        }
    },
    methods: {
        changeColor() {
            this.message = classList.add("btn");
        }
    },
})

app.component('nav-bar', {
    template:
        `
        <ul class="nav nav-tabs">
            <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Active</a>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Dropdown</a>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li><a class="dropdown-item" href="#">Another action</a></li>
                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                    <li><hr class="dropdown-divider"></li>
                    <li><a class="dropdown-item" href="#">Separated link</a></li>
                </ul>
            </li>
            <li class="nav-item">
                <a class="nav-link" aria-current="page" href="#">Link</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" aria-current="page" href="#">Link</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
            </li>
        </ul>
        `,
});

app.mount('#app');