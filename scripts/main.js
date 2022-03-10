console.log("hello beautiful");
import { loadLegos, useLegos } from './legos/LegoData.js';
import { makeLegoList } from './legos/LegoList.js';
import { BuildersBio } from './bio/BuildersBio.js';

const navElement = document.querySelector("nav");
const bioElement = document.querySelector("bio__content")

navElement.addEventListener("click", (event) => {
	if (event.target.id === "showRed") {
		filterLegos("Red")
	} else if (event.target.id === "showAll") {
		makeLegoList(useLegos());
	} else if (event.target.id ==="showGreen") {
		filterLegos("Green")
	}

})

const filterLegos = (whatFilter) => {
	const filterArray = useLegos().filter(singleLego => {
		if (singleLego.LegoName.includes(whatFilter)) {
			return singleLego;
		}
	})
	makeLegoList(filterArray);
}

//EIA - Everything Is Awesome
const startEIA = () => {
	loadLegos()
	.then(legoArray => {
		makeLegoList(legoArray)
	});
	const asideElement = document.querySelector("aside");
	asideElement.innerHTML += BuildersBio();
}

startEIA();
bioElement = BuildersBio();
