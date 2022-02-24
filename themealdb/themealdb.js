const inputField = ()=>{
    const searchField = document.getElementById("input-field")
    const errorMassage = document.getElementById('error-search')
    const searchText = searchField.value
    searchField.value=''
    if(searchText == ''){
        errorMassage.style.display="block"

    }else{
        errorMassage.style.display="none"
        const url =`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
        fetch(url)
        .then(res => res.json())
        .then(data => displaySearchResult(data.meals)) 
    }
    
}

const displaySearchResult = displays =>{
    console.log(displays)
    const showMeals = document.getElementById("showMeals")
    /* const errorMassage = document.getElementById('error-search') */
    showMeals.textContent=''
    if(displays.length === 0){
        errorMassage.style.display="block"
    }
    displays.forEach(display => {
        // console.log(display)
        const div =document.createElement('div')
        div.classList.add('col')
        div.innerHTML=`
        <div onclick="loadMealDetals('${display.idMeal}')" class="card">
        <img src="${display.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">${display.strMeal}</h5>
        <p class="card-text">${display.strInstructions.slice(0,200)}</p>
        </div>
      </div>
      
        `
        showMeals.appendChild(div)   
    });
}

const loadMealDetals = mealId =>{
    // console.log(mealId)
    const url =`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayMealDetails(data.meals[0]))
}

const displayMealDetails = meal =>{
    // console.log(meal)
    const mealDetails = document.getElementById("meal-details")

    const div = document.createElement('div')
    div.classList.add('card')
    div.innerHTML=`
    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${meal.strMeal}</h5>
        <p class="card-text">${meal.strInstructions.slice(0,200)}</p>
        <a href="${meal.strYoutube}" class="btn btn-primary">Go somewhere</a>
    `
    mealDetails.appendChild(div)
}