console.log("hello beautiful");
import { loadLegos, useLegos } from './legos/LegoData.js';
import { makeLegoList } from './legos/LegoList.js';
import { BuildersBio } from './bio/BuildersBio.js';
import { removeData } from './legos/LegoData.js';

const navElement = document.querySelector("nav");
let bioElement = document.querySelector("bio__content")
let searchEl = document.querySelector("#search-bar")

document.querySelector("#material").addEventListener('change', function(event){
	filterLegos(event.target.value, "material")
})

navElement.addEventListener("click", (event) => {
	if (event.target.id === "showRed") {
		filterLegos("Red")
	} else if (event.target.id === "showAll") {
		makeLegoList(useLegos());
	} else if (event.target.id ==="showGreen") {
		filterLegos("Green")
	} else if (event.target.id ==="sortBtn") {
		let legoz = useLegos()
		legoz.sort(smallsort)
		makeLegoList(legoz)
	}
})

const smallsort = (a,b) => {
	if(a.YearFrom !=="" || b.YearFrom !==""){
		const avalue = parseInt(a.YearFrom)
		const bvalue = parseInt(b.YearFrom)
		let yearValue = 0
		if (avalue > bvalue) {
			yearValue = 1
		}else if (avalue < bvalue){
			yearValue =-1
		}
		return yearValue
}
}


searchEl.addEventListener('keypress', (event)=> {
	if (event.keyCode === 13){
		let num = parseInt(searchEl.value)
		filterLegos(num,"id")
	}
})

const filterLegos = (whatFilter, filterType="name") => {
	if (filterType === "name") {
		const filterArray = useLegos().filter(singleLego => {
			if (singleLego.LegoName.includes(whatFilter)) {
				return singleLego;
			}
		})
	makeLegoList(filterArray);
	} else if (filterType === "material") {
		const filterArray = useLegos().filter(singleLego => {
			if (singleLego.Material.includes(whatFilter)) {
				return singleLego;
			}
		})
	makeLegoList(filterArray);
	} else if (filterType === "id") {
		const filterArray = useLegos().filter(singleLego => {
			if (parseInt(singleLego.LegoId) === whatFilter) {
				return singleLego;
			}
		})
	makeLegoList(filterArray);
	}
}




//EIA - Everything Is Awesome
const startEIA = () => {
	loadLegos()
	.then(legoArray => {
		makeLegoList(removeData(legoArray))
	});
	const asideElement = document.querySelector("aside");
	asideElement.innerHTML += BuildersBio();
}

startEIA();
bioElement = BuildersBio();
