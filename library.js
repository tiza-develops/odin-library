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
	newDiv.style.backgroundColor = "white";
	newDiv.style.height = "20vw";
	newDiv.style.width = "20vw";
	newDiv.style.margin = "5em";
	document.body.appendChild(newDiv);
}