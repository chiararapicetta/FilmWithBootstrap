export class Movie {

    id:number;
    title:string;
    year:string;
    genre:string;
    director: string;
    minutes:number;
    imgUrl:string;
    description:string;
    videoUrl:string;

    constructor(id:number, title:string, year:string, 
                genre:string, director: string, minutes:number, 
                imgUrl:string, description:string, videoUrl:string,
                ) {}

}