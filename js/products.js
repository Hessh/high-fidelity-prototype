class Product {

    constructor(brand, category, subCategory, gender, model, color, imageLink) {
        this._id = Product.incrementId();
        this.brand = brand;
        this.category = category;
        this.subCategory = subCategory;
        this.gender = gender;
        this.model = model;
        this.color = color;
        this.imageLink = imageLink;
    }

    static incrementId() {
        if (!this.latestId) {
            this.latestId = 1;
        } else {
            this.latestId++;
        }
        return this.latestId -1;
    }
}
// Use this to Render all products. Container must have ID="products-container".
// for (i = 0; i < products.length; i++) {renderProduct(document.getElementById("products-container"), products[i]);}
function renderProduct(container, product) {

    let productDiv = document.createElement("a");
    productDiv.classList.add("product-div");
    productDiv.setAttribute("href", "condition.php?productid=" + product._id);

    let imgElement = document.createElement("img");
    imgElement.classList.add("product-image");
    imgElement.setAttribute("src", product.imageLink);
    productDiv.append(imgElement);

    productDiv.append(createDivWithContent("product-brand", product.brand));
    productDiv.append(createDivWithContent("product-category", product.category));
    productDiv.append(createDivWithContent("product-subcategory", product.subCategory));
    productDiv.append(createDivWithContent("product-gender", product.gender));
    productDiv.append(createDivWithContent("product-model", product.model));
    productDiv.append(createDivWithContent("product-color", product.color));

    container.append(productDiv);
}

function createDivWithContent(itemClass, content) {
    let div = document.createElement("div");
    div.classList.add(itemClass);
    div.innerHTML = content;
    return div;
}

let products = [];
products.push(new Product("Helly Hansen", "Jakke", "Seilerjakke", "Male", "Skagen Offshore Jacket", "Red", "https://www.hellyhansen.com/media/catalog/product/3/3/33907_222-2-main.jpg"));
products.push(new Product("Helly Hansen", "Jakke", "Seilerjakke", "Male", "Skagen Offshore Jacket", "Blue", "https://www.hellyhansen.com/media/catalog/product/3/3/33907_597-2-main.jpg"));

products.push(new Product("Helly Hansen", "Jakke", "Seilerjakke", "Female", "W Skagen Offshore Jacket", "White", "https://www.hellyhansen.com/media/catalog/product/3/3/33920_001-1-hero.jpg"));
products.push(new Product("Helly Hansen", "Jakke", "Seilerjakke", "Female", "W Skagen Offshore Jacket", "Red", "https://www.hellyhansen.com/media/catalog/product/3/3/33920_222-2-main3.jpg"));
products.push(new Product("Helly Hansen", "Jakke", "Seilerjakke", "Female", "W Skagen Offshore Jacket", "Blue", "https://www.hellyhansen.com/media/catalog/product/3/3/33920_597-2-main.jpg"));

products.push(new Product("Helly Hansen", "Jakke", "Seilerjakke", "Male", "Salt Flag Jacket", "Blue", "https://www.hellyhansen.com/media/catalog/product/3/3/33909_603-2-main.jpg"));
products.push(new Product("Helly Hansen", "Jakke", "Seilerjakke", "Male", "Salt Flag Jacket", "Black", "https://www.hellyhansen.com/media/catalog/product/3/3/33909_597-1-hero.jpg"));

products.push(new Product("Helly Hansen", "Jakke", "Seilerjakke", "Female", "W Salt Flag Jacket", "White", "https://www.hellyhansen.com/media/catalog/product/3/3/33923_001-1-hero.jpg"));
products.push(new Product("Helly Hansen", "Jakke", "Seilerjakke", "Female", "W Salt Flag Jacket", "Blue", "https://www.hellyhansen.com/media/catalog/product/3/3/33923_994-2-main4.jpg"));

products.push(new Product("Helly Hansen", "Jakke", "Seilerjakke", "Male", "Crew Midlayer Jacket", "White", "https://www.hellyhansen.com/media/catalog/product/3/0/30253_001-2-main.jpg"));
products.push(new Product("Helly Hansen", "Bukse", "Seilerjakke", "Male", "Crew Midlayer Jacket", "Black", "https://www.hellyhansen.com/media/catalog/product/3/0/30253_990-2-main.jpg"));
products.push(new Product("Helly Hansen", "Jakke", "Seilerjakke", "Male", "Crew Midlayer Jacket", "Red", "https://www.hellyhansen.com/media/catalog/product/3/0/30253_222-2-main.jpg"));

products.push(new Product("Helly Hansen", "Jakke", "Seilerjakke", "Female", "W Crew Midlayer Jacket", "Red", "https://www.hellyhansen.com/media/catalog/product/3/0/30317_222-2-main.jpg"));
products.push(new Product("Helly Hansen", "Jakke", "Seilerjakke", "Female", "W Crew Midlayer Jacket", "Pink", "https://www.hellyhansen.com/media/catalog/product/3/0/30317_039-2-main.jpg"));
products.push(new Product("Jelly Hansen", "Jakke", "Seilerjakke", "Female", "W Crew Midlayer Jacket", "Black", "https://www.hellyhansen.com/media/catalog/product/3/0/30317_990-2-main.jpg"));

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

let productsElement = document.getElementById("products-container");
let brandElement = document.getElementById("filter-brand");
let categoryElement = document.getElementById("filter-category");
let subCategoryElement = document.getElementById("filter-sub-category");
let genderElement = document.getElementById("filter-gender");
let colorElement = document.getElementById("filter-color");
let modelElement = document.getElementById("filter-model");

function renderFilterPage(){
    clearMenu();
    filter(products);
    renderMenu();
    renderProducts(filteredProducts);
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

renderFilterPage();


