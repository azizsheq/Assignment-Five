// fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata")
//     .then(res => res.json())
//     .then(data => console.log(data))

function getSearchResults() {
    const displaySearch = document.getElementById("search-results");

    const searchTxt = document.getElementById("search-txt").value;
    // console.log(searchTxt);
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTxt}`
    fetch(url)
        .then(res => res.json())
        .then(data => {
            // console.log(data)
            // console.log("HERE : ", data.meals[0].strMeal);
            // console.log("DATA LENGTH : ", data.meals.length);

            for (let i = 0; i < data.meals.length; i++) {
                const element = data.meals[i];
                const mealName = element.strMeal;
                const mealImg = element.strMealThumb;
                // console.log(mealName);
                // console.log(mealImg);

                const mealDiv = document.createElement("div");

                const mealImgTag = document.createElement("img");
                mealImgTag.src = mealImg;

                const mealNameTag = document.createElement("span");
                mealNameTag.innerText = mealName;

                displaySearch.appendChild(mealDiv);
                mealDiv.appendChild(mealImgTag);
                mealDiv.appendChild(mealNameTag);
            }
        })
}