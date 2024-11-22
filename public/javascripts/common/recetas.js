document.addEventListener("DOMContentLoaded", function() {

    setInterval( getRandomRecipe(), 3000);
    setInterval( getBreakFastList(), 3000);
    setInterval( getFoodList(), 3000);
    setInterval( getDessertsList(), 3000);

});

function getRandomRecipe() {

    fetch('/get_recipe_random')
    .then(response => response.json())
    .then(data => {

        console.log(data);

        const title = document.getElementById('title_random_recipe');
        const description = document.getElementById('description_random_recipe');
        const background = document.getElementById('background_random_recipe');

        title.textContent = data[0].nombre;
        description.textContent = data[0].descripcion;
        background.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${data[0].imagen})`;

    })

}

function getBreakFastList() {

    fetch('/get_breakfast_list')
    .then(response => response.json())
    .then(data => {

        console.log(data);

        const breakFastList = document.getElementById('dinamyc_card_container_breakfast');
        breakFastList.innerHTML = '';

        data.forEach(row => {

            const cardBody = document.createElement('div');
            cardBody.classList.add('card');
            cardBody.innerHTML = `
                <img src="${row.imagen}" alt="comida">
                <div class="card-content">
                <h3>${row.nombre}</h3>
                <p>${row.descripcion}</p>
                <p><strong>Ingredientes</strong></p>
                <p>${row.caloria}</p>
                <div class="card-actions">
                    <button class="add-btn">+</button>
                    <button class="like-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                        <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                        </svg>
                    </button>
                </div>
            </div>
            <div class="extra-info">
                <strong>Preparación:</strong>
                <p>${row.preparacion}</p>
            </div>`;

            breakFastList.appendChild(cardBody);
            
        });

    })

}

function getFoodList() {

    fetch('/get_food_list')
    .then(response => response.json())
    .then(data => {

        console.log(data);

        const foodList = document.getElementById('dinamyc_card_container_food');
        foodList.innerHTML = '';

        data.forEach(row => {

            const cardBody = document.createElement('div');
            cardBody.classList.add('card');
            cardBody.innerHTML = `
                <img src="${row.imagen}" alt="comida">
                <div class="card-content">
                <h3>${row.nombre}</h3>
                <p>${row.descripcion}</p>
                <p><strong>Ingredientes</strong></p>
                <p>${row.caloria}</p>
                <div class="card-actions">
                    <button class="add-btn">+</button>
                    <button class="like-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                        <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                        </svg>
                    </button>
                </div>
            </div>
            <div class="extra-info">
                <strong>Preparación:</strong>
                <p>${row.preparacion}</p>
            </div>`;

            foodList.appendChild(cardBody);

        });

    })

}

function getDessertsList() {

    fetch('/get_dessert_list')
    .then(response => response.json())
    .then(data => {

        console.log(data);

        const dessertList = document.getElementById('dinamyc_card_container_dessert');
        dessertList.innerHTML = '';

        data.forEach(row => {

            const cardBody = document.createElement('div');
            cardBody.classList.add('card');
            cardBody.innerHTML = `
                <img src="${row.imagen}" alt="comida">
                <div class="card-content">
                <h3>${row.nombre}</h3>
                <p>${row.descripcion}</p>
                <p><strong>Ingredientes</strong></p>
                <p>${row.caloria}</p>
                <div class="card-actions">
                    <button class="add-btn">+</button>
                    <button class="like-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                        <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                        </svg>
                    </button>
                </div>
            </div>
            <div class="extra-info">
                <strong>Preparación:</strong>
                <p>${row.preparacion}</p>
            </div>`;

            dessertList.appendChild(cardBody);

        });

    })

}