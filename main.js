let myBody = document.getElementsByTagName("body")[0];

let firstLast = myBody.children.item(4).firstElementChild;
console.log(firstLast);

let lastLast = myBody.children.item(4).lastElementChild;
console.log(lastLast);

let iFirstLast = myBody.children.item(4).children.item(1).children;
console.log(iFirstLast);

let bLastLast = myBody.children.item(4).lastElementChild.children;
console.log(bLastLast);

let i = document.getElementsByTagName("i")[0];
console.log(i.parentElement);

let b = document.getElementsByTagName("b")[0];
console.log(b.parentElement);

let nextFirstLast = myBody.children.item(4).firstElementChild.nextElementSibling;
console.log(nextFirstLast);