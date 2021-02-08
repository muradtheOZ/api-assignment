function showMeal(data) {
    const mainDiv = document.getElementById("mealList");
    const mealItem = data.meals;
    mealItem.forEach(element => {
        const addItem = document.createElement('div');
        const itemName = `
        <div class="card api-card p-2 m-2">
        <img src="${element.strMealThumb}" class="card-img-top" alt="...">
        <div class="api-card-body card-body">
        <p id="mealCLue" class="card-text"> ${element.strMeal} </p>
        </div>
        </div>
        `;
        addItem.className = "col-md-3 d-flex justify-content-around ";
        addItem.id = "dish"
        addItem.innerHTML = itemName;
        mainDiv.appendChild(addItem);
    });
   
}
function IngredientsCaller(event){
    const clicked = (event.target);
    
    const mealItem = clicked;
    console.log(typeof clicked.innerText);
    if(clicked.innerText !== ""){
        mealItem.parentNode.parentNode.style.display="none";
       


    }
    else{
        mealItem.parentNode.style.display="none";
      
    }
     

}
function showIngredients(){
    const mainDiv = document.getElementById("mealList");;
    const addItem = document.createElement('div');
        const ingredientName = `
        <li> pottasium khao </li>
        `;
        addItem.innerHTML = ingredientName;
        mainDiv.appendChild(addItem);
}



function loadData(data) {
    fetch(data)
        .then(res => res.json())
        .then(data => showMeal(data));
}


 const dataUrlFetch = document.getElementById("search").addEventListener('click', function () {
    const searchValue = document.getElementById("searchMeal");
    const value = searchValue.value;
    const url = "https://www.themealdb.com/api/json/v1/1/search.php?s=" + value;
    loadData(url);
    return url;

})