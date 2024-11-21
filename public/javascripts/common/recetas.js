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

    })

}

function getFoodList() {

    fetch('/get_food_list')
    .then(response => response.json())
    .then(data => {

        console.log(data);

    })

}

function getDessertsList() {

    fetch('/get_dessert_list')
    .then(response => response.json())
    .then(data => {

        console.log(data);

    })

}