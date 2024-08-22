// Change theme
const root = document.querySelector("html");
const toggle = document.querySelector("[data-theme-toggle]");

let theme = root.getAttribute('data-theme');

function switch_theme() {
	if (theme === "dark") {
		root.setAttribute("data-theme", "light");
	} else {
		root.setAttribute("data-theme", "dark");
	}
}

toggle.addEventListener("click", () => {
	switch_theme();
});

// Rosé Pine theme
const root = document.querySelector("html");
let light-palette = {
	base: "#faf4ed",
	surface: "#fffaf3",
	overlay: "#f2e9e1",
	muted: "#9893a5",
	subtle: "#797593",
	text: "#575279",
	love: "#b4637a",
	gold: "#ea9d34",
	rose: "#d7827e",
	pine: "#286983",
	foam: "#56949f",
	iris: "#907aa9",
	highlightLow: "#f4ede8",
	highlightMed: "#dfdad9",
	highlightHigh: "#cecacd",
};

const dark-palette = {
	base: "#191724",
	surface: "#1f1d2e",
	overlay: "#26233a",
	muted: "#6e6a86",
	subtle: "#908caa",
	text: "#e0def4",
	love: "#eb6f92",
	gold: "#f6c177",
	rose: "#ebbcba",
	pine: "#31748f",
	foam: "#9ccfd8",
	iris: "#c4a7e7",
	highlightLow: "#21202e",
	highlightMed: "#403d52",
	highlightHigh: "#524f67",
}

if (theme === "dark") {
	export { dark-palette as palette };
} else {
	export {light-palette as palette };
}

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
	newDiv.style.backgroundColor = "white";
	newDiv.style.height = "20vw";
	newDiv.style.width = "20vw";
	newDiv.style.margin = "5em";
	document.body.appendChild(newDiv);
}

alert(palette[base])