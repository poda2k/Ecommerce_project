import { Request , Response } from "express" ;
import Categories from '../Models/Categories' ;


class CategoryHandler{

    static async createCategory(req: Request, res: Response): Promise<void> {
        const categoryName = req.body.categoryName;
        try {
          const newCategory = await Categories.create({
            categoryName: categoryName,
          });
    
          res.json({ massage: "category created", category: newCategory });
        } catch (e) {
          console.log("error creating category");
          throw e;
        }
      }

      static async GetCategories(req: Request, res: Response): Promise<void>{

        try{
            const allCategories = await Categories.findAll();

            if(allCategories.length>0){
                res.json({ message: "categories" , categories: allCategories });
            }

            res.json({ message: "no categories found"}) ;

        }catch(e){

            console.log("error getting categories");
            throw e;
        }
        


      }
    
}

export default CategoryHandler ;