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
products.push(new Product("Helly Hansen", "Jakke", "Seilerjakke", "Female", "W Crew Midlayer Jacket", "Black", "https://www.hellyhansen.com/media/catalog/product/3/0/30317_990-2-main.jpg"));

products.push(new Product("Norrøna", "Bukse", "Gore-tex", "Male", "Lofoten ACE Gore-Tex Pro", "Mercury", "https://res.cloudinary.com/norrona/image/upload/b_rgb:F5F5F5,c_pad,d_imgmissing.jpg,f_auto,fl_progressive.lossy,w_1000,h_1000,q_auto/1009178915.jpg"));
products.push(new Product("Norrøna", "Bukse", "Gore-tex", "Male", "Lofoten ACE Gore-Tex Pro", "Black", "https://res.cloudinary.com/norrona/image/upload/b_rgb:F5F5F5,c_pad,d_imgmissing.jpg,f_auto,fl_progressive.lossy,w_1000,h_1000,q_auto/1002197718.jpg"));
products.push(new Product("Norrøna", "Bukse", "Gore-tex", "Male", "Lofoten Gore-Tex Pro Light", "Green", "https://res.cloudinary.com/norrona/image/upload/b_rgb:F5F5F5,c_pad,d_imgmissing.jpg,f_auto,fl_progressive.lossy,w_1000,h_1000,q_auto/1022173440.jpg"));
products.push(new Product("Norrøna", "Bukse", "flex™1", "Male", "Falketind flex1 Pants", "Indigo", "https://res.cloudinary.com/norrona/image/upload/b_rgb:F5F5F5,c_pad,d_imgmissing.jpg,f_auto,fl_progressive.lossy,w_1000,h_1000,q_auto/3321142319.jpg"));
products.push(new Product("Norrøna", "Bukse", "Gore-tex", "Female", "Falketind Gore-Tex Pro Light", "Red", "https://res.cloudinary.com/norrona/image/upload/b_rgb:F5F5F5,c_pad,d_imgmissing.jpg,f_auto,fl_progressive.lossy,w_1324,h_1324,q_auto/v1561713745/1058175700-model-1.jpg"));
products.push(new Product("Norrøna", "Jakke", "Gore-Tex", "Male", "Lofoten Gore-Tex Pro Jacket", "Green", "https://res.cloudinary.com/norrona/image/upload/b_rgb:F5F5F5,c_pad,d_imgmissing.jpg,f_auto,fl_progressive.lossy,w_1000,h_1000,q_auto/1015173440.jpg"));
products.push(new Product("Norrøna", "Jakke", "Gore-Tex", "Female", "Lofoten Gore-Tex Pro Jacket", "Red", "https://res.cloudinary.com/norrona/image/upload/b_rgb:F5F5F5,c_pad,d_imgmissing.jpg,f_auto,fl_progressive.lossy,w_1000,h_1000,q_auto/1054175700.jpg"));
products.push(new Product("Norrøna", "Jakke", "Gore-Tex", "Female", "Lofoten Gore-Tex Insulated", "Gray", "https://res.cloudinary.com/norrona/image/upload/b_rgb:F5F5F5,c_pad,d_imgmissing.jpg,f_auto,fl_progressive.lossy,w_1000,h_1000,q_auto/1007188874.jpg"));
