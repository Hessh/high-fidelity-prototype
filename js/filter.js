
//brand, kategori, sub-category, gender,  model, farge

let filter = document.getElementById("filter");
let categoryElement = document.getElementById("filterCategory")
let brands = [];

let filteredProducts = [];
let refilteredProducts = []


function createDivWithContent(itemClass, content) {
    let div = document.createElement("div");
    div.classList.add(itemClass);
    div.innerHTML = content;
    return div;
}


for(i = 0 ; i < products.length; i++){
	if(!brands.includes(products[i].brand)){
		brands.push(products[i].brand);	
		filteredProducts.push(products[i]);
	}
}

function start(){
	for(i = 0; i < brands.length; i++){
		content = "<input type='radio' onclick='filterBrand(\"" + brands[i] + "\")' name='brand'>"+ brands[i] + "</input>";
		let node = createDivWithContent("brand", content)
		filter.appendChild(node)
	}

}



function filterBrand(currentFilter){
	console.log(currentFilter)
	categoryElement.innerHTML = "";
	category = []
	for(i = 0; i < brands.length; i++){
		if(filteredProducts[i].brand == currentFilter){
			category.push(filteredProducts[i].category);
			refilteredProducts.push[filteredProducts[i]];
		}
	}	

	for(i = 0; i < category.length; i++){
		content ="<input type='radio' onclick='filterSubCategory(\"" + category[i] + "\")' name='brand'>"+ category[i] + "</input>";	
		let node = createDivWithContent("brand", content)
		categoryElement.appendChild(node) 
	}	
}

function filterSubCategory(subCategory){
	console.log(subCategory)
}

start()