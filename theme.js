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

