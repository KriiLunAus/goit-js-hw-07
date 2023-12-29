`use strict`

const catList = document.getElementById("categories")

const items = catList.querySelectorAll("li.item");


console.log(`Number of categories: ${items.length}`);



items.forEach((element) => {
    
    const header = element.querySelector("h2").textContent;
    console.log(`Category: ${header}`);
    
    const quantityOfElements = element.querySelectorAll("li");
    console.log(`Elements: ${quantityOfElements.length}`)

}
)
    
