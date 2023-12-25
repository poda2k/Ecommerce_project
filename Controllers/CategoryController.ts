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
    
}

export default CategoryHandler ;