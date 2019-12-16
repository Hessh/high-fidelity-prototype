
//brand, kategori, sub-category, gender,  model, farge

let filter = document.getElementById("filter");
let categoryElement = document.getElementById("filterCategory");
let subCategoryElement = document.getElementById("filterSubCategory");
let brands = [];

let filteredProducts = [];
let refilteredProducts = [];
let lastClickedElement;


function start(){

	for(i = 0 ; i < products.length; i++){
		if(!brands.includes(products[i].brand)){
			brands.push(products[i].brand);	
			
		}
	}
	
	for(i = 0; 	i < brands.length; i++){
		content = "<div onclick='filterBrand(\"" + brands[i] + "\","+"this)' name='brand'>"+ brands[i] + "</div>";
		let node = createDivWithContent("brand", content)
		filter.appendChild(node)
	}

}

function filterProducts(){
	document.getElementById("products-container").innerHTML = "";
     for (i = 0; i < filteredProducts.length; i++) {
            renderProduct(document.getElementById("products-container"), filteredProducts[i]);
        }
}



function filterBrand(currentFilter, element){
	resetFilter();
	if(lastClickedElement != null){
		lastClickedElement.style.backgroundColor = "";
	}

	lastClickedElement = element;
	//element.style.backgroundColor = "blue";

	categoryElement.innerHTML = "";
	category = []

	for(i = 0; i < products.length; i++){
		if(products[i].brand == currentFilter){
			if(!category.includes(products[i].category))
				category.push(products[i].category);
			filteredProducts.push(products[i]);
		}
	}	

	for(i = 0; i < category.length; i++){
		content ="<div onclick='filterCategory(\"" + category[i] + "\")' name='brand'>"+ category[i] + "</div>";	
		let node = createDivWithContent("brand", content)
		categoryElement.appendChild(node) 
	}	
	console.log(filteredProducts)
	filterProducts();
}

function filterCategory(category){

	subCategory = []
	
	for(i = 0; i < filteredProducts.length; i++){
		if(filteredProducts[i].category == category){
			if(!subCategory.includes(products[i].category))
				subCategory.push(products[i].category);
			refilteredProducts.push(products[i]);
		}
	}	
	filterProducts = refilteredProducts;
	refilteredProducts = [];

		content ="<div onclick='filterSubCategory(\"" + subCategory[i] + "\")' name='brand'>"+ subCategory[i] + "</div>";	
		let node = createDivWithContent("brand", content)
		subCategoryElement.appendChild(node) 
}



function resetFilter(){
	categoryElement.innerHTML = "";
	subCategoryElement.innerHTML ="";

}

start()