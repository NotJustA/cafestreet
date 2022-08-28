window.scrollTo(0, window.scrollY);

// = Cards = //

let i = 1;

[...document.querySelectorAll(".card.switch")]
.forEach(e => {
	e.innerHTML += '<div class="bottom"><div>' +
	'<input type="radio" name="coffee' + i + '" class="outlined hot">' +
	'<input type="radio" name="coffee' + i + '" class="outlined cold">' +
	'</div><button class="cart" onclick="addToCart()"></button></div>';
	i ++;
});

const choose = e => {
	console.log(
	[...document.querySelectorAll(".card.switch")][e].children)
}

let ram;

[...document.querySelectorAll(".card.comment")]
.forEach(e => {
	ram = e.children[3].innerHTML;
	e.children[3].remove();
	e.innerHTML += '<div class="bottom"><p>' +
	ram + '</p><button class="cart" onclick="addToCart()"></button></div>';
});

[...document.querySelectorAll(".card.review")]
.forEach(e => {
	ram = [e.children[1].innerHTML, e.children[2].innerHTML];
	e.children[1].remove();
	e.children[1].remove();
	e.innerHTML += '<div class="block"><div class="name">' +
	ram[0] + '</div><p>' + ram[1] + '</p></div>';
})

// = Navbar = //
	
const navbar = document.querySelector("nav");
const cart = document.querySelector("nav .cart");

window.onscroll = () => {
	if (window.scrollY) navbar.style.background = "#FFFFFF";
	else navbar.style.background = "transparent";
}

const addToCart = () => cart.setAttribute("active", "")