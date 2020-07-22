const app = document.getElementById('root');

const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(container);

var request = new XMLHttpRequest();
request.open('GET', 'https://ghibliapi.herokuapp.com/films', true);
request.onload = function () {

    var data = JSON.parse(this.response);
    if (request.status >= 200 && request.status < 400) {
        data.forEach(movie => {
        const card = document.createElement('div');
        card.setAttribute('class', 'card');

        const h1 = document.createElement('h1');
        h1.textContent = movie.title;

        const p = document.createElement('p');
        movie.description = movie.description.substring(0, 300);
        p.textContent = `${movie.description}...`;

        const h6 = document.createElement('h6');
        movie.director = movie.director;
        h6.textContent = `${movie.director}`;

        const button = document.createElement('button');
        button.textContent = `Leia mais!`;
        button.setAttribute ('class', 'card-button');
        button.addEventListener ("click", onClick);

        container.appendChild(card);
        card.appendChild(h1);
        card.appendChild(p);
        card.appendChild(h6);
        container.appendChild(button);
        });
    } else {
        const errorMessage = document.createElement('marquee');
        errorMessage.textContent = `Opa, algo deu errado aqui!`;
        app.appendChild(errorMessage);
    }
}

request.send();


function onClick() {
    var request2 = new XMLHttpRequest();

        request2.open('GET', 'https://ghibliapi.herokuapp.com/people', true);
        request2.onload = function () {

        var data = JSON.parse(this.response);
        if (request2.status >= 200 && request2.status < 400) {
            data.forEach(movie => {
            const container2 = document.createElement('div');
            container2.setAttribute('class', 'modal');

            const h2 = document.createElement('h2');
            h2.textContent = movie.name;

            container.appendChild(container2);
            container2.appendChild(h2);
            });
        } else {
            const errorMessage = document.createElement('marquee');
            errorMessage.textContent = `Opa, algo deu errado aqui!`;
            app.appendChild(errorMessage);
        }
    }

request2.send();
}