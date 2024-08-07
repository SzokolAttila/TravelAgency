class Hotel{
    #id;
    #name;
    #address;
    #type;
    #phone;
    #email;
    #features;
    #img;
    constructor({id, name, address, type, phone, email, features, img}){
        this.#id = id;
        this.#name = name;
        this.#address = address;
        this.#type = type;
        this.#phone = phone;
        this.#email = email;
        this.#features = features;
        this.#img = img;
    }
    get id(){
        return this.#id;
    }
    get name(){
        return this.#name;
    }
    get address(){
        return this.#address;
    }
    get phone(){
        return this.#phone;
    }
    get email(){
        return this.#email;
    }
    get allFeatures(){
        return this.#features;
    }
    get image(){
        return this.#img;
    }
}