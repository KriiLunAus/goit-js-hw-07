`use strict`
const items = document.body.querySelectorAll(".item");
const header = document.body.querySelectorAll("h2")
const itemElements = document.body.querySelectorAll(".item-element")

console.log(`Number of categories: ${items.length}`);
console.log(itemElements)

items.forEach((element) =>
    console.log(`Category: `));
    console.log(`Elements: `);
