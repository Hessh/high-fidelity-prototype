let selectedBrand;
let selectedCategory;
let selectedSubCategory;
let selectedGender;
let selectedModel;
let selectedColor;

let filteredProducts = [];
let brands = [];
let categories = [];
let subCategories = [];
let genders = [];
let models = [];
let colors = [];

let instructionTextElement = document.getElementById("instruction-text");
let instructionElement = document.getElementById("instruction-selector");
let productsElement = document.getElementById("products-container");
let brandElement = document.getElementById("filter-brand");
let categoryElement = document.getElementById("filter-category");
let subCategoryElement = document.getElementById("filter-sub-category");
let genderElement = document.getElementById("filter-gender");
let colorElement = document.getElementById("filter-color");

let progBrandElement = document.getElementById("progress-brand");
let progCategoryElement = document.getElementById("progress-category");
let progSubCategoryElement = document.getElementById("progress-sub-category");
let progGenderElement = document.getElementById("progress-gender");
let progColorElement = document.getElementById("progress-color");
let progModelElement = document.getElementById("progress-model");

function renderFilterPage(){
    clearMenu();
    filter(products);
    renderInstructions();
    renderMenu();
    if (selectedBrand) {
        renderProducts(filteredProducts);
    } else {
        productsElement.innerHTML = "";
    }
}

function renderInstructions() {
    instructionElement.innerHTML = "";
    instructionElement.removeAttribute("hidden");

    progBrandElement.classList.remove("progress-done", "progress-next");
    progCategoryElement.classList.remove("progress-done");
    progCategoryElement.classList.remove("progress-next");
    progSubCategoryElement.classList.remove("progress-done");
    progSubCategoryElement.classList.remove("progress-next");
    progGenderElement.classList.remove("progress-done");
    progGenderElement.classList.remove("progress-next");
    progColorElement.classList.remove("progress-done");
    progColorElement.classList.remove("progress-next");
    progModelElement.classList.remove("progress-done");
    progModelElement.classList.remove("progress-next");


    if (selectedColor) {
        instructionTextElement.innerHTML = "Vennligst velg plagget:";
        progBrandElement.classList.add("progress-done");
        progCategoryElement.classList.add("progress-done");
        progSubCategoryElement.classList.add("progress-done");
        progGenderElement.classList.add("progress-done");
        progColorElement.classList.add("progress-done");
        progModelElement.classList.add("progress-next");
        instructionElement.setAttribute("hidden", null);
        return;
    }

    if (selectedGender) {
        instructionTextElement.innerHTML = "Velg farge:";
        progBrandElement.classList.add("progress-done");
        progCategoryElement.classList.add("progress-done");
        progSubCategoryElement.classList.add("progress-done");
        progGenderElement.classList.add("progress-done");
        progColorElement.classList.add("progress-next");
        colors.forEach(element => {
            let node = createDivWithContent("big-filter-element", element);
            if(element == selectedColor) node.classList.add("selected-filter-element");
            node.addEventListener("click", function(){
                selectedColor = element;
                renderFilterPage();
            });
            instructionElement.appendChild(node);
        });
        return;
    }

    if (selectedSubCategory) {
        instructionTextElement.innerHTML = "Velg kjønn:";
        progBrandElement.classList.add("progress-done");
        progCategoryElement.classList.add("progress-done");
        progSubCategoryElement.classList.add("progress-done");
        progGenderElement.classList.add("progress-next");
        genders.forEach(element => {
            let node = createDivWithContent("big-filter-element", element);
            if(element == selectedGender) node.classList.add("selected-filter-element");
            node.addEventListener("click", function(){
                selectedGender = element;
                renderFilterPage();
            });
            instructionElement.appendChild(node);
        });
        return;
    }

    if (selectedCategory) {
        instructionTextElement.innerHTML = "Velg underkategori:";
        progBrandElement.classList.add("progress-done");
        progCategoryElement.classList.add("progress-done");
        progSubCategoryElement.classList.add("progress-next");
        subCategories.forEach(element => {
            let node = createDivWithContent("big-filter-element", element);
            if(element == selectedSubCategory) node.classList.add("selected-filter-element");
            node.addEventListener("click", function(){
                selectedSubCategory = element;
                renderFilterPage();
            });
            instructionElement.appendChild(node);
        });
        return;
    }

    if (selectedBrand) {
        instructionTextElement.innerHTML = "Velg kategori:";
        progBrandElement.classList.add("progress-done");
        progCategoryElement.classList.add("progress-next");
        categories.forEach(element => {
            let node = createDivWithContent("big-filter-element", element);
            if(element == selectedCategory) node.classList.add("selected-filter-element");
            node.addEventListener("click", function(){
                selectedCategory = element;
                renderFilterPage();
            });
            instructionElement.appendChild(node);
        });
        return;
    }

    if (!selectedBrand) {
        instructionTextElement.innerHTML = "Velg merke:";
        progBrandElement.classList.add("progress-next");
        brands.forEach(element => {
            let node = createDivWithContent("big-filter-element", element);
            if(element == selectedBrand) node.classList.add("selected-filter-element");
            node.addEventListener("click", function(){
                selectedBrand = element;
                renderFilterPage();
            });
            instructionElement.appendChild(node);
        });
    }
}

function renderProducts(products){
    productsElement.innerHTML = "";
    for (let i = 0; i < products.length; i++) {
        renderProduct(productsElement, products[i]);
    }
}

