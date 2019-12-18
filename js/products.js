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
//Helly hansen
///Jakke
////Seilerjakke
products.push(new Product("Helly Hansen", "Jakke", "Seilerjakke", "Mann", "Skagen Offshore Jacket", "Rød", "https://www.hellyhansen.com/media/catalog/product/3/3/33907_222-2-main.jpg"));
products.push(new Product("Helly Hansen", "Jakke", "Seilerjakke", "Mann", "Skagen Offshore Jacket", "Blå", "https://www.hellyhansen.com/media/catalog/product/3/3/33907_597-2-main.jpg"));

products.push(new Product("Helly Hansen", "Jakke", "Seilerjakke", "Kvinne", "W Skagen Offshore Jacket", "Hvit", "https://www.hellyhansen.com/media/catalog/product/3/3/33920_001-1-hero.jpg"));
products.push(new Product("Helly Hansen", "Jakke", "Seilerjakke", "Kvinne", "W Skagen Offshore Jacket", "Rød", "https://www.hellyhansen.com/media/catalog/product/3/3/33920_222-2-main3.jpg"));
products.push(new Product("Helly Hansen", "Jakke", "Seilerjakke", "Kvinne", "W Skagen Offshore Jacket", "Blå", "https://www.hellyhansen.com/media/catalog/product/3/3/33920_597-2-main.jpg"));

products.push(new Product("Helly Hansen", "Jakke", "Seilerjakke", "Mann", "Salt Flag Jacket", "Blå", "https://www.hellyhansen.com/media/catalog/product/3/3/33909_603-2-main.jpg"));
products.push(new Product("Helly Hansen", "Jakke", "Seilerjakke", "Mann", "Salt Flag Jacket", "Svart", "https://www.hellyhansen.com/media/catalog/product/3/3/33909_597-1-hero.jpg"));

products.push(new Product("Helly Hansen", "Jakke", "Seilerjakke", "Kvinne", "W Salt Flag Jacket", "Hvit", "https://www.hellyhansen.com/media/catalog/product/3/3/33923_001-1-hero.jpg"));
products.push(new Product("Helly Hansen", "Jakke", "Seilerjakke", "Kvinne", "W Salt Flag Jacket", "Blå", "https://www.hellyhansen.com/media/catalog/product/3/3/33923_994-2-main4.jpg"));

products.push(new Product("Helly Hansen", "Jakke", "Seilerjakke", "Mann", "Crew Midlayer Jacket", "Hvit", "https://www.hellyhansen.com/media/catalog/product/3/0/30253_001-2-main.jpg"));
products.push(new Product("Helly Hansen", "Jakke", "Seilerjakke", "Mann", "Crew Midlayer Jacket", "Rød", "https://www.hellyhansen.com/media/catalog/product/3/0/30253_222-2-main.jpg"));

products.push(new Product("Helly Hansen", "Jakke", "Seilerjakke", "Kvinne", "W Crew Midlayer Jacket", "Rød", "https://www.hellyhansen.com/media/catalog/product/3/0/30317_222-2-main.jpg"));
products.push(new Product("Helly Hansen", "Jakke", "Seilerjakke", "Kvinne", "W Crew Midlayer Jacket", "Rosa", "https://www.hellyhansen.com/media/catalog/product/3/0/30317_039-2-main.jpg"));
products.push(new Product("Helly Hansen", "Jakke", "Seilerjakke", "Kvinne", "W Crew Midlayer Jacket", "Svart", "https://www.hellyhansen.com/media/catalog/product/3/0/30317_990-2-main.jpg"));

////Skijakke
products.push(new Product("Helly Hansen", "Jakke", "Skijakke", "Mann", "ALPHA LIFALOFT JACKET", "Blå", "https://www.hellyhansen.com/media/catalog/product/6/5/65667_598-2-main3.jpg?quality=75&bg-color=255,255,255&fit=bounds&height=560&width=700&canvas=700:560"));
products.push(new Product("Helly Hansen", "Jakke", "Skijakke", "Mann", "ALPHA SHELL JACKET", "Rød", "https://www.hellyhansen.com/media/catalog/product/6/5/65596_222-2-main.jpg?quality=75&bg-color=255,255,255&fit=bounds&height=560&width=700&canvas=700:560"));
products.push(new Product("Helly Hansen", "Jakke", "Skijakke", "Kvinne", "W WHITEWALL LIFALOFT JACKET", "Blå", "https://www.hellyhansen.com/media/catalog/product/6/5/65684_628-1-hero.jpg?quality=75&bg-color=255,255,255&fit=bounds&height=560&width=700&canvas=700:560"));
products.push(new Product("Helly Hansen", "Jakke", "Skijakke", "Kvinne", "W POWCHASER LIFALOFT JACKET", "Gul", "https://www.hellyhansen.com/media/catalog/product/6/5/65701_181-2-main.jpg?quality=75&bg-color=255,255,255&fit=bounds&height=560&width=700&canvas=700:560"));


////Vest
products.push(new Product("Helly Hansen", "Jakke", "Vest", "Mann", "SPEED VEST", "Blå", "https://www.hellyhansen.com/media/catalog/product/4/8/48772_535.jpg?quality=75&bg-color=255,255,255&fit=bounds&height=560&width=700&canvas=700:560"));
products.push(new Product("Helly Hansen", "Jakke", "Vest", "Kvinne", "W LIFALOFT INSULATOR VEST", "Turkis", "https://www.hellyhansen.com/media/catalog/product/6/5/65628_109-2-main.jpg?quality=75&bg-color=255,255,255&fit=bounds&height=560&width=700&canvas=700:560"));


///Bukse

