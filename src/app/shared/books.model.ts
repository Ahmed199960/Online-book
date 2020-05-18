export class booksModel {
    public name:string;
    public auther:string;
    public imagePath:string;
    public about:string;

    constructor(name :string ,auther:string , imagePath:string ,about:string){
        this.name = name;
        this.auther= auther;
        this.imagePath = imagePath;
        this.about = about;
    }
}