// function to get search results from the data
function getSearchResults() {
    const displaySearch = document.getElementById("search-results");
    const searchTxt = document.getElementById("search-txt").value;
    const errorTxt1 = "Sorry, Please Enter Any Meal Name !!!";
    const errorTxt2 = "Sorry, No Similar Data Found !!!";

    // to clear the previous search results
    clearDiv();

    if (searchTxt == "") {
        displayError(errorTxt1);
    }
    else {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTxt}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                if (data.meals == null) {
                    displayError(errorTxt2);
                }
                else {
                    data.meals.forEach(element => {
                        const createDiv = document.createElement("div");
                        createDiv.className = "resultDiv";
                        // createDiv.onclick = `displayDetails('${element.strMeal}')`;

                        const searchResult = `
                            <img src="${element.strMealThumb}" alt="">
                            <span onclick="displayDetails('${element.strMeal}')">${element.strMeal}</span>
                        `

                        createDiv.innerHTML = searchResult;
                        displaySearch.appendChild(createDiv);
                    });
                }
            })
    }
}


// a function to create the url as user clicked on the meal name
const displayDetails = name => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`
    fetch(url)
        .then(res => res.json())
        .then(data => renderMealIngredients(data.meals[0]));
}


// function to arrange meal ingredients list as HTML elements
const renderMealIngredients = element => {
    const displayDetails = document.getElementById("detail-search-result");

    displayDetails.innerHTML = "";  // clearing the previous info

    const searchResult = `
        <img src="${element.strMealThumb}" alt="${element.strMeal}">
        <h1>${element.strMeal}</h1>
        <h3>Ingredients</h3>
        <ul>
            <li>${element.strIngredient1}</li>
            <li>${element.strIngredient2}</li>
            <li>${element.strIngredient3}</li>
            <li>${element.strIngredient4}</li>
            <li>${element.strIngredient5}</li>
            <li>${element.strIngredient6}</li>
            <li>${element.strIngredient7}</li>
            <li>${element.strIngredient8}</li>
            <li>${element.strIngredient9}</li>
            <li>${element.strIngredient10}</li>
        </ul>
    `

    const ingredientsDiv = document.createElement("div");
    ingredientsDiv.className = "ingredientsDiv";

    ingredientsDiv.innerHTML = searchResult;
    displayDetails.appendChild(ingredientsDiv);
}


// to clear the previous search results
function clearDiv() {
    const displaySearch = document.getElementById("search-results");
    const errorDiv = document.getElementById("error-div");
    const displayDetails = document.getElementById("detail-search-result");

    displaySearch.innerHTML = "";
    errorDiv.innerHTML = "";
    displayDetails.innerHTML = "";
}


// to display error text
function displayError(errorText) {
    const errorDiv = document.getElementById("error-div");
    errorDiv.innerText = errorText;
}