////Ski-pants
products.push(new Product("Helly Hansen", "Bukse", "Ski-pants", "Mann", "ODIN MOUNTAIN 3L SHELL BIB PANT", "Grønn", "https://www.hellyhansen.com/media/catalog/product/6/2/62902_402-2-main.jpg?quality=75&bg-color=255,255,255&fit=bounds&height=560&width=700&canvas=700:560"));
products.push(new Product("Helly Hansen", "Bukse", "Ski-pants", "Mann", "SOGN CARGO PANT", "Oransje", "https://www.hellyhansen.com/media/catalog/product/6/5/65673_226-2-main.jpg?quality=75&bg-color=255,255,255&fit=bounds&height=560&width=700&canvas=700:560"));

///Genser
products.push(new Product("Helly Hansen", "Genser", "Hoodie", "Mann", "HP OCEAN FZ HOODIE", "Grå", "https://www.hellyhansen.com/media/catalog/product/3/4/34044_949-2-main.jpg?quality=75&bg-color=255,255,255&fit=bounds&height=560&width=700&canvas=700:560"));




//Norrønna
///Bukse
products.push(new Product("Norrøna", "Bukse", "Gore-tex", "Mann", "Lofoten ACE Gore-Tex Pro", "Grå", "https://res.cloudinary.com/norrona/image/upload/b_rgb:F5F5F5,c_pad,d_imgmissing.jpg,f_auto,fl_progressive.lossy,w_1000,h_1000,q_auto/1009178915.jpg"));
products.push(new Product("Norrøna", "Bukse", "Gore-tex", "Mann", "Lofoten ACE Gore-Tex Pro", "Svart", "https://res.cloudinary.com/norrona/image/upload/b_rgb:F5F5F5,c_pad,d_imgmissing.jpg,f_auto,fl_progressive.lossy,w_1000,h_1000,q_auto/1002197718.jpg"));
products.push(new Product("Norrøna", "Bukse", "Gore-tex", "Mann", "Lofoten Gore-Tex Pro Light", "Grønn", "https://res.cloudinary.com/norrona/image/upload/b_rgb:F5F5F5,c_pad,d_imgmissing.jpg,f_auto,fl_progressive.lossy,w_1000,h_1000,q_auto/1022173440.jpg"));
products.push(new Product("Norrøna", "Bukse", "flex™1", "Mann", "Falketind flex1 Pants", "Indigo", "https://res.cloudinary.com/norrona/image/upload/b_rgb:F5F5F5,c_pad,d_imgmissing.jpg,f_auto,fl_progressive.lossy,w_1000,h_1000,q_auto/3321142319.jpg"));
products.push(new Product("Norrøna", "Bukse", "Gore-tex", "Kvinne", "Falketind Gore-Tex Pro Light", "Rød", "https://res.cloudinary.com/norrona/image/upload/b_rgb:F5F5F5,c_pad,d_imgmissing.jpg,f_auto,fl_progressive.lossy,w_1324,h_1324,q_auto/v1561713745/1058175700-model-1.jpg"));


///Jakke
products.push(new Product("Norrøna", "Jakke", "Gore-Tex", "Mann", "Lofoten Gore-Tex Pro Jacket", "Grønn", "https://res.cloudinary.com/norrona/image/upload/b_rgb:F5F5F5,c_pad,d_imgmissing.jpg,f_auto,fl_progressive.lossy,w_1000,h_1000,q_auto/1015173440.jpg"));
products.push(new Product("Norrøna", "Jakke", "Gore-Tex", "Kvinne", "Lofoten Gore-Tex Pro Jacket", "Rød", "https://res.cloudinary.com/norrona/image/upload/b_rgb:F5F5F5,c_pad,d_imgmissing.jpg,f_auto,fl_progressive.lossy,w_1000,h_1000,q_auto/1054175700.jpg"));
products.push(new Product("Norrøna", "Jakke", "Gore-Tex", "Kvinne", "Lofoten Gore-Tex Insulated", "Grå", "https://res.cloudinary.com/norrona/image/upload/b_rgb:F5F5F5,c_pad,d_imgmissing.jpg,f_auto,fl_progressive.lossy,w_1000,h_1000,q_auto/1007188874.jpg"));

//Fjellreven
///Jakke
products.push(new Product("Fjellreven", "Jakke", "Anorak", "Kvinne", "Klassisk Fjällräven anorakk", "Blå", "https://media.fjallraven.no/detail/7323450136154_FW18_a_iceland_anorak_w_21.jpg"));
products.push(new Product("Fjellreven", "Jakke", "Parkas", "Mann", "Singi Wool Padded Parka", "Grønn", "https://media.fjallraven.no/detail/7323450524555_FW19_a_singi_wool_padded_parka_m_fjaellraeven_21.png"));


///Bukse
products.push(new Product("Fjellreven", "Bukse", "Turbukse", "Kvinne", "Vidda Pro Trousers W Short", "Grå", "https://media.fjallraven.no/detail/7323450010232_FW18_a_vidda_pro_trousers_w_short_21.jpg"));
products.push(new Product("Fjellreven", "Bukse", "Turbukse", "Mann", "Vidda Pro Trousers M Reg", "Grå", "https://media.fjallraven.no/detail/7323450085544_FW18_a_vidda_pro_trousers_regular_m_21.jpg"));


//Genser
products.push(new Product("Fjellreven", "Genser", "Skjorte", "Mann", "Fjällglim Shirt M", "Oransje", "https://media.fjallraven.no/detail/7323450056384_FW18_a_fjaellglim_shirt_m_21.jpg"));
products.push(new Product("Fjellreven", "Genser", "Hettegenser", "Kvinne", "High Coast Wool Hoodie W", "Rød", "https://media.fjallraven.no/detail/7323450544409_FW19_a_high_coast_wool_hoodie_w_fjaellraeven_21.png"));
