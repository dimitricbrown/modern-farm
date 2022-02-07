export const Catalog = (harvestedFoods) => {
    for (const harvestedFood of harvestedFoods) {
        document.querySelector("main").innerHTML += `<section class="plant">${harvestedFood.type}</section>`
    }
}