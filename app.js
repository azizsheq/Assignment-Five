function getSearchResults() {
    const displaySearch = document.getElementById("search-results");

    const searchTxt = document.getElementById("search-txt").value;
    // console.log(searchTxt);
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTxt}`
    fetch(url)
        .then(res => res.json())
        .then(data => {
            data.meals.forEach(element => {
                const createDiv = document.createElement("div");
                const mealName = element.strMeal;
                createDiv.className = "resultDiv";


                const searchResult = `
                    <img src="${element.strMealThumb}" alt="">
                    <span>${element.strMeal}</span>
                `
                createDiv.innerHTML = searchResult;
                displaySearch.appendChild(createDiv);
            });
        })
}
