console.log("hello beautiful");
import { loadLegos, useLegos } from './legos/LegoData.js';
import { makeLegoList } from './legos/LegoList.js';

const navElement = document.querySelector("nav");

navElement.addEventListener("click", (event) => {
	if (event.target.id === "showBlue") {
		filterLegos("Blue")
	} else if (event.target.id === "showAll") {
		makeLegoList(useLegos());
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