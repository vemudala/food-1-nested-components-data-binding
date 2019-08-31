

export class Recipe {
    public name: string;
    public description: string;
    public imagePath: string;

    constructor(name: string, desc: string, imagePath: string) {
        this.name = name;
        this.description = desc;
        this.imagePath = imagePath;
    }
}



// export class Ingredient{  //short code for above// method 2
    
    // constructor(public name:string, public amount:number){ 
    
    // }
    // }