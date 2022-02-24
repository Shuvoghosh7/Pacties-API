const inputField = ()=>{
    const searchField = document.getElementById("input-field")
    const searchText = searchField.value
    console.log(searchText)
    searchField.value=''
    const url =`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    fetch(url)
    .then(res => res.json())
    .then(data => displaySearchResult(data.meals)) 
}

const displaySearchResult = displays =>{
    const showMeals = document.getElementById("showMeals")
    displays.forEach(display => {
        const div =document.createElement('div')
        div.classList.add('col')
        div.innerHTML=`
        <div class="card">
        <img src="${display.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        </div>
      </div>
      
        `
        showMeals.appendChild(div)   
    });
}