
let na = document.querySelectorAll('.nav_link');

let header = document.querySelector('#header');
function fixedH() {
	if (window.pageYOffset>header.offsetTop) {
		header.classList.add('fixed');
	} else{
		header.classList.remove('fixed');
	};
}

window.onscroll = function() {
	fixedH();
}

for(let nav of document.querySelectorAll('[data-scroll]')){
	nav.addEventListener("click", function(event){
		event.preventDefault();
		let link  = this.dataset.scroll;
		let linkOffset = document.querySelector(link).offsetTop;
		window.scroll({
			top:linkOffset - 80,
			left:0,
			behavior: 'smooth'
		})

	})
	
}

