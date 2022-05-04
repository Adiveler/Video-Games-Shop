export default class VideoGame{

    constructor(id, name, genre, publisher_company, developer_company, year, price, image, description, key){
        this.id = id;
        this.name = name;
        this.genre = genre;
        this.publisher_company = publisher_company;
        this.developer_company = developer_company;
        this.year = year;
        this.price = price;
        this.image = image;
        this.description = description;
        this.key = key;
    }
}