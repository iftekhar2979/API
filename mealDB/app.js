function search() {
    const input = document.getElementById('exampleDataList')
    return input.value

}


function seeMeals(search) {

    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${search}`)
        .then(res => res.json())
        .then(data => mealResult(data.meals))
   
}
const mealResult = (meals) => {
    const container = document.getElementById('container')
    function add3Dots(text, limit) {
        return text.length > limit ? `${text.substring(0, limit)}...` : text;
    }

    meals.forEach(element => {
        // console.log(element);
        const newElement = document.createElement('div')
        newElement.classList.add('card-group')
        newElement.classList.add('col-md-4')
        newElement.innerHTML =
            `
       <div class="card m-2 ">
       <img src=${element.strMealThumb
            } class="card-img-top" alt="...">
       <div class="card-body">
         <h5 class="card-title">${element.strMeal}</h5>
         <p class="card-text">${add3Dots(element.strInstructions,200)}</div>
       <div class="card-footer">
         <small class="text-muted">Last updated 3 mins ago</small>
       </div>
     </div>
       `
        container.appendChild(newElement)

    });
}

