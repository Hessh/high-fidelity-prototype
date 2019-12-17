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
let modelElement = document.getElementById("filter-model");

function renderFilterPage(){
    clearMenu();
    filter(products)
    renderInstructions();
    renderMenu();
    renderProducts(filteredProducts);
}

function renderInstructions() {
    instructionElement.innerHTML = "";
    instructionElement.removeAttribute("hidden");

    if (selectedColor) {
        instructionTextElement.innerHTML = "Vennligst velg plagget ditt i oversikten under";
        instructionElement.setAttribute("hidden", null);
        return;
    }
    if (selectedGender) {
        instructionTextElement.innerHTML = "Vennligst velg farge på produktet";
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
        instructionTextElement.innerHTML = "Vennligst velg kjønn";
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
        instructionTextElement.innerHTML = "Vennligst velg en underkategori";
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
        instructionTextElement.innerHTML = "Vennligst velg kategorien som passer til ditt plagg";
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
        instructionTextElement.innerHTML = "Vennligst velg merket på plagget du ønsker å levere inn";
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
    modelElement.innerHTML = "";
}

function renderMenu(){
    brands.forEach(element => {
        let node = createDivWithContent("filter-element", element);
        if(element == selectedBrand) node.classList.add("selected-filter-element");
        node.addEventListener("click", function(){
            selectedBrand = element;
            selectedCategory = null;
            selectedSubCategory = null;
            selectedGender = null;
            selectedModel = null;
            selectedColor = null;

            renderFilterPage();
        });
        brandElement.appendChild(node);
    });
    if (!selectedBrand) return;

    categories.forEach(element => {
        let node = createDivWithContent("filter-element", element);
        if(element == selectedCategory) node.classList.add("selected-filter-element");
        node.addEventListener("click", function(){
            selectedCategory = element;
            selectedSubCategory = null;
            selectedGender = null;
            selectedModel = null;
            selectedColor = null;

            renderFilterPage();
        });
        categoryElement.appendChild(node);
    });
    if (!selectedCategory) return;

    subCategories.forEach(element => {
        let node = createDivWithContent("filter-element", element);
        if(element == selectedSubCategory) node.classList.add("selected-filter-element");
        node.addEventListener("click", function(){
            selectedSubCategory = element;
            selectedGender = null;
            selectedModel = null;
            selectedColor = null;

            renderFilterPage();
        });
        subCategoryElement.appendChild(node);
    });
    if (!selectedSubCategory) return;

    genders.forEach(element => {
        let node = createDivWithContent("filter-element", element);
        if(element == selectedGender) node.classList.add("selected-filter-element");
        node.addEventListener("click", function(){
            selectedGender = element;
            selectedModel = null;
            selectedColor = null;

            renderFilterPage();
        });
        genderElement.appendChild(node);
    });
    if (!selectedGender) return;

    colors.forEach(element => {
        let node = createDivWithContent("filter-element", element);
        if(element == selectedColor) node.classList.add("selected-filter-element");
        node.addEventListener("click", function(){
            selectedColor = element;

            renderFilterPage();
        });
        colorElement.appendChild(node);
    });
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
    if(selectedBrand){
        filteredProducts = filteredProducts.filter(e => e.brand == selectedBrand)
    }

    filteredProducts.forEach(b => categories.push(b.category));
    categories = [...new Set(categories)];
    if(selectedCategory){
        filteredProducts = filteredProducts.filter(e => e.category == selectedCategory)
    }

    filteredProducts.forEach(b => subCategories.push(b.subCategory));
    subCategories = [...new Set(subCategories)];
    if(selectedSubCategory){
        filteredProducts = filteredProducts.filter(e => e.subCategory == selectedSubCategory)
    }

    filteredProducts.forEach(b => genders.push(b.gender));
    genders = [...new Set(genders)];
    if(selectedGender){
        filteredProducts = filteredProducts.filter(e => e.gender == selectedGender)
    }

    filteredProducts.forEach(b => colors.push(b.color));
    colors = [...new Set(colors)];
    if(selectedColor){
        filteredProducts = filteredProducts.filter(e => e.color == selectedColor)
    }

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