function showMeal(data) {
    const mainDiv = document.getElementById("mealList");
    mainDiv.innerHTML = "";
    const mealItem = data.meals;
    mealItem.forEach(element => {
        const addItem = document.createElement('div');
        const itemName = `
        <div onclick="showIngredients('${element.idMeal}')">
        <div class="card api-card p-2 m-2">
        <img  src="${element.strMealThumb}" class="card-img-top"  alt="${element.strMeal}">
        <div class="api-card-body card-body">
        <p id="mealCLue" class="card-text"> ${element.strMeal} </p>
        </div>
        </div>
        </div>
        `;
        addItem.className = "col-md-3 d-flex justify-content-around ";
        addItem.id = "dish"
        addItem.innerHTML = itemName;
        mainDiv.appendChild(addItem);
    });

}
function IngredientsCaller(event) {
    document.getElementById("ingredientList").innerHTML = ""
     whichOneClicked = (event.target.innerText);
    console.log( whichOneClicked);
            if(whichOneClicked == ""){
                whichOneClicked = document.getElementById("mealCLue").innerText
            }
        const mealArea = document.getElementById("mealList");
        mealArea.style.display = "none";
        const url = "https://www.themealdb.com/api/json/v1/1/search.php?s=" + whichOneClicked;
        fetch(url)
        .then(res => res.json())
        .then(data => showIngredients(data));
        
        
    }

    const showIngredients = name => {
        const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${name}`;
        fetch(url)
            .then(response => response.json())
            .then(data => {
                detailsFoodInfo(data.meals);
                console.log(data.meals[0]);
            });
    };

    const detailsFoodInfo = element => {
        const mealArea = document.getElementById("mealList");
        const mainDiv  = document.getElementById("ingredientList");
        mainDiv.innerHTML="";
        mealArea.style.display = "none";
        mainDiv.style.display = "flex";
        let ingredientItem = document.createElement('div');
        
            
             ingredientFinalList = `
            <div id="ingridInfo" class="card  p-2 m-2">
            <h1> Ingredients for making <span class="orangeShade"> ${element[0].strMeal} </span> </h1>
            <ul>
            <li>${element[0].strIngredient1}</li>
            <li>${element[0].strIngredient2}</li>
            <li>${element[0].strIngredient3}</li>
            <li>${element[0].strIngredient4}</li>
            <li>${element[0].strIngredient5}</li>
            <li>${element[0].strIngredient6}</li>
            <li>${element[0].strIngredient7}</li>
            <li>${element[0].strIngredient8}</li>
            <li>${element[0].strIngredient9}</li>
            <li>${element[0].strIngredient10}</li>
            <li>${element[0].strIngredient11}</li>
            </ul>
            <div class = "double-button">
            <button class ="half-widthBtn"> Youtube </button>
            <button onclick = "mainAreaSHow()" class ="half-widthBtn"> Go Back </button>
            </div>
    
           
            </div>
            `;
        element.forEach(element => {
            let addItem = document.createElement('div');
            
            
            ingredientName = `
            <div  id="ingridPicture" class="card api-card p-2 m-2">
            <img src="${element.strMealThumb}" class="card-img-top" alt="...">
            <div class="api-card-body card-body">
            <p id="mealCLue" class="card-text"> ${element.strMeal} </p>
            </div>
            </div>
            `;
            addItem.className = "col-md-3 d-flex justify-content-around ";
            ingredientItem.className = "col-md-6  ";
            ingredientItem.innerHTML = ingredientFinalList;
            addItem.innerHTML = ingredientName;
            mainDiv.appendChild(addItem)
            mainDiv.appendChild(ingredientItem);
        });
    };
    





function mainAreaSHow(){
    const mealArea = document.getElementById("mealList");
    mealArea.style.display = "flex";
    const ingredientInfoArea = document.getElementById("ingredientList"); 
    ingredientInfoArea.style.display = "none";
    
    
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
    // location.reload();
    // return true;

    return url;

})