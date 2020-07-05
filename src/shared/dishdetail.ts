export class DishDetail{
    id: String;
    name: String;
    image: String;
    category: String
    featured: Boolean;
    label: String;
    price: String;
    description:String;
    comments: { 
        rating: number;
        comment: string; 
        author: string; 
        date: string; 
    }[];

}