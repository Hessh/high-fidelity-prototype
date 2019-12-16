class Product {

    constructor(brand, category, subCategory, gender, model, color, imageLink) {
        this.brand = brand;
        this.category = category;
        this.subCategory = subCategory;
        this.gender = gender;
        this.model = model;
        this.color = color;
        this.imageLink = imageLink;
    }

}
// Use this to Render all products. Container must have ID="products-container".
// for (i = 0; i < products.length; i++) {renderProduct(document.getElementById("products-container"), products[i]);}
function renderProduct(container, product) {
    let productDiv = createDivWithContent("product-div", null);

    productDiv.append(createDivWithContent("product-brand", product.brand));
    productDiv.append(createDivWithContent("product-category", product.category));
    productDiv.append(createDivWithContent("product-subcategory", product.subCategory));
    productDiv.append(createDivWithContent("product-gender", product.gender));
    productDiv.append(createDivWithContent("product-model", product.model));
    productDiv.append(createDivWithContent("product-color", product.color));

    let imgElement = document.createElement("img");
    imgElement.classList.add("product-image");
    imgElement.setAttribute("src", product.imageLink);
    productDiv.append(imgElement);

    container.append(productDiv);
}

function createDivWithContent(itemClass, content) {
    let div = document.createElement("div");
    div.classList.add(itemClass);
    div.innerHTML = content;
    return div;
}

let products = [];
products.push(new Product("Helly Hansen", "Jakke", "Seilerjakke", "Male", "Skagen Offshore Jacket", "Red", "https://www.hellyhansen.com/media/catalog/product/3/3/33907_222-2-main.jpg?quality=75&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:"));
products.push(new Product("Helly Hansen", "Jakke", "Seilerjakke", "Male", "Skagen Offshore Jacket", "Blue", "https://www.hellyhansen.com/media/catalog/product/3/3/33907_597-2-main.jpg?quality=75&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:"));

products.push(new Product("Helly Hansen", "Jakke", "Seilerjakke", "Female", "W Skagen Offshore Jacket", "White", "https://www.hellyhansen.com/media/catalog/product/3/3/33920_001-1-hero.jpg?quality=75&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:"));
products.push(new Product("Helly Hansen", "Jakke", "Seilerjakke", "Female", "W Skagen Offshore Jacket", "Red", "https://www.hellyhansen.com/media/catalog/product/3/3/33920_222-2-main3.jpg?quality=75&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:"));
products.push(new Product("Helly Hansen", "Jakke", "Seilerjakke", "Female", "W Skagen Offshore Jacket", "Blue", "https://www.hellyhansen.com/media/catalog/product/3/3/33920_597-2-main.jpg?quality=75&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:"));

products.push(new Product("Helly Hansen", "Jakke", "Seilerjakke", "Male", "Salt Flag Jacket", "Blue", "https://www.hellyhansen.com/media/catalog/product/3/3/33909_603-2-main.jpg?quality=75&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:"));
products.push(new Product("Helly Hansen", "Jakke", "Seilerjakke", "Male", "Salt Flag Jacket", "Black", "https://www.hellyhansen.com/media/catalog/product/3/3/33909_597-1-hero.jpg?quality=75&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:"));

products.push(new Product("Helly Hansen", "Jakke", "Seilerjakke", "Female", "W Salt Flag Jacket", "White", "https://www.hellyhansen.com/media/catalog/product/3/3/33923_001-1-hero.jpg?quality=75&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:"));
products.push(new Product("Helly Hansen", "Jakke", "Seilerjakke", "Female", "W Salt Flag Jacket", "Blue", "https://www.hellyhansen.com/media/catalog/product/3/3/33923_994-2-main4.jpg?quality=75&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:"));

products.push(new Product("Helly Hansen", "Jakke", "Seilerjakke", "Female", "W Salt Flag Jacket", "Blue", "https://www.hellyhansen.com/media/catalog/product/3/3/33923_994-2-main4.jpg?quality=75&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:"));
products.push(new Product("Helly Hansen", "Jakke", "Seilerjakke", "Female", "W Salt Flag Jacket", "Blue", "https://www.hellyhansen.com/media/catalog/product/3/3/33923_994-2-main4.jpg?quality=75&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:"));

