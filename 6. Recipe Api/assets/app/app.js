"use strict";

// user values
let noodleBtn = document.querySelector(".noodleBtn");
let pizzaBtn = document.querySelector(".pizzaBtn");
let saladBtn = document.querySelector(".saladBtn");
// let keyVal = "e1a98a412bd4408bad233f53b414eba5";

// display values
let recipeBox = document.querySelector(".recipe-container");
let dishTitle = document.querySelector(".recipe__box--title");
let dishImage = document.querySelector(".recipe__img");
let dishDescription = document.querySelector(".recipe__box--text");
let searchContainer = document.querySelector(".search-container");
// noodleBtn.addEventListener("click", () => {});

const fetchRecipe = (userVar) => {
  recipeBox.innerHTML = "";

  const reciData = async () => {
    const returnData = await axios.get(`newReci.JSON`);
    returnData.data[userVar].forEach((ele, ind) => {
      recipeBox.insertAdjacentHTML(
        "beforeend",
        `<div class="recipe__box">
                      <img src="${ele.image}" class="recipe__img" alt="">
                  <h3 class="recipe__box--title">${ele.title}</h3>
                  <p class="recipe__box--text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione nobis et
                      dicta, culpa voluptate</p>
                  <p class="recipe__box--cost">$${ind}</p>
                  </div>`
      );
    });
  };
  reciData();
};
recipeBox.innerHTML = "";
let saladSelected = true;

if (saladSelected) {
  fetchRecipe("salad");
}
noodleBtn.addEventListener("click", (e) => {
  fetchRecipe("noodles");
});

pizzaBtn.addEventListener("click", (e) => {
  fetchRecipe("pizza");
});
saladBtn.addEventListener("click", (e) => {
  fetchRecipe("salad");
});