function clearMenu() {
    brandElement.innerHTML = "";
    categoryElement.innerHTML = "";
    subCategoryElement.innerHTML = "";
    genderElement.innerHTML = "";
    colorElement.innerHTML = "";

    progBrandElement.style.cursor = "";
    progCategoryElement.style.cursor = "";
    progSubCategoryElement.style.cursor = "";
    progGenderElement.style.cursor = "";
    progColorElement.style.cursor = "";

}

function renderMenu() {
    if (!selectedBrand) return;
    let node = createDivWithContent("filter-element", selectedBrand);
    node.classList.add("selected-filter-element", "center");
    node.addEventListener("click", function(){
        selectedBrand = null;
        selectedCategory = null;
        selectedSubCategory = null;
        selectedGender = null;
        selectedModel = null;
        selectedColor = null;
        renderFilterPage();
    });
    progBrandElement.addEventListener("click", function(){
        selectedBrand = null;
        selectedCategory = null;
        selectedSubCategory = null;
        selectedGender = null;
        selectedModel = null;
        selectedColor = null;
        renderFilterPage();
    });
    progBrandElement.style.cursor = "pointer";
    brandElement.appendChild(node);

    if (!selectedCategory) return;
    node = createDivWithContent("filter-element", selectedCategory);
    node.classList.add("selected-filter-element", "center");
    node.addEventListener("click", function(){
        selectedCategory = null;
        selectedSubCategory = null;
        selectedGender = null;
        selectedModel = null;
        selectedColor = null;
        renderFilterPage();
    });
    progCategoryElement.addEventListener("click", function(){
        selectedCategory = null;
        selectedSubCategory = null;
        selectedGender = null;
        selectedModel = null;
        selectedColor = null;
        renderFilterPage();
    });
    progCategoryElement.style.cursor = "pointer";
    categoryElement.appendChild(node);

    if (!selectedSubCategory) return;
    node = createDivWithContent("filter-element", selectedSubCategory);
    node.classList.add("selected-filter-element", "center");
    node.addEventListener("click", function(){
        selectedSubCategory = null;
        selectedGender = null;
        selectedModel = null;
        selectedColor = null;
        renderFilterPage();
    });
    progSubCategoryElement.addEventListener("click", function(){
        selectedSubCategory = null;
        selectedGender = null;
        selectedModel = null;
        selectedColor = null;
        renderFilterPage();
    });
    progSubCategoryElement.style.cursor = "pointer";
    subCategoryElement.appendChild(node);

    if (!selectedGender) return;
    node = createDivWithContent("filter-element", selectedGender);
    node.classList.add("selected-filter-element", "center");
    node.addEventListener("click", function(){
        selectedGender = null;
        selectedModel = null;
        selectedColor = null;
        renderFilterPage();
    });
    progGenderElement.addEventListener("click", function(){
        selectedGender = null;
        selectedModel = null;
        selectedColor = null;
        renderFilterPage();
    });
    progGenderElement.style.cursor = "pointer";
    genderElement.appendChild(node);

    if (!selectedColor) return;
    node = createDivWithContent("filter-element", selectedColor);
    node.classList.add("selected-filter-element", "center");
    node.addEventListener("click", function(){
        selectedModel = null;
        selectedColor = null;
        renderFilterPage();
    });
    progColorElement.addEventListener("click", function(){
        selectedModel = null;
        selectedColor = null;
        renderFilterPage();
    });
    progColorElement.style.cursor = "pointer";
    colorElement.appendChild(node);
}

function filter(products){
    filteredProducts = products;

    brands = [];
    categories = [];
    subCategories = [];
    genders = [];
    models = [];
    colors = [];

    filteredProducts.forEach(b => brands.push(b.brand));
    brands = [...new Set(brands)];
    brands.sort();
    if(selectedBrand){
        filteredProducts = filteredProducts.filter(e => e.brand == selectedBrand)
    }

    filteredProducts.forEach(b => categories.push(b.category));
    categories = [...new Set(categories)];
    categories.sort();

    if(selectedCategory){
        filteredProducts = filteredProducts.filter(e => e.category == selectedCategory)
    }

    filteredProducts.forEach(b => subCategories.push(b.subCategory));
    subCategories = [...new Set(subCategories)];
    subCategories.sort();

    if(selectedSubCategory){
        filteredProducts = filteredProducts.filter(e => e.subCategory == selectedSubCategory)
    }

    filteredProducts.forEach(b => genders.push(b.gender));
    genders = [...new Set(genders)];
    if(selectedGender){
        filteredProducts = filteredProducts.filter(e => e.gender == selectedGender)
    }
    genders.sort();

    filteredProducts.forEach(b => colors.push(b.color));
    colors = [...new Set(colors)];
    if(selectedColor){
        filteredProducts = filteredProducts.filter(e => e.color == selectedColor)
    }
    colors.sort();

    filteredProducts.forEach(b => models.push(b.model));
    models = [...new Set(models)];
    if(selectedModel){
        filteredProducts = filteredProducts.filter(e => e.model == selectedModel)
    }
}

function clearFilter() {
    filteredProducts = products;

    selectedBrand = null;
    selectedCategory = null;
    selectedSubCategory = null;
    selectedGender = null;
    selectedModel = null;
    selectedColor = null;

    renderFilterPage();
}


//FIRST LOADING

function renderOptions(){

}