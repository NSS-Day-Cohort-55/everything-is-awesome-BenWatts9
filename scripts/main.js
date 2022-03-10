console.log("hello beautiful");
import { loadLegos, useLegos } from './legos/LegoData.js';
import { makeLegoList } from './legos/LegoList.js';
import { BuildersBio } from './bio/BuildersBio.js';

const navElement = document.querySelector("nav");
let bioElement = document.querySelector("bio__content")

document.querySelector("#material").addEventListener('change', function(event){
	if (event.target.value === "Solid") {
		filterLegoMaterials("Solid")
	} else if (event.target.value === "Transparent") {
		filterLegoMaterials("Transparent")
	} else if (event.target.value === "Pearl") {
		filterLegoMaterials("Pearl")
	} else if (event.target.value === "Chrome") {
		filterLegoMaterials("Chrome")
	} else if (event.target.value === "Metallic") {
		filterLegoMaterials("Metallic")
	} else if (event.target.value === "Milky") {
		filterLegoMaterials("Milky")
	} else if (event.target.value === "Glitter") {
		filterLegoMaterials("Glitter")
	} else if (event.target.value === "Speckle") {
		filterLegoMaterials("Speckle")
	} else if (event.target.value === "Ink") {
		filterLegoMaterials("Ink")
	} else if (event.target.value === "Process") {
		filterLegoMaterials("Process")
	} else if (event.target.value === "Modulex") {
		filterLegoMaterials("Modulex")
	}
	
})

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

const filterLegoMaterials = (whatFilter) => {
	const filterArray = useLegos().filter(singleLego => {
		if (singleLego.Material.includes(whatFilter)) {
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
