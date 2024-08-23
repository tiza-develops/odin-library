let base =  "#191724";
let surface =  "#1f1d2e";
let overlay =  "#26233a";
let muted =  "#6e6a86";
let subtle =  "#908caa";
let text =  "#e0def4";
let love =  "#eb6f92";
let gold =  "#f6c177";
let rose =  "#ebbcba";
let pine =  "#31748f";
let foam =  "#9ccfd8";
let iris =  "#c4a7e7";
let highlightLow =  "#21202e";
let highlightMed =  "#403d52";
let highlightHigh =  "#524f67";

// Core application
let books = [];

function Book(title, author, pages, read) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.read = read;
}
const newBook = new Book("The Communist Manifesto", "Karl Marx", 400, "yes")
books.push(newBook)

for (let i of books) {
	const newDiv = document.createElement("div");
	newDiv.style.backgroundColor = gold;
	newDiv.style.height = "10vw";
	newDiv.style.width = "10vw";
	newDiv.style.margin = "5em";
	document.body.appendChild(newDiv);
}

const addButton = document.createElement("button");
addButton.style.backgroundColor = base;
addButton.style.color = text;
addButton.style.width = "10vw";
addButton.style.height = "10vw";
addButton.style.borderStyle = "solid";
addButton.style.borderColor = text;
addButton.style.fontSize = "5vw";
addButton.style.margin = "5vw";
addButton.innerHTML = "+";
document.body.appendChild(addButton);