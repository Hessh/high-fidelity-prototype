class Brand {
    constructor(name, imageLink){
        this._id = Brand.incrementId();
        this.name = name;
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


let Brands = [];
